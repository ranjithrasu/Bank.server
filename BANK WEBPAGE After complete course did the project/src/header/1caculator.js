import { Col, InputNumber, Row, Slider, Space } from 'antd';
import { useState } from 'react';
import "./1calcu;ator.css"
const formatter = (value) => `${value}%`;

const IntegerStep = () => {
 
  const [inputValue, setInputValue] = useState(50000);
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  
  const [inputValue1, setInputValue1] = useState(7);
  const onChange1 = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue1(value);
  };
  const [inputValue11, setInputValue11] = useState(12);
  const onChange11 = (value) => {
    if (isNaN(value)) {
      return;
    }
    setInputValue11(value);
  };
  const Intrestold = inputValue1/100/12;
  const x = Math.pow(1+Intrestold,inputValue11)
  const monthlyemi=(inputValue*Intrestold*x / (x-1))
  const tableinterest=(inputValue/12)*(inputValue1/100)
  return (
    <div>
    <div style={{
            display:'flex',
            justifyContent:"space-between",
            width:"80%",
            padding:"0px 160px"
          }}>
    <div  >
      
    <div>
         <div style={{
            display:'flex',
            width:"400px"
          }} >
        <h1>Loan Amount ()</h1>
        <span>
       <Row>
      <Col span={4}>
        <InputNumber
          min={50000}
          max={500000}

          style={{
            width:125,marginTop:26,marginLeft:60
          }}
          step={5000}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
    </span>
    </div>
    <Row>
      <Col span={12}>
        <Slider
          min={50000}
          max={4000000}
          style={{
            width:"400px"
          }}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 7}
        />
      </Col>
      </Row>
      </div>
      <div>
     <div style={{
            display:'flex'
          }} >
        <h1>Intrest Rate (p.a)</h1>
        <span>
      <Row>
      <Col span={4}>
        <InputNumber
          min={7}
          max={24}
          style={{
            width:125,marginTop:26,marginLeft:45
          }}
          step={0.5}
          value={inputValue1}
          onChange={onChange1}
        />
      </Col>
    </Row>
    </span>
    </div>
    <Row>
      <Col span={12}>
        <Slider
          min={7}
          max={24}
          style={{
            width:"200%"
          }}
          tooltip={{formatter}}
          onChange={onChange1}
          value={typeof inputValue1 === 'number' ? inputValue1 : 0}
          step={0.5}
        />
      </Col>
      </Row>
     
    </div>
    <div>
     <div  style={{
            display:'flex'
          }} >
        <h1>Tenure (months)</h1>
        <span>
      <Row>
      <Col span={4}>
        <InputNumber
          min={12}
          max={36}
          style={{
            width:125,marginTop:25,marginLeft:50
          }}
          step={1}
          value={inputValue11}
          onChange={onChange11}
        />
      </Col>
    </Row>
    </span>
    </div>
    <Row>
      <Col span={12}>
        <Slider
          min={12}
          max={36}
          style={{
            width:"200%"
          }}
          onChange={onChange11}
          value={typeof inputValue11 === 'number' ? inputValue11 : 0}
          step={1}
        />
      </Col>
      </Row>
     
    </div>
      </div>
      <div  style={{
            width:300,backgroundColor:"#39821c08",textAlign:"center",margin:" 10px 30px",
          }}>
        <h1 style={{
           marginTop:30
          }} >Equated Monthly Installments (EMI)</h1>
        <div style={{
            color:"#008000",marginBottom:30,fontWeight:"bold",fontSize:50
          }}> RS.{monthlyemi.toFixed()}   </div>
        <div style={{
            backgroundColor:"#008000",width:225,padding:10,marginLeft:25,borderRadius:10
          }}> Get Instant Funds  </div>
      </div>
     </div>
     {/* <table>
      <tr>
        <th>Month</th>
        <th>Opening Balance</th>
        <th>Interest paid during the month </th>
        <th>Principle repaid during the mponth</th>
        <th>Closing bance</th>
      </tr>
      <tr>
        <td>1</td>
        <td>{inputValue}</td>
        <td>{tableinterest.toFixed()}</td>
        
      </tr>

     </table>
    
 <Pagination defaultCurrent={2} total={50} />; */}

     </div>
  );
};

const Appemi = () => (
  <Space
    style={{
      width: '100%',
    }}
    
  >
    <IntegerStep />
  
  </Space>
);
export default Appemi;