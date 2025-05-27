<script>
export default {
  data() {
    return {
      name: "",
      telephone: "",
      text: "",
    };
  },
  methods: {
    Bid() {
      if (this.name.length == 0) {
        this.text = "Заполните все поля";
      } else if (this.telephone.length == 0) {
        this.text = "Заполните все поля";
      } else {
        this.text = "Заявка принята!";
      }
    },
  },
};
</script>
<template>
  <div class="space-y-6">
    <!-- Форма -->
    <div class="gap-4 grid max-w-[400px]">
      <div class="space-y-3">
        <input
          v-model="name"
          type="name"
          name="name"
          id="name"
          autocomplete="name"
          placeholder="Ваше имя"
          class="bg-white dark:bg-gray-700 px-4 py-3 border-2 border-amber-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-amber-500 w-full text-neutral-800 dark:text-gray-100 text-lg transition-colors duration-150 app-input placeholder-gray-400 dark:placeholder-gray-300"
        />
        <input
          type="tel"
          name="tel"
          id="tel"
          autocomplete="tel"
          v-model="telephone"
          placeholder="Телефон"
          class="bg-white dark:bg-gray-700 px-4 py-3 border-2 border-amber-300 focus:border-transparent rounded-lg focus:ring-2 focus:ring-amber-500 w-full text-neutral-800 dark:text-gray-100 text-lg transition-colors duration-150 app-input placeholder-gray-400 dark:placeholder-gray-300"
        />
      </div>

      <button
        @click="Bid"
        class="bg-amber-500 hover:bg-amber-600 px-6 py-3 rounded-lg w-full font-bold text-white text-lg md:text-xl hover:scale-[1.02] transition-all duration-200 transform"
      >
        Оставить заявку
      </button>
    </div>
    <span class="text-amber-700 font-mono text-[18px]">{{ text }}</span>
  </div>
</template>
<style scoped>
.app-input {
  @apply outline-none focus:outline-none ring-0 focus:ring-0;
}
</style>
