type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(
	date: string,
	dateStyle: DateStyle = 'medium',
	locales = 'en-gb'
): string {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

export function dayOfYear(date: Date) {
	const diff = date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf();
	return Math.floor(diff / (1000 * 60 * 60 * 24));
}

