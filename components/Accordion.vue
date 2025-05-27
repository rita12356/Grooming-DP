<script>
export default {
  data() {
    return {
      toggles: true,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
    };
  },
  methods: {
    Toggle() {
      this.toggles = !this.toggles;
    },
    Toggle1() {
      this.toggle1 = !this.toggle1;
    },
    Toggle2() {
      this.toggle2 = !this.toggle2;
    },
    Toggle3() {
      this.toggle3 = !this.toggle3;
    },
    Toggle4() {
      this.toggle4 = !this.toggle4;
    },
  },
};
</script>
<template>
  <h1 class="text-[26px] text-lg md:text-xl mt-4 font-bold text-center">
    Добавьте к комплексам<br />
    «Стандарт» дополнительные услуги
  </h1>
  <div class="mx-auto px-4 py-8 md:py-12 container">
    <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
      <div class="hs-accordion-group">
        <div class="hs-accordion active" id="hs-basic-heading-one">
          <button
            @click="Toggle"
            class="bg-amber-600 border-10 transition ease-in-out delay-160 border-amber-700 hs-accordion-toggle py-1 flex justify-center lg:w-28/6 xl:w-400 font-semibold text-start cursor-pointer focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="true"
            aria-controls="hs-basic-collapse-one"
          >
            ОЗОНОВОЕ ДЖАКУЗИ
          </button>
          <div
            id="hs-basic-collapse-one"
            class="hs-accordion-content transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-heading-one"
          >
            <p
              :class="{ toggles: toggles }"
              class="text-amber-950 font-mono text-[22px] text-center dark:text-neutral-200"
            >
              Джакузи с подачей сжатого озона и гидромассажем оздоравливает
              шерсть, питает кожу, ускоряет процесс роста шерсти, придает шерсти
              здоровый вид, способствует заживлению ран, царапин, раздражений,
              ускоряет процесс линьки.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto px-4 py-8 md:py-12 container">
    <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
      <div class="hs-accordion-group -mt-12">
        <div class="hs-accordion active" id="hs-basic-heading-one">
          <button
            @click="Toggle1"
            class="bg-amber-600 border-10 transition ease-in-out delay-160 border-amber-700 hs-accordion-toggle py-1 flex justify-center lg:w-20/6 xl:w-400 font-semibold text-start cursor-pointer focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="true"
            aria-controls="hs-basic-collapse-one"
          >
            ЛЮКС-КОСМЕТИКА «HYDRA«
          </button>
          <div
            id="hs-basic-collapse-one"
            class="hs-accordion-content transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-heading-one"
          >
            <p
              :class="{ toggle1: toggle1 }"
              class="text-amber-950 font-mono text-[22px] text-center dark:text-neutral-200"
            >
              «HYDRA» (гидра) — эксклюзивная линейка бразильской косметики,
              используемая в лучших салонах мира при груминге собак и кошек.
              Придает особый внешний вид шерсти питомца и приятные тактильные
              ощущения от шерсти, питает кожу.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto px-4 py-8 md:py-12 container">
    <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
      <div class="hs-accordion-group -mt-13">
        <div class="hs-accordion active" id="hs-basic-heading-one">
          <button
            @click="Toggle2"
            class="bg-amber-600 border-10 transition ease-in-out delay-160 border-amber-700 hs-accordion-toggle py-1 flex justify-center lg:w-18/6 xl:w-400 font-semibold text-start cursor-pointer focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="true"
            aria-controls="hs-basic-collapse-one"
          >
            МАСКА ДЛЯ ШЕРСТИ «IA SAN BERNARD»
          </button>
          <div
            id="hs-basic-collapse-one"
            class="hs-accordion-content transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-heading-one"
          >
            <p
              :class="{ toggle2: toggle2 }"
              class="text-amber-950 font-mono text-[22px] text-center dark:text-neutral-200"
            >
              «Iv San Bernard» — премиальная итальянская косметика для собак и
              кошек. Маска подбирается под тип шерсти питомца. Каждая из масок
              имеет свою функцию: Увлажнение Питание Снятие раздражения с кожи
              Против линьки Укрепление структуры волоса Против аллергии Придает
              шерсти здоровый вид Питает кожу витаминами
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto px-4 py-8 md:py-12 container">
    <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
      <div class="hs-accordion-group -mt-13">
        <div class="hs-accordion active" id="hs-basic-heading-one">
          <button
            @click="Toggle3"
            class="bg-amber-600 border-10 transition ease-in-out delay-160 border-amber-700 hs-accordion-toggle py-1 flex justify-center lg:w-20/6 xl:w-400 font-semibold text-start cursor-pointer focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="true"
            aria-controls="hs-basic-collapse-one"
          >
            ОКРАШИВАНИЕ ШЕРСТИ
          </button>
          <div
            id="hs-basic-collapse-one"
            class="hs-accordion-content transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-heading-one"
          >
            <p
              :class="{ toggle3: toggle3 }"
              class="text-amber-950 font-mono text-[22px] text-center dark:text-neutral-200"
            >
              Окрашивание делается специальной краской или мелками для животных.
              Окрашивание краской смывается через 6−8 месяцев. Окрашивание
              мелками смывается после 1 купания. Окрасить можно на выбор: ушки,
              хвост, корпус. Актуальные цвета уточняйте у администратора.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mx-auto px-4 py-8 md:py-12 container">
    <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
      <div class="hs-accordion-group -mt-13">
        <div class="hs-accordion active" id="hs-basic-heading-one">
          <button
            @click="Toggle4"
            class="bg-amber-600 border-10 transition ease-in-out delay-160 border-amber-700 hs-accordion-toggle py-1 flex justify-center lg:w-20/6 xl:w-400 font-semibold text-start cursor-pointer focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none"
            aria-expanded="true"
            aria-controls="hs-basic-collapse-one"
          >
            ЛЮКС-КОСМЕТИКА «BOTANIQA«
          </button>
          <div
            id="hs-basic-collapse-one"
            class="hs-accordion-content transition-[height] duration-300"
            role="region"
            aria-labelledby="hs-basic-heading-one"
          >
            <p
              :class="{ toggle4: toggle4 }"
              class="text-amber-950 font-mono text-center text-[22px] dark:text-neutral-200"
            >
              BOTANIQA — это польская люксовая SPA-косметика для питомцев. Она
              не содержит парабены, силиконы и сульфаты. В нашем салоне Вы
              можете попробовать три SPA-линейки и услуги от Botaniqa: Для
              жесткошерстных собак. Для поддержания естественных свойств и
              структуры шерсти. Рекомендовано для пород: вест хайленд вайт
              терьер, шнауцеров, керн терьер, эрдель, грифонов и других
              жесткошёрстные пород.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@reference "tailwindcss";
.toggles {
  @apply hidden;
}
.toggle1 {
  @apply hidden;
}
.toggle2 {
  @apply hidden;
}
.toggle3 {
  @apply hidden;
}
.toggle4 {
  @apply hidden;
}
</style>
