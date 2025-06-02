export const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
export const NUMBERS = '0123456789';
export const SYMBOLS = '!@#$%^&*()_+-=[]{}|;:,.<>?';

export function generatePassword({ length, upper, lower, numbers, symbols }) {
  let charset = '';
  if (upper) charset += UPPERCASE;
  if (lower) charset += LOWERCASE;
  if (numbers) charset += NUMBERS;
  if (symbols) charset += SYMBOLS;

  if (!charset) return '';

  let result = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * charset.length);
    result += charset[index];
  }
  return result;
}
