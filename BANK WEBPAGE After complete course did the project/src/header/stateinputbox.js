import { Select } from 'antd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


<BrowserRouter>
<Routes>
<Route path="/" element={<input/>}></Route>
</Routes>
</BrowserRouter>
const Stateinput = () => (
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
        label: 'TAMILNADU',
      },
      {
        value: '2',
        label: 'KARNATAKA',
      },
      {
        value: '3',
        label: 'ANDRAPRADESH',
      },
      {
        value: '4',
        label: 'KERALA',
      },
      {
        value: '5',
        label: 'TELEGANA',
      },
      {
        value: '6',
        label: 'GOA',
      },
    ]}
  />
);
export default Stateinput;