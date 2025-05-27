<template>
  <!--! Главная секция -->
  <div class="mx-auto px-4 py-8 md:py-12 container">
    <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
      <!--! Левая колонка -->
      <div class="lg:w-1/2 xl:w-3/5">
        <!--! Заголовок -->
        <h1 class="mb-6 pb-4 border-neutral-800 border-b-4">
          <span
            class="block font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase leading-tight"
          >
            СДЕЛАЙ ПИТОМЦА
          </span>
          <span
            class="font-bold text-amber-500 text-4xl md:text-5xl lg:text-6xl xl:text-8xl"
          >
            СЧАСТЛИВЫМ
          </span>
        </h1>

        <!--! Описание -->
        <p class="mb-6 text-neutral-700 text-lg md:text-xl">
          Профессиональная стрижка домашних животных<br />
          <span class="inline-block mt-2 font-semibold text-amber-600">
            Оставьте заявку и получите 15% скидку!
          </span>
        </p>

        <!--! Форма -->
        <div class="space-y-4 max-w-[400px]">
          <Promotion />
        </div>
      </div>

      <!--! Правая колонка - картинка с Корги -->
      <div class="flex justify-center lg:w-1/2 xl:w-3/5">
        <img
          class="shadow-2xl border-8 border-amber-300 rounded-3xl w-full max-w-[500px] lg:max-w-none object-cover"
          src="/1.webp"
          alt="Счастливая собака породы корги после стрижки"
          style="min-height: 400px"
        />
      </div>
    </div>
  </div>

  <!--! Раздел About будет дальше тут -->
  <About></About>
</template>

<style>
@reference "tailwindcss";
body {
  @apply bg-white overflow-x-hidden;
}

/* Кастомные переходы */
.border-amber-300 {
  transition: border-color 0.3s ease;
}
.shadow-2xl {
  transition: box-shadow 0.3s ease;
}
</style>
