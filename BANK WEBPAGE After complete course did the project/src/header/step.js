import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import Personalinformation from './personal info/personalinformation';
import Inputbox from './inputbox';
import Appformicon from './appform3rd';
import Callicon from './personal info/appform4th';
const steps = [
  {
    title: 'Getting Started',
    content: <Inputbox></Inputbox>},
  {
    title: 'Personal Information',
    content: <Personalinformation></Personalinformation>,
  },
  {
    title: 'Loan Information',
    content: <Appformicon></Appformicon>,
  },
  {
    title: 'Confirmation',
    content: <Callicon></Callicon>,
  },
];
const Stepsorder = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '43px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary"
          style={{
            float:"right",
            margin:"0px 8px"
          }} onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary"
          style={{
            float:"left",
            margin:"0px 8px"
          }} onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0px 8px',
              float:"right",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div>
    </>
  );
};
export default Stepsorder;