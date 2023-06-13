<script >
import AppNewsletter from './AppNewsletter.vue';
import AppHelpYou from './AppHelpYou.vue';
import AppGetStartToday from './AppGetStartToday.vue';
import AppVideo from './AppVideo.vue';
import AppCarousel from './AppCarousel.vue';

export default {
    name: 'PageMain',
    components: {
        AppHelpYou,
        AppNewsletter,
        AppGetStartToday,
        AppVideo,
        AppCarousel,
    },
}
</script>

<template>
    <main>
        <div class="background">

            <img class="shape_03" src="background/maxcoach-shape-14-1536x343.png" alt="">


            <div class="content">
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

                <section class="courses_list">
                    <div class="center_container">
                        <div class="handwrite_blu">Artist Coaching</div>
                        <h1>titolo</h1>
                        <ul>
                            <li> card dei corse</li>
                        </ul>
                        <button class="buttonlight">
                            view all courses
                        </button>
                    </div>
                </section>

                <section class="from_blog">
                    <div class="center_container">
                        <div class="handwrite_blu">Articols and Tips</div>
                        <div>lato sinistro</div>
                        <div>big</div>
                        <div>lato destro</div>
                    </div>
                </section>

                <section class="upcoming_events">
                    <div class="center_container">
                        <div class="handwrite_blu">Upcoming Events</div>
                        <h1>titolo</h1>
                        <div>
                            <div class="card_events">
                                card evento
                            </div>
                            <div class="card_events">
                                card evento
                            </div>
                        </div>
                        <div>
                            <div class="card_events">
                                card evento
                            </div>
                            <div class="card_events">
                                card evento
                            </div>
                        </div>
                    </div>
                </section>

                <AppNewsletter />

            </div>
        </div>

    </main>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
// @use './../styles/debug.scss' as *;

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


// GETSTARTER SECTION


// VIDEO


// TESTIMONIAl
.testimonials {
    background-color: $lightgray;
    text-align: center;
}
</style>
