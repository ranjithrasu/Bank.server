import "./locationpanal.css"
import { Collapse } from 'antd';
const { Panel } = Collapse;


const App = () => (
  <Collapse >
    <Panel header="Show more hours" key="1">
  <div className='panal1'>
    <h5 className='panalhead'>Branch (Lobby):</h5>
    <p className='panalp'>Mon-Thu: 9am-5pm</p>
    <p className='panalp'>Fri: 9am-6pm</p>
    <p className='panalp'>Sat: Closed</p>
    <p className='panalp'>Sun: Closed</p>
  </div>
  <div className='panal2' style={{marginTop:30}}>
  <h5 className='panalhead'>ATM:</h5>
  <p className='panalp'>24hrs</p>
  </div>
    </Panel>
  
  </Collapse>
);
export default App;