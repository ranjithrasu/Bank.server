import { Link } from "react-router-dom";
import { FormatPainterOutlined } from "@ant-design/icons/lib/icons"
import { PhoneOutlined } from "@ant-design/icons/lib/icons"
import { MessageOutlined } from "@ant-design/icons/lib/icons"
import { CalculatorOutlined } from "@ant-design/icons/lib/icons"
import { EnvironmentOutlined } from "@ant-design/icons/lib/icons"
import { MailOutlined } from "@ant-design/icons/lib/icons"
import "./linkheader.css"
export default function link(){
    return(
        
        <div className="topphead">
      
       <div className="headerright">
       
    <div className="link link1"><Link to={"/form"}  className="f1"><span><FormatPainterOutlined /></span><span className="link2">App form</span></Link> </div>
    <div className="link"><Link to={"/calculator"} className="f1"  ><span><CalculatorOutlined /></span><span className="link2">calculator</span></Link> </div>
    <div className="link"><Link to={"/call"} className="f1" ><span><PhoneOutlined /></span><span className="link2">call</span></Link> </div>
    <div className="link"><Link to={"/mail"} className="f1"><span><MailOutlined /></span><span className="link2">mail</span></Link> </div>
    <div className="link"><Link to={"/message"}  className="f1"><span><MessageOutlined /></span><span className="link2">message</span></Link> </div>
    <div className="link"><Link to={"/location"}  className="f1"><span><EnvironmentOutlined/></span><span className="link2">location</span></Link> </div>
    </div>
    </div> 
    )
}