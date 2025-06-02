export default function PasswordOptions({
    length, setLength,
    includeUpper, setIncludeUpper,
    includeLower, setIncludeLower,
    includeNumbers, setIncludeNumbers,
    includeSymbols, setIncludeSymbols
  }) {
    return (
      <>
        <label>
          Length: {length}
          <input
            type="range"
            min="4"
            max="30"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
          />
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeUpper}
            onChange={() => setIncludeUpper(!includeUpper)}
          />
          Include Uppercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeLower}
            onChange={() => setIncludeLower(!includeLower)}
          />
          Include Lowercase
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Include Numbers
        </label>
        <label>
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
          Include Symbols
        </label>
      </>
    );
  }
  