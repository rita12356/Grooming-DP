<script setup>
definePageMeta({
  middleware: ["is-auth"],
});

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const email = useState("email", () => "");
const password = useState("password", () => "");
const name = useState("name", () => "");
const master = useState("master", () => "");
const time = useState("time", () => "");
const types = useState("types", () => "");
const texts = useState("texts", () => "");

async function register() {
  try {
    if (name.value.length == 0) {
      texts.value = "Заполните все поля";
    } else if (email.value.length == 0) {
      texts.value = "Заполните все поля";
    } else if (password.value.length == 0) {
      texts.value = "Заполните все поля";
    } else {
      const user = await $fetch("/api/users/register", {
        method: "post",
        body: {
          email: email.value,
          password: password.value,
          name: name.value,
          master: master.value,
          time: time.value,
          types: types.value,
        },
      });

      if (user) {
        authStore.login(user);
        await navigateTo("/record");
      }
    }
  } catch (err) {
    console.error("error");
  }
}
</script>

<template>
  <h1
    class="text-[#0d131b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5"
  >
    Добро пожаловать
  </h1>
  <p class="text-[#0d131b] text-base font-normal leading-normal pb-3 pt-1 px-4">
    Зарегистрируйтесь в Grooming DP и получите доступ к своим аккаунтам
  </p>

  <div class="space-y-6">
    <!-- Форма -->
    <div class="gap-4 grid max-w-[400px] m-auto">
      <div class="space-y-3">
        <p class="text-[#0d131b] text-base font-medium leading-normal pb-2">
          Почта
        </p>
        <input
          v-model="email"
          type="email"
          name="email"
          id="email"
          autocomplete="email"
          placeholder="Почта"
          class="bg-white dark:bg-gray-700 px-4 py-3 border-2 border-amber-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-amber-500 w-full text-neutral-800 dark:text-gray-100 text-lg transition-colors duration-150 app-input placeholder-gray-400 dark:placeholder-gray-300"
        />

        <p class="text-[#0d131b] text-base font-medium leading-normal pb-2">
          Имя
        </p>
        <input
          type="name"
          name="name"
          id="name"
          autocomplete="name"
          v-model="name"
          placeholder="Имя"
          class="bg-white dark:bg-gray-700 px-4 py-3 border-2 border-amber-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-amber-500 w-full text-neutral-800 dark:text-gray-100 text-lg transition-colors duration-150 app-input placeholder-gray-400 dark:placeholder-gray-300"
        />

        <p class="text-[#0d131b] text-base font-medium leading-normal pb-2">
          Пароль
        </p>
        <input
          type="password"
          name="password"
          id="password"
          autocomplete="password"
          v-model="password"
          placeholder="Пароль"
          class="bg-white dark:bg-gray-700 px-4 py-3 border-2 border-amber-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-amber-500 w-full text-neutral-800 dark:text-gray-100 text-lg transition-colors duration-150 app-input placeholder-gray-400 dark:placeholder-gray-300"
        />
      </div>
    </div>
  </div>

  <div class="flex justify-center mt-10">
    <button
      @click="register"
      class="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg cursor-pointer font-bold text-white text-lg md:text-xl hover:scale-[1.02] transition-all duration-200 transform"
    >
      Зарегистрироваться
    </button>
  </div>
  <div class="text-center">
    <span class="text-amber-700 font-mono text-[18px]">{{ texts }}</span>
  </div>

  <p
    class="text-amber-800 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
  >
    Забыли имя пользователя или пароль?
  </p>
  <p
    class="text-amber-800 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
  >
    Нет аккаунта? Зарегистрируйтесь
  </p>
  <p
    class="text-amber-800 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center"
  >
    Входя в систему, вы соглашаетесь с условиями использования и политикой
    конфиденциальности Grooming DP.
  </p>
</template>

<style scoped>
.app-input {
  @apply outline-none focus:outline-none ring-0 focus:ring-0;
}
</style>
