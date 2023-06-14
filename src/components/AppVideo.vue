<script >

export default {
    name: 'AppVideo'
}

</script>

<template>
    <section class="video_section">
        <div class="background">


            <div class="content">
                <!-- central container to have margin auto -->
                <div class="center_container">
                    <div class="video">
                        <img src="icon-youtube-play.png" alt="play">
                        <div class="circle_orange"></div>
                    </div>

                </div>
            </div>


            <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill-opacity="1"
                    d="M0,32L34.3,32C68.6,32,137,32,206,53.3C274.3,75,343,117,411,149.3C480,181,549,203,617,202.7C685.7,203,754,181,823,170.7C891.4,160,960,160,1029,176C1097.1,192,1166,224,1234,229.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;

.video_section {
    margin: 150px 0;
    border: 1px dotted violet;
    height: 800px;
}

.background {
    width: 100%;
    height: 100%;
    position: relative;

    .wave {
        position: relative;
        bottom: 0;
        left: 0;
        fill: $lightgray;
    }


    .content {
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 90000;

        .center_container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;

            .video {
                // position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 970px;
                height: 570px;
                background-image: url(artist-video-poster.jpg);
                background-size: contain;

                .circle_orange {
                    // position: absolute;
                    // top: 150px;
                    // right: -70px;
                    width: 90px;
                    height: 90px;
                    border: 12px solid #ecc5ab;
                    border-radius: 100px;
                }
            }



        }
    }

}
</style>
