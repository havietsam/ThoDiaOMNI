<?php
// 🏛️ OMPRESENT SOVEREIGN SYSTEM - KHÁM PHÁ SHOW SHOP FOOD APP
header('Content-Type: text/html; charset=utf-8');

$db_path = __DIR__ . '/thodia.sqlite';
if (!file_exists($db_path)) {
    die("Database not found");
}

$pdo = new PDO('sqlite:' . $db_path);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

// Tham số lọc
$region = $_GET['region'] ?? '';
$city = $_GET['city'] ?? '';
$cuisine = $_GET['cuisine'] ?? '';
$keyword = $_GET['keyword'] ?? '';
$parking = !empty($_GET['parking']);
$sort = $_GET['sort'] ?? 'trust';
$page = max(1, (int)($_GET['page'] ?? 1));
$limit = 24;
$offset = ($page - 1) * $limit;

$where = ["latitude IS NOT NULL AND longitude IS NOT NULL"];
$params = [];

if ($region) {
    if ($region === 'MIEN_BAC') {
        $where[] = "region IN ('Đồng Bằng Sông Hồng', 'Đông Bắc Bộ', 'Tây Bắc Bộ')";
    } elseif ($region === 'MIEN_TRUNG') {
        $where[] = "region IN ('Bắc Trung Bộ', 'Duyên Hải Nam Trung Bộ', 'Tây Nguyên')";
    } elseif ($region === 'MIEN_NAM') {
        $where[] = "region IN ('Đông Nam Bộ', 'Đồng Bằng Sông Cửu Long')";
    }
}

if ($city) {
    $where[] = "city LIKE ?";
    $params[] = '%' . $city . '%';
}

if ($cuisine) {
    $where[] = "cuisine_category LIKE ?";
    $params[] = '%' . $cuisine . '%';
}

if ($keyword) {
    $where[] = "(brand_name LIKE ? OR cuisine_category LIKE ? OR address LIKE ? OR honest_pros LIKE ?)";
    $params[] = '%' . $keyword . '%';
    $params[] = '%' . $keyword . '%';
    $params[] = '%' . $keyword . '%';
    $params[] = '%' . $keyword . '%';
}

if ($parking) {
    $where[] = "(car_parking LIKE '%đỗ%' OR car_parking LIKE '%rộng%' OR car_parking LIKE '%hầm%')";
}

$orderBy = "diamond_trust_score DESC, google_maps_total_reviews DESC";
if ($sort === 'rating') {
    $orderBy = "google_maps_rating DESC, google_maps_total_reviews DESC";
} elseif ($sort === 'reviews') {
    $orderBy = "google_maps_total_reviews DESC, google_maps_rating DESC";
}

$sqlWhere = implode(' AND ', $where);
$countStmt = $pdo->prepare("SELECT count(*) FROM diamond_storefronts_nationwide_master WHERE $sqlWhere");
$countStmt->execute($params);
$totalStores = $countStmt->fetchColumn();
$totalPages = ceil($totalStores / $limit);

$stmt = $pdo->prepare("SELECT * FROM diamond_storefronts_nationwide_master WHERE $sqlWhere ORDER BY $orderBy LIMIT $limit OFFSET $offset");
$stmt->execute($params);
$stores = $stmt->fetchAll();

// Danh sách tỉnh nổi bật
$topCities = [
    'Hà Nội', 'TP. Hồ Chí Minh', 'Đà Nẵng', 'Bà Rịa - Vũng Tàu',
    'Hải Phòng', 'Cần Thơ', 'Đồng Nai', 'An Giang', 'Nghệ An'
];

// Danh sách ngành nổi bật
$topCuisines = [
    'Hải Sản' => 'Hải Sản Tươi Sống',
    'Pizza & Ý' => 'Fast Food',
    'Cà Phê' => 'Đồ Uống, Trà',
    'Phở & Bún' => 'Món Nước & Sợi',
    'Cơm Gia Đình' => 'Cơm & Mâm Cơm',
    'Lẩu & Nướng' => 'Lẩu & Nướng BBQ'
];
?>
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Khám Phá Danh Mục Quán Ăn 3 Miền | ThoDia OMNI</title>
  <meta name="description" content="Khám phá 11.813 điểm bán ẩm thực thực chứng 3 miền Bắc - Trung - Nam theo định dạng Show Shop Food App. Đầy đủ menu, ảnh thực tế, video review TikTok và bãi đỗ ô tô.">
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
      --accent-red: #EF4444;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Inter', sans-serif;
      background: var(--bg-dark);
      color: var(--text-main);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    h1, h2, h3, h4, .brand-text { font-family: 'Montserrat', sans-serif; }

    /* Top Sticky Nav */
    .top-navbar {
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
    .brand-group {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: #FFF;
    }
    .brand-icon {
      width: 40px;
      height: 40px;
      background: linear-gradient(135deg, #EF4444, #F59E0B);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: #FFF;
      box-shadow: 0 0 15px rgba(245, 158, 11, 0.3);
    }
    .brand-title {
      font-size: 1.1rem;
      font-weight: 800;
      letter-spacing: -0.3px;
    }
    .brand-sub {
      font-size: 0.7rem;
      color: var(--text-muted);
    }
    .nav-switches {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }
    .btn-switch-map {
      background: rgba(2, 132, 199, 0.15);
      border: 1px solid var(--accent-blue);
      color: #38BDF8;
      padding: 0.45rem 1rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: all 0.2s;
    }
    .btn-switch-map:hover {
      background: var(--accent-blue);
      color: #FFF;
    }
    .btn-switch-active {
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.2));
      border: 1px solid var(--primary);
      color: var(--primary-light);
      padding: 0.45rem 1rem;
      border-radius: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* Hero Search Cockpit */
    .hero-cockpit {
      background: linear-gradient(180deg, rgba(18, 25, 39, 0.8) 0%, rgba(10, 14, 23, 0.95) 100%);
      border-bottom: 1px solid var(--border-color);
      padding: 2rem 1.5rem 1.5rem;
    }
    .hero-container {
      max-width: 1300px;
      margin: 0 auto;
    }
    .hero-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .hero-title h1 {
      font-size: 1.85rem;
      font-weight: 900;
      color: #FFF;
      margin-bottom: 0.4rem;
    }
    .hero-title p {
      font-size: 0.9rem;
      color: var(--text-muted);
    }
    .hero-badge-stat {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      padding: 0.5rem 1rem;
      border-radius: 10px;
      font-size: 0.85rem;
      color: var(--primary);
      font-weight: 700;
    }

    /* Search & Filter Bar */
    .search-box-bar {
      display: flex;
      gap: 0.75rem;
      margin-bottom: 1.25rem;
      flex-wrap: wrap;
    }
    .search-input-wrap {
      flex: 1;
      min-width: 280px;
      position: relative;
    }
    .search-input-wrap i {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: var(--text-muted);
      font-size: 1rem;
    }
    .search-input-wrap input {
      width: 100%;
      height: 48px;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      border-radius: 10px;
      padding: 0 1rem 0 2.8rem;
      color: #FFF;
      font-size: 0.95rem;
      outline: none;
      transition: border-color 0.2s;
    }
    .search-input-wrap input:focus {
      border-color: var(--primary);
    }
    .btn-submit-search {
      height: 48px;
      padding: 0 1.5rem;
      background: linear-gradient(135deg, #EF4444, #F59E0B);
      border: none;
      border-radius: 10px;
      color: #FFF;
      font-weight: 800;
      font-size: 0.95rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      transition: opacity 0.2s;
    }
    .btn-submit-search:hover {
      opacity: 0.9;
    }

    /* Filter Pills */
    .filter-pills-row {
      display: flex;
      gap: 0.5rem;
      overflow-x: auto;
      padding-bottom: 0.5rem;
      margin-bottom: 0.75rem;
    }
    .filter-pill {
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 0.4rem 0.9rem;
      border-radius: 20px;
      font-size: 0.8rem;
      font-weight: 600;
      text-decoration: none;
      white-space: nowrap;
      transition: all 0.2s;
    }
    .filter-pill:hover, .filter-pill.active {
      background: rgba(245, 158, 11, 0.15);
      border-color: var(--primary);
      color: var(--primary-light);
    }

    /* Main Grid */
    .content-container {
      max-width: 1300px;
      margin: 1.5rem auto;
      padding: 0 1.5rem 3rem;
      width: 100%;
    }
    .grid-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.25rem;
      color: var(--text-muted);
      font-size: 0.85rem;
    }
    .stores-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
      gap: 1.5rem;
    }

    /* Store Card */
    .store-card-modern {
      background: var(--bg-card);
      border: 1px solid var(--border-color);
      border-radius: 14px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
      position: relative;
    }
    .store-card-modern:hover {
      transform: translateY(-4px);
      border-color: var(--primary);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
    }
    .card-thumb-wrap {
      height: 200px;
      position: relative;
      background: #1A202C;
      overflow: hidden;
    }
    .card-thumb-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s;
    }
    .store-card-modern:hover .card-thumb-img {
      transform: scale(1.05);
    }
    .card-badge-region {
      position: absolute;
      top: 12px;
      left: 12px;
      background: rgba(10, 14, 23, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: #FFF;
      font-size: 0.7rem;
      font-weight: 700;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
    }
    .card-badge-tier {
      position: absolute;
      top: 12px;
      right: 12px;
      background: rgba(245, 158, 11, 0.9);
      color: #0A0E17;
      font-size: 0.7rem;
      font-weight: 800;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
    }
    .card-rating-float {
      position: absolute;
      bottom: 12px;
      left: 12px;
      background: rgba(10, 14, 23, 0.85);
      backdrop-filter: blur(8px);
      padding: 0.3rem 0.65rem;
      border-radius: 8px;
      font-size: 0.8rem;
      font-weight: 800;
      color: var(--primary);
      display: flex;
      align-items: center;
      gap: 0.35rem;
    }
    .card-body {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    .card-cuisine {
      font-size: 0.75rem;
      color: var(--primary);
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 0.35rem;
    }
    .card-title {
      font-size: 1.15rem;
      font-weight: 800;
      color: #FFF;
      margin-bottom: 0.4rem;
      text-decoration: none;
      line-height: 1.35;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .card-title:hover {
      color: var(--primary);
    }
    .card-address {
      font-size: 0.8rem;
      color: var(--text-muted);
      margin-bottom: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      line-height: 1.4;
    }
    .card-highlights {
      font-size: 0.8rem;
      color: #D1D5DB;
      background: rgba(10, 14, 23, 0.4);
      padding: 0.6rem 0.75rem;
      border-radius: 8px;
      border-left: 3px solid var(--primary);
      margin-bottom: 1rem;
      line-height: 1.45;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      flex: 1;
    }
    .card-chips-row {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-bottom: 1rem;
    }
    .chip-item {
      font-size: 0.7rem;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      color: var(--text-muted);
      padding: 0.2rem 0.5rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      gap: 0.3rem;
    }
    .chip-parking {
      color: var(--accent-green);
      border-color: rgba(16, 185, 129, 0.3);
      background: rgba(16, 185, 129, 0.08);
      font-weight: 600;
    }
    .card-actions {
      display: flex;
      gap: 0.6rem;
      margin-top: auto;
    }
    .btn-card-detail {
      flex: 1;
      height: 40px;
      background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(239, 68, 68, 0.2));
      border: 1px solid var(--primary);
      border-radius: 8px;
      color: var(--primary-light);
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.4rem;
      transition: all 0.2s;
    }
    .btn-card-detail:hover {
      background: var(--primary);
      color: #0A0E17;
    }
    .btn-card-map {
      height: 40px;
      padding: 0 0.9rem;
      background: rgba(2, 132, 199, 0.15);
      border: 1px solid var(--accent-blue);
      border-radius: 8px;
      color: #38BDF8;
      font-size: 0.85rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.35rem;
      transition: all 0.2s;
    }
    .btn-card-map:hover {
      background: var(--accent-blue);
      color: #FFF;
    }

    /* Pagination */
    .pagination-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      margin-top: 2.5rem;
    }
    .page-btn {
      width: 40px;
      height: 40px;
      border-radius: 8px;
      background: var(--bg-surface);
      border: 1px solid var(--border-color);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.85rem;
      transition: all 0.2s;
    }
    .page-btn:hover, .page-btn.active {
      background: var(--primary);
      color: #0A0E17;
      border-color: var(--primary);
    }

    @media (max-width: 768px) {
      .top-navbar { padding: 0 1rem; }
      .hero-cockpit { padding: 1.5rem 1rem 1rem; }
      .content-container { padding: 0 1rem 2rem; }
      .stores-grid { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>

  <!-- Top Navbar -->
  <header class="top-navbar">
    <a href="/" class="brand-group">
      <div class="brand-icon"><i class="fa-solid fa-fire"></i></div>
      <div>
        <div class="brand-title">Thổ Địa OMNI AI</div>
        <div class="brand-sub">Hệ Sinh Thái Ẩm Thực 3 Miền</div>
      </div>
    </a>

    <div class="nav-switches">
      <a href="/" class="btn-switch-map">
        <i class="fa-solid fa-map-location-dot"></i> Bản Đồ 3 Miền
      </a>
      <div class="btn-switch-active">
        <i class="fa-solid fa-grid-2"></i> Show Shop Food App
      </div>
    </div>
  </header>

  <!-- Hero Search Cockpit -->
  <section class="hero-cockpit">
    <div class="hero-container">
      <div class="hero-header">
        <div class="hero-title">
          <h1>Danh Mục Ẩm Thực Thực Chứng Toàn Quốc</h1>
          <p>Dữ liệu độc lập không qua trung gian • 11.813 quán ăn được kiểm toán thực địa • Tối ưu trải nghiệm Food App</p>
        </div>
        <div class="hero-badge-stat">
          <i class="fa-solid fa-shield-check"></i> <?= number_format($totalStores) ?> Điểm Bán Phù Hợp
        </div>
      </div>

      <form action="/kham-pha" method="GET" class="search-box-bar">
        <input type="hidden" name="region" value="<?= htmlspecialchars($region) ?>">
        <input type="hidden" name="city" value="<?= htmlspecialchars($city) ?>">
        <input type="hidden" name="cuisine" value="<?= htmlspecialchars($cuisine) ?>">
        <?php if ($parking): ?><input type="hidden" name="parking" value="1"><?php endif; ?>
        <div class="search-input-wrap">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" name="keyword" value="<?= htmlspecialchars($keyword) ?>" placeholder="Tìm tên quán (Luca Pizza, Hasurai...), món ăn (hải sản, phở bò...), địa chỉ...">
        </div>
        <button type="submit" class="btn-submit-search">
          <i class="fa-solid fa-bolt"></i> Tìm Kiếm
        </button>
      </form>

      <!-- Vùng Miền Filter -->
      <div class="filter-pills-row">
        <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['region' => ''])) ?>" class="filter-pill <?= empty($region) ? 'active' : '' ?>">Toàn Quốc</a>
        <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['region' => 'MIEN_BAC'])) ?>" class="filter-pill <?= $region === 'MIEN_BAC' ? 'active' : '' ?>"><i class="fa-solid fa-location-arrow"></i> Miền Bắc</a>
        <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['region' => 'MIEN_TRUNG'])) ?>" class="filter-pill <?= $region === 'MIEN_TRUNG' ? 'active' : '' ?>"><i class="fa-solid fa-location-arrow"></i> Miền Trung</a>
        <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['region' => 'MIEN_NAM'])) ?>" class="filter-pill <?= $region === 'MIEN_NAM' ? 'active' : '' ?>"><i class="fa-solid fa-location-arrow"></i> Miền Nam</a>
      </div>

      <!-- Tỉnh Thành Filter -->
      <div class="filter-pills-row">
        <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['city' => ''])) ?>" class="filter-pill <?= empty($city) ? 'active' : '' ?>">Tất Cả Tỉnh</a>
        <?php foreach ($topCities as $c): ?>
          <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['city' => $c])) ?>" class="filter-pill <?= $city === $c ? 'active' : '' ?>"><?= $c ?></a>
        <?php endforeach; ?>
      </div>

      <!-- Ngành Hàng Filter -->
      <div class="filter-pills-row">
        <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['cuisine' => ''])) ?>" class="filter-pill <?= empty($cuisine) ? 'active' : '' ?>">Mọi Món Ngon</a>
        <?php foreach ($topCuisines as $label => $val): ?>
          <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['cuisine' => $val])) ?>" class="filter-pill <?= $cuisine === $val ? 'active' : '' ?>"><?= $label ?></a>
        <?php endforeach; ?>
        <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['parking' => $parking ? '' : '1'])) ?>" class="filter-pill <?= $parking ? 'active' : '' ?>">
          <i class="fa-solid fa-square-parking"></i> Có Chỗ Đỗ Ô Tô
        </a>
      </div>
    </div>
  </section>

  <!-- Main Content Grid -->
  <main class="content-container">
    <div class="grid-header">
      <div>Đang hiển thị <b><?= count($stores) ?></b> / <b><?= number_format($totalStores) ?></b> điểm bán ẩm thực</div>
      <div>Sắp xếp: <b>Điểm Tin Cậy Kim Cương</b></div>
    </div>

    <div class="stores-grid">
      <?php foreach ($stores as $s): ?>
        <?php
          $cat = mb_strtolower($s['cuisine_category'] ?: '', 'UTF-8');
          $bname = $s['brand_name'] ?: 'Cửa Hàng';
          $slugUrl = !empty($s['slug']) ? '/quan/' . $s['slug'] : '/shop/' . $s['storefront_id'];
          
          // CHỈ HIỂN THỊ ẢNH NẾU QUÁN CÓ ẢNH THẬT ĐÃ XÁC THỰC
          $hasRealPhoto = false;
          $thumb = "";
          if (!empty($s['hero_image_url'])) {
              $thumb = $s['hero_image_url'];
              $hasRealPhoto = true;
          }
          
          $hasParking = !empty($s['car_parking']) && (mb_strpos($s['car_parking'], 'đỗ') !== false || mb_strpos($s['car_parking'], 'hầm') !== false);
        ?>
        <div class="store-card-modern">
          <div class="card-thumb-wrap" style="background: linear-gradient(135deg, #182234 0%, #121927 100%); display: flex; flex-direction: column; justify-content: space-between; padding: 12px;">
            <?php if ($hasRealPhoto): ?>
              <img src="<?= $thumb ?>" alt="<?= htmlspecialchars($bname) ?>" class="card-thumb-img" loading="lazy">
            <?php else: ?>
              <div style="display: flex; justify-content: space-between; align-items: flex-start; z-index: 2;">
                <span class="card-badge-region"><?= htmlspecialchars($s['region'] ?: 'Việt Nam') ?></span>
                <span class="card-badge-tier"><i class="fa-solid fa-shield-check"></i> <?= htmlspecialchars(str_replace('DIAMOND_', '', $s['trust_tier'] ?: 'AUTHENTIC')) ?></span>
              </div>
              <div style="text-align: center; color: var(--border-color); font-size: 3rem; margin: auto 0; z-index: 1;">
                <i class="fa-solid fa-utensils"></i>
              </div>
              <div class="card-rating-float" style="position: static; align-self: flex-start; z-index: 2;">
                <i class="fa-solid fa-star"></i> <?= htmlspecialchars($s['google_maps_rating'] ?: '4.5') ?>
                <span style="color: var(--text-muted); font-size: 0.7rem; font-weight: 500;">(<?= htmlspecialchars($s['google_maps_total_reviews'] ?: '0') ?> đánh giá)</span>
              </div>
            <?php endif; ?>
          </div>

          <div class="card-body">
            <div class="card-cuisine"><?= htmlspecialchars($s['cuisine_category'] ?: 'Ẩm Thực') ?></div>
            <a href="<?= $slugUrl ?>" class="card-title"><?= htmlspecialchars($bname) ?></a>
            <div class="card-address">
              <i class="fa-solid fa-location-dot" style="color: var(--accent-red);"></i>
              <span><?= htmlspecialchars(($s['district'] ? $s['district'] . ', ' : '') . $s['city']) ?></span>
            </div>

            <?php if (!empty($s['honest_pros']) && mb_strpos($s['honest_pros'], 'tinh tuyệt') === false): ?>
            <div class="card-highlights">
              <?= htmlspecialchars($s['honest_pros']) ?>
            </div>
            <?php endif; ?>

            <div class="card-chips-row">
              <span class="chip-item"><i class="fa-solid fa-tag"></i> <?= htmlspecialchars($s['price_range_per_person'] ?: '100.000đ') ?></span>
              <?php if ($hasParking): ?>
                <span class="chip-item chip-parking"><i class="fa-solid fa-square-parking"></i> Đỗ Ô Tô Thuận Tiện</span>
              <?php endif; ?>
            </div>

            <div class="card-actions">
              <a href="<?= $slugUrl ?>" class="btn-card-detail">
                <i class="fa-solid fa-store"></i> Xem Chi Tiết Quán
              </a>
              <?php if (!empty($s['google_maps_url'])): ?>
                <a href="<?= htmlspecialchars($s['google_maps_url']) ?>" target="_blank" class="btn-card-map" title="Chỉ Đường Trên Google Maps">
                  <i class="fa-solid fa-diamond-turn-right"></i> Chỉ Đường
                </a>
              <?php endif; ?>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

    <!-- Phân trang -->
    <?php if ($totalPages > 1): ?>
      <div class="pagination-bar">
        <?php if ($page > 1): ?>
          <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['page' => $page - 1])) ?>" class="page-btn"><i class="fa-solid fa-chevron-left"></i></a>
        <?php endif; ?>

        <?php
          $startPage = max(1, $page - 2);
          $endPage = min($totalPages, $page + 2);
          for ($p = $startPage; $p <= $endPage; $p++):
        ?>
          <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['page' => $p])) ?>" class="page-btn <?= $p === $page ? 'active' : '' ?>"><?= $p ?></a>
        <?php endfor; ?>

        <?php if ($page < $totalPages): ?>
          <a href="/kham-pha?<?= http_build_query(array_merge($_GET, ['page' => $page + 1])) ?>" class="page-btn"><i class="fa-solid fa-chevron-right"></i></a>
        <?php endif; ?>
      </div>
    <?php endif; ?>
  </main>

</body>
</html>
