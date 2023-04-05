import { Select } from 'antd';
const Country= () => (
  
  <div>
    <Select
    showSearch
    placeholder="Search to Country"
    optionFilterProp="children"
    className='Countryss'
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'India',
      },
      {
        value: '2',
        label: 'Dubai',
      },
      {
        value: '3',
        label: 'Germany',
      },
      
    ]}
  />
  </div>
);
export default Country;