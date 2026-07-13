<?php
header('Content-Type: application/json');

// Validasi request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$upload_dir = __DIR__ . '/team-photos/';

// Validasi direktori
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

$member_id = isset($_POST['member_id']) ? intval($_POST['member_id']) : 1;

// ========== UPLOAD DARI FILE ==========
if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['file'];

    // Validasi tipe file
    $allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);

    if (!in_array($mime_type, $allowed_types)) {
        echo json_encode(['success' => false, 'message' => 'Tipe file tidak diizinkan']);
        exit;
    }

    // Validasi ukuran
    if ($file['size'] > 2 * 1024 * 1024) {
        echo json_encode(['success' => false, 'message' => 'Ukuran file terlalu besar']);
        exit;
    }

    // Determine file extension
    $ext = '';
    switch ($mime_type) {
        case 'image/jpeg':
            $ext = 'jpg';
            break;
        case 'image/png':
            $ext = 'png';
            break;
        case 'image/gif':
            $ext = 'gif';
            break;
        case 'image/webp':
            $ext = 'webp';
            break;
    }

    // Generate filename
    $filename = 'member-' . $member_id . '.' . $ext;
    $filepath = $upload_dir . $filename;

    // Upload file
    if (move_uploaded_file($file['tmp_name'], $filepath)) {
        echo json_encode([
            'success' => true,
            'message' => 'Foto berhasil diupload',
            'filename' => $filename
        ]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Gagal menyimpan file']);
    }
    exit;
}

// ========== UPLOAD DARI URL ==========
if (isset($_POST['photo_url'])) {
    $photo_url = filter_var($_POST['photo_url'], FILTER_VALIDATE_URL);
    
    if (!$photo_url) {
        echo json_encode(['success' => false, 'message' => 'URL tidak valid']);
        exit;
    }

    // Download image from URL
    $image_data = @file_get_contents($photo_url);
    if (!$image_data) {
        echo json_encode(['success' => false, 'message' => 'Gagal mengunduh gambar dari URL']);
        exit;
    }

    // Save temporary file to check MIME type
    $tmp_path = $upload_dir . 'tmp-' . uniqid() . '.tmp';
    file_put_contents($tmp_path, $image_data);

    // Validasi tipe file
    $allowed_types = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $tmp_path);
    finfo_close($finfo);

    if (!in_array($mime_type, $allowed_types)) {
        unlink($tmp_path);
        echo json_encode(['success' => false, 'message' => 'Tipe file tidak diizinkan']);
        exit;
    }

    // Validasi ukuran
    if (filesize($tmp_path) > 2 * 1024 * 1024) {
        unlink($tmp_path);
        echo json_encode(['success' => false, 'message' => 'Ukuran file terlalu besar']);
        exit;
    }

    // Determine file extension
    $ext = '';
    switch ($mime_type) {
        case 'image/jpeg':
            $ext = 'jpg';
            break;
        case 'image/png':
            $ext = 'png';
            break;
        case 'image/gif':
            $ext = 'gif';
            break;
        case 'image/webp':
            $ext = 'webp';
            break;
    }

    // Generate filename and move file
    $filename = 'member-' . $member_id . '.' . $ext;
    $filepath = $upload_dir . $filename;

    if (rename($tmp_path, $filepath)) {
        echo json_encode([
            'success' => true,
            'message' => 'Foto berhasil ditambahkan',
            'filename' => $filename,
            'url' => $photo_url
        ]);
    } else {
        unlink($tmp_path);
        echo json_encode(['success' => false, 'message' => 'Gagal menyimpan file']);
    }
    exit;
}

echo json_encode(['success' => false, 'message' => 'Tidak ada file atau URL yang dikirim']);
?>
