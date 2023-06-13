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
    <section class="courses_list">

        <div class="center_container">

            <!-- title -->
            <div class="handwrite_blu">Artist Coaching</div>
            <h1>Latest online Courses</h1>

            <ul>
                <!--  cards courses -->
                <!-- v-for -->
                <li>
                    <img src="" alt="">
                </li>
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

.courses_list {
    text-align: center;
}
</style>

