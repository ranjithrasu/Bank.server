import { Radio } from 'antd';
import { useState } from 'react';

const Step3radio = () => {
  const [value, setValue] = useState(0);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div  >
      
      <span style={{margintop:"10px",marginLeft:"0px" }}><Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Current 
      </Radio>
      <Radio value={2}>Previous</Radio>
    
    </Radio.Group>
    </span>
    </div>
    
    
  );
};
export default Step3radio;