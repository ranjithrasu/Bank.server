
import {BarsOutlined, BankOutlined,CarOutlined } from "@ant-design/icons/lib/icons"
export default function Guidetab(){
    return(
        <div className="button-output-guide"  style={{display:"flex", justifyContent:"space-evenly"}}>
        <div style={{padding:10,width:"25%",color:"#008000",backgroundColor:"white"}}>
            <p style={{fontWeight:"bold"}}><BarsOutlined /></p>
            <p style={{fontWeight:"bold"}}>loan application process</p>
        </div>
        <div style={{padding:10,width:"25%",color:"#008000",backgroundColor:"white"}}>
            <p style={{fontWeight:"bold"}}><CarOutlined /></p>
            <p style={{fontWeight:"bold"}}>Buying a car</p>
        </div>
        <div style={{padding:10,width:"25%",color:"#008000",backgroundColor:"white"}}>
            <p style={{fontWeight:"bold"}}><BankOutlined /></p>
            <p style={{fontWeight:"bold"}}>Switch to bank</p>
        </div>
    </div>
    )
}
