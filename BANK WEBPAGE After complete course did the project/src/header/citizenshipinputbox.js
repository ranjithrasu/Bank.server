import { Select } from 'antd';
const Citizen= () => (
  <Select
    showSearch
    style={{
      width: 350,
      marginLeft:123  }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Indian Citizen',
      },
      {
        value: '2',
        label: 'Non-Resident Alien',
      },
      {
        value: '3',
        label: 'Permanent Resident Alien',
      },
      
    ]}
  />
);
export default Citizen;