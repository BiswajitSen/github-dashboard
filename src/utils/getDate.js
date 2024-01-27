export const getDateInformation = (date) => {
  const [month, day, year] = new Date(date)
    .toLocaleString()
    .split(",")
    .at(0)
    .split("/");

  return { day: +day, month: +month, year: +year };
};

const areSame = (day1, day2) => day1 === day2;

export const areDatesSame = (date1, date2) => {
  return (
    areSame(date1.day, date2.day) &&
    areSame(date1.day, date2.day) &&
    areSame(date1.year, date1.year)
  );
};

export default getDateInformation;
