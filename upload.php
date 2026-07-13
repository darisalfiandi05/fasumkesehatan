<?php
header('Content-Type: application/json');

// Validasi request method
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Validasi file
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    echo json_encode(['success' => false, 'message' => 'File upload error']);
    exit;
}

$file = $_FILES['file'];
$upload_dir = __DIR__ . '/team-photos/';

// Validasi direktori
if (!is_dir($upload_dir)) {
    mkdir($upload_dir, 0777, true);
}

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

// Get member ID from request (optional)
$member_id = isset($_POST['member_id']) ? intval($_POST['member_id']) : 1;

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
?>
