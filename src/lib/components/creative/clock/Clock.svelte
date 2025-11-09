<script lang="ts">
	import FaIcon from '../../utils/FaIcon.svelte';
	export let timeHours: number;
	export let timeMinutes: number;

	let hourInput: HTMLInputElement;
	let minuteInput: HTMLInputElement;

	const changeRateMs = 100;

	const setAndFormat = (input: HTMLInputElement, setValue: number) => {

		console.log("-----")
		console.log(input.value);
		if (!input) {
			return;
		}

		if (!input.value) {
			input.value = '00';
		} else {
			const currentValue = parseInt(input.value);
			if (currentValue < 10) {
				input.value = String(input.value).padStart(2, '0');
			}
		}
		console.log(input.value);
		console.log("-----")
	};

	const addMinute = () => {
		console.log("add minute")
		timeMinutes = (timeMinutes + 1) % 60;
		if (timeMinutes == 0) {
			timeHours = (timeHours + 1) % 24
		}
		console.log(timeMinutes);
		console.log(minuteInput.value);
		setAndFormat(minuteInput);
	};
	const subtractMinute = () => {
		console.log("subtract minute")
		timeMinutes = timeMinutes <= 0 ? 59 : timeMinutes - 1;
		if (timeMinutes == 59) {
			timeHours = timeHours <= 0 ? 24 : timeHours - 1;
		}
		setAndFormat(minuteInput);
	};

	let intervalId: undefined | NodeJS.Timeout = undefined;
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

<div class="clock__container">
	<div class="clock-body">
		<button
			class="spinner"
			on:click={addMinute}
			on:mousedown={() => mouseDown(addMinute)}
			on:mouseup={mouseUp}><FaIcon icon="caret-up" />
		</button>
		<div class="clock-face">
			<input
				bind:this={hourInput}
				type="number"
				inputmode="numeric"
				min="00"
				max="24"
				bind:value={timeHours}
				on:change={() => setAndFormat(hourInput)}
			/>
			<span>:</span>
			<input
				bind:this={minuteInput}
				min="00"
				max="59"
				on:change={() => setAndFormat(minuteInput)}
			/>
		</div>
		<button
			class="spinner"
			on:click={subtractMinute}
			on:mousedown={() => mouseDown(subtractMinute)}
			on:mouseup={mouseUp}><FaIcon icon="caret-down" />
		</button>
	</div>
</div>

<style>
	.clock__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.clock-body {
		background-color: var(--primary-25);
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 0;
		padding: 0.5rem 2rem;
		border-radius: 2rem;
	}

	.clock-face {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
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
	}

	span {
		font-weight: bold;
		color: var(--highlight);
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
