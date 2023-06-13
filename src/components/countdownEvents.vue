<script >

export default {
    name: 'coutdownEventes'
}

</script>

<template>
    <div class="countdown_event">
        <small>Stars TOMORROW! Our biggets Event of the year...</small>
        <span> <i class="fa-regular fa-clock"></i> 00 : 00 : 00 : 00</span>
        <button>Get ticket</button>
    </div>
</template>

<style lang="scss" scoped>
@use './../styles/general.scss' as *;
@use './../styles/partials/variables.scss' as *;

.countdown_event {
    height: 50px;
    text-align: center;
    padding: 10px;
    background-color: $lightgray;
    color: $gray;

    span {
        color: $black;
        margin: 0 30px
    }

    button {
        height: 30px;
        width: 120px;
    }
}
</style>
