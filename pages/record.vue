  
  <script setup>

definePageMeta({
  middleware: ["is-auth"]

});

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();

</script>
  <template> 

  
 
   <div class="@container">
    <img class="ml-200 border-30 border-amber-700 w-60 mt-30" src="/public/1_0.jpg" alt="" />
       <span class="mt-1 absolute font-extrabold text-[27px] ml-210">{{authStore.user.name}}</span>
      <span class="mt-10 absolute font-extrabold text-[27px] ml-210">Мастер {{authStore.user.master}}</span>
      <span class="mt-20 absolute font-extrabold text-[27px] ml-210">Запись в {{authStore.user.time}}</span>
      <span class="mt-30 absolute font-extrabold text-[27px] ml-210">{{authStore.user.types}}</span>
      <button type="submit" class="button ml-210">Выйти из аккаунта</button>
      <div class="ml-190">
      <Accordions></Accordions>
      
      </div>
   </div>
  
    </template>
    <style>
@reference "tailwindcss";
.button {
  @apply flex  w-100 mt-50  justify-center rounded-4xl active:bg-amber-800 bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold transition-transform hover:scale-105 text-white shadow-xs hover:bg-amber-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600;
}
</style>