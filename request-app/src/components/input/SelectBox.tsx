import React, { useState } from "react";

import { InputConfigType } from "../../types/StoreTypes";

const SelectBox = (inputConfig: InputConfigType) => {

  const [ seleceOpt, setSelectOpt] = useState<string>('');
  const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOpt(e.target.value);
  };

  return (
    <div>
      <span>{inputConfig.description}</span>
      {
        inputConfig.required_flag ? <span className='requiredForm'>※ 入力必須</span> : ''
      }
      <div>
        <select value={seleceOpt} onChange={ (e) => handleChange(e) }>
          {inputConfig.option_list.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
};

export default SelectBox;