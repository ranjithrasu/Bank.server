import { Select } from 'antd';
const Bankmethods= () => (
  <Select
    showSearch
    style={{
      width: 350,
        }}
    placeholder="Search to Select"
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Online Banking',
      },
      {
        value: '2',
        label: 'Debit Card & pin',
      },
      {
        value: '3',
        label: 'Account Number',
      },
      
    ]}
  />
);
export default Bankmethods;