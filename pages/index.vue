<script setup>

import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
</script>
 <template>
  
<div
    class="flex flex-row max-md:flex-col-reverse justify-around items-center min-h-[calc(100vh-5rem)]"
  >
    <!-- Это левая сторона -->
    <div>
      <p class="border-b-4 border-b-neutral-800 font-RobotoSemiCondensed text-[29px]  -ml-110 -mt-100 font-bold text-[#10100E]">Сделай питомца
         <span class="font-bold text-amber-500"> <br>счастливым</span></p>
         
    <div>
      <p class="absolute animate-bounce -ml-110 mt-10 font-RobotoSemiCondensed text-[22px] text-[#25231b]">Профессиональный груминг<br> для домашних животных</p>
    </div>
    </div>
    <!-- Это правая сторона -->
    <div class="flex justify-center items-center">
      <!--! Это картинка с Корги -->
      <img
        class="brightness-107 border-30 absolute  mx-[100%] md:w-1/5 absolute h-max-[100%] border-amber-300"
        src="/public/1.webp"
        alt=""
      />
    </div>
    
  </div>
     
  <Promotion></Promotion>
   
   
    <About></About>
    <AppInput></AppInput>

  
</template>
<style>
@reference "tailwindcss";
body{
  @apply overflow-x-hidden;
}
</style>