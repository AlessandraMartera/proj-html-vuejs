<script >

export default {
    name: 'AppVideo'
}

</script>

<template>
    <section class="video_section">
        <div class="center_container">
            <div class="video">
                <img src="icon-youtube-play.png" alt="play">
                <div class="circle_orange"></div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


.video_section .center_container {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;

    .video {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 970px;
        height: 570px;
        background-image: url(artist-video-poster.jpg);
        background-size: contain;

        .circle_orange {
            position: absolute;
            top: 150px;
            right: -70px;
            width: 90px;
            height: 90px;
            border: 12px solid #ecc5ab;
            border-radius: 100px;
        }
    }


}
</style>
