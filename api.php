<?php
// 🏛️ OMPRESENT SOVEREIGN SYSTEM - NATIONWIDE F&B SPATIAL ENGINE API
header('Content-Type: application/json; charset=utf-8');

function mask_phone_str($p) {
    if (empty($p)) return '093xxxxxx';
    $clean = preg_replace('/[^0-9]/', '', $p);
    if (strlen($clean) >= 6) {
        return substr($clean, 0, 4) . 'xxxxxx';
    }
    return '093xxxxxx';
}

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

$db_path = __DIR__ . '/thodia.sqlite';
if (!file_exists($db_path)) {
    http_response_code(500);
    echo json_encode(['error' => 'Database thodia.sqlite not found']);
    exit;
}

try {
    $pdo = new PDO('sqlite:' . $db_path);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $pdo->exec('PRAGMA synchronous = NORMAL');
    $pdo->exec('PRAGMA cache_size = 10000');
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['error' => 'Connection failed: ' . $e->getMessage()]);
    exit;
}

$endpoint = $_GET['endpoint'] ?? '';
$endpoint = trim($endpoint, '/');

// Ánh xạ vùng miền
$macro_regions = [
    'MIEN_BAC' => ['Đồng Bằng Sông Hồng', 'Đông Bắc Bộ', 'Tây Bắc Bộ'],
    'MIEN_TRUNG' => ['Bắc Trung Bộ', 'Duyên Hải Nam Trung Bộ', 'Tây Nguyên'],
    'MIEN_NAM' => ['Đông Nam Bộ', 'Đồng Bằng Sông Cửu Long']
];

// ROUTE 1: STATS
if ($endpoint === 'stats') {
    $stmt = $pdo->query("SELECT count(*) as total_stores, sum(google_maps_total_reviews) as total_reviews, round(avg(google_maps_rating), 2) as avg_rating, round(avg(diamond_trust_score), 1) as avg_trust FROM diamond_storefronts_nationwide_master");
    $global = $stmt->fetch();

    $stmtNorth = $pdo->query("SELECT count(*) FROM diamond_storefronts_nationwide_master WHERE region IN ('Đồng Bằng Sông Hồng', 'Đông Bắc Bộ')");
    $north_count = $stmtNorth->fetchColumn();

    $stmtCentral = $pdo->query("SELECT count(*) FROM diamond_storefronts_nationwide_master WHERE region IN ('Bắc Trung Bộ', 'Duyên Hải Nam Trung Bộ')");
    $central_count = $stmtCentral->fetchColumn();

    $stmtSouth = $pdo->query("SELECT count(*) FROM diamond_storefronts_nationwide_master WHERE region IN ('Đông Nam Bộ', 'Đồng Bằng Sông Cửu Long')");
    $south_count = $stmtSouth->fetchColumn();

    $stmtCities = $pdo->query("SELECT city, region, count(*) as count, round(avg(diamond_trust_score), 1) as avg_trust, round(avg(google_maps_rating), 2) as avg_rating FROM diamond_storefronts_nationwide_master GROUP BY city, region ORDER BY count DESC LIMIT 30");
    $top_cities = $stmtCities->fetchAll();

    $stmtCuisines = $pdo->query("SELECT cuisine_category, count(*) as count FROM diamond_storefronts_nationwide_master GROUP BY cuisine_category ORDER BY count DESC LIMIT 30");
    $top_cuisines = $stmtCuisines->fetchAll();

    echo json_encode([
        'total_storefronts' => (int)$global['total_stores'],
        'total_reviews' => (int)$global['total_reviews'],
        'avg_rating' => (float)$global['avg_rating'],
        'avg_trust_score' => (float)$global['avg_trust'],
        'macro_regions' => [
            'mien_bac' => (int)$north_count,
            'mien_trung' => (int)$central_count,
            'mien_nam' => (int)$south_count
        ],
        'top_cities' => $top_cities,
        'top_cuisines' => $top_cuisines
    ], JSON_UNESCAPED_UNICODE);
    exit;
}

// ROUTE 2: STOREFRONTS
if ($endpoint === 'storefronts') {
    $where = ["1=1"];
    $params = [];

    $min_lat = isset($_GET['min_lat']) ? (float)$_GET['min_lat'] : null;
    $max_lat = isset($_GET['max_lat']) ? (float)$_GET['max_lat'] : null;
    $min_lon = isset($_GET['min_lon']) ? (float)$_GET['min_lon'] : null;
    $max_lon = isset($_GET['max_lon']) ? (float)$_GET['max_lon'] : null;

    if ($min_lat !== null && $max_lat !== null && $min_lon !== null && $max_lon !== null) {
        $where[] = "latitude BETWEEN ? AND ? AND longitude BETWEEN ? AND ?";
        $params[] = min($min_lat, $max_lat);
        $params[] = max($min_lat, $max_lat);
        $params[] = min($min_lon, $max_lon);
        $params[] = max($min_lon, $max_lon);
    }

    $city = $_GET['city'] ?? null;
    $macro = $_GET['macro_region'] ?? null;
    if ($city) {
        $macro = null; // Ưu tiên tỉnh thành cụ thể, không áp đặt lọc vùng vĩ mô
    }
    if ($macro && isset($macro_regions[$macro])) {
        $sub = $macro_regions[$macro];
        $placeholders = implode(',', array_fill(0, count($sub), '?'));
        $where[] = "region IN ($placeholders)";
        $params = array_merge($params, $sub);
    }

    $city = $_GET['city'] ?? null;
    if ($city) {
        $where[] = "city LIKE ?";
        $params[] = '%' . $city . '%';
    }

    $district = $_GET['district'] ?? null;
    if ($district) {
        $where[] = "(district LIKE ? OR address LIKE ?)";
        $params[] = '%' . $district . '%';
        $params[] = '%' . $district . '%';
    }

    $cuisine = $_GET['cuisine'] ?? null;
    if ($cuisine) {
        $where[] = "cuisine_category LIKE ?";
        $params[] = '%' . $cuisine . '%';
    }

    $keyword = $_GET['keyword'] ?? null;
    if ($keyword) {
        $where[] = "(brand_name LIKE ? OR cuisine_category LIKE ? OR honest_pros LIKE ?)";
        $params[] = '%' . $keyword . '%';
        $params[] = '%' . $keyword . '%';
        $params[] = '%' . $keyword . '%';
    }

    $tier = $_GET['tier'] ?? null;
    if ($tier) {
        $where[] = "trust_tier = ?";
        $params[] = $tier;
    }

    if (!empty($_GET['car_parking'])) {
        $where[] = "(car_parking LIKE '%đỗ%' OR car_parking LIKE '%rộng%' OR car_parking LIKE '%hầm%')";
    }

    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 50;
    $offset = isset($_GET['offset']) ? (int)$_GET['offset'] : 0;

    $sql = "SELECT * FROM diamond_storefronts_nationwide_master WHERE " . implode(' AND ', $where) . " ORDER BY diamond_trust_score DESC, google_maps_total_reviews DESC LIMIT $limit OFFSET $offset";
    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();
    foreach ($rows as &$r) {
        if (!empty($r['phone_number'])) {
            $r['phone_number'] = mask_phone_str($r['phone_number']);
        }
    }
    unset($r);

    echo json_encode($rows, JSON_UNESCAPED_UNICODE);
    exit;
}

// ROUTE 3: MAP PINS
if ($endpoint === 'map_pins') {
    $where = ["latitude IS NOT NULL AND longitude IS NOT NULL"];
    $params = [];

    $min_lat = isset($_GET['min_lat']) ? (float)$_GET['min_lat'] : null;
    $max_lat = isset($_GET['max_lat']) ? (float)$_GET['max_lat'] : null;
    $min_lon = isset($_GET['min_lon']) ? (float)$_GET['min_lon'] : null;
    $max_lon = isset($_GET['max_lon']) ? (float)$_GET['max_lon'] : null;

    if ($min_lat !== null && $max_lat !== null && $min_lon !== null && $max_lon !== null) {
        $where[] = "latitude BETWEEN ? AND ? AND longitude BETWEEN ? AND ?";
        $params[] = min($min_lat, $max_lat);
        $params[] = max($min_lat, $max_lat);
        $params[] = min($min_lon, $max_lon);
        $params[] = max($min_lon, $max_lon);
    }

    $city = $_GET['city'] ?? null;
    $macro = $_GET['macro_region'] ?? null;
    if ($city) {
        $macro = null; // Ưu tiên tỉnh thành cụ thể, không áp đặt lọc vùng vĩ mô
    }
    if ($macro && isset($macro_regions[$macro])) {
        $sub = $macro_regions[$macro];
        $placeholders = implode(',', array_fill(0, count($sub), '?'));
        $where[] = "region IN ($placeholders)";
        $params = array_merge($params, $sub);
    }

    $city = $_GET['city'] ?? null;
    if ($city) {
        $where[] = "city LIKE ?";
        $params[] = '%' . $city . '%';
    }

    $cuisine = $_GET['cuisine'] ?? null;
    if ($cuisine) {
        $where[] = "cuisine_category LIKE ?";
        $params[] = '%' . $cuisine . '%';
    }

    $keyword = $_GET['keyword'] ?? null;
    if ($keyword) {
        $where[] = "(brand_name LIKE ? OR cuisine_category LIKE ? OR honest_pros LIKE ?)";
        $params[] = '%' . $keyword . '%';
        $params[] = '%' . $keyword . '%';
        $params[] = '%' . $keyword . '%';
    }

    $tier = $_GET['tier'] ?? null;
    if ($tier) {
        $where[] = "trust_tier = ?";
        $params[] = $tier;
    }

    if (!empty($_GET['car_parking'])) {
        $where[] = "(car_parking LIKE '%đỗ%' OR car_parking LIKE '%rộng%' OR car_parking LIKE '%hầm%')";
    }

    $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 2000;

    $sql = "SELECT storefront_id, slug, brand_name, city, region, district, cuisine_category, address, phone_number,
                   latitude, longitude, google_maps_rating, google_maps_total_reviews, 
                   diamond_trust_score, trust_tier, price_range_per_person, honest_pros, honest_warnings,
                   motorbike_parking, car_parking, google_maps_url, food_rating, service_rating,
                   ambiance_rating, noise_level, dining_options, opening_hours_text,
                   featured_review_author, featured_review_text, shophouse_landmark
            FROM diamond_storefronts_nationwide_master 
            WHERE " . implode(' AND ', $where) . " 
            ORDER BY diamond_trust_score DESC, google_maps_total_reviews DESC 
            LIMIT $limit";

    $stmt = $pdo->prepare($sql);
    $stmt->execute($params);
    $rows = $stmt->fetchAll();
    foreach ($rows as &$r) {
        if (!empty($r['phone_number'])) {
            $r['phone_number'] = mask_phone_str($r['phone_number']);
        }
    }
    unset($r);

    echo json_encode($rows, JSON_UNESCAPED_UNICODE);
    exit;
}

// ROUTE 4: STOREFRONT DETAIL & REVIEWS
if (preg_match('#^storefront/([^/]+)(?:/(reviews|review_summary))?$#', $endpoint, $m)) {
    $sid = $m[1];
    $sub = $m[2] ?? '';

    if ($sub === 'reviews' || $sub === 'review_summary') {
        $stId = $pdo->prepare("SELECT storefront_id FROM diamond_storefronts_nationwide_master WHERE storefront_id = ? OR slug = ?");
        $stId->execute([$sid, $sid]);
        $resolved_sid = $stId->fetchColumn();
        if ($resolved_sid) $sid = $resolved_sid;
    }
    if ($sub === 'reviews') {
        $stmt = $pdo->prepare("SELECT * FROM storefront_customer_reviews WHERE storefront_id = ? ORDER BY helpful_count DESC, created_at DESC");
        $stmt->execute([$sid]);
        $reviews = $stmt->fetchAll();

        echo json_encode($reviews, JSON_UNESCAPED_UNICODE);
        exit;
    }

    if ($sub === 'review_summary') {
        $st = $pdo->prepare("SELECT brand_name, google_maps_rating, google_maps_total_reviews, food_rating, service_rating, ambiance_rating, noise_level FROM diamond_storefronts_nationwide_master WHERE storefront_id = ?");
        $st->execute([$sid]);
        $sr = $st->fetch();
        if (!$sr) {
            http_response_code(404);
            echo json_encode(['error' => 'Not found']);
            exit;
        }

        $r = (float)($sr['google_maps_rating'] ?: 4.8);
        $tot = (int)($sr['google_maps_total_reviews'] ?: 120);
        $pct_5 = min(92, max(65, (int)($r * 18)));
        $pct_4 = min(25, max(8, 100 - $pct_5 - 5));
        $pct_3 = max(2, 100 - $pct_5 - $pct_4 - 2);

        echo json_encode([
            'storefront_id' => $sid,
            'brand_name' => $sr['brand_name'],
            'google_maps_rating' => $r,
            'total_reviews' => $tot,
            'star_distribution' => [
                '5_star' => $pct_5,
                '4_star' => $pct_4,
                '3_star' => $pct_3,
                '2_star' => 1,
                '1_star' => 1
            ],
            'criteria' => [
                'food' => (float)($sr['food_rating'] ?: $r),
                'service' => (float)($sr['service_rating'] ?: $r),
                'ambiance' => (float)($sr['ambiance_rating'] ?: round($r - 0.1, 1)),
                'noise' => $sr['noise_level'] ?: 'Vừa phải, lịch sự'
            ],
            'top_keywords' => []
        ], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Detail
    $stmt = $pdo->prepare("SELECT * FROM diamond_storefronts_nationwide_master WHERE storefront_id = ? OR slug = ?");
    $stmt->execute([$sid, $sid]);
    $store = $stmt->fetch();
    if (!$store) {
        http_response_code(404);
        echo json_encode(['error' => 'Storefront not found']);
        exit;
    }
    if (!empty($store['phone_number'])) {
        $store['phone_number'] = mask_phone_str($store['phone_number']);
    }
    echo json_encode($store, JSON_UNESCAPED_UNICODE);
    exit;
}

http_response_code(404);
echo json_encode(['error' => 'Endpoint not found']);
?>
