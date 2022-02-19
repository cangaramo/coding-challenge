<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  text-align: center;
  min-height: 100vh;
  @media (min-width: 576px) {
    justify-content: center;
  }
}
</style>
