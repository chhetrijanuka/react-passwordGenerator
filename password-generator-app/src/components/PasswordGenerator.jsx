import { useState } from 'react';
import PasswordOptions from './PasswordOptions';
import PasswordOutput from './PasswordOutput';
import { generatePassword } from '../utils/passwordUtils';

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState('');

  const handleGenerate = () => {
    const newPass = generatePassword({
      length,
      upper: includeUpper,
      lower: includeLower,
      numbers: includeNumbers,
      symbols: includeSymbols,
    });
    if (!newPass) {
      alert('Select at least one character type!');
      return;
    }
    setPassword(newPass);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="password-generator-wrapper">
      <h2>Password Generator</h2>
      <PasswordOptions
        length={length} setLength={setLength}
        includeUpper={includeUpper} setIncludeUpper={setIncludeUpper}
        includeLower={includeLower} setIncludeLower={setIncludeLower}
        includeNumbers={includeNumbers} setIncludeNumbers={setIncludeNumbers}
        includeSymbols={includeSymbols} setIncludeSymbols={setIncludeSymbols}
      />
      <button onClick={handleGenerate}>Generate Password</button>
      <PasswordOutput password={password} copyToClipboard={copyToClipboard} />
    </div>
  );
}
