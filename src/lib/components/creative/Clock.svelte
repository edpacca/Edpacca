<script lang="ts">
	import FaIcon from '../utils/FaIcon.svelte';
	export let timeHours: number;
	export let timeMinutes: number;

	let hourInput: HTMLInputElement;
	let minuteInput: HTMLInputElement;

	const enforceMinMax = (input: HTMLInputElement, setValue: number) => {
		if (!input.valueAsNumber) {
			console.log(input.valueAsNumber);
			input.value = '00';
		}
		if (input.value != '') {
			const currentValue = parseInt(input.value);
			const min = parseInt(input.min);
			const max = parseInt(input.max);
			if (currentValue < min) {
				input.value = input.min;
				setValue = min;
			}
			if (parseInt(input.value) > parseInt(input.max)) {
				input.value = input.max;
				setValue = max;
			}
			if (currentValue < 10) {
				input.value = '0' + currentValue;

			}
		}

	};

	const addMinute = () => {
		timeMinutes = (timeMinutes + 1) % 60;
	}
	const subtractMinute = () => {
		timeMinutes = (timeMinutes - 1) % -60;
	}
</script>

<div class="clock__container">
	<div class="clock-body">
		<button class="spinner" on:click={addMinute}><FaIcon icon="caret-up" /></button>
		<div class="clock-face">
			<input
				bind:this={hourInput}
				type="number"
				inputmode="numeric"
				min="00"
				max="24"
				bind:value={timeHours}
				on:keyup={(e) => enforceMinMax(hourInput, timeHours)}
			/>
			<span>:</span>
			<input
			 	bind:this={minuteInput}
				type="number"
				inputmode="numeric"
				min="00"
				max="59"
				bind:value={timeMinutes}
				on:keyup={(e) => enforceMinMax(minuteInput, timeMinutes)}
			/>
		</div>
		<button class="spinner" on:click={subtractMinute}><FaIcon icon="caret-down"/></button>
	</div>
</div>

<style>
	.clock__container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.clock-body {
		background-color: var(--grey);
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

	input[type='number'] {
		-moz-appearance: textfield;
		appearance: textfield;
	}

	input[type='number'] {
		width: 3rem;
		padding: 0;
		font-size: 2rem;
		font-family: 'Silkscreen';
		color: var(--highlight);
		background-color: var(--grey);
		border: none;
	}

	span {
		font-weight: bold;
		color: var(--highlight);
	}

	button.spinner {
		border: none;
		background-color: transparent;
		color: var(--highlight);
		font-size: 2.5rem;
		padding: 0;
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	button.spinner:hover {
		color: var(--primary);
		transition: 0.3s;
	}
</style>
