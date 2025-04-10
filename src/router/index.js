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
import Laporan from '@/pages/admin/Laporan.vue';
import Pengaturan from '@/pages/admin/Pengaturan.vue';
import HomeKasir from '@/pages/kasir/HomeDashboard.vue';
import Pesanan from '@/pages/kasir/Pesanan.vue';
import BerhasilKasir from '@/pages/kasir/Berhasil.vue';
import Riwayat from '@/pages/kasir/Riwayat.vue';
import PengaturanKasir from '@/pages/kasir/Pengaturan.vue';
import HomePelayan from '@/pages/pelayan/HomeDashboard.vue';
import SupplierPelayan from '@/pages/pelayan/Supplier.vue';
import PengaturanPelayan from '@/pages/pelayan/Pengaturan.vue';

import UnderConstruction from '@/pages/UnderConstruction.vue';

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
  { 
    path: '/admin/laporan', 
    name: 'Laporan', 
    component: Laporan,
    meta: {
      title: 'Laporan',
      isAdmin: true
    }
  },
  { 
    path: '/admin/pengaturan', 
    name: 'Pengaturan', 
    component: Pengaturan,
    meta: {
      title: 'Pengaturan',
      isAdmin: true
    }
  },

  // Kasir
  { 
    path: '/kasir/dashboard', 
    name: 'HomeKasir', 
    component: HomeKasir,
    meta: {
      title: 'Home',
      isAdmin: true
    }
  },
  { 
    path: '/kasir/pesanan', 
    name: 'Pesanan', 
    component: Pesanan,
    meta: {
      title: 'Pesanan',
      isAdmin: true
    }
  },
  { 
    path: '/kasir/berhasil', 
    name: 'BerhasilKasir', 
    component: BerhasilKasir,
    meta: {
      title: 'Berhasil',
      isAdmin: true
    }
  },
  { 
    path: '/kasir/riwayat', 
    name: 'Riwayat', 
    component: Riwayat,
    meta: {
      title: 'Riwayat',
      isAdmin: true
    }
  },
  { 
    path: '/kasir/pengaturan', 
    name: 'PengaturanKasir', 
    component: PengaturanKasir,
    meta: {
      title: 'Pengaturan',
      isAdmin: true
    }
  },

  // Pelayan
  { 
    path: '/pelayan/dashboard', 
    name: 'HomePelayan', 
    component: HomePelayan,
    meta: {
      title: 'Home',
      isAdmin: true
    }
  },
  { 
    path: '/pelayan/supplier', 
    name: 'SupplierPelayan', 
    component: SupplierPelayan,
    meta: {
      title: 'Supplier',
      isAdmin: true
    }
  },
  { 
    path: '/pelayan/pengaturan', 
    name: 'PengaturanPelayan', 
    component: PengaturanPelayan,
    meta: {
      title: 'Pengaturan',
      isAdmin: true
    }
  },

  // Under Construction
  { 
    path: '/underconstruction', 
    name: 'UnderConstruction', 
    component: UnderConstruction,
    meta: {
      title: 'Under Construction',
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
