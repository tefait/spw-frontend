<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <nav class="hidden md:flex fixed z-10 left-0 top-1/2 translate-x-4 -translate-y-1/2 h-[calc(100%-32px)] max-h-screen bg-white rounded-3xl flex-col items-center justify-center px-4">
    <div class="space-y-3">
      <router-link
        to="/admin/dashboard"
        :class="route.path === '/admin/dashboard' ? 'bg-primary text-textDark' : 'bg-transparent text-textGrayDark'"
        class="py-3 px-2 rounded-2xl text-center block"
      >
        <p class="text-3xl"><i class="fi fi-sc-home"></i></p>
        <p class="text-sm">Home</p>
      </router-link>

      <router-link
        to="/admin/menu"
        :class="route.path === '/admin/menu' ? 'bg-primary text-textDark' : 'bg-transparent text-textGrayDark'"
        class="py-3 px-2 rounded-2xl text-center block"
      >
        <p class="text-3xl"><i class="fi fi-sr-hamburger-soda"></i></p>
        <p class="text-sm">Menu</p>
      </router-link>

      <router-link
        to="/admin/supplier"
        :class="route.path === '/admin/supplier' ? 'bg-primary text-textDark' : 'bg-transparent text-textGrayDark'"
        class="py-3 px-2 rounded-2xl text-center block"
      >
        <p class="text-3xl"><i class="fi fi-ss-supplier"></i></p>
        <p class="text-sm">Supplier</p>
      </router-link>

      <router-link
        to="/admin/laporan"
        :class="route.path === '/admin/laporan' ? 'bg-primary text-textDark' : 'bg-transparent text-textGrayDark'"
        class="py-3 px-2 rounded-2xl text-center block"
      >
        <p class="text-3xl"><i class="fi fi-sr-file-medical-alt"></i></p>
        <p class="text-sm">Laporan</p>
      </router-link>

      <router-link
        to="/admin/pengguna"
        :class="route.path === '/admin/pengguna' ? 'bg-primary text-textDark' : 'bg-transparent text-textGrayDark'"
        class="py-3 px-2 rounded-2xl text-center block"
      >
        <p class="text-3xl"><i class="fi fi-sr-users"></i></p>
        <p class="text-sm">Pengguna</p>
      </router-link>

      <router-link
        to="/admin/pengaturan"
        :class="route.path === '/admin/pengaturan' ? 'bg-primary text-textDark' : 'bg-transparent text-textGrayDark'"
        class="py-3 px-1 rounded-2xl text-center"
      >
        <p class="text-3xl"><i class="fi fi-sr-settings"></i></p>
        <p class="text-sm">Pengaturan</p>
      </router-link>
    </div>
  </nav>

  <nav class="flex md:hidden fixed z-10 bottom-0 left-1/2 -translate-y-4 -translate-x-1/2 w-[calc(100%-32px)] bg-white shadow-sm rounded-3xl justify-around py-2">
    <router-link
        to="/admin/dashboard"
        :class="route.path === '/admin/dashboard' ? 'text-secondary' : 'text-textGrayDark'"
        class="w-20 text-center"
      >
        <p class="text-2xl"><i class="fi fi-sc-home"></i></p>
        <p class="text-sm">Home</p>
      </router-link>

      <router-link
        to="/admin/menu"
        :class="route.path === '/admin/menu' ? 'text-secondary' : 'text-textGrayDark'"
        class="w-20 text-center"
      >
        <p class="text-2xl"><i class="fi fi-sr-hamburger-soda"></i></p>
        <p class="text-sm">Menu</p>
      </router-link>

      <router-link
        to="/admin/supplier"
        :class="route.path === '/admin/supplier' ? 'text-secondary' : 'text-textGrayDark'"
        class="w-20 text-center"
      >
        <p class="text-2xl"><i class="fi fi-ss-supplier"></i></p>
        <p class="text-sm">Supplier</p>
      </router-link>

      <router-link
        to="/admin/laporan"
        :class="route.path === '/admin/laporan' ? 'text-secondary' : 'text-textGrayDark'"
        class="w-20 text-center"
      >
        <p class="text-2xl"><i class="fi fi-sr-file-medical-alt"></i></p>
        <p class="text-sm">Laporan</p>
      </router-link>
  </nav>
</template>

<style scoped>
</style>