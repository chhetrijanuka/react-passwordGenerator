export default function PasswordOutput({ password, copyToClipboard }) {
    if (!password) return null;
  
    return (
      <>
        <h3>{password}</h3>
        <button onClick={copyToClipboard}>Copy to Clipboard</button>
      </>
    );
  }
  