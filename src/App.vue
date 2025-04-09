<script setup>
import "./style.css";
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div 
    :class="[
      'mx-auto min-h-screen shadow-lg relative font-display',
      'max-w-[480px]',
      route.meta.isAdmin ? 'md:max-w-full' : ''
    ]"
  >
    <router-view />
  </div>
</template>
