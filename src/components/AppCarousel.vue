<script >
import { store } from './../store';
export default {
    name: 'AppCarousel',
    // store data
    data() {
        return {
            store
        };
    }
}

</script>

<template>
    <div class="carousel">

        <!-- card -->
        <div v-for="(testimonial, idx) in store.testimonials"
            :class="(idx === store.testimonialsActiveCard) ? 'card_carousel active' : 'card_carousel'">
            <!-- comment -->
            <h4>{{ testimonial.title }}</h4>
            <p>
                {{ testimonial.text }}
            </p>

            <!-- user info  -->
            <div class="user_info">
                <img :src="testimonial.userInfo.immage" alt="">
                <div>
                    <h4>{{ testimonial.userInfo.name }}</h4>
                    <span> / {{ testimonial.userInfo.job }}</span>
                </div>
            </div>
        </div>


    </div>


    <div v-for="(n, idx) in store.testimonials" :class="(idx === store.testimonialsActiveCard) ? 'dot active' : 'dot'">
    </div>


    <!-- <div><span class="dot"><i class="fa-sharp fa-solid fa-circle-small"></i></span></div> -->
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
// @use './../styles/debug.scss' as *;

.carousel {
    display: flex;
    justify-content: center;


    .card_carousel {
        background-color: $white;
        opacity: 0.2;
        margin: 20px;
        padding: 50px;
        color: $gray;
        text-align: start;
        border-radius: 5px;
        font-size: 16px;

        p {
            margin: 35px 0;
        }

        h4 {
            color: $black;
        }

        .user_info {
            display: flex;
            font-size: 12px;

            h4 {
                margin-bottom: 10px;
            }

            img {
                width: 70px;
                height: 70px;
                border-radius: 100px;
                margin-right: 30px;
            }
        }


    }

    .active {
        opacity: 1;
    }
}

.dot {
    display: inline-block;
    border-radius: 100px;
    height: 10px;
    width: 10px;
    margin-left: 15px;
    background-color: $black;
    opacity: 0.3;
}

.dot.active {
    opacity: 1;
    scale: 1.3;
}
</style>
