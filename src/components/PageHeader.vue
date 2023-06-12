<script>

export default {
  name: 'PageHeader',

}
</script>

<template>
  <header>
    <!-- coutdown event -->
    <nav>
      <!-- logo -->
      <div class="logo">
        <img src="./../assets/image/dark-logo.png" alt="">
      </div>
      <!-- links list -->
      <ul>
        <li>Home <i class="fa-solid fa-angle-down"></i></li>
        <li>Pages <i class="fa-solid fa-angle-down"></i></li>
        <li>boh <i class="fa-solid fa-angle-down"></i></li>
        <li>boh <i class="fa-solid fa-angle-down"></i></li>
        <li>boh <i class="fa-solid fa-angle-down"></i></li>
        <li>boh <i class="fa-solid fa-angle-down"></i></li>
      </ul>

      <!-- icons -->
      <div class="icons">
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-linkedin"></i>
      </div>
    </nav>

    <!-- Jumbotron -->
    <div id="jumbotron">
    </div>


  </header>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;

// DEBUG
nav {
  display: flex;
  height: 80px;
  justify-content: space-around;
  align-items: center;

  .logo {
    height: 40%;

    img {
      height: 100%;
    }
  }

  ul {
    display: flex;
    gap: 5px;

    i {
      font-size: 0.8rem;
      margin-bottom: 1px;
    }
  }

  .icons i {
    color: $gray;
    margin-right: 1.5rem;
  }
}



// DeBUG
#jumbotron {
  height: 800px;
  background-color: bisque;
}
</style>
