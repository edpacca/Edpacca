type DateStyle = Intl.DateTimeFormatOptions['dateStyle']

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = "en-gb") {
    const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
    return formatter.format(new Date(date));
}

export function randomMinMax(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export function randomDirection(): 1 | -1 {
    return Math.random() >= 0.5 ? 1 : -1;
}