<script lang="ts">
	import PaddedNumberSpinnerInput from './PaddedNumberSpinnerInput.svelte';
	export let timeHours: number;
	export let timeMinutes: number;


	const addMinute = () => {
		timeMinutes = (timeMinutes + 1) % 60;
		setMinuteStr();
		if (timeMinutes == 0) {
			addHour();
		}
	};

	const subtractMinute = () => {
		timeMinutes = timeMinutes <= 0 ? 59 : timeMinutes - 1;
		setMinuteStr();
		if (timeMinutes == 59) {
			subtractHour();
		}
	};

	const addHour = () => {
		timeHours = (timeHours + 1) % 24;
		setHourStr();
	}

	const subtractHour = () => {
		timeHours = timeHours <= 0 ? 24 : timeHours - 1;
		setHourStr();
	}

	const formatValue = (setValue: number): string => {
		const strValue = setValue.toString();
		return setValue < 10 ? strValue.padStart(2, '0') : strValue;
	};

	const parseInputChange = (e: Event & { currentTarget: EventTarget & HTMLInputElement }): number => {
		const value = e.currentTarget.valueAsNumber;
		return isNaN(value) ? 0 : value;
	}

	const parseMinuteChange = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		timeMinutes = Math.min(parseInputChange(e), 59);
		setMinuteStr();
		e.currentTarget.value = timeMinutesStr;
	}

	const parseHourChange = (e: Event & { currentTarget: EventTarget & HTMLInputElement }) => {
		timeHours = Math.min(parseInputChange(e), 23);
		setHourStr();
		e.currentTarget.value = timeHoursStr;
	}


	const setMinuteStr = () => {
		timeMinutesStr = formatValue(timeMinutes);
	}

	const setHourStr = () => {
		timeHoursStr = formatValue(timeHours);
	}

	let timeHoursStr = formatValue(timeHours);
	let timeMinutesStr = formatValue(timeMinutes);

</script>

<div class="clock__container">
	<div class="clock-body">
		<div class="clock-dials__container">
			<PaddedNumberSpinnerInput
				timeStr={timeHoursStr}
				addTime={addHour}
				subtractTime={subtractHour}
				parseChange={parseHourChange}/>
			<span>:</span>
			<PaddedNumberSpinnerInput
				timeStr={timeMinutesStr}
				addTime={addMinute}
				subtractTime={subtractMinute}
				parseChange={parseMinuteChange}
			/>
		</div>
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
		padding: 0.5rem 2rem;
		border-radius: 2rem;
	}

	.clock-dials__container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
	}

	span {
		font-weight: bold;
		color: var(--highlight);
		font-size: 2rem;
	}
</style>
