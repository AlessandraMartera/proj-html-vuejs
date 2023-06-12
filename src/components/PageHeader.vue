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
        <img src="dark-logo.png" alt="">
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

      <div class="hero_immage_left">
        <img id="color_artist" src="hero/artist-hero-image-02-232x300.jpg" alt="">
        <img id="monkey_artist" src="hero/artist-hero-image-01.jpg" alt="">

      </div>

      <div class="text">
        <div>Hello, I'm Martin</div>
        <h1>Aritst Coaching And Mentoring Might Be for You.</h1>
        <button>Get started today</button>
      </div>

      <div class="hero_immage_right">
        <img id="photo_artist" src="hero/artist-hero-image-04.jpg" alt="">
      </div>

    </div>

  </header>
</template>

<style lang="scss" scoped>
// @use './../styles/general.scss' as *;
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

#jumbotron {
  background-color: #fbf9f6;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 650px;

}

.hero_immage_left {
  border: 1px dotted black;
  width: 25%;
  height: 80%;
  position: relative;

  #color_artist {
    position: absolute;
    top: 0;
    right: 2px;

  }

  #monkey_artist {
    position: absolute;
    bottom: 0;
    left: 2px;
  }

}

.text {
  width: 40%;
  text-align: center;

  div {
    color: $lightblue;
    margin-bottom: 10px;
    font-size: 50px;
  }

  h1 {
    margin-bottom: 30px;
  }
}

.hero_immage_right {
  width: 25%;
  height: 80%;
  position: relative;

  #photo_artist {
    position: absolute;
    bottom: 0;
    left: 0;
    scale: 0.9;
  }
}
</style>
