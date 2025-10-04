<script lang="ts">
  import MountainCanvas from "./MountainCanvas.svelte";

    let progressValue: number = 0.5;
</script>

<div class="relative">
    <div class="d-flex flex-row">
        <input class="range" type="range" min=0 max=1 step=0.01 bind:value={progressValue}/>
    </div>
    <MountainCanvas bind:progress={progressValue}/>
    <div class="progress-value__container">
        <input class="progress-value" type="number" min=0.0 max=2.0 step=0.01 bind:value={progressValue}/>
        <div class="percentage">{(progressValue * 100).toFixed(0)}%</div>
    </div>
</div>


<style>
    input[type="number"] {
        padding: 0.25em 1em;
    }

    .progress-value__container {
        position: absolute;
        top: 24px;
        left: 4px;
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
    }

    .percentage {
        padding-right: 1em;
    }

    input.progress-value {
        font-size: 1em;
        font-family: "JetBrainsMono";
        background-color: var(--secondary);
        color: var(--primary);
        border: none;
        border-radius: 0.25em;
        width: 4em;
        text-align: center;
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance:textfield;
    }

    input.range {
        height: 16px;
        background-color: var(--mid-grey);
        border-radius: 8px;
        width: 100%;
        z-index: 1;
    }

    /* Thumb: webkit */
    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        height: 24px;
        width: 24px;
        background-color: var(--primary);
        border-radius: 50%;
        border: none;
        transition: .2s ease-in-out;
    }

    /* Thumb: Firefox */
    input[type="range"]::-moz-range-thumb {
        height: 24px;
        width: 24px;
        background-color: var(--primary);
        border-radius: 50%;
        border: none;
        transition: .2s ease-in-out;
    }

    /* Thumb: webkit */
    input[type="range"]::-webkit-slider-thumb:hover {
        background-color: var(--highlight);
    }

    /* Thumb: Firefox */
    input[type="range"]::-moz-range-thumb:hover {
        background-color: var(--highlight);
    }
</style>
