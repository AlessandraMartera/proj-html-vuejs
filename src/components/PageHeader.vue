<script>

export default {
  name: 'PageHeader'
}
</script>

<template>
  <header>
    <!-- coutdown event -->
    <nav>
      <!-- logo -->
      <div>
        <img src="" alt="">
      </div>
      <!-- links list -->
      <ul>

      </ul>
      <!-- icons -->
      <div class="icons">

      </div>
    </nav>
    <div id="jumbotron">
      <div>
        immagini left
      </div>
      <div>
        button
      </div>
      <div>
        immagini rigth
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;

// DEBUG
n div {
  // min-height: 50px;
  // border: 1px dotted black;
}
</style>
