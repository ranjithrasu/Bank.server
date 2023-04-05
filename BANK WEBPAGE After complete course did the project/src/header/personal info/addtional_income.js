import { Select } from 'antd';
const Add_Income= () => (
  
  <div>
    <Select
    showSearch
    placeholder="Select"
    optionFilterProp="children"
    className='Add_income'
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Alimony',
      },
      {
        value: '2',
        label: 'Overtime',
      }
      
    ]}
  />
  </div>
);
export default Add_Income;