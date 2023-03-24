import React, { useState } from "react";

import { InputConfigType } from "../../types/StoreTypes";

// Textタイプの入力フォーム
const TextInput = (inputConfig: InputConfigType) => {

  const [ textData, setInputText ] = useState<string>('');
  const inputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    console.log('textData', textData);
  };

  return (
    <div>
      <span>{inputConfig.description}</span>
      {
        inputConfig.required_flag ? <span className='requiredForm'>※ 入力必須</span> : ''
      }
      <input 
        type="text" 
        value={textData} 
        onChange={(e) => {inputText(e)}}
       />
    </div>
  )
}

export default TextInput;
