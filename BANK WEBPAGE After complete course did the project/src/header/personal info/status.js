import { Select } from 'antd';
const Status= () => (
  
  <div>
    <Select
    showSearch
    placeholder="Select Status"
    optionFilterProp="children"
    className='statusss'
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Employee',
      },
      {
        value: '2',
        label: 'Self-Employed',
      }
      
    ]}
  />
  </div>
);
export default Status;