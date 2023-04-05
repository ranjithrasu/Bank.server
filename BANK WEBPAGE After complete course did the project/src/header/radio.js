import { Radio } from 'antd';
import { useState } from 'react';

import Bankmethods from "./bankingmethod";
import Password from "./password";
const Radioo = () => {
  const [value, setValue] = useState(0);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div>
        <div><p>Are you our bank customer ?</p></div>
    
      <Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Yes 
      </Radio>
      <Radio value={2}>No</Radio>
      {value===1? <div >
        <div style={{marginLeft:72,textAlign:"start"}}>
        <p>Choose a sign-in method</p>
        <Bankmethods></Bankmethods></div>
        <div style={{marginLeft:72,textAlign:"start"}}><p>Debit Card Number</p>
        <Password></Password></div>
        <div style={{marginLeft:72,textAlign:"start"}}><p>Debit Card Pin</p>
        <Password></Password>
        </div>
        </div>
  :null}
        
    </Radio.Group>
    </div>
    
  );
};
export default Radioo;