<script>
  import { ref } from '#imports'
  const date = ref(new Date())

  const attrs = ref([
    {
      key: 'today',
      highlight: {
        color: 'black',
        fillMode: 'solid'
      },
      dates: new Date()
    }
  ]);

  export default {
  data() {
    return {
      toggles: true,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true
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
    <h1 class="text-[26px] font-bold ml-10">
     Записаться к мастеру
</h1>
<div class="hs-accordion-group  mt-5  sm:px-1  md:px-1 lg:px-1">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle" class="bg-amber-600 border-10  border-amber-700 hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-300 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
      <svg class="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
       Выбрать специалиста
        <path d="M5 12h14"></path>
      
      
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggles: toggles }" class="text-amber-950 font-mono   text-[22px] ml-10 w-100 dark:text-neutral-200">
     
      Ульяна Грумер<br> ближайшее время для записи сегодня:
      14:30 16:30 17:00
      </p>
    </div>
  </div>

  <div class="hs-accordion-group mt-5   sm:px-1  md:px-1 lg:px-1">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle1" class="bg-amber-600 border-10 border-amber-700 hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-300 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
      <svg class="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    
        <path d="M5 12h14"></path>
      
      Выбрать дату и время
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggle1: toggle1 }" class="text-amber-950 font-mono   text-[22px] ml-10 w-100 dark:text-neutral-200">
     
       
<div>
    <client-only>
      
      <VCalendar v-model="date" />
     </client-only>
  </div>
    День 17:00 <br>Вечер 19:30 20:00
      </p>
    </div>
    
  </div>

  <div class="hs-accordion-group mt-5  sm:px-1  md:px-1 lg:px-1">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle2" class="bg-amber-600 border-10 border-amber-700 hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-300 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
      <svg class="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    
        <path d="M5 12h14"></path>
      
      Выбрать услуги
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggle2: toggle2 }" class="text-amber-950 font-mono   text-[22px] ml-10 w-100 dark:text-neutral-200">
    SPA услуги и дополнительные
    Одиночные услуги, доп. услуги

      </p>
    </div>
  </div>
  </div>
  </div>
</div>

<div class="hs-accordion-group  mt-5  sm:px-1  md:px-1 lg:px-1">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle3" class="bg-amber-600 border-10 border-amber-700 hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-300 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
      <svg class="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    SPA услуги и дополнительные
        <path d="M5 12h14"></path>
     
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggle3: toggle3 }" class="text-amber-950 font-mono   text-[22px] ml-10 w-100 dark:text-neutral-200">
     
  Комплексный SPA-уход для собак до 10 кг - Гладкошерстный и короткошерстный тип шерсти
1 ч · Стоимость услуги зависит от грейда мастера.SPA-уход, в него входит: подстригание когтей и подпиливание когтей, чистка ушек, глаз специальным лосьоном, купание в озоновом джакузи в течении 15-20 минут, в зависимости от выбранной программы, купание и кондиционирование премиальной косметикой, направленное на ультра-увлажнение и восстановление шерсти или косметикой для проблемной кожи и шерсти, сушка, выбривание шерсти между подушечками лап, парфюмирование
2 800 – 3 200 ₽ 
      </p>
    </div>
  </div>
</div>
<div class="hs-accordion-group mt-5  sm:px-1  md:px-1 lg:px-1 ">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle4" class="bg-amber-600 border-10 border-amber-700 hs-accordion-toggle  py-3 inline-flex items-center gap-x-3 w-300 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
      <svg class="hs-accordion-active:block block size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    
        <path d="M5 12h14"></path>
      
        Одиночные услуги, доп. услуги
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggle4: toggle4 }" class="text-amber-950 font-mono   text-[22px] ml-10 w-100 dark:text-neutral-200">
     
 Сухой вычес - собаки все породы (30 минут )
30 мин · Стоимость услуги зависит от грейда мастера. В данную услугу входит: сухой вычес производится различными инструментами, в зависимости от типа шерсти, в течении 30 минут. Оплата за каждые 30 минут вычеса. ШЕРСТЬ ПИТОМЦА ДОЛЖНА БЫТЬ ЧИСТАЯ И БЕЗ КОЛТУНОВ.
1 600 – 1 800 ₽ 
      </p>
    </div>
  </div>
</div>
</template>
<style>
@reference "tailwindcss";
.toggles{
  @apply hidden;
}
.toggle1{
  @apply hidden;
}
.toggle2{
  @apply hidden;
}
.toggle3{
  @apply hidden;
}
.toggle4{
  @apply hidden;
}
</style>
