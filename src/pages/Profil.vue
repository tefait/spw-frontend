<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const fileName = ref("");
const updateFileName = (event) => {
    const file = event.target.files[0];
    fileName.value = file ? file.name : "";
};
</script>

<template>
    <div class="bg-bgGray min-h-screen pb-4">
        <section class="bg-primary w-full p-4">
            <div class="flex items-center">
                <p class="text-textDark text-2xl translate-y-0.5 cursor-pointer" @click="router.back()">
                    <i class="fi fi-rr-arrow-left"></i>
                </p>
                <h1 class="text-textDark text-lg font-semibold absolute left-1/2 -translate-x-1/2">
                    Profil Saya
                </h1>
            </div>
        </section>
        <section class="mt-4 p-4">
            <div class="flex justify-center items-center gap-2">
                <p class="text-textDark text-lg translate-y-0.5"><i class="fi fi-br-user-pen"></i></p>
                <h1 class="text-textDark text-lg font-semibold">Ubah Profil</h1>
            </div>
            <div class="mt-4">
                <label for="uploadFotoProfil" class="text-textDark">
                    <p>Foto Profil</p>
                </label>
                <div class="relative mt-2">
                    <input type="file" id="uploadFotoProfil" class="hidden" @change="updateFileName" ref="fileInput" />
                    <label for="uploadFotoProfil"
                        class="flex items-center gap-2 w-full bg-white rounded-full cursor-pointer shadow-sm">
                        <span class="bg-bgGray py-3 px-4 rounded-l-full text-textDark w-[50%]">Choose File</span>
                        <span class="text-textGrayDark pr-4 line-clamp-1 w-full">{{ fileName || 'No file chosen' }}</span>
                    </label>
                </div>
            </div>
            <div class="mt-4">
                <label for="nama-pengguna" class="text-textDark">Nama Pengguna</label>
                <div class="relative mt-2">
                    <input type="name" id="nama-pengguna" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                        placeholder="Masukkan nama lengkap" required />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                        <p class="text-textDark text-xl"><i class="fi fi-rr-user"></i></p>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label for="alamat-email" class="text-textDark">Alamat Email</label>
                <div class="relative mt-2">
                    <input type="email" id="alamat-email" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                        placeholder="Masukkan alamat email" required />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                        <p class="text-textDark text-xl"><i class="fi fi-rr-envelope"></i></p>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label for="nomor-whatsapp" class="text-textDark">Nomor WhatsApp</label>
                <div class="relative mt-2">
                    <input type="number" id="nomor-whatsapp" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                        placeholder="Masukkan nomor whatsapp" required />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                        <p class="text-textDark text-xl"><i class="fi fi-brands-whatsapp"></i></p>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label for="tanggal-lahir" class="text-textDark">Tanggal Lahir</label>
                <div class="relative mt-2">
                    <input type="date" id="tanggal-lahir" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none appearance-none"
                        required />
                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none ps-4">
                        <i class="fi fi-rr-calendar text-textDark text-xl"></i>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label for="jenis-kelamin" class="text-textDark">Jenis Kelamin</label>
                <div class="relative mt-2">
                    <select id="jenis-kelamin" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none appearance-none" required>
                        <option value="" disabled selected>Pilih Jenis Kelamin</option>
                        <option value="laki-laki">Laki-laki</option>
                        <option value="perempuan">Perempuan</option>
                    </select>
                    <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none ps-4">
                        <i class="fi fi-rr-mars text-textDark text-xl"></i>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <button type="submit" class="bg-primary w-full py-3 mt-4 rounded-full cursor-pointer hover:brightness-90 duration-300">
                    <p class="text-textDark font-bold">Simpan Perubahan</p>
                </button>
            </div>
        </section>
    </div>
</template>

<style scoped>
</style>