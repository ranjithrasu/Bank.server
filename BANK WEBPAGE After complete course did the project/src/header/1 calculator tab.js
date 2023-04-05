import {HomeOutlined, DashboardOutlined,DollarOutlined} from "@ant-design/icons/lib/icons"


export default function Calculatortab(){

return(
  
    <div className="button-output-calculator" style={{display:"flex", justifyContent:"space-evenly"}}>
    <div style={{padding:10,width:"25%",color:"green",backgroundColor:"white"}}>
        <p style={{fontWeight:"bold"}}><HomeOutlined /></p>
        <p style={{fontWeight:"bold"}}>Home loan calculator</p>
        </div>
    <div style={{padding:10,width:"25%",color:"green",backgroundColor:"white"}}>
        <p style={{fontWeight:"bold"}}><DashboardOutlined /></p>
        <p style={{fontWeight:"bold"}}>Browsing Power calculator</p>
    </div>
    <div style={{padding:10,width:"25%" ,color:"#008000",backgroundColor:"white"}}>
        <p style={{fontWeight:"bold"}}><DollarOutlined /></p>
        <p style={{fontWeight:"bold"}}>Personal loan calculator</p>
    </div>
</div>
   
)
}