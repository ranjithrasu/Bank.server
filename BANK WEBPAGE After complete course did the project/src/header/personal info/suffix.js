import { Select } from 'antd';
const Suffix= () => (
  
  <div>
    <p>Suffix</p>
    <Select
    showSearch
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Mr',
      },
      {
        value: '2',
        label: 'Ms',
      },
      {
        value: '3',
        label: 'Mrs',
      },
      
    ]}
  />
  </div>
);
export default Suffix;