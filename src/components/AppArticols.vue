<script >

export default {
    name: 'AppArticols'
}

</script>

<template>
    <section class="articols">
        <div class="center_container">
            <div class="handwrite_blu">Articols and Tips</div>
            <h2>Latest from the blog</h2>
            <div class="arcticols_container">

                <div class="card left">
                    <img src="articols/artist-blog-03-480x356.jpeg" alt="">
                    <div class="info">
                        <div>ARTIST</div>
                        <h4>Brush Strokes Energize Trees in paintings</h4>
                        <small>
                            <span class="date"><i class="fa-regular fa-calendar"></i> May 15, 2020</span>
                            <span class="views"> <i class="fa-regular fa-eye"></i> 688 views</span>
                        </small>
                    </div>

                </div>

                <div class="card important">
                    <img src="articols/artist-blog-02-500x680.jpg" alt="">
                    <div class="info">
                        <div>ARTIST</div>
                        <h4>Brush Strokes Energize Trees in paintings</h4>
                        <small>
                            <span class="date"><i class="fa-regular fa-calendar"></i> May 15, 2020</span>
                            <span class="views"> <i class="fa-regular fa-eye"></i> 688 views</span>
                        </small>
                    </div>
                </div>

                <div class="card right">
                    <img src="articols/artist-blog-01-480x356.jpg" alt="">
                    <div class="info">
                        <div>ARTIST</div>
                        <h4>Brush Strokes Energize Trees in paintings</h4>
                        <small>
                            <span class="date"><i class="fa-regular fa-calendar"></i> May 15, 2020</span>
                            <span class="views"> <i class="fa-regular fa-eye"></i> 688 views</span>
                        </small>
                    </div>
                </div>
            </div>

            <div>
                Get into details now? <a class="orange" href="#">view all posts <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
@use './../styles/debug.scss' as *;

.articols {
    background-color: $lightgray;
    text-align: center;

    .arcticols_container {
        margin: 70px 0;
        width: 100%;
        height: 700px;
        display: flex;
        justify-content: space-between;

        .card {
            position: relative;
            width: 24%;
            height: 56%;
            background-color: $white;
            // box-shadow: 7px 12px 28px $black;

            img {
                width: 100%;
                height: 50%;

            }

        }

        .info {
            width: 100%;
            height: 50%;
            color: $gray;
            padding: 20px;
            padding-bottom: 12%;
            text-align: start;
            // prova flex
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            position: absolute;
            bottom: 0;
            left: 0;

            box-shadow: $myshadow;

            h4 {
                margin: 20px 0;
                color: $black;
            }

            small {
                font-size: 14px;

                .views {
                    margin-left: 30px;
                }
            }
        }

        //Categoraize card
        .important {
            background-color: $orange;
            width: 43%;
            height: 700px;
            // box-shadow: none;


            .info {
                height: 100%;
                color: $white;
                justify-content: end;
                box-shadow: $myshadow inset;


                h4 {
                    color: $white;
                    font-size: 28px;
                }
            }

            img {
                width: 100%;
                height: 100%;
            }

        }

        .left {
            margin-top: 14%;
        }

        .right {
            margin-top: 6%;
        }

        //layout 


    }
}
</style>
