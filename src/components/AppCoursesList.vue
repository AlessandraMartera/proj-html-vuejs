<script >
import { store } from './../store.js'
import CoursesCard from './CoursesCard.vue';

export default {
    name: 'AppCoursesList',
    components: {
        CoursesCard,
    },
    // store data
    data() {
        return {
            store
        };
    }
}


</script>

<template>
    <section class="courses">

        <div class="background">

            <img class="shape_01" src="background/artist-shape-01.png" alt="">

            <div class="content">
                <div class="center_container">

                    <!-- title -->
                    <div class="handwrite_blu">Artist Coaching</div>
                    <h1>Latest online Courses</h1>

                    <!-- courses list -->
                    <ul class="courses_list">

                        <!-- single card list -->
                        <CoursesCard />
                    </ul>

                    <!-- button for all courses -->
                    <button class="buttonlight">
                        view all courses <i class="fa-solid fa-arrow-right-long"></i>
                    </button>
                </div>
            </div>
        </div>


    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


.courses {
    text-align: center;
    padding: 80px 0;

    .courses_list {
        margin: 20px 0;
        width: 100%;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

    .shape_01 {
        position: absolute;
        top: 200px;
        left: -500px;
        transform: rotate(30deg);

    }
}
</style>

