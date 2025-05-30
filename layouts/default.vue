
<template>
  <!--! Это весь экран. Все 3 элемента располагаются в колонку -->
  <!--! У этого блока ширина всегда весь экран, поэтому используем w-full -->
  <div class="flex flex-col bg-amber-200 w-full">
    <!-- Это шапка -->
    <AppHeader></AppHeader>

    <!-- Здесь основной контент -->
    <!--! Добавляем внешний отступ на ширину шапки mt-20 -->
    <main class="mt-20">
      <slot></slot>
    </main>

    <!-- Здесь подвал -->
    <AppFooter  ></AppFooter>
  </div>
</template>
<style scoped></style>
