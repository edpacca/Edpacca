type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = "en-gb") {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
    return formatter.format(new Date(date));
}

export function randBetween(min: number, max: number) {
    return (Math.random() * (max - min)) + min;
}

export function randIntBetween(min: number, max: number) {
    return Math.floor(randBetween(min - 1, max));
}

export function randVariance(value: number, variance: number) {
    const min = value * (1 - variance);
    const max = value * (1 + variance);
    return randBetween(min, max);
}