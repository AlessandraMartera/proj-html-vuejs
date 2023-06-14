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
            <div class="orange"> $ {{ course.price }}</div>
            <!-- title -->
            <h4>{{ course.name }}</h4>
            <!-- info -->
            <span><i class="fa-regular fa-file-lines"></i> {{ course.numberLessons }} Lessons</span>
            <span><i class="fa-regular fa-user"></i> {{ course.numeberStudent }} Students </span>
        </div>
    </li>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


.courses_card {
    width: calc((100% / 4) - 10px);
    text-align: start;
    color: $gray;

    img {
        width: 100%;
    }

    .courses_info {
        // display: flex;
        // flex-direction: column;
        // justify-content: space-between;
        font-size: 16px;
        padding: 18px;
        width: 90%;
        border: 2px solid $white;

        div {
            font-weight: 800;
            margin-bottom: 20px;
        }

        h4 {
            margin-bottom: 20px;
            color: $black;
        }

        span {
            margin-bottom: 20px;
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