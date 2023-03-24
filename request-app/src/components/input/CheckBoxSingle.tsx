import React, { useState } from "react";

import { InputConfigType } from "../../types/StoreTypes";

const CheckBoxSingle = (inputConfig: InputConfigType) => {

  // 初期値: false
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const checkEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <span>{inputConfig.description}</span>
      {
        inputConfig.required_flag ? <span className='requiredForm'>※ 入力必須</span> : ''
      }
      <div>
        <input
          type="checkbox"
          id={`check_${inputConfig.input_id}`}
          checked={isChecked}
          onChange={(e) => checkEvent(e)}
        />
      </div>
    </div>
  )
};

export default CheckBoxSingle;