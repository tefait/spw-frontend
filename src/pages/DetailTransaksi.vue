<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const fileName = ref("");
const showModal = ref(false); // Menambahkan state untuk modal

const updateFileName = (event) => {
    const file = event.target.files[0];
    fileName.value = file ? file.name : "";
};

// Fungsi untuk menampilkan modal
const openModal = () => {
    showModal.value = true;
};

// Fungsi untuk menutup modal
const closeModal = () => {
    showModal.value = false;
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
                    Detail Transaksi
                </h1>
            </div>
        </section>
        <section class="mt-2 p-4">
            <h1 class="text-textDark text-lg font-semibold">Informasi Pesanan</h1>
            <div class="bg-white mt-4 p-4 rounded-2xl">
                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-4">
                        <div class="w-[calc(50%-56px)] h-[12vh] sm:w-[8vw] rounded-2xl overflow-hidden relative">
                            <img src="/src/assets/images/Risol.jpeg" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
                        </div>
                        <div class="max-w-[480px]">
                            <h1 class="line-clamp-1">Risol Ayam Pro Max</h1>
                            <h2 class="font-bold">Rp2.000</h2>
                            <p class="text-xs text-textDark mt-1">x2</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <div class="w-[calc(50%-56px)] h-[12vh] sm:w-[8vw] rounded-2xl overflow-hidden relative">
                            <img src="/src/assets/images/Risol.jpeg" class="absolute top-0 left-0 w-full h-full object-cover" alt="">
                        </div>
                        <div class="max-w-[480px]">
                            <h1 class="line-clamp-1">Risol Ayam Pro Max</h1>
                            <h2 class="font-bold">Rp2.000</h2>
                            <p class="text-xs text-textDark mt-1">x2</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="px-4">
            <div class="">
                <label class="text-textDark">Catatan</label>
                <div class="relative mt-2 py-3 px-4 ps-12 block w-full bg-white rounded-full">
                    <span class="text-textGrayDark">pedas 1, ori 1</span>
                    <div class="absolute inset-y-0 start-0 flex items-center ps-4 translate-y-1">
                        <p class="text-textDark text-xl"><i class="fi fi-rr-edit"></i></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-4 px-4">
            <div class="bg-white mt-4 p-4 rounded-2xl">
                <div class="flex justify-between">
                    <p class="text-textDark">Kode Transaksi</p>
                    <p class="text-textDark font-semibold">SPW2826052025</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-textDark">Waktu Pemesanan</p>
                    <p class="text-textDark">26/03/2025 14:32</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-textDark">Status</p>
                    <p class="text-primary">Menunggu Pembayaran</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-textDark">Metode Pembayaran</p>
                    <p class="text-textDark">QRIS</p>
                </div>
            </div>
        </section>
        <section class="mt-4 px-4">
            <div class="flex justify-between bg-white w-full mt-2 py-3 px-4 rounded-full">
                <p class="text-textDark font-bold">Total</p>
                <p class="text-textDark font-bold">Rp8.000</p>
            </div>
        </section>
        <section class="px-4">
            <button type="button" class="bg-primary w-full py-3 mt-4 rounded-full cursor-pointer hover:brightness-90 duration-300"
            @click="openModal">
                <p class="text-textDark font-bold">Bayar Sekarang</p>
            </button>
        </section>
        <section class="mt-4 px-4">
            <div>
                <label for="uploadBuktiPembayaran" class="text-textDark">
                    <p><span class="text-secondary">*</span> Upload Bukti Pembayaran</p>
                </label>
                <div class="relative mt-2">
                    <input type="file" id="uploadBuktiPembayaran" class="hidden" @change="updateFileName" ref="fileInput" />
                    <label for="uploadBuktiPembayaran" 
                        class="flex items-center gap-2 w-full bg-white rounded-full cursor-pointer shadow-sm">
                        <span class="bg-bgGray py-3 px-4 rounded-l-full text-textDark w-[50%]">Choose File</span>
                        <span class="text-textGrayDark pr-4 line-clamp-1 w-full">{{ fileName || 'No file chosen' }}</span>
                    </label>
                    <div class="flex justify-end">
                        <button type="submit" class="bg-primary py-3 px-8 mt-4 rounded-full cursor-pointer hover:brightness-90 duration-300">
                            <p class="text-textDark font-bold">Submit</p>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Background Hitam dengan Opacity -->
        <Transition name="fade">
            <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-20"
                @click="closeModal">
            </div>
        </Transition>

        <!-- Modal dengan Scale dan Posisi Tengah -->
        <Transition name="scale">
            <div v-if="showModal" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 bg-white w-[80%] max-w-[480px] py-8 px-6 rounded-4xl shadow-lg text-center z-30">
                <div class="flex justify-between">
                    <img src="/src/assets/images/qris.svg" class="h-6" alt="qris">
                    <p class="text-textDark text-2xl cursor-pointer"
                        @click="closeModal">
                        <i class="fi fi-rr-cross-small"></i>
                    </p>
                </div>
                <div class="mt-8">
                    <img src="/src/assets/images/qr.png" alt="">
                    <p class="text-start text-textDark font-bold mt-4">Total Bayar: Rp8.000</p>
                </div>
                <div class="mt-4">
                    <button type="button" class="flex justify-center gap-2 bg-primary w-full py-3 rounded-full cursor-pointer hover:brightness-90 duration-300">
                        <i class="fi fi-br-download"></i>
                        <p class="text-textDark font-bold">Download QR</p>
                    </button>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scale-enter-active,
.scale-leave-active {
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

.scale-enter-from {
  transform: scale(0.8);
  opacity: 0;
}

.scale-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
</style>