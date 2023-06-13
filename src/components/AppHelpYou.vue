<script >

export default {
    name: 'AppHelpYou'
}

</script>

<template>
    <section class="help_you">
        <!-- central container to have margin auto -->
        <div class="center_container">

            <div class="handwrite_blu">Artist Coaching</div>

            <h1><strong>I understand what it takes to create. I can help you with</strong></h1>
            <!-- <h1><strong></strong></h1> -->

            <ul>
                <li>
                    <img src="helpyou/artist-box-image-01.png" alt="immgine">
                    <h4>Online Coures</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </li>
                <li>
                    <img class="margin60" src="helpyou/artist-box-image-02.png" alt="immgine">
                    <h4>One to One</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </li>
                <li>
                    <img src="helpyou/artist-box-image-03.png" alt="immgine">
                    <h4>Anywhere</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </li>
                <li>
                    <img class="margin60" src="helpyou/artist-box-image-04.png" alt="immgine">
                    <h4>On Time</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    </p>
                </li>
            </ul>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
@use './../styles/debug.scss' as *;

.help_you {
    text-align: center;
    font-family: 'Varela Round', sans-serif;


    .center_container {
        padding: 20px;

        h1 {
            width: 570px;
            margin: 0 auto;
        }
    }

    li {
        text-align: left;
        margin-top: 80px;

        h4 {
            margin-top: 15px;
        }

        p {
            margin-top: 15px;
            color: $gray;
            line-height: 26px;
            font-size: 16px;
        }

        .margin60 {
            margin-top: 60px;
        }
    }

}
</style>
