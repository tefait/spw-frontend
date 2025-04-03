<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import BottomNavbar from '@/components/BottomNavbar.vue';

const router = useRouter();
const route = useRoute();

// Fungsi untuk menangkap tombol kembali
const handleBackButton = () => {
  if (route.path === "/transaksi") {
    router.replace("/"); // Mengarahkan langsung ke halaman Home
  }
};

onMounted(() => {
  if (route.path === "/transaksi") {
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handleBackButton);
  }
});

onUnmounted(() => {
  window.removeEventListener("popstate", handleBackButton);
});
</script>

<template>
  <div class="bg-bgGray min-h-screen pb-20">
    <section class="p-4">
      <h1 class="text-textDark text-lg font-semibold">Riwayat Transaksi<span class="text-textGrayDark font-normal ms-2">(5)</span></h1>
      <div class="mt-4 space-y-2.5">
        <router-link to="/detail-transaksi" class="block bg-white p-4 space-y-5 rounded-2xl hover:bg-textGray duration-300">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark font-semibold">SPW2826052025</h2>
                    <p class="text-textGrayDark text-sm">26/03/2025 14:32</p>
                </div>
                <div>
                    <p class="text-primary text-sm">Menunggu Pembayaran</p>
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark line-clamp-2">Risol Ayam, Pisang Aroma</h2>
                </div>
                <div class="text-end">
                    <h2 class="text-textDark font-bold">Rp8.000</h2>
                    <p class="text-textGrayDark text-sm">4 Item</p>
                </div>
            </div>
        </router-link>
        <router-link to="/detail-transaksi" class="block bg-white p-4 space-y-5 rounded-2xl hover:bg-textGray duration-300">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark font-semibold">SPW2826052025</h2>
                    <p class="text-textGrayDark text-sm">26/03/2025 14:32</p>
                </div>
                <div>
                    <p class="text-primary text-sm">Menunggu Pembayaran</p>
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark line-clamp-2">Risol Ayam, Pisang Aroma</h2>
                </div>
                <div class="text-end">
                    <h2 class="text-textDark font-bold">Rp8.000</h2>
                    <p class="text-textGrayDark text-sm">4 Item</p>
                </div>
            </div>
        </router-link>
        <router-link to="/detail-transaksi" class="block bg-white p-4 space-y-5 rounded-2xl hover:bg-textGray duration-300">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark font-semibold">SPW2826052025</h2>
                    <p class="text-textGrayDark text-sm">26/03/2025 14:32</p>
                </div>
                <div>
                    <p class="text-primary text-sm">Menunggu Pembayaran</p>
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark line-clamp-2">Risol Ayam, Pisang Aroma</h2>
                </div>
                <div class="text-end">
                    <h2 class="text-textDark font-bold">Rp8.000</h2>
                    <p class="text-textGrayDark text-sm">4 Item</p>
                </div>
            </div>
        </router-link>
        <router-link to="/detail-transaksi" class="block bg-white p-4 space-y-5 rounded-2xl hover:bg-textGray duration-300">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark font-semibold">SPW2826052025</h2>
                    <p class="text-textGrayDark text-sm">26/03/2025 14:32</p>
                </div>
                <div>
                    <p class="text-primary text-sm">Menunggu Pembayaran</p>
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark line-clamp-2">Risol Ayam, Pisang Aroma</h2>
                </div>
                <div class="text-end">
                    <h2 class="text-textDark font-bold">Rp8.000</h2>
                    <p class="text-textGrayDark text-sm">4 Item</p>
                </div>
            </div>
        </router-link>
        <router-link to="/detail-transaksi" class="block bg-white p-4 space-y-5 rounded-2xl hover:bg-textGray duration-300">
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark font-semibold">SPW2826052025</h2>
                    <p class="text-textGrayDark text-sm">26/03/2025 14:32</p>
                </div>
                <div>
                    <p class="text-primary text-sm">Menunggu Pembayaran</p>
                </div>
            </div>
            <div class="flex justify-between">
                <div>
                    <h2 class="text-textDark line-clamp-2">Risol Ayam, Pisang Aroma</h2>
                </div>
                <div class="text-end">
                    <h2 class="text-textDark font-bold">Rp8.000</h2>
                    <p class="text-textGrayDark text-sm">4 Item</p>
                </div>
            </div>
        </router-link>
      </div>
    </section>
  </div>

  <!-- Bottom Navbar -->
  <BottomNavbar />
</template>

<style scoped>
</style>
