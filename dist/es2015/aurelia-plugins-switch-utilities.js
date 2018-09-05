var _class, _temp;

export let Utilities = (_temp = _class = class Utilities {
  static random(length, characters = this.allCharacters) {
    const result = new Array(length);
    for (let i = 0; i < length; i++) result[i] = characters[Math.floor(Math.random() * characters.length)];
    return result.join('');
  }
}, _class.allCharacters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789', _temp);