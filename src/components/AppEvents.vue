<script >

export default {
    name: 'AppEvents'
}

</script>

<template>
    <section class="upcoming_events">
        <div class="center_container">

            <div class="handwrite_blu">Upcoming Events</div>
            <h1>Let's work together</h1>


            <div class="events_list">
                <div class="card_events">
                    <img src="events/artist-event-04-250x300.jpg" alt="">
                    <div class="info">
                        <span class="date"> NOV 22, 2020</span>
                        <h4>Storytelling workshop</h4>
                        <span class="where"> <i class="fa-solid fa-location-dot"></i> Texas, US</span>
                    </div>
                </div>

                <div class="card_events">
                    <img src="events/artist-event-04-250x300.jpg" alt="">
                    <div class="info">
                        <span class="date"> NOV 22, 2020</span>
                        <h4>Storytelling workshop</h4>
                        <span class="where"> <i class="fa-solid fa-location-dot"></i> Texas, US</span>
                    </div>
                </div>
            </div>


            <div>
                <div class="card_events odd_row">
                    <img src="events/artist-event-04-250x300.jpg" alt="">
                    <div class="info">
                        <span class="date"> NOV 22, 2020</span>
                        <h4>Storytelling workshop</h4>
                        <span class="where"> <i class="fa-solid fa-location-dot"></i> Texas, US</span>
                    </div>
                </div>
                <div class="card_events odd_row">
                    <img src="events/artist-event-04-250x300.jpg" alt="">
                    <div class="info">
                        <span class="date"> NOV 22, 2020</span>
                        <h4>Storytelling workshop</h4>
                        <span class="where"> <i class="fa-solid fa-location-dot"></i> Texas, US</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;


.upcoming_events {
    text-align: center;

    .events_list {
        margin: 70px 0;
    }
}

.card_events {
    margin: 0 20px;
    width: calc(50% - 40px);
    display: inline-flex;
    gap: 50px;

    img {
        width: calc(55% - 50px);
    }

    .info {
        color: $gray;
        padding: 100px 0;
        width: calc(45% - 50px);
        font-size: 14px;

        h4 {
            color: $black;
            margin: 20px 0;
        }
    }


}

.odd_row {
    flex-direction: row-reverse;
    text-align: end;
}
</style>