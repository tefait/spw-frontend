<script setup>
import { ref } from 'vue';

const showPassword = ref(false);
</script>

<template>
    <div class="bg-bgGray min-h-screen">
        <section>
            <div class="w-full">
                <img src="/src/assets/images/SPANDUK SPW SECONDARY.jpg" alt="SPANDUK SPW">
            </div>
            <div class="mt-4 p-4">
                <h1 class="text-textDark text-center text-xl font-bold">Daftar</h1>
                <div class="mt-4">
                    <label for="nama-lengkap" class="text-textDark">Nama Lengkap</label>
                    <div class="relative mt-2">
                        <input type="name" id="nama-lengkap" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                            placeholder="Masukkan Nama Lengkap" required />
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                            <p class="text-textDark text-xl"><i class="fi fi-rr-user"></i></p>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <label for="email" class="text-textDark">Email</label>
                    <div class="relative mt-2">
                        <input type="email" id="email" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                            placeholder="Masukkan Email" required />
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                            <p class="text-textDark text-xl"><i class="fi fi-rr-envelope"></i></p>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <label for="nomor-whatsapp" class="text-textDark">Nomor WhatsApp</label>
                    <div class="relative mt-2">
                        <input type="number" id="nomor-whatsapp" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                            placeholder="Masukkan Nomor Whatsapp" required />
                        <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                            <p class="text-textDark text-xl"><i class="fi fi-brands-whatsapp"></i></p>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <label for="kata-sandi" class="text-textDark">Kata Sandi</label>
                    <div class="relative mt-2">
                        <input
                            :type="showPassword ? 'text' : 'password'"
                            id="kata-sandi"
                            class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                            placeholder="Masukkan Kata Sandi"
                            required
                        />
                        <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none ps-4">
                            <i class="fi fi-rr-lock text-textDark text-xl"></i>
                        </div>
                        <button
                            type="button"
                            @click="showPassword = !showPassword"
                            class="absolute inset-y-0 right-0 flex items-center pr-4 text-textDark"
                        >
                            <i :class="showPassword ? 'fi fi-rr-eye text-xl' : 'fi fi-rr-eye-crossed text-xl'"></i>
                        </button>
                    </div>
                </div>
                <div class="mt-4">
                    <button type="submit" class="bg-primary w-full py-3 mt-4 rounded-full cursor-pointer hover:brightness-90 duration-300">
                        <p class="text-textDark font-bold">Buat Akun</p>
                    </button>
                </div>
                <div class="text-center text-sm mt-4">
                    <p>Sudah punya akun?
                        <router-link to="/login" class="text-secondary hover:underline">
                            Login
                        </router-link>
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>