import React, { useEffect, useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';
import { darcula } from '@uiw/codemirror-themes-all';
import {material} from '@uiw/codemirror-themes-all'

export default function TestPage() {
  const [code, setCode] = useState('');

  useEffect(() => {
    // Load the text file using the Fetch API
    fetch(process.env.PUBLIC_URL + '/testcode.txt')
      .then((response) => response.text())
      .then((text) => {
        console.log(text);
        setCode(text)});
  }, []);

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <div>
      This is Code CodeMirror
      <CodeMirror
        value={code}
        height="800px"
        theme={material}
        extensions={[python()]}
        onChange={onChange}
      />
    </div>
  );
}
