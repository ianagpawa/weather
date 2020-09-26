import moment from "moment"

const getFormattedDate = (date, format) => { return moment(date).format(format); }
export const getDayName = (date) => { return getFormattedDate(date, 'dddd'); }
export const getHour = (date) => { return getFormattedDate(date, 'LT'); }
export const getShortDate = (date) => { return getFormattedDate(date, 'Do MMM'); }
