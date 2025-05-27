<script>
export default {
  data() {
    return {
      toggle: true,
    };
  },
  methods: {
    Toggle() {
      this.toggle = !this.toggle;
    },
  },
};
</script>
<template>
  <div
    class="@container flex flex-1 justify-evenly items-center gap-4 prose text-black flex-col lg:flex-row fixed bg-white w-[100%] h-20 z-1"
  >
    <NuxtLink
      href="/"
      class="font-bold text-[29px] animate-bounce whitespace-nowrap"
    >
      Grooming <span class="text-amber-500 font-bold text-[29px]">DP</span>
    </NuxtLink>

    <NuxtLink
      to="/aboutus"
      class="link whitespace-nowrap"
      :class="{ toggle: toggle }"
      >О НАС</NuxtLink
    >
    <NuxtLink to="/services" class="link" :class="{ toggle: toggle }"
      >УСЛУГИ</NuxtLink
    >
    <NuxtLink
      to="/types"
      class="whitespace-nowrap link"
      :class="{ toggle: toggle }"
      >СТРИЖКИ</NuxtLink
    >
    <NuxtLink to="/register" class="link" :class="{ toggle: toggle }"
      >РЕГИСТРАЦИЯ</NuxtLink
    >
    <NuxtLink to="/login" class="link" :class="{ toggle: toggle }"
      >ЛИЧНЫЙ КАБИНЕТ</NuxtLink
    >
    <NuxtLink to="/reviews" class="link" :class="{ toggle: toggle }"
      >ОТЗЫВЫ</NuxtLink
    >

    <NuxtLink
      href="/"
      class="link text-[#f49d4c] font-bold animate-pulse"
      :class="{ toggle: toggle }"
      >+38(068)-72-50-152</NuxtLink
    >
    <button
      type="button"
      @click="Toggle"
      class="button inline-flex items-center lg:invisible bg-amber-500 hover:bg-amber-600 me-2 p-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 text-white text-sm text-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </div>
</template>
<style>
@reference "tailwindcss";
.link {
  @apply sm:flex-row  text-[11px]      active:text-amber-500 md:text-[10px]  lg:text-[22px]      tracking-tight transition ease-in-out delay-160   hover:text-amber-600;
}
.toggle {
  @apply sm:hidden md:hidden lg:block;
}
.button {
  @apply sm:block  md:block  lg:block;
}
</style>
