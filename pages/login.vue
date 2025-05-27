<script setup>
definePageMeta({
  middleware: ["is-auth"],
});

import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();

const email = useState("email", () => "");
const password = useState("password", () => "");
const text = useState("text", () => "");
async function login() {
  if (email.value.length == 0) {
    text.value = "Заполните все поля";
  } else if (password.value.length == 0) {
    text.value = "Заполните все поля";
  } else {
    const user = await $fetch("/api/users/login", {
      method: "post",
      body: {
        email: email.value,
        password: password.value,
      },
    });
    if (user) {
      authStore.login(user);
      await navigateTo("/record");
    }
  }
}
</script>

<template>
  <div
    class="relative flex size-full min-h-screen flex-col bg-amber-200 group/design-root overflow-x-hidden"
    style="font-family: 'Work Sans', 'Noto Sans', sans-serif"
  >
    <div class="layout-container flex h-full grow flex-col">
      <header
        class="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e7ecf3] px-10 py-3"
      >
        <div class="flex items-center gap-4 text-[#0d131b]"></div>
        <div class="flex flex-1 justify-end gap-8">
          <div
            class="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style="
              background-image: url('https://cdn.usegalileo.ai/sdxl10/55bc7632-52fb-4e16-93f0-e0091162550b.png');
            "
          ></div>
        </div>
      </header>
      <form @submit.prevent="login">
        <div
          class="layout-content-container flex flex-col w-[512px] py-5 max-w-[960px] flex-1"
        >
          <h1
            class="text-[#0d131b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5"
          >
            Добро пожаловать
          </h1>
          <p
            class="text-[#0d131b] text-base font-normal leading-normal pb-3 pt-1 px-4"
          >
            Зарегистрируйтесь в Grooming DP и получите доступ к своему кабинету
          </p>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#0d131b] text-base font-medium leading-normal pb-2"
              >
                Почта
              </p>
              <input
                type="email"
                placeholder="Почта"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131b] focus:outline-0 focus:ring-0 border border-[#cfd8e7] bg-[#f8f9fc] focus:border-[#cfd8e7] h-14 placeholder:text-[#4c6a9a] p-[15px] text-base font-normal leading-normal"
                v-model="email"
              />
            </label>
          </div>
          <div class="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label class="flex flex-col min-w-40 flex-1">
              <p
                class="text-[#0d131b] text-base font-medium leading-normal pb-2"
              >
                Пароль
              </p>
              <input
                type="password"
                placeholder="Пароль"
                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#0d131b] focus:outline-0 focus:ring-0 border border-[#cfd8e7] bg-[#f8f9fc] focus:border-[#cfd8e7] h-14 placeholder:text-[#4c6a9a] p-[15px] text-base font-normal leading-normal"
                v-model="password"
              />
            </label>
          </div>
          <div class="flex px-4 py-3">
            <button
              type="submit"
              class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-amber-700 text-[#f8f9fc] text-base font-bold leading-normal tracking-[0.015em]"
            >
              <span class="truncate">Bойти</span>
            </button>
          </div>
          <span class="text-amber-700 font-mono text-[18px] text-center">{{
            text
          }}</span>
          <p
            class="text-amber-800 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
          >
            Забыли имя пользователя или пароль?
          </p>
          <p
            class="text-amber-800 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline"
          >
            Входя в систему, вы соглашаетесь с условиями использования и
            политикой конфиденциальности Grooming DP.
          </p>
          <p
            class="text-amber-800 text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center"
          >
            Нет аккаунта? Зарегистрируйтесь
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<style>
form {
  margin-left: 700px;
}
</style>
