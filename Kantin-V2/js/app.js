/**
 * KANTIN ONLINE - Pure HTML/JS Version
 * Using LocalStorage as Database
 */

// ============================================
// DATABASE (LocalStorage)
// ============================================
const DB = {
    // Initialize data if not exists
    init() {
        if (!localStorage.getItem('kantin_users')) {
            const defaultUsers = [
                {
                    id: 1,
                    nama: 'Administrator',
                    email: 'admin@kantin.com',
                    password: 'admin123',
                    no_hp: '081234567890',
                    saldo: 1000000,
                    role: 'admin',
                    created_at: new Date().toISOString()
                },
                {
                    id: 2,
                    nama: 'User Demo',
                    email: 'user@demo.com',
                    password: 'user123',
                    no_hp: '089876543210',
                    saldo: 100000,
                    role: 'user',
                    created_at: new Date().toISOString()
                }
            ];
            localStorage.setItem('kantin_users', JSON.stringify(defaultUsers));
        }

        if (!localStorage.getItem('kantin_kategori')) {
            const kategori = [
                { id: 1, nama: 'Makanan', icon: 'utensils' },
                { id: 2, nama: 'Minuman', icon: 'glass-water' },
                { id: 3, nama: 'Snack', icon: 'cookie' },
                { id: 4, nama: 'Dessert', icon: 'ice-cream' }
            ];
            localStorage.setItem('kantin_kategori', JSON.stringify(kategori));
        }

        if (!localStorage.getItem('kantin_menu')) {
            const menu = [
                { id: 1, nama: 'Nasi Goreng Spesial', kategori_id: 1, harga: 25000, deskripsi: 'Nasi goreng dengan ayam, telur, dan sayuran segar', gambar: 'https://images.unsplash.com/photo-1603133872878-684f208fb74b?w=400', stok: 50, status: 'tersedia' },
                { id: 2, nama: 'Mie Goreng Ayam', kategori_id: 1, harga: 22000, deskripsi: 'Mie goreng dengan potongan ayam dan sayuran', gambar: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400', stok: 40, status: 'tersedia' },
                { id: 3, nama: 'Ayam Penyet', kategori_id: 1, harga: 28000, deskripsi: 'Ayam goreng dengan sambal penyet khas', gambar: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400', stok: 30, status: 'tersedia' },
                { id: 4, nama: 'Nasi Uduk Komplit', kategori_id: 1, harga: 20000, deskripsi: 'Nasi uduk dengan ayam, telur, dan sambal', gambar: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400', stok: 35, status: 'tersedia' },
                { id: 5, nama: 'Soto Ayam', kategori_id: 1, harga: 18000, deskripsi: 'Soto ayam hangat dengan kuah bening', gambar: 'https://images.unsplash.com/photo-1547592166-23acbe346499?w=400', stok: 25, status: 'tersedia' },
                { id: 6, nama: 'Bakso Malang', kategori_id: 1, harga: 20000, deskripsi: 'Bakso malang dengan mie dan tahu', gambar: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=400', stok: 40, status: 'tersedia' },
                { id: 7, nama: 'Es Teh Manis', kategori_id: 2, harga: 5000, deskripsi: 'Teh manis dingin yang menyegarkan', gambar: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400', stok: 100, status: 'tersedia' },
                { id: 8, nama: 'Es Jeruk', kategori_id: 2, harga: 7000, deskripsi: 'Jeruk peras segar dengan es', gambar: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400', stok: 80, status: 'tersedia' },
                { id: 9, nama: 'Kopi Hitam', kategori_id: 2, harga: 8000, deskripsi: 'Kopi hitam panas/dingin', gambar: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=400', stok: 60, status: 'tersedia' },
                { id: 10, nama: 'Jus Alpukat', kategori_id: 2, harga: 15000, deskripsi: 'Jus alpukat segar dengan susu', gambar: 'https://images.unsplash.com/photo-1523049673856-6485b5301054?w=400', stok: 30, status: 'tersedia' },
                { id: 11, nama: 'Jus Mangga', kategori_id: 2, harga: 12000, deskripsi: 'Jus mangga segar tanpa gula tambahan', gambar: 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?w=400', stok: 30, status: 'tersedia' },
                { id: 12, nama: 'Pisang Goreng', kategori_id: 3, harga: 10000, deskripsi: 'Pisang goreng crispy 3 pcs', gambar: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400', stok: 40, status: 'tersedia' },
                { id: 13, nama: 'Es Krim Cone', kategori_id: 4, harga: 8000, deskripsi: 'Es krim vanilla dalam cone', gambar: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400', stok: 20, status: 'tersedia' },
                { id: 14, nama: 'Puding Coklat', kategori_id: 4, harga: 10000, deskripsi: 'Puding coklat dengan vla vanila', gambar: 'https://images.unsplash.com/photo-1543508168-476c6c1ebef3?w=400', stok: 25, status: 'tersedia' }
            ];
            localStorage.setItem('kantin_menu', JSON.stringify(menu));
        }

        if (!localStorage.getItem('kantin_keranjang')) {
            localStorage.setItem('kantin_keranjang', JSON.stringify([]));
        }

        if (!localStorage.getItem('kantin_pesanan')) {
            localStorage.setItem('kantin_pesanan', JSON.stringify([]));
        }

        if (!localStorage.getItem('kantin_topup')) {
            localStorage.setItem('kantin_topup', JSON.stringify([]));
        }

        if (!localStorage.getItem('kantin_detail_pesanan')) {
            localStorage.setItem('kantin_detail_pesanan', JSON.stringify([]));
        }
    },

    // Users
    getUsers() {
        return JSON.parse(localStorage.getItem('kantin_users')) || [];
    },
    saveUsers(users) {
        localStorage.setItem('kantin_users', JSON.stringify(users));
    },
    getUser(id) {
        return this.getUsers().find(u => u.id === id);
    },
    getUserByEmail(email) {
        return this.getUsers().find(u => u.email === email);
    },
    addUser(user) {
        const users = this.getUsers();
        user.id = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        user.created_at = new Date().toISOString();
        users.push(user);
        this.saveUsers(users);
        return user;
    },
    updateUser(id, data) {
        const users = this.getUsers();
        const index = users.findIndex(u => u.id === id);
        if (index !== -1) {
            users[index] = { ...users[index], ...data };
            this.saveUsers(users);
            return users[index];
        }
        return null;
    },

    // Kategori
    getKategori() {
        return JSON.parse(localStorage.getItem('kantin_kategori')) || [];
    },

    // Menu
    getMenu() {
        return JSON.parse(localStorage.getItem('kantin_menu')) || [];
    },
    saveMenu(menu) {
        localStorage.setItem('kantin_menu', JSON.stringify(menu));
    },
    getMenuById(id) {
        return this.getMenu().find(m => m.id === id);
    },
    getMenuByKategori(kategoriId) {
        return this.getMenu().filter(m => m.kategori_id === kategoriId);
    },
    addMenu(item) {
        const menu = this.getMenu();
        item.id = menu.length > 0 ? Math.max(...menu.map(m => m.id)) + 1 : 1;
        menu.push(item);
        this.saveMenu(menu);
        return item;
    },
    updateMenu(id, data) {
        const menu = this.getMenu();
        const index = menu.findIndex(m => m.id === id);
        if (index !== -1) {
            menu[index] = { ...menu[index], ...data };
            this.saveMenu(menu);
            return menu[index];
        }
        return null;
    },
    deleteMenu(id) {
        const menu = this.getMenu().filter(m => m.id !== id);
        this.saveMenu(menu);
    },

    // Keranjang
    getKeranjang(userId) {
        return (JSON.parse(localStorage.getItem('kantin_keranjang')) || []).filter(k => k.user_id === userId);
    },
    saveKeranjang(keranjang) {
        localStorage.setItem('kantin_keranjang', JSON.stringify(keranjang));
    },
    addToKeranjang(userId, menuId, jumlah = 1) {
        const keranjang = this.getKeranjangAll();
        const existing = keranjang.find(k => k.user_id === userId && k.menu_id === menuId);
        
        if (existing) {
            existing.jumlah += jumlah;
        } else {
            keranjang.push({
                id: keranjang.length > 0 ? Math.max(...keranjang.map(k => k.id)) + 1 : 1,
                user_id: userId,
                menu_id: menuId,
                jumlah: jumlah
            });
        }
        this.saveKeranjang(keranjang);
    },
    getKeranjangAll() {
        return JSON.parse(localStorage.getItem('kantin_keranjang')) || [];
    },
    updateKeranjangQty(id, change) {
        const keranjang = this.getKeranjangAll();
        const item = keranjang.find(k => k.id === id);
        if (item) {
            item.jumlah += change;
            if (item.jumlah <= 0) {
                this.deleteKeranjangItem(id);
                return;
            }
            this.saveKeranjang(keranjang);
        }
    },
    deleteKeranjangItem(id) {
        const keranjang = this.getKeranjangAll().filter(k => k.id !== id);
        this.saveKeranjang(keranjang);
    },
    clearKeranjang(userId) {
        const keranjang = this.getKeranjangAll().filter(k => k.user_id !== userId);
        this.saveKeranjang(keranjang);
    },

    // Pesanan
    getPesanan(userId = null) {
        const pesanan = JSON.parse(localStorage.getItem('kantin_pesanan')) || [];
        return userId ? pesanan.filter(p => p.user_id === userId) : pesanan;
    },
    savePesanan(pesanan) {
        localStorage.setItem('kantin_pesanan', JSON.stringify(pesanan));
    },
    addPesanan(pesanan) {
        const list = this.getPesanan();
        pesanan.id = list.length > 0 ? Math.max(...list.map(p => p.id)) + 1 : 1;
        pesanan.created_at = new Date().toISOString();
        list.push(pesanan);
        this.savePesanan(list);
        return pesanan;
    },
    updatePesananStatus(id, status) {
        const list = this.getPesanan();
        const item = list.find(p => p.id === id);
        if (item) {
            item.status = status;
            this.savePesanan(list);
        }
    },

    // Detail Pesanan
    getDetailPesanan(pesananId = null) {
        const detail = JSON.parse(localStorage.getItem('kantin_detail_pesanan')) || [];
        return pesananId ? detail.filter(d => d.pesanan_id === pesananId) : detail;
    },
    saveDetailPesanan(detail) {
        localStorage.setItem('kantin_detail_pesanan', JSON.stringify(detail));
    },
    addDetailPesanan(item) {
        const detail = this.getDetailPesanan();
        item.id = detail.length > 0 ? Math.max(...detail.map(d => d.id)) + 1 : 1;
        detail.push(item);
        this.saveDetailPesanan(detail);
    },

    // Topup
    getTopup(userId = null) {
        const topup = JSON.parse(localStorage.getItem('kantin_topup')) || [];
        return userId ? topup.filter(t => t.user_id === userId) : topup;
    },
    saveTopup(topup) {
        localStorage.setItem('kantin_topup', JSON.stringify(topup));
    },
    addTopup(data) {
        const topup = this.getTopup();
        data.id = topup.length > 0 ? Math.max(...topup.map(t => t.id)) + 1 : 1;
        data.created_at = new Date().toISOString();
        topup.push(data);
        this.saveTopup(topup);
        return data;
    },
    updateTopupStatus(id, status) {
        const topup = this.getTopup();
        const item = topup.find(t => t.id === id);
        if (item) {
            item.status = status;
            this.saveTopup(topup);
        }
    }
};

// ============================================
// AUTH
// ============================================
const Auth = {
    getCurrentUser() {
        const user = sessionStorage.getItem('kantin_current_user');
        return user ? JSON.parse(user) : null;
    },
    setCurrentUser(user) {
        sessionStorage.setItem('kantin_current_user', JSON.stringify(user));
    },
    logout() {
        sessionStorage.removeItem('kantin_current_user');
        window.location.href = 'login.html';
    },
    isLoggedIn() {
        return this.getCurrentUser() !== null;
    },
    isAdmin() {
        const user = this.getCurrentUser();
        return user && user.role === 'admin';
    },
    requireAuth() {
        if (!this.isLoggedIn()) {
            window.location.href = 'login.html';
            return false;
        }
        return true;
    },
    requireAdmin() {
        if (!this.isLoggedIn() || !this.isAdmin()) {
            window.location.href = 'index.html';
            return false;
        }
        return true;
    }
};

// ============================================
// HELPERS
// ============================================
function rupiah(angka) {
    return 'Rp ' + parseInt(angka || 0).toLocaleString('id-ID');
}

function tanggal(tgl) {
    const date = new Date(tgl);
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
}

function formatDateTime(tgl) {
    const date = new Date(tgl);
    return `${tanggal(tgl)} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
}

function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast align-items-center text-white bg-${type} position-fixed`;
    toast.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">${message}</div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" onclick="this.parentElement.parentElement.remove()"></button>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

function generateOrderNumber(id) {
    return '#' + id.toString().padStart(5, '0');
}

// ============================================
// INITIALIZE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    DB.init();
});
