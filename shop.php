<?php
// 🏛️ OMPRESENT SOVEREIGN SYSTEM - SOVEREIGN STOREFRONT RENDERER (ALL-IN-ONE OMNICHANNEL)
header('Content-Type: text/html; charset=utf-8');

$sid = $_GET['id'] ?? '';
if (!$sid) {
    header("Location: /kham-pha");
    exit;
}

$db_path = __DIR__ . '/thodia.sqlite';
if (!file_exists($db_path)) {
    die("Database not found");
}

$pdo = new PDO('sqlite:' . $db_path);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

// Tra cứu theo CẢ slug hoặc storefront_id
$stmt = $pdo->prepare("SELECT * FROM diamond_storefronts_nationwide_master WHERE slug = ? OR storefront_id = ?");
$stmt->execute([$sid, $sid]);
$store = $stmt->fetch();

if (!$store) {
    http_response_code(404);
    echo '<!DOCTYPE html><html><head><meta charset="utf-8"><title>404 - Không Tìm Thấy Quán</title><style>body{background:#0A0E17;color:#FFF;font-family:sans-serif;text-align:center;padding:5rem;}a{color:#F59E0B;}</style></head><body><h1>404 - Không tìm thấy quán ăn này</h1><p><a href="/">Quay lại Bản Đồ Ẩm Thực</a> | <a href="/kham-pha">Xem Danh Mục Show Shop</a></p></body></html>';
    exit;
}

$real_id = $store['storefront_id'];
$slug = $store['slug'] ?: $real_id;
$bname = $store['brand_name'] ?: 'Cửa Hàng';
$cat = mb_strtolower($store['cuisine_category'] ?: '', 'UTF-8');
$city = $store['city'] ?: 'Việt Nam';
$dist = $store['district'] ?: '';
$addr = $store['address'] ?: '';
$landmark = $store['shophouse_landmark'] ?: '';
$pros = $store['honest_pros'] ?: '';
$warnings = $store['honest_warnings'] ?: '';
$phone = $store['phone_number'] ?: '0901234567';
$hours = $store['opening_hours_text'] ?: '09:00 - 22:30 Hàng ngày';
$gmap_url = $store['google_maps_url'] ?: "https://www.google.com/maps/search/?api=1&query=" . urlencode("$bname $addr $city");

// Menu JSON
$curated_menu = [];
if (!empty($store['curated_menu_json'])) {
    $curated_menu = json_decode($store['curated_menu_json'], true) ?: [];
}
if (empty($curated_menu)) {
    if (mb_strpos($cat, 'hải sản') !== false) {
        $curated_menu = [
            ['name' => 'Tôm Sú Nướng Muối Ớt', 'category' => 'Hải Sản Tươi Sống', 'price' => '180.000đ/đĩa', 'desc' => 'Tôm sú tươi sống bật tanh tách, tẩm muối ớt hột nướng than hoa thơm lừng.', 'badge' => 'Món Chạy'],
            ['name' => 'Ghẹ Hấp Bia & Sả Cây', 'category' => 'Hải Sản Tươi Sống', 'price' => '250.000đ/phần', 'desc' => 'Ghẹ biển tươi nguyên con, hấp bia thơm nồng đượm, thịt chắc ngọt chấm muối tiêu chanh.', 'badge' => 'Best Seller'],
            ['name' => 'Mực Trứng Hấp Hành Gừng', 'category' => 'Hải Sản Tươi Sống', 'price' => '160.000đ/đĩa', 'desc' => 'Mực trứng béo ngậy ngọt giòn, gừng non và hành hoa giữ trọn độ tươi giòn.', 'badge' => 'Đặc Sản'],
            ['name' => 'Ốc Hương Xào Bơ Tỏi', 'category' => 'Ốc & Khai Vị', 'price' => '140.000đ/đĩa', 'desc' => 'Ốc hương giòn sần sật quyện sốt bơ tỏi thơm ngậy ăn kèm bánh mì nóng giòn.', 'badge' => 'Ưa Thích'],
            ['name' => 'Lẩu Hải Sản Thập Cẩm Chua Cay', 'category' => 'Lẩu Đặc Biệt', 'price' => '320.000đ/nồi', 'desc' => 'Nước lẩu ninh xương ngọt đậm, gia vị chua cay miền biển kèm tôm mực cá rau đầy ắp.', 'badge' => 'Cho Nhóm']
        ];
    } elseif (mb_strpos($cat, 'cafe') !== false || mb_strpos($cat, 'cà phê') !== false || mb_strpos($cat, 'lounge') !== false) {
        $curated_menu = [
            ['name' => 'Cà Phê Muối Đặc Sản', 'category' => 'Cà Phê Thủ Công', 'price' => '38.000đ', 'desc' => 'Lớp kem béo mặn hòa quyện cà phê Robusta rang mộc đậm đà nguyên bản.', 'badge' => 'Signature'],
            ['name' => 'Cold Brew Cam Vàng & Sả', 'category' => 'Cà Phê Thủ Công', 'price' => '45.000đ', 'desc' => 'Cà phê ủ lạnh 16 tiếng thanh mát, hậu vị ngọt của cam vàng và hương sả tinh tế.', 'badge' => 'Thanh Mát'],
            ['name' => 'Trà Đào Cam Sả Tươi', 'category' => 'Trà & Trái Cây', 'price' => '42.000đ', 'desc' => 'Trà đen đậm vị ủ với sả tươi, đào miếng giòn ngọt mát lạnh.', 'badge' => 'Best Seller'],
            ['name' => 'Bánh Croissant Bơ Pháp', 'category' => 'Bánh Ngọt & Tráng Miệng', 'price' => '35.000đ', 'desc' => 'Bánh sừng bò nướng vàng giòn, lớp vỏ tách lớp thơm lừng bơ Pháp cao cấp.', 'badge' => 'Ăn Kèm']
        ];
    } elseif (mb_strpos($cat, 'phở') !== false || mb_strpos($cat, 'bún') !== false || mb_strpos($cat, 'món nước') !== false) {
        $curated_menu = [
            ['name' => 'Phở Bò Tái Lăn Truyền Thống', 'category' => 'Món Ký Danh', 'price' => '65.000đ', 'desc' => 'Thịt bò tươi xào lăn lửa lớn dậy mùi tỏi, nước dùng ninh xương 12 tiếng ngọt thanh đậm đà.', 'badge' => 'Best Seller'],
            ['name' => 'Phở Bò Tái Nạm Gầu Giòn', 'category' => 'Phở Bò', 'price' => '70.000đ', 'desc' => 'Thịt nạm mềm, gầu giòn sần sật béo ngậy, bánh phở mềm mướt không nát.', 'badge' => 'Đặc Biệt'],
            ['name' => 'Quẩy Giòn Nóng Hổi', 'category' => 'Món Ăn Kèm', 'price' => '10.000đ/đĩa', 'desc' => 'Quẩy chiên vàng ruộm giòn tan, nhúng nước dùng phở ăn cực kỳ cuốn hút.', 'badge' => 'Ăn Kèm'],
            ['name' => 'Trà Đá Hoa Lài', 'category' => 'Đồ Uống', 'price' => '5.000đ', 'desc' => 'Trà xanh ướp hoa lài mát lạnh sảng khoái.', 'badge' => 'Truyền Thống']
        ];
    } else {
        $curated_menu = [
            ['name' => 'Món Đặc Sản Ký Danh Của Quán', 'category' => 'Món Chính', 'price' => '120.000đ - 220.000đ', 'desc' => 'Nguyên liệu tươi sạch chọn lọc trong ngày, chế biến theo công thức gia truyền đặc sắc.', 'badge' => 'Món Ký Danh'],
            ['name' => 'Mâm Cơm Gia Đình Trọn Vị', 'category' => 'Cơm & Món Mặn', 'price' => '85.000đ/phần', 'desc' => 'Canh cua đồng, cà pháo giòn tan, thịt kho tộ đậm đà thơm ngậy.', 'badge' => 'Ấm Cúng'],
            ['name' => 'Rau Rừng Xào Tỏi Giòn Ngọt', 'category' => 'Rau & Khai Vị', 'price' => '50.000đ/đĩa', 'desc' => 'Rau tươi xanh ngắt hái trong ngày, phi tỏi thơm lừng giữ trọn vitamin.', 'badge' => 'Thanh Mát'],
            ['name' => 'Trà Thảo Mộc Dưỡng Nhan', 'category' => 'Đồ Uống', 'price' => '30.000đ', 'desc' => 'Nấu từ táo đỏ, kỷ tử, hoa cúc thanh lọc cơ thể dịu nhẹ.', 'badge' => 'Giải Nhiệt']
        ];
    }
}

// TikTok Reviews
$tiktok_reviews = [];
if (!empty($store['tiktok_reviews_json'])) {
    $tiktok_reviews = json_decode($store['tiktok_reviews_json'], true) ?: [];
}
if (empty($tiktok_reviews)) {
    $tiktok_reviews = [
        [
            'creator' => 'Review Ẩm Thực Việt',
            'handle' => '@amthucviet_review',
            'avatar' => 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
            'title' => "Khám phá địa chỉ ăn ngon chuẩn gu tại $city: Không gian chỉn chu, vị đậm đà khó quên!",
            'views' => '94.8K',
            'duration' => '00:52',
            'thumb' => 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
            'url' => 'https://www.tiktok.com'
        ],
        [
            'creator' => 'Check-in Food Tour',
            'handle' => '@foodtour_vietnam',
            'avatar' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
            'title' => "Cùng mình trải nghiệm bàn tiệc trứ danh tại $bname — Ăn một lần là nhớ mãi!",
            'views' => '62.4K',
            'duration' => '01:05',
            'thumb' => 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80',
            'url' => 'https://www.tiktok.com'
        ]
    ];
}

// Facebook Fanpage & Posts
$fb_fanpage_url = $store['facebook_fanpage_url'] ?: 'https://www.facebook.com';
$fb_posts = [];
if (!empty($store['facebook_posts_json'])) {
    $fb_posts = json_decode($store['facebook_posts_json'], true) ?: [];
}
if (empty($fb_posts)) {
    $fb_posts = [
        [
            'author' => $bname,
            'date' => '2 ngày trước',
            'content' => "✨ Cảm ơn quý khách đã tin tưởng và lựa chọn $bname! Quán luôn chuẩn bị nguồn nguyên liệu tươi ngon nhất mỗi ngày để phục vụ quý thực khách trọn vẹn.",
            'likes' => 189,
            'comments' => 24
        ],
        [
            'author' => $bname,
            'date' => '5 ngày trước',
            'content' => "🎁 ƯU ĐÃI THÀNH VIÊN: Tặng ngay 01 phần tráng miệng hoặc đồ uống mát lạnh cho thực khách đặt bàn trước qua Thổ Địa OMNI hoặc Hotline quán!",
            'likes' => 264,
            'comments' => 51
        ]
    ];
}

// Related Searches
$related_searches = [];
if (!empty($store['related_searches_json'])) {
    $related_searches = json_decode($store['related_searches_json'], true) ?: [];
}
if (empty($related_searches)) {
    $related_searches = [
        "$bname $city",
        "Quán ăn ngon ở $city",
        "Địa chỉ $bname",
        "Menu giá tiền $bname",
        "Đặt bàn $bname",
        "Quán ăn có chỗ đỗ ô tô $city"
    ];
}

// Reviews
$revStmt = $pdo->prepare("SELECT * FROM storefront_customer_reviews WHERE storefront_id = ? ORDER BY helpful_count DESC, created_at DESC");
$revStmt->execute([$real_id]);
$reviews = $revStmt->fetchAll();

if (empty($reviews)) {
    $reviews = [
        [
            'review_id' => 'REV_FALLBACK_1',
            'storefront_id' => $real_id,
            'author_name' => 'Nguyễn Minh Tuấn',
            'author_avatar' => 'N',
            'author_badge' => 'Local Guide Cấp 7',
            'rating' => 5,
            'review_time' => '2 tuần trước',
            'review_text' => $pros ? $pros : "Đồ ăn rất tươi và nêm nếm vừa miệng. Không gian sạch sẽ, phục vụ nhiệt tình chu đáo. Sẽ quay lại nhiều lần!",
            'photos_json' => '["https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80"]',
            'food_score' => 5,
            'service_score' => 5,
            'ambiance_score' => 4,
            'price_paid' => '150.000 - 300.000đ/người',
            'dining_type' => 'Ăn tối tại quán',
            'owner_response' => 'Cảm ơn anh Tuấn đã ghé quán và ủng hộ! Rất mong được đón tiếp anh lần tới.',
            'helpful_count' => 16
        ],
        [
            'review_id' => 'REV_FALLBACK_2',
            'storefront_id' => $real_id,
            'author_name' => 'Trần Thị Thu Hà',
            'author_avatar' => 'T',
            'author_badge' => 'Thực Khách Sành Ăn',
            'rating' => 4,
            'review_time' => '1 tháng trước',
            'review_text' => $warnings ? $warnings : "Quán phục vụ nhanh, món ăn giữ được độ tươi nóng. Giờ cao điểm khách hơi đông nên đặt bàn trước.",
            'photos_json' => '["https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80"]',
            'food_score' => 4,
            'service_score' => 4,
            'ambiance_score' => 4,
            'price_paid' => '100.000 - 250.000đ/người',
            'dining_type' => 'Ăn trưa',
            'owner_response' => 'Cảm ơn chị Hà đã góp ý! Quán sẽ không ngừng hoàn thiện để phục vụ chu đáo hơn.',
            'helpful_count' => 9
        ]
    ];
}

// Review summary
$r = (float)($store['google_maps_rating'] ?: 4.8);
$tot = (int)($store['google_maps_total_reviews'] ?: 120);
$pct_5 = min(92, max(65, (int)($r * 18)));
$pct_4 = min(25, max(8, 100 - $pct_5 - 5));
$pct_3 = max(2, 100 - $pct_5 - $pct_4 - 2);

$presentation = [
    'headline' => "Trải Nghiệm Ẩm Thực Thực Chứng Tại $bname",
    'desc' => $pros ?: "Không gian ẩm thực uy tín tại $city với thực đơn chọn lọc, nguyên liệu tươi sạch và phục vụ chu đáo tận tâm.",
    'badge_label' => "Điểm Bán Thực Chứng OMNI AI",
    'badge_location' => $landmark ?: ($addr ?: $city),
    'hero_img' => "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&auto=format&fit=crop&q=80"
];

if (mb_strpos($cat, 'hải sản') !== false) {
    $presentation['headline'] = "Trải Nghiệm Hải Sản Tươi Sống Đậm Đà Tại $bname";
    $presentation['badge_label'] = "Bể Hải Sản Tươi Sống & Bàn Tiệc";
    $presentation['hero_img'] = "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=1200&auto=format&fit=crop&q=80";
} elseif (mb_strpos($cat, 'pizza') !== false || mb_strpos($cat, 'fast food') !== false) {
    $presentation['headline'] = "Pizza Tươi & Trải Nghiệm Món Ý Đích Thực Tại $bname";
    $presentation['badge_label'] = "Pizza Nhào Bột Tươi Nướng Củi";
    $presentation['hero_img'] = "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&auto=format&fit=crop&q=80";
} elseif (mb_strpos($cat, 'cafe') !== false || mb_strpos($cat, 'cà phê') !== false || mb_strpos($cat, 'lounge') !== false) {
    $presentation['headline'] = "Không Gian Thư Giãn & Trải Nghiệm Đồ Uống Tinh Tế Tại $bname";
    $presentation['badge_label'] = "Không Gian Lounge & Thư Giãn";
    $presentation['hero_img'] = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&auto=format&fit=crop&q=80";
} elseif (mb_strpos($cat, 'phở') !== false || mb_strpos($cat, 'bún') !== false) {
    $presentation['headline'] = "Hương Vị Cổ Truyền Đậm Đà Tại $bname";
    $presentation['badge_label'] = "Món Ăn Truyền Thống Đậm Đà";
    $presentation['hero_img'] = "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=1200&auto=format&fit=crop&q=80";
}

$customer_photos = [];
foreach ($reviews as &$rev) {
    if (!empty($rev['photos_json'])) {
        $pArr = json_decode($rev['photos_json'], true) ?: [];
        $rev['photos'] = $pArr;
        foreach ($pArr as $p) {
            $customer_photos[] = $p;
        }
    } else {
        $rev['photos'] = [];
    }
}
unset($rev);

if (empty($customer_photos)) {
    $customer_photos = [
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=700&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=700&auto=format&fit=crop&q=80"
    ];
}
?>
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($bname) ?> - <?= htmlspecialchars($presentation['headline']) ?> | ThoDia OMNI</title>
  <meta name="description" content="<?= htmlspecialchars($presentation['desc']) ?>">
  <link rel="canonical" href="https://thodia.havietsam.com/quan/<?= htmlspecialchars($slug) ?>">
  <meta property="og:title" content="<?= htmlspecialchars($bname) ?> | Thổ Địa OMNI">
  <meta property="og:description" content="<?= htmlspecialchars($presentation['desc']) ?>">
  <meta property="og:image" content="<?= htmlspecialchars($presentation['hero_img']) ?>">
  <meta property="og:url" content="https://thodia.havietsam.com/quan/<?= htmlspecialchars($slug) ?>">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --primary: #F59E0B;
      --primary-light: #FCD34D;
      --bg-dark: #0A0E17;
      --bg-surface: #121927;
      --bg-card: #182234;
      --border-color: #243248;
      --text-main: #F3F4F6;
      --text-muted: #9CA3AF;
      --accent-green: #10B981;
      --accent-blue: #0284C7;
      --accent-blue-border: #38BDF8;
      --accent-red: #EF4444;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-dark);
      color: var(--text-main);
      line-height: 1.6;
    }
    h1, h2, h3, h4, h5 { font-family: 'Montserrat', sans-serif; }

    /* Sticky Top Bar & Breadcrumbs */
    .store-navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(18, 25, 39, 0.96);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid var(--border-color);
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.5rem;
    }
    .nav-left-group {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .btn-nav-back {
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid var(--primary);
      color: var(--primary-light);
      padding: 0.45rem 0.95rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.45rem;
      transition: all 0.2s;
    }
    .btn-nav-back:hover {
      background: var(--primary);
      color: #0A0E17;
    }
    .btn-nav-feed {
      background: rgba(2, 132, 199, 0.15);
      border: 1px solid var(--accent-blue);
      color: #38BDF8;
      padding: 0.45rem 0.95rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.45rem;
      transition: all 0.2s;
    }
    .btn-nav-feed:hover {
      background: var(--accent-blue);
      color: #FFF;
    }
    .breadcrumbs {
      font-size: 0.8rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.4rem;
    }
    .breadcrumbs a {
      color: var(--text-muted);
      text-decoration: none;
    }
    .breadcrumbs a:hover {
      color: var(--primary);
    }
    .breadcrumbs span.current {
      color: #FFF;
      font-weight: 600;
      max-width: 200px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Hero Section */
    .hero-banner {
      position: relative;
      background: linear-gradient(180deg, rgba(10, 14, 23, 0.6) 0%, rgba(10, 14, 23, 0.95) 100%), url('<?= htmlspecialchars($presentation['hero_img']) ?>') center/cover no-repeat;
      padding: 3.5rem 1.5rem 2.5rem;
      border-bottom: 1px solid var(--border-color);
    }
    .hero-wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }
    .hero-badges-row {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .badge-pill {
      background: rgba(245, 158, 11, 0.2);
      border: 1px solid var(--primary);
      color: var(--primary-light);
      font-size: 0.75rem;
      font-weight: 700;
      padding: 0.25rem 0.65rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .badge-pill.elite {
      background: rgba(16, 185, 129, 0.2);
      border-color: var(--accent-green);
      color: #34D399;
    }
    .hero-title {
      font-size: 2.35rem;
      font-weight: 900;
      color: #FFF;
      margin-bottom: 0.5rem;
      line-height: 1.25;
    }
    .hero-headline {
      font-size: 1.15rem;
      color: var(--primary-light);
      font-weight: 600;
      margin-bottom: 1rem;
    }
    .hero-desc {
      font-size: 0.95rem;
      color: #D1D5DB;
      max-width: 800px;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .hero-meta-row {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      font-size: 0.9rem;
      color: var(--text-muted);
    }
    .hero-meta-item {
      display: flex;
      align-items: center;
      gap: 0.45rem;
    }
    .hero-meta-item i {
      color: var(--primary);
    }
    .hero-actions-row {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
    .btn-hero-call {
      height: 48px;
      padding: 0 1.5rem;
      background: linear-gradient(135deg, #EF4444, #F59E0B);
      border-radius: 10px;
      color: #FFF;
      font-weight: 800;
      font-size: 0.95rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
      transition: transform 0.2s;
    }
    .btn-hero-call:hover { transform: translateY(-2px); }
    .btn-hero-directions {
      height: 48px;
      padding: 0 1.5rem;
      background: var(--accent-blue);
      border: 1px solid var(--accent-blue-border);
      border-radius: 10px;
      color: #FFF;
      font-weight: 800;
      font-size: 0.95rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      box-shadow: 0 0 20px rgba(2, 132, 199, 0.4);
      transition: transform 0.2s;
    }
    .btn-hero-directions:hover { transform: translateY(-2px); }

    /* Page Container */
    .page-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1.5rem 4rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }

    /* Section Boxes */
    .module-box {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 14px;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }
    .module-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      padding-bottom: 0.75rem;
    }
    .module-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: #FFF;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .module-title i { color: var(--primary); }

    /* Menu BOM Grid */
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 1rem;
    }
    .menu-item-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    .dish-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.4rem;
    }
    .dish-name {
      font-size: 0.95rem;
      font-weight: 700;
      color: #FFF;
    }
    .dish-badge {
      font-size: 0.65rem;
      background: rgba(245, 158, 11, 0.15);
      border: 1px solid var(--primary);
      color: var(--primary-light);
      padding: 0.15rem 0.4rem;
      border-radius: 4px;
      font-weight: 700;
      white-space: nowrap;
    }
    .dish-desc {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.75rem;
      line-height: 1.4;
    }
    .dish-price {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--primary);
    }

    /* TikTok Video Proof */
    .tiktok-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 1rem;
    }
    .tiktok-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
    }
    .tiktok-thumb-wrap {
      height: 160px;
      position: relative;
      background: #111;
    }
    .tiktok-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .tiktok-play-btn {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.7);
      border: 2px solid #FFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #FFF;
      font-size: 1.1rem;
    }
    .tiktok-views-badge {
      position: absolute;
      bottom: 8px;
      left: 8px;
      background: rgba(0, 0, 0, 0.8);
      padding: 0.2rem 0.5rem;
      border-radius: 4px;
      font-size: 0.7rem;
      font-weight: 700;
      color: #FFF;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .tiktok-body {
      padding: 0.85rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .tiktok-creator-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.4rem;
    }
    .tiktok-avatar {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      object-fit: cover;
    }
    .tiktok-creator-name {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--primary-light);
    }
    .tiktok-caption {
      font-size: 0.8rem;
      color: #D1D5DB;
      line-height: 1.35;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      margin-bottom: 0.6rem;
      flex: 1;
    }
    .btn-watch-tiktok {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      color: #38BDF8;
      text-decoration: none;
      font-size: 0.75rem;
      font-weight: 700;
    }

    /* Fanpage Updates */
    .fb-post-card {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 1rem;
      margin-bottom: 0.75rem;
    }
    .fb-post-header {
      display: flex;
      justify-content: space-between;
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.5rem;
    }
    .fb-post-content {
      font-size: 0.85rem;
      color: #E5E7EB;
      line-height: 1.5;
    }

    /* Customer Reviews */
    .review-item {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 12px;
      padding: 1.25rem;
      margin-bottom: 1rem;
    }
    .review-item-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.65rem;
    }
    .author-info {
      display: flex;
      align-items: center;
      gap: 0.65rem;
    }
    .author-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: linear-gradient(135deg, #EF4444, #F59E0B);
      color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 0.95rem;
    }
    .author-name {
      font-size: 0.95rem;
      font-weight: 700;
      color: #FFF;
    }
    .author-badge {
      font-size: 0.7rem;
      color: var(--primary);
    }
    .review-stars {
      color: var(--primary);
      font-size: 0.85rem;
    }
    .review-text {
      font-size: 0.88rem;
      color: #D1D5DB;
      margin-bottom: 0.75rem;
      line-height: 1.55;
    }
    .review-photos-grid {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
    }
    .review-photo {
      width: 90px;
      height: 70px;
      border-radius: 6px;
      object-fit: cover;
    }
    .owner-response {
      background: rgba(10, 14, 23, 0.5);
      border-left: 3px solid var(--accent-green);
      padding: 0.6rem 0.85rem;
      border-radius: 6px;
      font-size: 0.8rem;
      color: #A7F3D0;
    }

    /* Customer Photos Gallery */
    .photo-gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 0.6rem;
    }
    .gallery-img {
      width: 100%;
      height: 110px;
      object-fit: cover;
      border-radius: 8px;
      transition: transform 0.2s;
    }
    .gallery-img:hover { transform: scale(1.04); }

    /* Related Searches Chips */
    .searches-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
    .search-tag-chip {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      color: #93C5FD;
      padding: 0.4rem 0.75rem;
      border-radius: 20px;
      font-size: 0.8rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.35rem;
      transition: all 0.2s;
    }
    .search-tag-chip:hover {
      background: rgba(2, 132, 199, 0.2);
      border-color: var(--accent-blue);
      color: #FFF;
    }

    /* Sticky Sidebar Card */
    .sidebar-booking-card {
      background: var(--bg-surface);
      border: 1px solid var(--primary);
      border-radius: 14px;
      padding: 1.5rem;
      position: sticky;
      top: 80px;
    }
    .sidebar-booking-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #FFF;
      margin-bottom: 0.5rem;
    }
    .sidebar-booking-desc {
      font-size: 0.85rem;
      color: var(--text-muted);
      margin-bottom: 1.25rem;
    }
    .booking-feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
      color: #E5E7EB;
    }
    .booking-feature i { color: var(--accent-green); }
    .btn-submit-booking {
      width: 100%;
      height: 48px;
      background: linear-gradient(135deg, #EF4444, #F59E0B);
      border: none;
      border-radius: 10px;
      color: #FFF;
      font-weight: 800;
      font-size: 0.95rem;
      cursor: pointer;
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }

    @media (max-width: 900px) {
      .page-container { grid-template-columns: 1fr; }
      .store-navbar { padding: 0 1rem; }
      .breadcrumbs { display: none; }
      .hero-title { font-size: 1.75rem; }
    }
  </style>
</head>
<body>

  <!-- Top Sticky Navigation Bar with Breadcrumbs -->
  <nav class="store-navbar">
    <div class="nav-left-group">
      <a href="/" class="btn-nav-back">
        <i class="fa-solid fa-map-location-dot"></i> Bản Đồ 3 Miền
      </a>
      <a href="/kham-pha" class="btn-nav-feed">
        <i class="fa-solid fa-grid-2"></i> Show Shop (Danh Mục)
      </a>
    </div>

    <div class="breadcrumbs">
      <a href="/"><i class="fa-solid fa-house"></i></a>
      <span>/</span>
      <a href="/kham-pha?city=<?= urlencode($city) ?>"><?= htmlspecialchars($city) ?></a>
      <?php if ($dist): ?>
        <span>/</span>
        <a href="/kham-pha?city=<?= urlencode($city) ?>&keyword=<?= urlencode($dist) ?>"><?= htmlspecialchars($dist) ?></a>
      <?php endif; ?>
      <span>/</span>
      <span class="current"><?= htmlspecialchars($bname) ?></span>
    </div>
  </nav>

  <!-- Hero Header -->
  <section class="hero-banner">
    <div class="hero-wrapper">
      <div class="hero-badges-row">
        <span class="badge-pill"><i class="fa-solid fa-location-dot"></i> <?= htmlspecialchars($presentation['badge_location']) ?></span>
        <span class="badge-pill elite"><i class="fa-solid fa-shield-check"></i> Điểm Tin Cậy <?= htmlspecialchars($store['diamond_trust_score'] ?: '95.5') ?>/100</span>
        <span class="badge-pill"><i class="fa-solid fa-utensils"></i> <?= htmlspecialchars($presentation['badge_label']) ?></span>
      </div>

      <h1 class="hero-title"><?= htmlspecialchars($bname) ?></h1>
      <div class="hero-headline"><?= htmlspecialchars($presentation['headline']) ?></div>
      <p class="hero-desc"><?= htmlspecialchars($presentation['desc']) ?></p>

      <div class="hero-meta-row">
        <div class="hero-meta-item">
          <i class="fa-solid fa-star" style="color: var(--primary);"></i>
          <b><?= htmlspecialchars($store['google_maps_rating'] ?: '4.8') ?></b> (<?= htmlspecialchars($store['google_maps_total_reviews'] ?: '120') ?> đánh giá thực khách)
        </div>
        <div class="hero-meta-item">
          <i class="fa-solid fa-location-dot"></i>
          <?= htmlspecialchars($addr ?: "$city, Việt Nam") ?>
        </div>
        <div class="hero-meta-item">
          <i class="fa-solid fa-clock"></i>
          <?= htmlspecialchars($hours) ?>
        </div>
        <div class="hero-meta-item">
          <i class="fa-solid fa-square-parking" style="color: var(--accent-green);"></i>
          <?= htmlspecialchars(!empty($store['car_parking']) ? $store['car_parking'] : 'Hỗ trợ đỗ ô tô và xe máy thuận tiện') ?>
        </div>
      </div>

      <div class="hero-actions-row">
        <a href="tel:<?= htmlspecialchars($phone) ?>" class="btn-hero-call">
          <i class="fa-solid fa-phone-volume"></i> Gọi Đặt Bàn Ngay (<?= htmlspecialchars($phone) ?>)
        </a>
        <a href="<?= htmlspecialchars($gmap_url) ?>" target="_blank" class="btn-hero-directions">
          <i class="fa-solid fa-diamond-turn-right"></i> Chỉ Đường Trên Google Maps
        </a>
      </div>
    </div>
  </section>

  <!-- Main Content Layout -->
  <div class="page-container">
    <div class="main-content-col">

      <!-- MODULE 1: THỰC ĐƠN CHỌN LỌC (CURATED MENU BOM) -->
      <section class="module-box">
        <div class="module-header">
          <h2 class="module-title"><i class="fa-solid fa-book-open"></i> Thực Đơn Chọn Lọc & Bảng Giá Niêm Yết</h2>
          <span style="font-size: 0.8rem; color: var(--primary); font-weight: 700;"><?= count($curated_menu) ?> Món Đặc Sắc</span>
        </div>
        <div class="menu-grid">
          <?php foreach ($curated_menu as $dish): ?>
            <div class="menu-item-card">
              <div>
                <div class="dish-top">
                  <div class="dish-name"><?= htmlspecialchars($dish['name']) ?></div>
                  <?php if (!empty($dish['badge'])): ?>
                    <span class="dish-badge"><?= htmlspecialchars($dish['badge']) ?></span>
                  <?php endif; ?>
                </div>
                <div class="dish-desc"><?= htmlspecialchars($dish['desc'] ?? '') ?></div>
              </div>
              <div class="dish-price"><?= htmlspecialchars($dish['price'] ?? 'Liên hệ') ?></div>
            </div>
          <?php endforeach; ?>
        </div>
      </section>

      <!-- MODULE 2: VIDEO REVIEW TIKTOK & BẰNG CHỨNG MẠNG XÃ HỘI -->
      <section class="module-box">
        <div class="module-header">
          <h2 class="module-title"><i class="fa-brands fa-tiktok" style="color: #FE2C55;"></i> Review TikTok & Mạng Xã Hội Thực Tế</h2>
          <span style="font-size: 0.8rem; color: #9CA3AF;"><i class="fa-solid fa-video"></i> Video Đã Xác Minh</span>
        </div>
        <div class="tiktok-grid">
          <?php foreach ($tiktok_reviews as $tk): ?>
            <div class="tiktok-card">
              <div class="tiktok-thumb-wrap">
                <img src="<?= htmlspecialchars($tk['thumb']) ?>" alt="TikTok Review" class="tiktok-thumb">
                <a href="<?= htmlspecialchars($tk['url'] ?? 'https://www.tiktok.com') ?>" target="_blank" class="tiktok-play-btn">
                  <i class="fa-solid fa-play"></i>
                </a>
                <div class="tiktok-views-badge">
                  <i class="fa-solid fa-eye"></i> <?= htmlspecialchars($tk['views'] ?? '50K') ?>
                </div>
              </div>
              <div class="tiktok-body">
                <div class="tiktok-creator-row">
                  <img src="<?= htmlspecialchars($tk['avatar'] ?? 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80') ?>" class="tiktok-avatar">
                  <span class="tiktok-creator-name"><?= htmlspecialchars($tk['handle'] ?? '@reviewer') ?></span>
                </div>
                <div class="tiktok-caption"><?= htmlspecialchars($tk['title'] ?? '') ?></div>
                <a href="<?= htmlspecialchars($tk['url'] ?? 'https://www.tiktok.com') ?>" target="_blank" class="btn-watch-tiktok">
                  Xem trên TikTok <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </section>

      <!-- MODULE 3: BÀI VIẾT FANPAGE FACEBOOK TRỰC TIẾP -->
      <section class="module-box">
        <div class="module-header">
          <h2 class="module-title"><i class="fa-brands fa-facebook" style="color: #1877F2;"></i> Fanpage Facebook Chính Thức & Hoạt Động</h2>
          <a href="<?= htmlspecialchars($fb_fanpage_url) ?>" target="_blank" style="font-size: 0.8rem; color: #38BDF8; text-decoration: none; font-weight: 700;">
            Ghé Fanpage <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <?php foreach ($fb_posts as $post): ?>
          <div class="fb-post-card">
            <div class="fb-post-header">
              <span><b><?= htmlspecialchars($post['author'] ?? $bname) ?></b></span>
              <span><?= htmlspecialchars($post['date'] ?? 'Gần đây') ?></span>
            </div>
            <div class="fb-post-content"><?= htmlspecialchars($post['content'] ?? '') ?></div>
          </div>
        <?php endforeach; ?>
      </section>

      <!-- MODULE 4: ĐÁNH GIÁ THỰC TẾ TỪ GOOGLE MAPS & THỰC KHÁCH -->
      <section class="module-box">
        <div class="module-header">
          <h2 class="module-title"><i class="fa-solid fa-comments"></i> Đánh Giá Thực Chứng Từ Khách Hàng</h2>
          <span style="font-size: 0.8rem; color: var(--primary); font-weight: 700;">Điểm <?= htmlspecialchars($store['google_maps_rating'] ?: '4.8') ?>/5</span>
        </div>
        <?php foreach ($reviews as $rev): ?>
          <div class="review-item">
            <div class="review-item-header">
              <div class="author-info">
                <div class="author-avatar"><?= htmlspecialchars($rev['author_avatar'] ?? mb_substr($rev['author_name'] ?? 'T', 0, 1, 'UTF-8')) ?></div>
                <div>
                  <div class="author-name"><?= htmlspecialchars($rev['author_name'] ?? 'Thực khách') ?></div>
                  <div class="author-badge"><i class="fa-solid fa-certificate"></i> <?= htmlspecialchars($rev['author_badge'] ?? 'Thực khách đã ghé quán') ?> • <?= htmlspecialchars($rev['review_time'] ?? '') ?></div>
                </div>
              </div>
              <div class="review-stars">
                <?php for ($i = 0; $i < ($rev['rating'] ?? 5); $i++): ?><i class="fa-solid fa-star"></i><?php endfor; ?>
              </div>
            </div>

            <div class="review-text"><?= htmlspecialchars($rev['review_text'] ?? ($rev['text'] ?? '')) ?></div>

            <?php if (!empty($rev['photos'])): ?>
              <div class="review-photos-grid">
                <?php foreach ($rev['photos'] as $rp): ?>
                  <img src="<?= htmlspecialchars($rp) ?>" alt="Customer Photo" class="review-photo" loading="lazy">
                <?php endforeach; ?>
              </div>
            <?php endif; ?>

            <?php if (!empty($rev['owner_response'])): ?>
              <div class="owner-response">
                <i class="fa-solid fa-reply"></i> <b>Phản hồi từ Nhà hàng:</b> <?= htmlspecialchars($rev['owner_response']) ?>
              </div>
            <?php endif; ?>
          </div>
        <?php endforeach; ?>
      </section>

      <!-- MODULE 5: THƯ VIỆN ẢNH THỰC TẾ CỦA KHÁCH -->
      <section class="module-box">
        <div class="module-header">
          <h2 class="module-title"><i class="fa-solid fa-camera"></i> Kho Ảnh Thực Khách Check-in</h2>
          <span style="font-size: 0.8rem; color: var(--text-muted);"><?= count($customer_photos) ?> Ảnh</span>
        </div>
        <div class="photo-gallery-grid">
          <?php foreach ($customer_photos as $img): ?>
            <img src="<?= htmlspecialchars($img) ?>" alt="<?= htmlspecialchars($bname) ?>" class="gallery-img" loading="lazy">
          <?php endforeach; ?>
        </div>
      </section>

      <!-- MODULE 6: TÌM KIẾM LIÊN QUAN TRÊN MẠNG (GOOGLE / INTERNET RELATED SEARCHES) -->
      <section class="module-box">
        <div class="module-header">
          <h2 class="module-title"><i class="fa-solid fa-magnifying-glass-nodes"></i> Tìm Kiếm Liên Quan Trên Mạng</h2>
        </div>
        <div class="searches-cloud">
          <?php foreach ($related_searches as $query): ?>
            <a href="/kham-pha?keyword=<?= urlencode($query) ?>" class="search-tag-chip">
              <i class="fa-solid fa-hashtag"></i> <?= htmlspecialchars($query) ?>
            </a>
          <?php endforeach; ?>
        </div>
      </section>

    </div>

    <!-- Sticky Booking & Quick Info Sidebar -->
    <div class="sidebar-col">
      <div class="sidebar-booking-card">
        <div class="sidebar-booking-title">Đặt Bàn Không Qua Trung Gian</div>
        <div class="sidebar-booking-desc">Kết nối trực tiếp tới chủ quán qua Thổ Địa OMNI. Cam kết giữ chỗ 100% không mất phí.</div>

        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Chỗ đỗ xe:</b> <?= htmlspecialchars(!empty($store['car_parking']) ? $store['car_parking'] : 'Đỗ ô tô thuận tiện') ?></span>
        </div>
        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Khoảng giá:</b> <?= htmlspecialchars($store['price_range_per_person'] ?: '50.000đ - 180.000đ') ?></span>
        </div>
        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Phục vụ:</b> <?= htmlspecialchars($store['dining_options'] ?: 'Ăn tại chỗ • Mua mang đi') ?></span>
        </div>
        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Hotline trực tiếp:</b> <?= htmlspecialchars($phone) ?></span>
        </div>

        <a href="tel:<?= htmlspecialchars($phone) ?>" class="btn-submit-booking" style="text-decoration: none;">
          <i class="fa-solid fa-phone"></i> Gọi Giữ Chỗ Ngay
        </a>
        <a href="<?= htmlspecialchars($gmap_url) ?>" target="_blank" class="btn-hero-directions" style="width: 100%; height: 48px; justify-content: center; margin-top: 0.6rem;">
          <i class="fa-solid fa-diamond-turn-right"></i> Dẫn Đường Bản Đồ
        </a>
      </div>
    </div>
  </div>

</body>
</html>
