import React, { useState } from "react";

import { InputConfigType } from "../../types/StoreTypes";

const SelectBoxMulti: React.FC<InputConfigType> = (inputConfig: InputConfigType) => {

  const [ seleceOpt, setSelectOpt] = useState<string>('');
  const handleChange = (e:  React.ChangeEvent<HTMLSelectElement>) => {
    setSelectOpt(e.target.value);
  };

  return (
    <div>
      <select value={seleceOpt} onChange={ (e) => handleChange(e) }>
        {inputConfig.option_list.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
};

export default SelectBoxMulti;