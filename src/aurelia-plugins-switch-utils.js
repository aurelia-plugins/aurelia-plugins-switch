// PUBLIC CLASS
export class Utils {
  // STATIC METHODS
  static random(length, characters) {
    var result = new Array(length);
    characters = characters || 'abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ0123456789';
    for (var i = 0, j = length; i < j; i++)
      result[i] = characters[Math.floor(Math.random() * characters.length)];
    return result.join('');
  };
}
