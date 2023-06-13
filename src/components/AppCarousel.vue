<script >

export default {
    name: 'AppCarousel'
}

</script>

<template>
    <div class="carousel">
        <div card="card_carousel">
            <h1>High level of efficiency and scientific teaching methods</h1>
            <p>
                I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the
                syllabus. Great study portal for peaple like me.
            </p>
            <div>
                <img src="testimonials/artist-testimonial-avatar-04.jpg" alt="">
                <div>
                    <h3>Mina Hollace</h3>
                    <span>Freelancer</span>
                </div>
            </div>
        </div>


        <div card="card_carousel active">
            <h1>Titolo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas expedita. Qui quis
                distinctio
                nesciunt non perspiciatis! Officiis ut voluptatem sunt magni error distinctio at
                voluptatibus,
                aspernatur neque veniam. Ullam?
            </p>
            <div>
                utente info
            </div>
        </div>
        <div card="card_carousel">
            <h1>Titolo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quas expedita. Qui quis
                distinctio
                nesciunt non perspiciatis! Officiis ut voluptatem sunt magni error distinctio at
                voluptatibus,
                aspernatur neque veniam. Ullam?
            </p>
            <div>
                utente info
            </div>
        </div>


    </div>
    <div> puntini </div>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
@use './../styles/debug.scss' as *;
</style>
