import { Tabs } from 'antd';
import "./tab.css"
import CalculatorTab from './1 calculator tab';
import Guidetab from './guidetab';
import Interesttab from "./intrustratetab"

const items = [
  {
    key: '1',
    label: `Calculator`,
    children: <CalculatorTab/>,
  },
  {
    key: '2',
    label: `Guide`,
    children: <Guidetab/>,
  },
  {
    key: '3',
    label: `Interest rate`,
    children:<Interesttab/>
  },
];
const App = () => <Tabs defaultActiveKey="1" items={items}  />;

export default App;