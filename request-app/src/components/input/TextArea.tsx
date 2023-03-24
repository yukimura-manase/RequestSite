import React, { useState } from "react";

import { InputConfigType } from "../../types/StoreTypes";

// TextAreaタイプの入力フォーム
const TextAreaInput = (inputConfig: InputConfigType) => {

  const [ textAreaData, setInputTextArea ] = useState<string>('');
  const inputTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputTextArea(e.target.value);
    console.log('textAreaData', textAreaData);
  };

  return (
    <div>
      <span>{inputConfig.description}</span>
      {
        inputConfig.required_flag ? <span className='requiredForm'>※ 入力必須</span> : ''
      }
      <textarea 
        value={textAreaData}
        onChange={(e) => {inputTextArea(e)}}
      />
    </div>
  )
}

export default TextAreaInput;
