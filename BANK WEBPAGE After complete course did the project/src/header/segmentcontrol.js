import { useState } from 'react';

import {  Segmented} from 'antd';

const Demo = () => {
    const [value, setValue] = useState('Accept')
 
 
  
    
  
  return (
    <div style={{
      display: 'block', width: 1000, 
    }}>
      
      <Segmented style={{
        width:1000
      }}
          width={1000} 
          value={value} 
          options={[
            { label: 'Accept', value: 'Accept' },
            { label: 'Reject', value: 'Reject' },
            { label: 'Exit', value: 'Exit' },
          ]} 
          onChange={(data) => setValue(data)} />
  
  

    {/* <div>
        {options.map((items)=>{
            if(items=="Daily"){
                return(
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                )
            }
        })}
    </div> */}
    </div>
  );
};
export default Demo;