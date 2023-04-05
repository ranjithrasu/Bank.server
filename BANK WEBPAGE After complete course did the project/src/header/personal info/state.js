import { Select } from 'antd';
const State= () => (
  
  <div>
    <Select
    showSearch
    placeholder="Search to State"
    optionFilterProp="children"
    className='state'
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Tamilnadu',
      },
      {
        value: '2',
        label: 'kerala',
      },
      {
        value: '3',
        label: 'karnataka',
      },
      
    ]}
  />
  </div>
);
export default State;