<script >
import { store } from './../store'
export default {
    name: 'AppEvents',

    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <section class="upcoming_events">

        <div class="background">

            <div class="stain"></div>
            <img class="shape-13" src="background/maxcoach-shape-13.png" alt="">
            <img class="shape-02" src="background/artist-shape-02.png" alt="">

            <div class="content">
                <div class="center_container">

                    <div class="handwrite_blu">Upcoming Events</div>
                    <h1>Let's work together</h1>


                    <div class="events_list">
                        <div class="card_events">
                            <img :src="store.events[0].immage" alt="">
                            <div class="info">
                                <span class="date"> {{ store.events[0].date }}</span>
                                <h4>{{ store.events[0].title }}</h4>
                                <span class="where"> <i class="fa-solid fa-location-dot"></i> {{ store.events[0].where
                                }}</span>
                            </div>
                        </div>

                        <div class="card_events">
                            <img :src="store.events[1].immage" alt="">
                            <div class="info">
                                <span class="date"> {{ store.events[1].date }}</span>
                                <h4>{{ store.events[1].title }}</h4>
                                <span class="where"> <i class="fa-solid fa-location-dot"></i> {{ store.events[1].where
                                }}</span>
                            </div>
                        </div>

                        <div class="card_events odd_row">
                            <img :src="store.events[2].immage" alt="">
                            <div class="info">
                                <span class="date"> {{ store.events[2].date }}</span>
                                <h4>{{ store.events[2].title }}</h4>
                                <span class="where"> <i class="fa-solid fa-location-dot"></i> {{ store.events[2].where
                                }}</span>
                            </div>
                        </div>

                        <div class="card_events odd_row">
                            <img :src="store.events[3].immage" alt="">
                            <div class="info">
                                <span class="date"> {{ store.events[3].date }}</span>
                                <h4>{{ store.events[3].title }}</h4>
                                <span class="where"> <i class="fa-solid fa-location-dot"></i> {{ store.events[3].where
                                }}</span>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </div>


    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


.upcoming_events {
    text-align: center;
    padding: 80px 0;

    .events_list {
        margin: 70px 0;
    }
}

.card_events {
    margin: 0 20px;
    width: calc(50% - 40px);
    display: inline-flex;
    gap: 50px;
    text-align: start;

    img {
        width: calc(55% - 50px);
    }

    .info {
        color: $gray;
        padding: 100px 0;
        width: calc(45% - 50px);
        font-size: 14px;

        h4 {
            color: $black;
            margin: 20px 0;
        }
    }


}

.odd_row {
    flex-direction: row-reverse;
    text-align: end;
}

.stain {
    background-image: url('background/stain.svg');
    position: absolute;
    top: 100px;
    right: 0;
    width: 400px;
    height: 500px;
}

.shape-13 {
    position: absolute;
    top: 150px;
    right: 0;
}

.shape-02 {
    width: 400px;
    transform: rotate(-90deg);
    position: absolute;
    bottom: -50px;
    left: -80px;
}
</style>