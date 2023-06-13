<script >
import { store } from './../store.js'

export default {
    name: 'AppCoursesList',
    // store data
    data() {
        return {
            store
        };
    }
}


</script>

<template>
    <li v-for="course in store.Courses" class="courses_card">
        <!-- immage -->
        <img :src="course.img" alt="">
        <div class="courses_info">
            <!-- price -->
            <div class="orange">$ 18.00</div>
            <!-- title -->
            <h4>The acrylic Painting Academy</h4>
            <!-- info -->
            <span><i class="fa-regular fa-file-lines"></i> 4 Lessons</span>
            <span><i class="fa-regular fa-user"></i> 50 Students </span>
        </div>


    </li>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
@use './../styles/debug.scss' as *;

.courses_card {
    width: calc((100% / 4) - 10px);
    text-align: start;
    color: $gray;

    img {
        width: 100%;
    }

    .courses_info {
        padding: 20px;
        width: 90%;
        border: 2px solid $white;

        div {
            margin-bottom: 10px;
        }

        h4 {
            margin-bottom: 10px;
            color: $black;
        }

        span {
            margin-bottom: 10px;
            font-size: 14px;
            margin: 0 10px;
        }
    }

    .courses_info:hover {
        cursor: pointer;
        background-color: $white;
        border: 2px solid $orange;
        position: relative;
        bottom: 10%;
        right: 0;
    }
}
</style>