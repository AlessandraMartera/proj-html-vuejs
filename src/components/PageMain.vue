<script >
import AppNewsletter from './AppNewsletter.vue';
import AppHelpYou from './AppHelpYou.vue';

export default {
    name: 'PageMain',
    components: {
        AppHelpYou,
        AppNewsletter,
    },
}
</script>

<template>
    <AppHelpYou />



    <section class="get_start_today">
        <div class="center_container">
            <div>
                <img src="#" alt="virgolette">
                <h1>
                    titolo
                </h1>
                <div class="handwrite_blu">Martin Garrix</div>

            </div>
            <div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab velit, fugit numquam adipisci aperiam dicta
                placeat
                ipsum voluptatem aliquid dolores illum? Corporis iusto laborum aspernatur dignissimos ex consectetur
                excepturi
                dolores.
                <button>get start</button>
            </div>
        </div>

    </section>

    <section class="video_section">
        <div class="center_container">
            <div class="video">
                <img src="#" alt="play">
            </div>
        </div>
    </section>

    <section class="testimonials">

        <div class="center_container">
            <div class="handwrite_blu">Testimonials</div>

            <h1>Why people love me?</h1>

            <div class="carousel">
                <div card="card_carousel">
                    <h1>Titolo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas expedita. Qui quis distinctio
                        nesciunt non perspiciatis! Officiis ut voluptatem sunt magni error distinctio at voluptatibus,
                        aspernatur neque veniam. Ullam?
                    </p>
                    <div>
                        utente info
                    </div>
                </div>
                <div card="card_carousel active">
                    <h1>Titolo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas expedita. Qui quis distinctio
                        nesciunt non perspiciatis! Officiis ut voluptatem sunt magni error distinctio at voluptatibus,
                        aspernatur neque veniam. Ullam?
                    </p>
                    <div>
                        utente info
                    </div>
                </div>
                <div card="card_carousel">
                    <h1>Titolo</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas expedita. Qui quis distinctio
                        nesciunt non perspiciatis! Officiis ut voluptatem sunt magni error distinctio at voluptatibus,
                        aspernatur neque veniam. Ullam?
                    </p>
                    <div>
                        utente info
                    </div>
                </div>


            </div>
            <div> puntini </div>
        </div>

    </section>

    <section class="courses_list">
        <div class="center_container">
            <div class="handwrite_blu">Artist Coaching</div>
            <h1>titolo</h1>
            <ul>
                <li> card dei corse</li>
            </ul>
            <button>
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
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
@use './../styles/debug.scss' as *;


// GETSTARTER SECTION
.get_start_today .center_container {
    display: flex;

    div {
        width: 50%;
    }
}

// VIDEO
.video_section .center_container {
    display: flex;
    justify-content: center;
    align-items: center;

    .video {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;
        height: 80%;
        background-color: blue;
    }
}

// TESTIMONIAL
.carousel {
    display: flex;
}
</style>
