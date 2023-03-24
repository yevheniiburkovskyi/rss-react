export default class Validator {
  checkName(value: string | undefined) {
    if (value && /[a-z]{2,}/gi.test(value)) {
      return value;
    }
    return undefined;
  }
  checkSex(firstElem: HTMLInputElement | null, secondElem: HTMLInputElement | null) {
    if (firstElem && firstElem.checked) {
      return firstElem.value;
    } else if (secondElem && secondElem.checked) {
      return secondElem.value;
    }
  }
  checkDate(value: string | undefined) {
    if (value) {
      if (Date.parse(value) < Date.parse(new Date().toString())) {
        return value;
      }
    }
  }
}
