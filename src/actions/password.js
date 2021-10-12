export const generatePassword = (
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  allowedSymbols) => {
    let passwordCharacters = [];

    if (includeUppercase) {
      for (let i = 65; i < 91; i++) {
        passwordCharacters.push(i);
      }
    }

    if (includeLowercase) {
      for (let i = 97; i < 123; i++) {
        passwordCharacters.push(i);
      }
    }

    if (includeNumbers) {
      for (let i = 48; i < 58; i++) {
        passwordCharacters.push(i);
      }
    }

    if (allowedSymbols && allowedSymbols.length > 0) {
      for (let i = 0; i < allowedSymbols.length; i++) {
        allowedSymbols[i] && passwordCharacters.push(allowedSymbols[i].charCodeAt(0));
      }
    }

    // generate passwrod
    let newPassword = makePassword(passwordLength, passwordCharacters);

    // verify password
    while (!verifyPassword(newPassword, includeUppercase, includeLowercase, includeNumbers, allowedSymbols)) {
      newPassword = makePassword(passwordLength, passwordCharacters);
    }

    return newPassword;
}

const makePassword = (passwordLength, passwordCharacters) => {
  console.log('passwordCharacters', passwordCharacters);
  let newPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    newPassword += String.fromCharCode(passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
  }

  return newPassword;
}

const verifyPassword = (password, includeUppercase, includeLowercase, includeNumbers, allowedSymbols) => {
  if (includeUppercase && !/[A-Z]+/i.test(password)) return false;
  if (includeLowercase && !/[a-z]+/i.test(password)) return false;
  if (includeNumbers && !/[0-9]+/i.test(password)) return false;
  if (allowedSymbols.length > 0 && !/[!?"'#$%^&*(){}\[\]@;:~+-]+/i.test(password)) return false;

  return true;
};
