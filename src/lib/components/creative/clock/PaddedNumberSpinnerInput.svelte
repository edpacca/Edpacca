<script lang="ts">
	import FaIcon from '../../utils/FaIcon.svelte';
	export let timeStr: string;
	export let parseChange: (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => void;
	export let subtractTime: () => void;
	export let addTime: () => void;

	let intervalId: undefined | NodeJS.Timeout = undefined;

	const changeRateMs = 75;

	const mouseDown = (fnc: () => void) => {
		if (!intervalId) {
			intervalId = setInterval(fnc, changeRateMs);
		}
	};

	const mouseUp = () => {
		clearInterval(intervalId);
		intervalId = undefined;
	};
</script>

<div class="input-spinners__container">
	<button
		class="spinner"
		onclick={addTime}
		onmousedown={() => mouseDown(addTime)}
		onmouseup={mouseUp}>
		<FaIcon icon="caret-up" />
	</button>
	<input
		value={timeStr}
		type="number"
		onchange={e => parseChange(e)}/>
	<button
		class="spinner"
		onclick={subtractTime}
		onmousedown={() => mouseDown(subtractTime)}
		onmouseup={mouseUp}>
		<FaIcon icon="caret-down" />
	</button>
</div>

<style>
	.input-spinners__container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	input {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	input {
		width: 3rem;
		padding: 0;
		font-size: 2rem;
		font-family: 'Silkscreen';
		color: var(--highlight-inverse);
		background-color: transparent;
		border: none;
		text-align: center;
	}

	button.spinner {
		border: none;
		background-color: transparent;
		color: var(--highlight-inverse);
		font-size: 2.5rem;
		padding: 0;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button.spinner:hover {
		color: var(--white);
		transition: 0.3s;
	}
</style>
