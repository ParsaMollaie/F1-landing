export function convertToPersianDigits(text) {
  const persianDigits = ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
  return text.replace(/\d/g, (d) => persianDigits[d]);
}
