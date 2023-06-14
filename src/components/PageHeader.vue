<script>
import countdownEvents from './countdownEvents.vue';

export default {
  name: 'PageHeader',
  components: {
    countdownEvents,
  },
  props: {
    header: Object
  }

}
</script>

<template>
  <header>

    <!-- coutdown event -->
    <countdownEvents />
    <nav>
      <!-- logo -->
      <div class="logo">
        <img :src="header.logo" alt="">
      </div>
      <!-- links list -->
      <ul>
        <li v-for="nameLinks in header.links ">
          <a href="http://#">
            {{ nameLinks }} <i class="fa-solid fa-angle-down"></i>
          </a>
        </li>

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

      <div class="background">

        <img class="shape-02" src="background/artist-shape-02.png" alt="">
        <img class="shape-03" src="background/artist-shape-03.png" alt="">
        <img class="image-03" src="background/artist-hero-image-03.png" alt="">
        <img class="shape-01" src="background/artist-shape-01.png" alt="">
        <img class="shape-04" src="background/artist-shape-04.png" alt="">
        <img class="shape-05" src="background/artist-shape-05.png" alt="">
        <img class="shape-12" src="background/maxcoach-shape-12.png" alt="">

        <div class="content">
          <!-- immage left -->
          <div class="hero_immage_left">
            <img id="color_artist" src="hero/artist-hero-image-02-232x300.jpg" alt="">
            <img id="monkey_artist" src="hero/artist-hero-image-01.jpg" alt="">
          </div>

          <!-- text central -->
          <div class="text">
            <div class="handwrite_blu">Hello, I'm Martin</div>
            <h1>Aritst Coaching And Mentoring Might Be for You.</h1>
            <button>Get started today</button>
          </div>

          <!-- immage right -->
          <div class="hero_immage_right">
            <img id="photo_artist" src="hero/artist-hero-image-04.jpg" alt="">
          </div>

          <div class="label">
            <a href=""><i class="fa-solid fa-pen-ruler"></i></a>
            <a href=""><i class="fa-solid fa-globe"></i></a>
            <a href=""><i class="fa-solid fa-book"></i></a>
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>

          </div>

        </div>
      </div>

    </div>


  </header>
</template>

<style lang="scss" scoped>
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
    gap: 30px;

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



.background {
  width: 100%;
  height: 650px;
  background-color: #fbf9f6;
  position: relative;

  .shape-02 {
    position: absolute;
    top: 0;
    left: 0;
  }

  .shape-03 {
    scale: 0.9;
    position: absolute;
    top: 100px;
    left: -10px;

  }

  .image-03 {
    position: absolute;
    bottom: 10px;
    left: 30%;
  }

  .shape-01 {
    scale: 0.9;
    position: absolute;
    top: -38px;
    right: 100px;
  }

  .shape-04 {
    scale: 0.9;
    position: absolute;
    top: 40px;
    right: 150px;
  }

  .shape-05 {
    scale: 0.9;
    position: absolute;
    bottom: 10px;
    right: 80px;
  }

  .shape-12 {
    position: absolute;
    bottom: 50px;
    right: 350px;
  }
}



.content {
  position: relative;
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}



.hero_immage_left {
  // margin-left: 40px;
  width: 25%;
  height: 80%;
  position: relative;

  #color_artist {
    width: 60%;
    position: absolute;
    top: 0;
    right: 2px;
    box-shadow: $shadowHero;
  }

  #monkey_artist {
    width: 40%;
    position: absolute;
    bottom: 0;
    left: 2px;
    box-shadow: $shadowHero;
  }

}

.label {
  background-color: $white;
  font-size: 16px;
  padding: 8px;
  border-radius: 5px 0 0 5px;
  position: absolute;
  top: 60px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-shadow: $shadowHero;

}

.text {
  font-weight: 700;
  font-size: 16px;
  width: 30%;
  text-align: center;


  h1 {
    margin-bottom: 30px;
  }
}

.hero_immage_right {
  width: 25%;
  height: 80%;
  position: relative;

  #photo_artist {
    width: 70%;
    position: absolute;
    bottom: 0;
    left: 50px;
    box-shadow: $shadowHero;
  }
}
</style>
