
 <template>
  
<div
    class="flex flex-row max-md:flex-col-reverse justify-around items-center sm:px-30 md:px-10 lg:px-10 min-h-[calc(100vh-5rem)]"
  >
    <!-- Это левая сторона -->
    <div>
      <p class="border-b-4 border-b-neutral-800  font-RobotoSemiCondensed text-[29px] -ml-110 -mt-100  font-bold text-[#10100E]">Сделай питомца
         <span class="font-bold text-amber-500"> <br>СЧАСТЛИВЫМ</span></p>
         
    <div>
      <p class="absolute animate-bounce -ml-110 mt-10 font-RobotoSemiCondensed text-[22px] text-[#25231b]">Профессиональный груминг<br> для домашних животных</p>
     
    </div>
    </div>
    <!-- Это правая сторона -->
    <div class="flex justify-center items-center">
      <!--! Это картинка с Корги -->
      <img
        class="brightness-107 border-30 absolute mx-auto w-full md:w-1/6 border-amber-300"
        src="/public/1.webp"
        alt=""
      />
    </div>
    
  </div>
     
  
   
   
    <About></About>
     <Promotion></Promotion>
      <AppInput></AppInput>


  
</template>
<style>
@reference "tailwindcss";
body{
  @apply overflow-x-hidden;
}
</style>