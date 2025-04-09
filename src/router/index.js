import { createRouter, createWebHistory } from 'vue-router';

// Import halaman utama
import Home from '@/pages/Home.vue';
import Transaksi from '@/pages/Transaksi.vue';
import Akun from '@/pages/Akun.vue';
import Keranjang from '@/pages/Keranjang.vue';
import Checkout from '@/pages/Checkout.vue';
import Berhasil from '@/pages/Berhasil.vue';
import DetailTransaksi from '@/pages/DetailTransaksi.vue';
import Profil from '@/pages/Profil.vue';
import PengaturanAkun from '@/pages/PengaturanAkun.vue';
import PusatBantuan from '@/pages/PusatBantuan.vue';
import Login from '@/pages/auth/Login.vue';
import Daftar from '@/pages/auth/Daftar.vue';
import HomeDashboard from '@/pages/admin/HomeDashboard.vue';
import Menu from '@/pages/admin/Menu.vue';
import Supplier from '@/pages/admin/Supplier.vue';
import Pengguna from '@/pages/admin/Pengguna.vue';

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: { title: 'Home' }
  },
  { 
    path: '/transaksi', 
    name: 'Transaksi', 
    component: Transaksi,
    meta: { title: 'Transaksi' }
  },
  { 
    path: '/akun', 
    name: 'Akun', 
    component: Akun,
    meta: { title: 'Akun' }
  },
  { 
    path: '/keranjang', 
    name: 'Keranjang', 
    component: Keranjang,
    meta: { title: 'Keranjang' }
  },
  { 
    path: '/checkout', 
    name: 'Checkout', 
    component: Checkout,
    meta: { title: 'Checkout' }
  },
  { 
    path: '/berhasil', 
    name: 'Berhasil', 
    component: Berhasil,
    meta: { title: 'Berhasil' }
  },
  { 
    path: '/detail-transaksi', 
    name: 'DetailTransaksi', 
    component: DetailTransaksi,
    meta: { title: 'Detail Transaksi' }
  },
  { 
    path: '/profil', 
    name: 'Profil', 
    component: Profil,
    meta: { title: 'Profil' }
  },
  { 
    path: '/pengaturan-akun', 
    name: 'PengaturanAkun', 
    component: PengaturanAkun,
    meta: { title: 'Pengaturan Akun' }
  },
  { 
    path: '/pusat-bantuan', 
    name: 'PusatBantuan', 
    component: PusatBantuan,
    meta: { title: 'Pusat Bantuan' }
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: Login,
    meta: { title: 'Login' }
  },
  { 
    path: '/daftar', 
    name: 'Daftar', 
    component: Daftar,
    meta: { title: 'Daftar' }
  },

  // Admin
  { 
    path: '/admin/dashboard', 
    name: 'HomeDashboard', 
    component: HomeDashboard,
    meta: {
      title: 'Home',
      isAdmin: true
    }
  },
  { 
    path: '/admin/menu', 
    name: 'Menu', 
    component: Menu,
    meta: {
      title: 'Menu',
      isAdmin: true
    }
  },
  { 
    path: '/admin/supplier', 
    name: 'Supplier', 
    component: Supplier,
    meta: {
      title: 'Supplier',
      isAdmin: true
    }
  },
  { 
    path: '/admin/pengguna', 
    name: 'Pengguna', 
    component: Pengguna,
    meta: {
      title: 'Pengguna',
      isAdmin: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Mengubah judul halaman sesuai dengan meta title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | SPW Gridas`;
  } else {
    document.title = 'SPW Gridas';
  }
  next();
});

export default router;
