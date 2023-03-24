import React, { useState } from "react";

import { InputConfigType } from "../../types/StoreTypes";


interface CheckBoxMultiType {
  label: string;
  checked: boolean;
}


const CheckBoxMulti = (inputConfig: InputConfigType) => {

  // 初期値: false
  const [optionList, setOptions] = useState<string[]>([]);

  const onCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    
  };


  return (
    <div>
      <span>{inputConfig.description}</span>
      {
        inputConfig.required_flag ? <span className='requiredForm'>※ 入力必須</span> : ''
      }
      {
        inputConfig.option_list.map((item, idx) => {
          return (
            <div key={idx}>
              <input
                id={item}
                type="checkbox"
                value={item}
                onChange={ (e) => onCheckBox(e) }
              />
              <label htmlFor={item}>
                {item}
              </label>
            </div>
          )
        })
      }
    </div>
  )
};

export default CheckBoxMulti;