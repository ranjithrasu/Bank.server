import React from 'react'; import { Table } from 'antd';

function TableInput(props) {

const data = props.results.row

const columns = [{

title: 'Month', 
dataIndex: 'id',
 key: 'month',
fixed: 'left', 
width: '100px'
},{
title: 'Opening Balance',
dataIndex: 'pb',
key: 'pb',

render: (number) => <span>{Math.round(number)}</span>
},
{ 
title: 'Interest paid during the month',
dataIndex: 'ip',
key: 'ip',

render: (number) => <span>{Math.round (number)}</span>
},
{

title: 'Principal repaid during the month',
key: 'pp',
dataIndex: 'pp',

render: (number) => <span>{Math. round (number)}</span>

},

{
title: 'Closing Balance',
key: 'os',
dataIndex: 'os',

render: (number) => <span>{Math.round(number)}</span>

},

];
return(
    <div>
    {data &&
 
 <Table columns={columns} dataSource={data} scroll={{ x: 991 }}/>
    
 }
    
    </div>
)
    
    }
    
 export default TableInput;