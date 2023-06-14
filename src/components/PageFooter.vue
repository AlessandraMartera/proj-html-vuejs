<script >

export default {
    name: 'PageFooter',
    props: {
        footer: Object
    }
}
</script>

<template>
    <footer>


        <div class="row_container">
            <!-- Andress Col -->
            <div class="col">
                <h3>
                    Address
                </h3>
                <div>
                    {{ footer.address }} <br>
                    {{ footer.tel }} <br>
                    {{ footer.email }} <br>
                </div>
                <div class="icons">
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>

            </div>

            <!-- Explore Col -->

            <ul>
                <li>
                    <h3>Explore</h3>
                </li>

                <li><a href="#">Start here</a> </li>
                <li><a href="#">Success story</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Courses</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <!-- Information Col -->
            <ul>
                <li>
                    <h3>Information</h3>
                </li>

                <li><a href="#">Membership</a></li>
                <li><a href="#">Purchase guide</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Terms of services</a></li>
            </ul>


            <!-- Istagram Col -->
            <div class="col">
                <h3>Instagram <a class="orange" href="#">{{ footer.instagram.name }}</a></h3>

                <img v-for="immage in footer.instagram.immages" :src="immage" :alt="immage">

            </div>
        </div>

        <div class="copywrite">@ 2020 Maxcoach. All Rights Reserved</div>



        <a href="#">
            <button> <i class="fa-solid fa-arrow-up-long"></i> </button>
        </a>
    </footer>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;
// @use './../styles/debug.scss' as *;

footer {
    font-family: 'Varela Round', sans-serif;
    font-weight: 600;
    font-size: 14px;
    height: 400px;
    background-color: $white;
    position: relative;

    .central_container {
        width: 100%;

    }

    .row_container {
        width: 80%;
        height: 300px;
        display: flex;
        justify-content: space-between;
        gap: 20px;
        margin: 100px auto;
        color: #949494;
        line-height: 30px;


        .col {
            width: calc((100% / 3) - 20px);
            // font-size: 14px;


            div {
                margin: 20px 0;
            }
        }

        h3 {
            color: $black;
            margin-bottom: 20px;
        }

        .icons i {
            font-size: 1.6rem;
            margin-right: 1.5rem;
            color: #b4b4b4;
        }

        ul {
            display: inline-block;

            li {



                a {
                    color: #949494;
                }
            }
        }

        img {
            width: 120px;
            height: 120px;
            margin-right: 14px;
        }



    }

    .copywrite {
        margin: 10px;
        text-align: center;
        font-size: 16px;
        color: #b4b4b4;
    }



    button {
        font-size: large;
        width: 70px;
        height: 70px;
        border-radius: 100px;
        position: absolute;
        right: 40px;
        bottom: 40px;
    }
}
</style>
