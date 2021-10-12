import { useEffect, useRef, useState } from 'react';
import { generatePassword } from '../../actions/password';
import { PasswordGeneratorContainer, DropDownCheckListContainer } from './styles';

export default function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(24);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [allowedSymbols, setAllowedSymbols] = useState([]);
  const [generatedPassword, setGeneratedPassword] = useState('');
  const symbolListRef = useRef(null);

  useEffect(() => {
    onGeneratePasswordClick();
  }, []);

  const onGeneratePasswordClick = () => {
    const newPassword = generatePassword(
      passwordLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      allowedSymbols,
    );

    setGeneratedPassword(newPassword);
  };

  const onCheckListClick = () => {
    if (symbolListRef.current?.classList.contains('visible')) {
      symbolListRef.current?.classList.remove('visible');
    } else {
      symbolListRef.current?.classList.add('visible');
    }
  };

  const onSymbolCheckboxClick = (e) => {
    if (e.target.checked) {
      if (!allowedSymbols.includes(e.target.value)) {
        allowedSymbols.push(e.target.value);
      }
    } else {
      const updatedSymbols = [...allowedSymbols];
      const index = updatedSymbols.indexOf(e.target.value);
      if (index !== -1) {
        updatedSymbols.splice(index, 1);
      }
      setAllowedSymbols(updatedSymbols);
    }
  };

  return (
    <PasswordGeneratorContainer>
      <div className="form-group">
        <input type="text" readOnly={true} id="txtPassword" value={generatedPassword} />
        <input type="button" onClick={onGeneratePasswordClick} id="btnGenerate" value="generate" />
      </div>
      <div className="form-group">
        <input
          type="text"
          id="txtPasswordLength"
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
        />
        <label htmlFor="txtPasswordLength">length</label>
        <input
          type="checkbox"
          id="chkUppercase"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
        <label htmlFor="chkUppercase">uppercase</label>
        <input
          type="checkbox"
          id="chkLowercase"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
        <label htmlFor="chkLowercase">lowercase</label>
        <input
          type="checkbox"
          id="chkNumbers"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
        <label htmlFor="chkNumbers">numbers</label>
        <input
          type="checkbox"
          id="chkSymbols"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
        />
        <label htmlFor="chkSymbols">symbols</label>
        {
          includeSymbols && <DropDownCheckListContainer ref={symbolListRef}>
            <span className="symbolsPlaceholder" onClick={onCheckListClick}>&nbsp;</span>
            <ul className="items">
              <li><input type="checkbox" value="!" onChange={onSymbolCheckboxClick} defaultChecked /><label>!</label></li>
              <li><input type="checkbox" value="?" onChange={onSymbolCheckboxClick} defaultChecked /><label>?</label></li>
              <li><input type="checkbox" value="*" onChange={onSymbolCheckboxClick} defaultChecked /><label>*</label></li>
              <li><input type="checkbox" value="+" onChange={onSymbolCheckboxClick} defaultChecked /><label>+</label></li>
              <li><input type="checkbox" value="-" onChange={onSymbolCheckboxClick} defaultChecked /><label>-</label></li>
              <li><input type="checkbox" value='"' onChange={onSymbolCheckboxClick} defaultChecked /><label>"</label></li>
              <li><input type="checkbox" value="'" onChange={onSymbolCheckboxClick} defaultChecked /><label>'</label></li>
              <li><input type="checkbox" value="#" onChange={onSymbolCheckboxClick} defaultChecked /><label>#</label></li>
              <li><input type="checkbox" value="$" onChange={onSymbolCheckboxClick} defaultChecked /><label>$</label></li>
              <li><input type="checkbox" value="%" onChange={onSymbolCheckboxClick} defaultChecked /><label>%</label></li>
              <li><input type="checkbox" value="&amp;" onChange={onSymbolCheckboxClick} defaultChecked /><label>&amp;</label></li>
              <li><input type="checkbox" value="@" onChange={onSymbolCheckboxClick} defaultChecked /><label>@</label></li>
              <li><input type="checkbox" value="~" onChange={onSymbolCheckboxClick} defaultChecked /><label>~</label></li>
              <li><input type="checkbox" value="^" onChange={onSymbolCheckboxClick} defaultChecked /><label>^</label></li>
              <li><input type="checkbox" value="_" onChange={onSymbolCheckboxClick} defaultChecked /><label>_</label></li>
              <li><input type="checkbox" value=":" onChange={onSymbolCheckboxClick} defaultChecked /><label>:</label></li>
              <li><input type="checkbox" value=";" onChange={onSymbolCheckboxClick} defaultChecked /><label>;</label></li>
              <li><input type="checkbox" value="(" onChange={onSymbolCheckboxClick} defaultChecked /><label>(</label></li>
              <li><input type="checkbox" value=")" onChange={onSymbolCheckboxClick} defaultChecked /><label>)</label></li>
              <li><input type="checkbox" value="[" onChange={onSymbolCheckboxClick} defaultChecked /><label>[</label></li>
              <li><input type="checkbox" value="]" onChange={onSymbolCheckboxClick} defaultChecked /><label>]</label></li>
              <li><input type="checkbox" value="{" onChange={onSymbolCheckboxClick} defaultChecked /><label>{`{`}</label></li>
              <li><input type="checkbox" value="}" onChange={onSymbolCheckboxClick} defaultChecked /><label>{`}`}</label></li>
            </ul>
          </DropDownCheckListContainer>
        }
      </div>
    </PasswordGeneratorContainer>
  );
};
