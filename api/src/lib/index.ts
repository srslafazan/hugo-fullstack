export function getNextYear() {
  let oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  return oneYearFromNow.getFullYear();
}

export function yearsDiff(dateFrom: Date, dateTo: Date): number {
  const date1 = new Date(dateFrom);
  const date2 = new Date(dateTo);
  const yearsDiff = date2.getFullYear() - date1.getFullYear();
  return yearsDiff;
}
