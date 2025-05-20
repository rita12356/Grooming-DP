<script>
export default {
  data() {
    return {
      name: '',
      telephone: '',
      text: '',
   
    };
  },
  methods: {
    Bid() {
      this.text = 'Заявка принята!';
      
    },
  }
};
</script>
<template> 
  <span class="@container ">
    <form class="form">
      <div>
       
        
        <div class="mt-2">
          <input v-model="name"
          placeholder="Имя"
            type="name"
            name="name"
            id="name"
            autocomplete="name"
            required
            class="block w-100 rounded-md   px-3 py-1.5 text-black border-b-1 border-b-amber-600   placeholder:text-gray-500 placeholder:text-[18px] placeholder:text-center focus:outline-0 focus:-outline-offset-0 focus:outline-amber-950 sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
       
        </div>
        <div class="mt-2">
          <input
          v-model="telephone"
          placeholder="Телефон"
            type="tel"
            name="tel"
            id="tel"
            autocomplete="current-number"
            required
            class="block w-100 rounded-md border-b-1 border-b-amber-600  px-3 py-1.5 text-base text-black placeholder:text-[18px] placeholder:text-center focus:outline-0 focus:-outline-offset-0 placeholder:text-gray-500  sm:text-sm/6"
          />
        </div>
      </div>

      <div>
        <button @click="Bid" type="submit" class="btn">Оставить заявку</button>
        <span class="text-amber-700 font-mono text-[18px]">{{text}}</span>
      </div>
    </form>
  </span>
</template>
<style>
@reference "tailwindcss";
.btn {
  @apply flex w-100 mt-9 ml-1 justify-center rounded-4xl active:bg-amber-800 bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold transition-transform hover:scale-105 text-white shadow-xs hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600;
}
.form{
  @apply sm:mt-600 ml-60  md:-mt-500 lg:mt-30  min-[320px]:-mt-170;
}
</style>
