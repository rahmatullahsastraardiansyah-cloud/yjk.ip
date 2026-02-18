# Kantin Online - Versi HTML/JS

Aplikasi Kantin Online berbasis HTML murni dengan JavaScript yang menggunakan **localStorage** sebagai database. Tidak memerlukan server PHP atau database MySQL!

## 🚀 Keunggulan Versi HTML

- ✅ **Tanpa Server** - Berjalan langsung di browser
- ✅ **Tanpa Database** - Menggunakan localStorage
- ✅ **Cepat & Ringan** - Tidak perlu instalasi
- ✅ **Portable** - Bisa dibuka dari file lokal
- ✅ **Gratis Hosting** - Bisa di-deploy ke GitHub Pages/Netlify

## 📁 Struktur File

```
kantin-html/
├── index.html              # Halaman beranda
├── login.html              # Halaman login
├── register.html           # Halaman registrasi
├── menu.html               # Daftar menu
├── keranjang.html          # Keranjang belanja
├── profil.html             # Profil pengguna
├── edit-profil.html        # Edit profil
├── riwayat.html            # Riwayat pesanan
├── topup.html              # Topup saldo
├── admin.html              # Dashboard admin
├── admin-menu.html         # Kelola menu
├── admin-pengguna.html     # Kelola pengguna
├── admin-penghasilan.html  # Laporan penghasilan
├── css/
│   └── style.css          # Styling
├── js/
│   └── app.js             # Logika & database
└── README.md
```

## 🔑 Akun Default

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@kantin.com | admin123 |
| **User** | user@demo.com | user123 |

## 🎯 Fitur

### Untuk Pengguna
- ✅ Registrasi & Login
- ✅ Lihat menu makanan & minuman
- ✅ Keranjang belanja
- ✅ Checkout dengan saldo
- ✅ Topup saldo
- ✅ Riwayat pesanan
- ✅ Edit profil

### Untuk Admin
- ✅ Dashboard dengan statistik
- ✅ Kelola menu (Tambah, Edit, Hapus)
- ✅ Kelola pengguna
- ✅ Laporan penghasilan dengan grafik
- ✅ Update status pesanan

## 🚀 Cara Menggunakan

### 1. Buka Langsung (File Lokal)
1. Download semua file
2. Buka `index.html` di browser
3. Selesai!

### 2. Deploy ke Web
#### GitHub Pages
1. Fork/upload repo ke GitHub
2. Settings > Pages > Enable
3. Selesai!

#### Netlify
1. Drag & drop folder ke Netlify
2. Selesai!

## 📱 Screenshot

### Halaman Login
![Login](https://via.placeholder.com/400x300?text=Login)

### Halaman Beranda
![Home](https://via.placeholder.com/400x300?text=Home)

### Admin Dashboard
![Admin](https://via.placeholder.com/400x300?text=Admin)

## 🛠️ Teknologi

- **HTML5** - Struktur halaman
- **CSS3** - Styling dengan Bootstrap 5
- **JavaScript** - Logika aplikasi
- **localStorage** - Penyimpanan data
- **Chart.js** - Grafik laporan

## ⚠️ Catatan Penting

### Data Tersimpan di Browser
- Data disimpan di **localStorage** browser
- Jika browser di-clear, data akan hilang
- Data tidak bisa diakses dari browser lain

### Untuk Production
- Gunakan **backend** jika butuh data persisten
- localStorage cocok untuk **demo/prototype**

## 🔄 Reset Data

Untuk mereset semua data ke default:

```javascript
// Buka console browser (F12)
localStorage.clear();
location.reload();
```

## 📞 Kontak

- Email: info@kantin.com
- Telepon: 0812-3456-7890

---

**Versi**: 1.0.0  
**Dibuat**: 2024  
**Lisensi**: Free to use
