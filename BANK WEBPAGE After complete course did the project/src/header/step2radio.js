import { Radio } from 'antd';
import { useState } from 'react';

const Step2radio = () => {
  const [value, setValue] = useState(0);
  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div style={{display:"flex"}} >
      <p style={{marginLeft:"50px"}}>Do you prefer to use a mailing address that is different from your residence address for this application?</p>
      
      <span style={{margintop:"20px"}}><Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Yes
      </Radio>
      <Radio value={2}>No</Radio>
    
    </Radio.Group>
    </span>
    </div>
    
    
  );
};
export default Step2radio;