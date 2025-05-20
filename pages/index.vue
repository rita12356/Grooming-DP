
<template>
  <!-- 1 -->
  <div>
    <div
      class="flex flex-row max-md:flex-col-reverse justify-around items-center min-h-[calc(100vh-5rem)]"
    >
      <!-- Это левая сторона -->
      <div>
        <p class="uppercase  border-b-4 border-b-neutral-800 font-extrabold text-[#25231b] text-[22px]">
          Сделай питомца <span class="font-bold text-amber-500"><br>счастливым</span>
        </p>
        <p class="font-mono animate-bounce text-[#25231b] text-[22px]">
          Профессиональный груминг для домашних животных
        </p>
      </div>

      <!-- Это правая сторона -->
      <div class="flex justify-center items-center">
        <!--! Это картинка с Корги -->
        <img
          class="brightness-107 w-130 border-30 border-amber-300"
          src="/public/1.webp"
          alt=""
        />
      </div>
    </div>
    <Promotion></Promotion>
    <AppInput></AppInput>
  </div>
  <!-- 2 -->
  <div>
    <!-- Всё остальное должно быть ниже -->
    <!-- Это отдельный блок с информацией с советами -->
    <About></About>
    
  </div>
</template>
<style>
@reference "tailwindcss";
body{
  @apply overflow-x-hidden;
}
</style>