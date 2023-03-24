export default class Validator {
  checkName(value: string | undefined) {
    if (value && /[a-z]{2,}/gi.test(value)) {
      return value;
    }
    return undefined;
  }
  checkDate(value: string | undefined) {
    if (value) {
      if (Date.parse(value) < Date.parse(new Date().toString())) {
        return value;
      }
    }
  }
}
