<script >
import { store } from './store.js'

export default {
    name: 'CardListCourses',
    // store data
    data() {
        return {
            store
        };
    }
}

</script>

<template>
    <div class="card">
        <img src="artist-course-05-480x480.jpg" alt="">
        <div class="orange">$ 25.00 </div>
        <h1>Ultimate Guide to Digital Sketching for Beginner</h1>
        <div>
            <span>
                <i class="fa-regular fa-file-lines"></i> 4 Lessons
            </span>
            <span>
                <i class="fa-regular fa-user"></i> 50 Students
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
@use './../styles/debug.scss' as *;
</style>
