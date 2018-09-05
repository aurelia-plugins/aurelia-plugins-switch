// PUBLIC CLASS
export class Utilities {
  // STATIC PROPERTIES
  static allCharacters = 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';

  // STATIC METHODS
  static random(length, characters = this.allCharacters) {
    const result = new Array(length);
    for (let i = 0; i < length; i++)
      result[i] = characters[Math.floor(Math.random() * characters.length)];
    return result.join('');
  }
}