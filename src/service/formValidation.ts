export default class Validator {
  checkName(value: string | undefined) {
    if (value && /[a-z]{2,}/gi.test(value)) {
      return value;
    }
    return undefined;
  }
  checkDate(value: string | undefined) {
    if (value) {
      const dateArr = value.split('-');
      if (parseInt(dateArr[0]) < 1900) {
        return undefined;
      }
    }
    return value;
  }
}
