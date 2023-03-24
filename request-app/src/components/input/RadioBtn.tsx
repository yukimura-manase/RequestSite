import React, { useState } from "react";

import { InputConfigType } from "../../types/StoreTypes";

const RadioBtn = (inputConfig: InputConfigType) => {
  
  // 初期値: OptionListの先頭
  const [ radioVal, setRadioVal ] = useState<string>(inputConfig.option_list[0]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioVal(e.target.value);
    console.log('radioVal', radioVal);
  };

  return (
    <div>
      <span>{inputConfig.description}</span>
      {
        inputConfig.required_flag ? <span className='requiredForm'>※ 入力必須</span> : ''
      }
      {
        inputConfig.option_list.map((item) => {
          return (
            <div key={item}>
              <input
                id={item}
                type="radio"
                value={item}
                onChange={ (e) => handleChange(e) }
                checked={item === radioVal}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          )
        })
      }
    </div>
  )
};

export default RadioBtn;