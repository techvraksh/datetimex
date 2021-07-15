module.exports = {

  getMonth: (date, format = 'en-US') => {
    var options = { month: 'long' };
    return date.toLocaleDateString(format, options)
    //return getAllMonths().find((month) => month.id === [date.getMonth()]);
  },
  getDay: (date, format = 'en-US') => {
    return date.toLocaleDateString(format, options)
    //return getAllDays().find((day) => day.id === [date.getDay()]);
  },
};
