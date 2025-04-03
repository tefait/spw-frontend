<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedMethod = ref(null);

const selectPayment = (method) => {
  selectedMethod.value = method;
};
</script>

<template>
    <div class="bg-bgGray min-h-screen pb-20">
        <section class="bg-primary w-full p-4">
            <div class="flex items-center">
                <p class="text-textDark text-2xl translate-y-0.5 cursor-pointer" @click="router.back()">
                    <i class="fi fi-rr-arrow-left"></i>
                </p>
                <h1 class="text-textDark text-lg font-semibold absolute left-1/2 -translate-x-1/2">
                    Checkout
                </h1>
            </div>
        </section>
        <section class="mt-2 p-4">
            <h1 class="text-textDark text-lg font-semibold">Data Pemesan</h1>
            <div class="mt-4">
                <label for="nama-pemesan" class="text-textDark">Nama Pemesan <span class="text-secondary">*</span></label>
                <div class="relative mt-2">
                    <input type="name" id="nama-pemesan" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                        placeholder="Masukkan nama pemesan" required />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                        <p class="text-textDark text-xl"><i class="fi fi-rr-user"></i></p>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label for="email-pemesan" class="text-textDark">Email Pemesan <span class="text-secondary">*</span></label>
                <div class="relative mt-2">
                    <input type="email" id="email-pemesan" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                        placeholder="Masukkan email pemesan" required />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                        <p class="text-textDark text-xl"><i class="fi fi-rr-envelope"></i></p>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <label for="nomor-whatsapp" class="text-textDark">Nomor WhatsApp <span class="text-secondary">*</span></label>
                <div class="relative mt-2">
                    <input type="number" id="nomor-whatsapp" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                        placeholder="Masukkan nomor whatsapp" required />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                        <p class="text-textDark text-xl"><i class="fi fi-brands-whatsapp"></i></p>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-2 p-4">
            <h1 class="text-textDark text-lg font-semibold">Detail Pesanan</h1>
            <div class="flex flex-col gap-4 mt-4">
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

            <div class="mt-4">
                <label for="catatan" class="text-textDark">Catatan</label>
                <div class="relative mt-2">
                    <input type="text" id="catatan" class="peer py-3 px-4 ps-12 block w-full bg-white rounded-full focus:outline-none"
                        placeholder="Masukkan catatan (opsional)" />
                    <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 pt-1">
                        <p class="text-textDark text-xl"><i class="fi fi-rr-edit"></i></p>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <p class="text-textDark">Metode Pembayaran</p>
                <div class="flex justify-between gap-4 mt-2 w-full">
                    <div 
                        @click="selectPayment('cash')"
                        class="w-full py-3 rounded-full border-[1.5px] text-center font-semibold cursor-pointer transition"
                        :class="selectedMethod === 'cash' ? 'bg-white border-secondary text-secondary' : 'bg-white border-none'"
                    >
                        CASH
                    </div>
                    <div 
                        @click="selectPayment('qris')"
                        class="w-full py-3 rounded-full border-[1.5px] text-center font-semibold cursor-pointer transition"
                        :class="selectedMethod === 'qris' ? 'bg-white border-secondary text-secondary' : 'bg-white border-none'"
                    >
                        QRIS
                    </div>
                </div>
            </div>
        </section>

        <div class="fixed z-10 bottom-0 left-1/2 -translate-y-4 -translate-x-1/2 w-[calc(100%-32px)] max-w-[448px] bg-white shadow-sm rounded-full flex justify-around py-2">
            <div class="flex justify-between items-center w-full px-4">
                <div class="flex flex-col -space-y-0.5">
                    <span class="text-textGrayDark text-xs">Total</span>
                    <p class="text-textDark font-bold">Rp8.000</p>
                </div>
                <router-link to="/berhasil">
                    <button type="submit" class="bg-primary px-6 py-3 rounded-full cursor-pointer translate-x-1.5 hover:brightness-90 duration-300">
                        <p class="font-semibold">Buat Pesanan</p>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>