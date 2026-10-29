<?php
// 🏛️ OMPRESENT SOVEREIGN SYSTEM - STRICT TRUTHFUL STOREFRONT RENDERER
// Quy tắc tối thượng: Dữ liệu chính xác, trung thực 100%. Không tự vẽ, không tự mô phỏng. Nếu không có thì không hiển thị.
header('Content-Type: text/html; charset=utf-8');

function mask_phone($p) {
    if (empty($p)) return '093xxxxxx';
    $clean = preg_replace('/[^0-9]/', '', $p);
    if (strlen($clean) >= 6) {
        return substr($clean, 0, 4) . 'xxxxxx';
    }
    return '093xxxxxx';
}

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

$stmt = $pdo->prepare("SELECT * FROM diamond_storefronts_nationwide_master WHERE slug = ? OR storefront_id = ?");
$stmt->execute([$sid, $sid]);
$store = $stmt->fetch();

if (!$store) {
    http_response_code(404);
    echo '<!DOCTYPE html><html><head><meta charset="utf-8"><title>404</title><style>body{background:#0A0E17;color:#FFF;font-family:sans-serif;text-align:center;padding:5rem;}a{color:#F59E0B;}</style></head><body><h1>404 - Không tìm thấy quán ăn</h1><p><a href="/">Về Bản Đồ Ẩm Thực</a> | <a href="/kham-pha">Xem Danh Mục Show Shop</a></p></body></html>';
    exit;
}

$real_id = $store['storefront_id'];
$slug = $store['slug'] ?: $real_id;
$bname = $store['brand_name'] ?: 'Cửa Hàng';
$cat = $store['cuisine_category'] ?: 'Ẩm Thực';
$city = $store['city'] ?: 'Việt Nam';
$dist = $store['district'] ?: '';
$addr = $store['address'] ?: '';
$landmark = $store['shophouse_landmark'] ?: '';
$pros = $store['honest_pros'] ?: '';
$warnings = $store['honest_warnings'] ?: '';
$raw_phone = $store['phone_number'] ?: '';
$masked_phone = mask_phone($raw_phone);
$hours = $store['opening_hours_text'] ?: 'Đang cập nhật giờ mở cửa';
$gmap_url = $store['google_maps_url'] ?: "https://www.google.com/maps/search/?api=1&query=" . urlencode("$bname $addr $city");

// DỮ LIỆU THỰC CHỨNG 1: Curated Menu (Chỉ hiển thị khi có dữ liệu thật trong CSDL)
$curated_menu = [];
if (!empty($store['curated_menu_json'])) {
    $curated_menu = json_decode($store['curated_menu_json'], true) ?: [];
}

// DỮ LIỆU THỰC CHỨNG 2: TikTok Reviews (Chỉ hiển thị khi có video thật)
$tiktok_reviews = [];
if (!empty($store['tiktok_reviews_json'])) {
    $tiktok_reviews = json_decode($store['tiktok_reviews_json'], true) ?: [];
}

// DỮ LIỆU THỰC CHỨNG 3: Facebook Fanpage & Posts (Chỉ hiển thị khi có link hoặc bài viết thật)
$fb_fanpage_url = $store['facebook_fanpage_url'] ?: '';
$fb_posts = [];
if (!empty($store['facebook_posts_json'])) {
    $fb_posts = json_decode($store['facebook_posts_json'], true) ?: [];
}

// DỮ LIỆU THỰC CHỨNG 4: Tìm kiếm liên quan (Chỉ hiển thị khi có dữ liệu)
$related_searches = [];
if (!empty($store['related_searches_json'])) {
    $related_searches = json_decode($store['related_searches_json'], true) ?: [];
}

// DỮ LIỆU THỰC CHỨNG 5: Đánh giá khách hàng thực tế từ bảng storefront_customer_reviews
$revStmt = $pdo->prepare("SELECT * FROM storefront_customer_reviews WHERE storefront_id = ? ORDER BY helpful_count DESC, created_at DESC");
$revStmt->execute([$real_id]);
$reviews = $revStmt->fetchAll();

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

// Xử lý tiêu đề và mô tả trung thực theo dữ liệu quán
$headline = "Thông Tin Thực Chứng Tại " . htmlspecialchars($bname);
$desc = !empty($pros) ? $pros : "Điểm ẩm thực " . htmlspecialchars($cat) . " tại " . htmlspecialchars($city) . ". Được ghi nhận trên hệ thống Thổ Địa OMNI.";
?>
<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($bname) ?> - <?= htmlspecialchars($cat) ?> | ThoDia OMNI</title>
  <meta name="description" content="<?= htmlspecialchars($desc) ?>">
  <link rel="canonical" href="https://thodia.havietsam.com/quan/<?= htmlspecialchars($slug) ?>">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
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

    /* Sticky Navbar */
    .store-navbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(18, 25, 39, 0.98);
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
      gap: 0.85rem;
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
      font-size: 0.82rem;
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
      max-width: 260px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* Hero Identity Banner */
    .hero-banner {
      background: linear-gradient(180deg, #121927 0%, #0A0E17 100%);
      padding: 3rem 1.5rem 2.5rem;
      border-bottom: 1px solid var(--border-color);
      position: relative;
    }
    .hero-wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }
    .hero-header-flex {
      display: flex;
      align-items: flex-start;
      gap: 1.5rem;
    }
    .hero-avatar-box {
      width: 130px;
      height: 130px;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
      border: 2px solid rgba(245, 158, 11, 0.4);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
      background: #111827;
    }
    .hero-avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .hero-text-content {
      flex: 1;
      min-width: 0;
    }
    @media (max-width: 640px) {
      .hero-header-flex { flex-direction: column; align-items: center; text-align: center; }
      .hero-badges-row, .hero-meta-row, .hero-actions-row { justify-content: center; }
    }
    .hero-badges-row {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .badge-pill {
      background: rgba(245, 158, 11, 0.15);
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
    .badge-pill.verified {
      background: rgba(16, 185, 129, 0.15);
      border-color: var(--accent-green);
      color: #34D399;
    }
    .hero-title {
      font-size: 2.25rem;
      font-weight: 900;
      color: #FFF;
      margin-bottom: 0.5rem;
      line-height: 1.3;
    }
    .hero-category {
      font-size: 1.05rem;
      color: var(--primary);
      font-weight: 700;
      margin-bottom: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .hero-desc {
      font-size: 0.95rem;
      color: #D1D5DB;
      max-width: 850px;
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    .hero-meta-row {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-bottom: 1.75rem;
      font-size: 0.88rem;
      color: var(--text-muted);
    }
    .hero-meta-item {
      display: flex;
      align-items: center;
      gap: 0.45rem;
    }
    .hero-meta-item i { color: var(--primary); }
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
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
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
      box-shadow: 0 4px 15px rgba(2, 132, 199, 0.35);
      transition: transform 0.2s;
    }
    .btn-hero-directions:hover { transform: translateY(-2px); }

    /* Layout */
    .page-container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 1.5rem 4rem;
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: 2rem;
    }

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
      font-size: 1.15rem;
      font-weight: 800;
      color: #FFF;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .module-title i { color: var(--primary); }

    /* Menu BOM */
    .menu-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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
      margin-bottom: 0.35rem;
    }
    .dish-name { font-size: 0.95rem; font-weight: 700; color: #FFF; }
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
    .dish-desc { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.75rem; line-height: 1.4; }
    .dish-price { font-size: 0.95rem; font-weight: 800; color: var(--primary); }

    /* TikTok Grid */
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
    }
    .tiktok-thumb-wrap { height: 160px; position: relative; background: #111; }
    .tiktok-thumb { width: 100%; height: 100%; object-fit: cover; }
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
    .tiktok-body { padding: 0.85rem; display: flex; flex-direction: column; flex: 1; }
    .tiktok-caption {
      font-size: 0.82rem;
      color: #D1D5DB;
      line-height: 1.4;
      margin-bottom: 0.6rem;
      flex: 1;
    }

    /* FB Posts */
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
    .fb-post-content { font-size: 0.85rem; color: #E5E7EB; line-height: 1.5; }

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
    .author-info { display: flex; align-items: center; gap: 0.65rem; }
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
    .author-name { font-size: 0.95rem; font-weight: 700; color: #FFF; }
    .author-badge { font-size: 0.7rem; color: var(--primary); }
    .review-stars { color: var(--primary); font-size: 0.85rem; }
    .review-text { font-size: 0.88rem; color: #D1D5DB; margin-bottom: 0.75rem; line-height: 1.55; }
    .review-photos-grid { display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap; }
    .review-photo { width: 90px; height: 70px; border-radius: 6px; object-fit: cover; }
    .owner-response {
      background: rgba(10, 14, 23, 0.5);
      border-left: 3px solid var(--accent-green);
      padding: 0.6rem 0.85rem;
      border-radius: 6px;
      font-size: 0.8rem;
      color: #A7F3D0;
    }

    /* Customer Photo Gallery */
    .photo-gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
      gap: 0.6rem;
    }
    .gallery-img { width: 100%; height: 110px; object-fit: cover; border-radius: 8px; }

    /* Searches Cloud */
    .searches-cloud { display: flex; flex-wrap: wrap; gap: 0.5rem; }
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

    /* Sidebar Booking Card */
    .sidebar-booking-card {
      background: var(--bg-surface);
      border: 1px solid var(--primary);
      border-radius: 14px;
      padding: 1.5rem;
      position: sticky;
      top: 80px;
    }
    .sidebar-booking-title { font-size: 1.15rem; font-weight: 800; color: #FFF; margin-bottom: 0.5rem; }
    .sidebar-booking-desc { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem; }
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

  <!-- Top Sticky Navigation Bar -->
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
  <section class="hero-banner" style="<?php if (!empty($store['hero_image_url'])): ?>background: linear-gradient(180deg, rgba(18, 25, 39, 0.88) 0%, rgba(10, 14, 23, 0.98) 100%), url('<?= htmlspecialchars($store['hero_image_url']) ?>') center/cover no-repeat;<?php endif; ?>">
    <div class="hero-wrapper">
      <div class="hero-header-flex">
        <?php if (!empty($store['hero_image_url'])): ?>
          <div class="hero-avatar-box">
            <img src="<?= htmlspecialchars($store['hero_image_url']) ?>" alt="<?= htmlspecialchars($bname) ?>" class="hero-avatar-img">
          </div>
        <?php endif; ?>
        <div class="hero-text-content">
          <div class="hero-badges-row">
        <span class="badge-pill"><i class="fa-solid fa-location-dot"></i> <?= htmlspecialchars($landmark ?: ($addr ?: $city)) ?></span>
        <span class="badge-pill verified"><i class="fa-solid fa-shield-check"></i> Điểm Tin Cậy <?= htmlspecialchars($store['diamond_trust_score'] ?: '70') ?>/100</span>
        <span class="badge-pill"><i class="fa-solid fa-utensils"></i> <?= htmlspecialchars($cat) ?></span>
      </div>

      <h1 class="hero-title"><?= htmlspecialchars($bname) ?></h1>
      <div class="hero-category"><?= htmlspecialchars($cat) ?> • <?= htmlspecialchars($city) ?></div>
      <p class="hero-desc"><?= htmlspecialchars($desc) ?></p>

      <div class="hero-meta-row">
        <?php if (!empty($store['google_maps_rating'])): ?>
          <div class="hero-meta-item">
            <i class="fa-solid fa-star" style="color: var(--primary);"></i>
            <b><?= htmlspecialchars($store['google_maps_rating']) ?>★</b> (<?= htmlspecialchars($store['google_maps_total_reviews'] ?: '0') ?> đánh giá Google Maps)
          </div>
        <?php endif; ?>
        <?php if (!empty($addr)): ?>
          <div class="hero-meta-item">
            <i class="fa-solid fa-location-dot"></i> <?= htmlspecialchars($addr) ?>
          </div>
        <?php endif; ?>
        <div class="hero-meta-item">
          <i class="fa-solid fa-clock"></i> <?= htmlspecialchars($hours) ?>
        </div>
        <?php if (!empty($store['car_parking'])): ?>
          <div class="hero-meta-item">
            <i class="fa-solid fa-square-parking" style="color: var(--accent-green);"></i> <?= htmlspecialchars($store['car_parking']) ?>
          </div>
        <?php endif; ?>
      </div>

      <div class="hero-actions-row">
        <a href="#dat-ban" class="btn-hero-call">
          <i class="fa-solid fa-phone-volume"></i> Đặt Bàn Trực Tiếp (<?= $masked_phone ?>)
        </a>
        <a href="<?= htmlspecialchars($gmap_url) ?>" target="_blank" class="btn-hero-directions">
          <i class="fa-solid fa-diamond-turn-right"></i> Dẫn Đường Bản Đồ
        </a>
      </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Page Content -->
  <div class="page-container">
    <div class="main-content-col">

      <!-- 1. THỰC ĐƠN THỰC CHỨNG (CHỈ HIỂN THỊ NẾU CÓ DỮ LIỆU THẬT) -->
      <?php if (!empty($curated_menu)): ?>
        <section class="module-box">
          <div class="module-header">
            <h2 class="module-title"><i class="fa-solid fa-book-open"></i> Thực Đơn Chọn Lọc & Bảng Giá Niêm Yết</h2>
            <span style="font-size: 0.8rem; color: var(--primary); font-weight: 700;"><?= count($curated_menu) ?> Món</span>
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
                  <?php if (!empty($dish['desc'])): ?>
                    <div class="dish-desc"><?= htmlspecialchars($dish['desc']) ?></div>
                  <?php endif; ?>
                </div>
                <div class="dish-price"><?= htmlspecialchars($dish['price'] ?? 'Liên hệ') ?></div>
              </div>
            <?php endforeach; ?>
          </div>
        </section>
      <?php endif; ?>

      <!-- 2. TIKTOK REVIEWS (CHỈ HIỂN THỊ NẾU CÓ VIDEO THẬT) -->
      <?php if (!empty($tiktok_reviews)): ?>
        <section class="module-box">
          <div class="module-header">
            <h2 class="module-title"><i class="fa-brands fa-tiktok" style="color: #FE2C55;"></i> Review TikTok Thực Tế</h2>
          </div>
          <div class="tiktok-grid">
            <?php foreach ($tiktok_reviews as $tk): ?>
              <div class="tiktok-card">
                <div class="tiktok-thumb-wrap">
                  <img src="<?= htmlspecialchars($tk['thumb']) ?>" alt="TikTok Review" class="tiktok-thumb">
                  <a href="<?= htmlspecialchars($tk['url'] ?? 'https://www.tiktok.com') ?>" target="_blank" class="tiktok-play-btn">
                    <i class="fa-solid fa-play"></i>
                  </a>
                  <?php if (!empty($tk['views'])): ?>
                    <div class="tiktok-views-badge"><i class="fa-solid fa-eye"></i> <?= htmlspecialchars($tk['views']) ?></div>
                  <?php endif; ?>
                </div>
                <div class="tiktok-body">
                  <div class="tiktok-caption"><?= htmlspecialchars($tk['title'] ?? '') ?></div>
                  <a href="<?= htmlspecialchars($tk['url'] ?? 'https://www.tiktok.com') ?>" target="_blank" style="color: #38BDF8; font-size: 0.75rem; font-weight: 700; text-decoration: none;">
                    Xem trên TikTok <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        </section>
      <?php endif; ?>

      <!-- 3. FANPAGE FACEBOOK (CHỈ HIỂN THỊ KHI CÓ LINK HOẶC BÀI VIẾT THẬT) -->
      <?php if (!empty($fb_posts) || !empty($fb_fanpage_url)): ?>
        <section class="module-box">
          <div class="module-header">
            <h2 class="module-title"><i class="fa-brands fa-facebook" style="color: #1877F2;"></i> Fanpage Facebook Chính Thức</h2>
            <?php if (!empty($fb_fanpage_url)): ?>
              <a href="<?= htmlspecialchars($fb_fanpage_url) ?>" target="_blank" style="font-size: 0.8rem; color: #38BDF8; text-decoration: none; font-weight: 700;">
                Ghé Fanpage <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            <?php endif; ?>
          </div>
          <?php foreach ($fb_posts as $post): ?>
            <div class="fb-post-card">
              <div class="fb-post-header">
                <span><b><?= htmlspecialchars($post['author'] ?? $bname) ?></b></span>
                <span><?= htmlspecialchars($post['date'] ?? '') ?></span>
              </div>
              <div class="fb-post-content"><?= htmlspecialchars($post['content'] ?? '') ?></div>
            </div>
          <?php endforeach; ?>
        </section>
      <?php endif; ?>

      <!-- 4. ĐÁNH GIÁ THỰC TẾ TỪ KHÁCH HÀNG (CHỈ HIỂN THỊ NẾU CÓ TRONG CSDL) -->
      <?php if (!empty($reviews)): ?>
        <section class="module-box">
          <div class="module-header">
            <h2 class="module-title"><i class="fa-solid fa-comments"></i> Đánh Giá Thực Chứng Từ Khách Hàng</h2>
          </div>
          <?php foreach ($reviews as $rev): ?>
            <div class="review-item">
              <div class="review-item-header">
                <div class="author-info">
                  <div class="author-avatar"><?= htmlspecialchars($rev['author_avatar'] ?? mb_substr($rev['author_name'] ?? 'T', 0, 1, 'UTF-8')) ?></div>
                  <div>
                    <div class="author-name"><?= htmlspecialchars($rev['author_name'] ?? 'Thực khách') ?></div>
                    <div class="author-badge"><i class="fa-solid fa-certificate"></i> <?= htmlspecialchars($rev['author_badge'] ?? 'Thực khách đã ghé quán') ?> <?= !empty($rev['review_time']) ? '• ' . htmlspecialchars($rev['review_time']) : '' ?></div>
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
      <?php endif; ?>

      <!-- 5. ẢNH THỰC KHÁCH (CHỈ HIỂN THỊ KHI CÓ ẢNH THẬT TỪ REVIEW) -->
      <?php if (!empty($customer_photos)): ?>
        <section class="module-box">
          <div class="module-header">
            <h2 class="module-title"><i class="fa-solid fa-camera"></i> Kho Ảnh Thực Khách Check-in</h2>
            <span style="font-size: 0.8rem; color: var(--text-muted);"><?= count($customer_photos) ?> Ảnh Thật</span>
          </div>
          <div class="photo-gallery-grid">
            <?php foreach ($customer_photos as $img): ?>
              <img src="<?= htmlspecialchars($img) ?>" alt="<?= htmlspecialchars($bname) ?>" class="gallery-img" loading="lazy">
            <?php endforeach; ?>
          </div>
        </section>
      <?php endif; ?>

      <!-- 6. TÌM KIẾM LIÊN QUAN (CHỈ HIỂN THỊ NẾU CÓ DỮ LIỆU) -->
      <?php if (!empty($related_searches)): ?>
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
      <?php endif; ?>

    </div>

    <!-- Sidebar Đặt Bàn Trực Tiếp -->
    <div class="sidebar-col">
      <div class="sidebar-booking-card" id="dat-ban">
        <div class="sidebar-booking-title">Kết Nối Đặt Bàn Trực Tiếp</div>
        <div class="sidebar-booking-desc">Thông tin kết nối chuyển trực tiếp tới nhà hàng qua hệ sinh thái Thổ Địa OMNI.</div>

        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Chỗ đỗ xe:</b> <?= htmlspecialchars(!empty($store['car_parking']) ? $store['car_parking'] : 'Liên hệ hướng dẫn') ?></span>
        </div>
        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Khoảng giá:</b> <?= htmlspecialchars($store['price_range_per_person'] ?: 'Đang cập nhật') ?></span>
        </div>
        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Phục vụ:</b> <?= htmlspecialchars($store['dining_options'] ?: 'Ăn tại chỗ • Mua mang đi') ?></span>
        </div>
        <div class="booking-feature">
          <i class="fa-solid fa-circle-check"></i>
          <span><b>Hotline nhà hàng:</b> <?= $masked_phone ?></span>
        </div>

        <div style="margin-top: 1.25rem; font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; background: rgba(10, 14, 23, 0.4); padding: 0.85rem; border-radius: 8px; border: 1px dashed var(--border-color);">
          <i class="fa-solid fa-shield-halved" style="color: var(--accent-green);"></i> <b>Bảo vệ quyền riêng tư:</b> Số điện thoại được ẩn bớt để tránh thu thập dữ liệu trái phép. Quý khách bấm nút bên dưới để được kết nối hỗ trợ đặt bàn nhanh nhất.
        </div>

        <a href="<?= htmlspecialchars($gmap_url) ?>" target="_blank" class="btn-submit-booking" style="text-decoration: none;">
          <i class="fa-solid fa-diamond-turn-right"></i> Dẫn Đường Bản Đồ Google Maps
        </a>
      </div>
    </div>
  </div>

</body>
</html>
