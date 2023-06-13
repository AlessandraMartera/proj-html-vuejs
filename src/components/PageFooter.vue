<script >


export default {
    name: 'PageFooter'
}
</script>

<template>
    <footer>
        <div class="center_container">

            <div class="row_container">
                <!-- Andress Col -->
                <div>
                    <h3>
                        Address
                    </h3>
                    <div>382 NE 19!st St# 8739 Miami, Fl 33279-3899</div>
                    <div>+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)</div>
                    <div>support@maxcoach.com</div>
                    <div class="icons">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>

                </div>

                <!-- Explore Col -->
                <div>
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
                </div>

                <!-- Information Col -->
                <div>
                    <ul>
                        <li>
                            <h3>Information</h3>
                        </li>
                        <li><a href="#">Membership</a></li>
                        <li><a href="#">Purchase guide</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms of services</a></li>
                    </ul>
                </div>

                <!-- Istagram Col -->
                <div>
                    <h3>Instagram <a class="orange" href="#">@maxcoach</a> <span></span></h3>
                    <div>
                        <img src="footer/120084500_197897808368764_8114555493043279565_n.jpg" alt="">
                        <img src="footer/120012142_177596140500760_8623485824101406058_n.jpg" alt="">
                        <img src="footer/120099363_364334431619755_7198812647386067017_n.jpg" alt="">
                    </div>
                </div>
            </div>

            <div class="copywrite">@ 2020 Maxcoach. All Rights Reserved</div>
        </div>


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
    font-size: 16px;
    height: 400px;
    background-color: $white;
    position: relative;

    .central_container {
        width: 90%;
    }

    .row_container {
        display: flex;
        justify-content: space-between;
        margin: 100px 0;
        color: #949494;



        div {
            font-size: 14px;
            line-height: 40px;


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
                    line-height: 30px;



                    a {
                        color: #949494;
                    }
                }
            }

            img {
                width: 120px;
                height: 120px;
                margin-right: 20px;
            }
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
