<script >

export default {
    name: 'AppNewsletter'
}
</script>

<template>
    <section class="newsletter">
        <img src="newsletter/artist-shape-color-paint-top-left.png" alt="">

        <div class="center_container">
            <h2>Newsletter to get in touch</h2>
            <div class="input_email">
                <input type="email" placeholder="Your e-mail">
                <div>
                    &RightArrow;
                </div>
            </div>
        </div>

        <img src="newsletter/artist-shape-color-paint-bottom-right.png" alt="">
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


// NEWSLETTER
.newsletter {
    height: 200px;
    background-color: #244186;
    color: $white;
    display: flex;

    .center_container {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 100px;
    }

    h2 {
        width: 35%;
        text-align: end;
    }

    .input_email {
        width: 600px;
        height: 50px;
        padding: 3px;
        border-bottom: 1px solid $white;
        display: flex;
        align-items: center;
        gap: 5px;

        div {
            display: inline-block;
        }

        input {
            width: 100%;
            font-size: 24px;
            color: $white;
            background-color: #244186;
            border: none;
        }
    }
}
</style>
