function formatDate(date, dateStyle = "medium", locales = "en-gb") {
  const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
  return formatter.format(new Date(date));
}
function dayOfYear(date) {
  const diff = date.valueOf() - new Date(date.getFullYear(), 0, 0).valueOf();
  return Math.floor(diff / (1e3 * 60 * 60 * 24));
}
function randomMinMax(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomDirection() {
  return Math.random() >= 0.5 ? 1 : -1;
}
export {
  randomDirection as a,
  dayOfYear as d,
  formatDate as f,
  randomMinMax as r
};
