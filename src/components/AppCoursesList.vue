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

        <div class="center_container">

            <!-- title -->
            <div class="handwrite_blu">Artist Coaching</div>
            <h1>Latest online Courses</h1>

            <ul class="courses_list">

                <CoursesCard />

            </ul>

            <button class="buttonlight">
                view all courses <i class="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
@use './../styles/debug.scss' as *;

.courses {
    text-align: center;

    .courses_list {
        margin: 20px 0;
        width: 100%;
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
    }

}
</style>

