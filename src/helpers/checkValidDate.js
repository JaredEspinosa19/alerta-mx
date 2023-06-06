
const DATE_REGEX = /^(\d{4})(-)(0[1-9]|1[012])(-)(0[1-9]|[1-2]\d|3[01])$/;
const CURRENT_YEAR = new Date().getFullYear();

export const checkValidateDate = (date) =>{

  if(!date.match(DATE_REGEX)){
    return false;
  }

  const day = parseInt(date.split('-')[2]);
  const month = parseInt(date.split('-')[1]);
  const year = parseInt(date.split('-')[0]);
  const monthDays = new Date(year, month, 0).getDate();
  
  if (day > monthDays) {
    return false
  }

  if (year > CURRENT_YEAR) {
    return false
  }
  return true

}