<script >

export default {
    name: 'AppGetStartToday'
}

</script>

<template>
    <section class="get_start_today">
        <div class="center_container">
            <div class="citation">
                <img src="getstarttoday/artist-quote-icon.png" alt="virgolette">
                <h1>
                    I coach and mentor visual artist, like you, to Create Like You Mean It
                </h1>
                <div class="handwrite_blu">Martin Garrix</div>

            </div>
            <div class="text">
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab velit, fugit numquam adipisci aperiam dicta
                    placeat
                    ipsum voluptatem aliquid dolores illum? Corporis iusto laborum aspernatur dignissimos ex consectetur
                    excepturi
                    dolores.
                </p>

                <p>
                    As an artist Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita provident
                    deserunt
                    et eveniet.
                </p>

                <button class="buttonlight ">Get started today</button>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


.center_container {
    display: flex;

    .citation {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 40%;
        text-align: center;

        img {
            width: 40px;
        }

        h1 {
            font-size: 50px;
        }
    }

    .text {
        padding: 60px;
        width: 60%;

        p {
            color: $gray;
            margin: 20px 0;
        }


    }
}
</style>
