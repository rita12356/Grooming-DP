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
   
  },
};
</script>
 <template>
    <h1 class="text-[26px] font-bold  text-center">
     Записаться к мастеру
</h1>
<div class="mx-auto px-4 py-8 md:py-12 container">
  <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
<div class="hs-accordion-group">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle" class="bg-amber-600 border-10  transition ease-in-out delay-160  border-amber-700 hs-accordion-toggle   py-1 flex justify-center lg:w-22/9 ml-30 xl:w-400 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
   
       Выбрать специалиста
        
      
      
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content  transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggles: toggles }" class="text-amber-950 font-mono text-[22px] text-center dark:text-neutral-200">
     
      Ульяна Грумер<br> ближайшее время для записи сегодня:
      14:30 16:30 17:00
      </p>
    </div>
  </div>
</div>
  </div>
  
  <div class="mx-auto px-4 py-8 md:py-12 container">
  <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
  <div class="hs-accordion-group">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle1" class="bg-amber-600 border-10 transition ease-in-out delay-160 border-amber-700 hs-accordion-toggle  py-1 flex justify-center lg:w-22/9 ml-30 xl:w-400 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">

     
      Выбрать дату и время
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content  transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggle1: toggle1 }" class="text-amber-950 font-mono text-[22px] text-center dark:text-neutral-200">
     
       
  
    <client-only>
      
      <VCalendar v-model="date" />
     </client-only>
  
     <div :class="{ toggle1: toggle1 }">День 17:00 Вечер 19:30 20:00</div>
      </p>
    
    
  </div>
  </div>
  </div>
  </div>

 <div class="mx-auto px-4 py-8 md:py-12 container">
  <div class="flex lg:flex-row flex-col items-center gap-8 lg:gap-12">
  <div class="hs-accordion-group">
  <div class="hs-accordion active" id="hs-basic-heading-one">
    <button @click="Toggle2" class="bg-amber-600 border-10 transition ease-in-out delay-160 border-amber-700 hs-accordion-toggle  py-1 flex justify-center lg:w-22/9 ml-30 xl:w-400 font-semibold text-start  cursor-pointer  focus:text-white rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">

   
      Выбрать услуги
    </button>
    <div id="hs-basic-collapse-one" class="hs-accordion-content  transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
      <p  :class="{ toggle2: toggle2 }" class="text-amber-950 font-mono  text-[22px] text-center dark:text-neutral-200">
    SPA услуги и дополнительные
    Одиночные услуги, доп. услуги

      </p>
    </div>
  </div>
  </div>
  </div>
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

</style>
