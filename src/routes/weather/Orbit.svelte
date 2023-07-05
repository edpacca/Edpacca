<script lang="ts">
    export let time: Date;
    
    const hour = time.getHours();

    const solarBody = hour > 6 && hour <= 21 ? "sun" : "moon";
</script>

<img src={`/weather/${solarBody}.png`} alt={solarBody}/>

<style>
    img {
        width: 124px;
        animation: rotate 10s infinite linear;
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