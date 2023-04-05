import { Select } from 'antd';
const Alternatenumber= () => (
  
  <div>
    
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
        label: "SELECT",
      },
      {
        value: '2',
        label: 'HOME',
      },
      {
        value: '3',
        label: 'WORK',
      },
      
    ]}
  />
  </div>
);
export default Alternatenumber;