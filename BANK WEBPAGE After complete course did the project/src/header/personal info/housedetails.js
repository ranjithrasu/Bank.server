import { Select } from 'antd';
const Housedetails= () => (
  
  <div>
    <p>Housing Status</p>
    <Select
    showSearch
    placeholder="House details"
    optionFilterProp="children"
    className='housedetail'
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: '1',
        label: 'Own',
      },
      {
        value: '2',
        label: 'Rent',
      },
      {
        value: '3',
        label: 'Others',
      },
      
    ]}
  />
  </div>
);
export default Housedetails;