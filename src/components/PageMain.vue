<script >
import AppNewsletter from './AppNewsletter.vue';
import AppHelpYou from './AppHelpYou.vue';
import AppGetStartToday from './AppGetStartToday.vue';
import AppVideo from './AppVideo.vue';
import AppCarousel from './AppCarousel.vue';
import AppCoursesList from './AppCoursesList.vue';
import AppArticols from './AppArticols.vue';
import AppEvents from './AppEvents.vue';

export default {
    name: 'PageMain',
    components: {
        AppHelpYou,
        AppNewsletter,
        AppGetStartToday,
        AppVideo,
        AppCarousel,
        AppCoursesList,
        AppArticols,
        AppEvents,
    },
}
</script>

<template>
    <main>



        <AppHelpYou />

        <AppGetStartToday />

        <AppVideo />

        <section class="testimonials">

            <div class="center_container">
                <div class="handwrite_blu">Testimonials</div>
                <h1>Why people love me?</h1>
            </div>

            <AppCarousel />
        </section>

        <AppCoursesList />

        <AppArticols />

        <AppEvents />

        <AppNewsletter />




    </main>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


main {
    .background {
        width: 100%;
        height: 100%;
        position: relative;

        img.shape_03 {
            width: 100%;
            position: absolute;
            top: 100px;
            left: 0;
        }
    }



    .content {
        position: relative;
        z-index: 90000;

        section {
            padding: 50px 0;

        }

    }
}


// TESTIMONIAl
.testimonials {
    background-color: $lightgray;
    text-align: center;
}
</style>
