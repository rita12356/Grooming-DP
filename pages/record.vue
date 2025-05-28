<script setup>
definePageMeta({
  middleware: ["auth"],
});

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
</script>
<template>
  <div class="flex justify-center m-auto lg:w-1/2 xl:w-1/5">
    <img
      class="shadow-2xl border-8 border-amber-600 rounded-3xl w-full max-w-[500px] lg:max-w-none object-cover"
      src="/public/1_0.jpg"
      alt="Счастливая собака породы корги после стрижки"
      style="min-height: 400px"
    />
  </div>
  <div class="mt-1 font-extrabold text-[27px] text-center">
    {{ authStore.user.name }}
  </div>
  <br />
  <div class="mt-1 font-extrabold text-[27px] text-center">
    Мастер {{ authStore.user.master }}
  </div>
  <br />
  <div class="mt-1 font-extrabold text-[27px] text-center">
    Запись в {{ authStore.user.time }}
  </div>
  <br />
  <div class="mt-1 font-extrabold text-[27px] text-center">
    {{ authStore.user.types }}
  </div>
  <button
    @click="authStore.logout"
    type="submit"
    class="buttons m-auto text-lg md:text-xl"
  >
    Выйти из аккаунта
  </button>

  <Accordions></Accordions>
  <div class="text-[26px] font-bold  text-center">
    Прошлые записи 
  </div>
   <div class="mt-1 font-extrabold text-[27px] text-center">
    {{ authStore.user.name }}
  </div>
  <br />
  <div class="mt-1 font-extrabold text-[27px] text-center">
    Мастера Ульяна, Алина, Дарья, Анастасия С, Светлана 
  </div>
  <br />
  <div class="mt-1 font-extrabold text-[27px] text-center">Аляскинский Маламут
    Записи на  SPA услуги и дополнительные, Австралийская овчарка, Американская Акита, Акита Ину, Американский булли, 
  </div>
  <br />
  <div class="mt-1 font-extrabold text-[27px] text-center">
    Породы мальтипу, Йоркширский терьер, пудель
  </div>
</template>
<style>
@reference "tailwindcss";
.buttons {
  @apply flex  w-100 mt-1  justify-center rounded-4xl active:bg-amber-800 bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold transition-transform hover:scale-105 text-white shadow-xs hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600;
}
</style>
