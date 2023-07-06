<script lang="ts">
    export let time: Date;
    
    const hour = time.getHours();

    const solarBody = hour >= 6 && hour < 21 ? "sun" : "moon";
</script>

<circle cx="50" cy="50" r="50" />

<!-- <svg viewBox="0 0 100 100">
    <use href={`weather/weather.svg#${solarBody}`}/>
</svg> -->

<style>
    circle {
        width: 124px;
        transform-box: fill-box;
        transform-origin: center;
        /* animation: rotate 10s infinite linear; */

    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>