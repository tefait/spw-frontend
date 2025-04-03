<script setup>
import "./style.css";
</script>

<template>
  <div class="max-w-[480px] mx-auto min-h-screen shadow-lg relative font-display">
      <!-- Tambahkan :key untuk memaksa re-render saat rute berubah -->
      <router-view />
  </div>
</template>

<style>
</style>
