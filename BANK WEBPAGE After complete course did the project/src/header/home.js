import { FormatPainterOutlined } from "@ant-design/icons/lib/icons"
import { PhoneOutlined } from "@ant-design/icons/lib/icons"
import { MessageOutlined } from "@ant-design/icons/lib/icons"
import { CalculatorOutlined } from "@ant-design/icons/lib/icons"
import { EnvironmentOutlined } from "@ant-design/icons/lib/icons"
import { MailOutlined } from "@ant-design/icons/lib/icons"
import {SaveOutlined,RightOutlined ,DollarOutlined,SafetyOutlined } from "@ant-design/icons/lib/icons"
import {AreaChartOutlined ,HomeOutlined} from "@ant-design/icons/lib/icons"
import {FacebookOutlined,InstagramOutlined,YoutubeOutlined,TwitterOutlined,LinkedinOutlined} from "@ant-design/icons/lib/icons"
import Tab from "./tab"
import { Link } from "react-router-dom"
import "./linkheader.css"
import "./home.css"
import Header2 from "./headerstage2"
export default function Home(){
return(
    <div>
        <div className="tophead">  
<div className="headerright">
<div className="link link1"><Link to={"/form"}  className="f1"><span><FormatPainterOutlined /></span><span className="link2">App form</span></Link> </div>
    <div className="link"><Link to={"/calculator"} className="f1"  ><span><CalculatorOutlined /></span><span className="link2">calculator</span></Link> </div>
    <div className="link"><Link to={"/call"} className="f1" ><span><PhoneOutlined /></span><span className="link2">call</span></Link> </div>
    <div className="link"><Link to={"/mail"} className="f1"><span><MailOutlined /></span><span className="link2">mail</span></Link> </div>
    <div className="link"><Link to={"/message"}  className="f1"><span><MessageOutlined /></span><span className="link2">message</span></Link> </div>
    <div className="link"><Link to={"/location"}  className="f1"><span><EnvironmentOutlined/></span><span className="link2">location</span></Link> </div>
    </div>
    </div>    
    <Header2/>
    <div className="home-loan">
        <div className="home-loan-details">
<div className="home-loan-detailsleft" >
           <span><b>Contrary to popular</b></span>
            <span style={{color:"green"}}><b> simply random</b></span>
<div className="head"><span>Simply dummy text</span></div>      
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui nam molestiae libero rem quae quasi id minus repellat inventore suscipit sint, quibusdam ipsum asperiores iusto!</p>
            <button>Lorem ipsum</button>
            </div>
        </div>
        <div className="home-loan-pic">
            <img src="https://tse2.mm.bing.net/th/id/OIP._ac2iRfJVnQwryoTG9jeVQHaFj?w=250&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" ></img>
            
        </div>
    </div>

    <div className="primarycontent"> There are many variations of passages </div>
    <div className="loan-divisions">
        <div className="loan-divisions1">
            <div className="logo"><SaveOutlined /></div>
            <div className="loan-type">
                <p><b className="loan-typetop">Banking </b><span><RightOutlined /></span> </p>
                <hr></hr>
                <p className="loan-typebottom">Accounts</p>
                <p className="loan-typebottom">Credit Cards</p>
                <p className="loan-typebottom">International</p>
            </div>
        </div>
        <div className="loan-divisions1">
            <div className="logo"><DollarOutlined /></div>
            <div className="loan-type">
                <p ><b className="loan-typetop">Loans</b><span><RightOutlined /></span></p>
                <hr></hr>
                <p className="loan-typebottom">Home loans</p>
                <p className="loan-typebottom">Personal loans</p>
                <p className="loan-typebottom">Business loans</p>
            </div>
        </div>
        <div className="loan-divisions1"><div className="logo"><SafetyOutlined /></div>
            <div className="loan-type">
                <p><b className="loan-typetop">Insurance</b> <span><RightOutlined /></span></p>
                <hr></hr>
                <p className="loan-typebottom">Car Insurance</p>
                <p className="loan-typebottom">Home Insurance</p>
                <p className="loan-typebottom">Life Insurance</p>
            </div>
        </div>
    </div>
    
    <div className="loan-divisions">
        <div className="loan-divisions1">
            <div className="logo"><HomeOutlined /></div>
            <div className="loan-type">
                <p><b className="loan-typetop">Business</b><span><RightOutlined /></span> </p>
                <hr></hr>
                <p className="loan-typebottom">Accounts</p>
                <p className="loan-typebottom">Business loans</p>
                <p className="loan-typebottom">Business Credit Cards</p>
            </div>
        </div>
        <div className="loan-divisions1">
            <div className="logo"><AreaChartOutlined /></div>
            <div className="loan-type">
                <p><b className="loan-typetop">Investment</b><span><RightOutlined /></span></p>
                <hr></hr>
                <p className="loan-typebottom">Tern deposite</p>
                <p className="loan-typebottom">Financial Planning</p>
                <p className="loan-typebottom">Superannuation</p>
            </div>
        </div>
        <div className="loan-divisions1"><div className="logo"><CalculatorOutlined /></div>
            <div className="loan-type">
                <p><b className="loan-typetop">Calculator</b> <span><RightOutlined /></span></p>
                <hr></hr>
                <p className="loan-typebottom">Home loan calculators</p>
                <p className="loan-typebottom">Personal loan calculators</p>
                 
                <p className="loan-typebottom">Savings calculators</p>
            </div>
        </div>
    </div>
    <div className="persionalloan-container">
        <div className="antcard-cover">
            <div> <img src="https://tse2.mm.bing.net/th/id/OIP.K27LLsHikJK9kd6knmriEgHaE8?w=280&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img></div>
            <div className="antcard-coverhead">Lorem Ipsum is simply dummy</div>
            <div className="antcard-covermid">The printing and typesetting</div>
            <p className="antcard-coverbottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <div className="antcard-cover">
        <div><img src="https://kj1bcdn.b-cdn.net/media/29152/money.png"></img></div>
            <div className="antcard-coverhead">Lorem Ipsum</div>
            <div className="antcard-covermid">simply dummy text of the printing</div>
            <p className="antcard-coverbottom">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>
    </div>
    <div className="resurchtool"><h1>Research tools</h1></div>
    <div className="resurchtool1" >
        
            <Tab></Tab>

      
    </div>
   
    {/*
  
   */}
     <div className="persionalloan-container1">
        <div className="antcard-cover1">

            <div><img src="https://tse2.mm.bing.net/th/id/OIP.7amiHPQixU2XnhfLYlMaeQHaFj?w=209&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img></div>  
            <div className="antcard-coverhead1">Lorem Ipsum is simply dummy text of the printing<span className="antcard-covermid1">The printing and typesetting</span></div>
            
        </div>
        <div className="antcard-cover1">

        <div><img src="https://mk0cabiorg09m8anlv96.kinstacdn.com/wp-content/uploads/sites/5/2020/12/iStock-860509504-1024x683.jpg"></img></div>
            <div className="antcard-coverhead1">Lorem Ipsum is simply dummy text of the printing</div>
            <div className="antcard-coverbottom1">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"</div>
        </div>
    </div>
     <div className="persionalloan-container2">
        <div className="antcard-cover2">
            <div><img src="https://tse2.mm.bing.net/th/id/OIP.nkIrfkUzTayVg0tHLDDALgHaE8?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img></div>
            <div className="antcard-coverhead2">Latest scam alerts</div>
            <div className="antcard-coverbottom2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</div>
        </div>
        <div>
        <div className="antcard-cover2">
            <div className="antcard-coverhead2">Contact us 24/7</div>
            <div className="antcard-coverbottom2">Lorem Ipsum is simply dummy text of the printing 13 14 22 or if overseas, call +617 4694 9000.</div>
        </div>
        <div className="antcard-cover2">
            <div className="antcard-coverhead2">Our locations</div>
            <div className="antcard-coverbottom2">Lorem Ipsum is simply dummy,It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</div>
        </div>
        </div>
    </div>
<div className="supportfile">
    <div className="supportfile-container">
        <div className="print1"><h2>Lorem Ipsum simply dummy</h2></div>
        <div className="print"><h2>printing and typesetting</h2></div>
        <p>Helping Lorem Ipsum firsts when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
    </div>
    <div className="supportfile-container-video">
        <div><iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe></div>
        <div className="supportfile-container-btn">Learn about our member's</div>  
    </div>
</div>
<div className="mozo">
    <div className="mozo-logo"><img src="https://tse1.mm.bing.net/th/id/OIP.zkOSiJqmml4VUQ9fGd4kdwAAAA?pid=ImgDet&rs=1"></img></div>
</div>

<div className="bottom-aboutus">
<div className="bottom-aboutus-2">
    <div><h3>Things you should know</h3></div>
    <div className="loo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</div>
    <div className="loo">It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
    <div className="loo">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
</div>
<div className="bottom-aboutus-1" >
    <div className="bank-bottom">
        <h1>Bank</h1>
        <img src="https://www.co2australia.com.au/wp-content/uploads/2020/01/ClimateActive_CNCertified_Org_Vertical_rgb_pos.png"></img>
        <div className="lo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
        <div className="lo">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>    
    </div>
    <div>
        <h2>About Bank</h2>
        <p className="para">About Us</p>
        <p className="para">Get In Touch</p>
        <p className="para">Careers</p>
        <p className="para">Site map</p>
        <p className="para">Our Location</p>
    </div>
    <div>
        <h2>Assistance</h2>
        <p className="para">Financial Tips</p>
        <p className="para">Scam & Fraud Protection</p>
        <p className="para">Privacy Policy</p>
        <p className="para">Site disclaimer</p>
        <p className="para">Terms & condition</p>
        <p className="para">Accessibility</p>
    </div>
</div>
</div>
<div className="footercontent">
    <div className="footercontent-talk">Talk to us</div>
    <div className="footercontent-call">Call 13 14 22</div>
    <div className="footercontent-atm">Find a Branch ATM</div>
    <div className="footercontent-email">Email Us</div>
    <p className="footercontent-follow">Follow Us</p>
    <div className="footercontent-logo">
        <div ><p className="logooo"><FacebookOutlined /></p></div>
        <div><p className="logooo"><YoutubeOutlined /></p></div>
        <div><p className="logooo"><TwitterOutlined /></p></div>
        <div><p className="logooo"><InstagramOutlined /></p></div>
        <div><p className="logooo"><LinkedinOutlined /></p></div>
    </div>
    
</div>
    </div>
)
}