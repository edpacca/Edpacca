<script>

</script>

<div class="control-container">
    <div class="left panel">

    </div>
    <div class="front-panel">
        <div class="controls">
            <div class="flex-center">
                <button>Reset</button>
            </div>
            <div class="flex-center">
                <button>Random</button>
            </div>
            <div class="flex-center">
                <button>Off</button>
            </div>
        </div>
    </div>
</div>
<div class="control-container">
    <div class="left panel">

    </div>
    <div class="square-panel">
    </div>
</div>

<style>
    .control-container {
        display: flex;
        flex-direction: row;
        width: 102%;
        position: relative;
    }

    .front-panel {
        width: 100%;
        transform: skew(20deg);
    }

    .square-panel {
        background-color: rgb(254, 202, 11);
        width: 100%;
        height: 32px;
    }

    .controls {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        justify-content: center;
        align-items: center;
        padding: 1em;
        background-color: rgb(254, 202, 11);
    }

    .panel {
        width: 5%;
    }

    button {
        width: 6em;
        height: 6em;
        border-radius: 100%;
        background-color: red;
    }

    .left {
        background-color: rgb(119, 132, 6);
        transform: translateX(24px);
    }
</style>