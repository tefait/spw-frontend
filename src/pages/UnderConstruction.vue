<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
    <div class="flex justify-center items-center bg-bgGray min-h-screen">
        <section class="p-4">
            <div class="flex flex-col justify-center items-center">
                <div class="w-[40%] overflow-hidden relative">
                    <img src="/src/assets/images/under-construction.png" alt="Under Construction">
                </div>
                <div class="text-center mt-8 px-8">
                    <h1 class="text-primary text-xl font-bold">Work In Progress</h1>
                    <p class="text-textDark text-sm">Halaman sedang dalam tahap pembangunan</p>
                </div>
                <div class="w-full mt-4">
                    <button @click="router.back()" type="button" class="bg-primary w-full py-3 mt-4 rounded-full cursor-pointer hover:brightness-90 duration-300">
                        <p class="font-bold">Kembali</p>
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>