import Header2 from "./headerstage2"
import Linkheader from "./linkheader"
import { Link } from "react-router-dom"
import "./Maill.css"
import {CaretRightOutlined,RightOutlined} from "@ant-design/icons/lib/icons"
import {FacebookOutlined,YoutubeOutlined,TwitterOutlined,InstagramOutlined ,LinkedinOutlined  } from "@ant-design/icons/lib/icons"
import "./home.css"

export default function FinancialPlaning(){
    return(

        <div>
    <Linkheader/>
             <div className="headerleft">
    <Header2/>
     </div>
      
            <div className="mailicon">
              
        <div className="mailheader">
               <div className="mailcontent">
               <div className="Bottomoutput">
                 <span className="span"> <Link to={"/home"} className="home">Home</Link></span>
                 <span><RightOutlined /></span>
                 <span>Financial Planing</span>
                </div>
                <h2 className="textcolor">Financial Planing</h2>
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
               </div>
               <div className="mailimage">
               <img src="https://i0.wp.com/cooldigital.photography/wp-content/uploads/2019/09/Inspirational-quote.jpg?resize=750%2C500&ssl=1"></img>
               </div>
                </div>
                <div className="mailtoptext">
                    <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="paratext">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                    <div className="learnmore">Learn more<span className="textcolor"><CaretRightOutlined /></span></div>
        </div>
    
    
        <div className="chequebox">
                    <div className="chequebox1">
                    <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="paratext">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <div className="learnmore">Learn more<span className="textcolor"><CaretRightOutlined /></span></div>
                    </div>
                    <div className="chequebox1">
                    <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="paratext">Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                    <div className="learnmore">Learn more<span className="textcolor"><CaretRightOutlined /></span></div>
                    </div>
                    <div className="chequebox1">
                    <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="paratext">ooked up one of the more obscure Latin words.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old</p>
                    <div className="learnmore">Learn more<span className="textcolor"><CaretRightOutlined /></span></div>
                    </div>
        </div>
    
                
        <div className="framecomponent">
                <div className="framecomponentbox">
                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="paratext">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one </p>
                    <div className="learnmore">Learn more<span className="textcolor"><CaretRightOutlined /></span></div>
                </div>
                <div className="framecomponentbox">
                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="paratext">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one </p>
                    <div className="learnmore">Learn more<span className="textcolor"><CaretRightOutlined /></span></div>
                </div>
                <div className="framecomponentmenu1">
                <h3>Lorem Ipsum is simply dummy text of the printing</h3>
                    <p className="paratext">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one </p>
                    <div className="learnmore">Learn more<span className="textcolor"><CaretRightOutlined /></span></div>
                </div>
                <div className="framecomponentimage">
                    <img src="https://eyewiki.aao.org/w/images/1/thumb/b/bb/Eye-bank_technician_q60.jpg/300px-Eye-bank_technician_q60.jpg"></img>
                </div>
        </div>
    
               
        <div className="realstorymaincontainer">   
                <div className="realstorycontainer1">
                <h1>Lorem Ipsum is simply</h1>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                </div>    
                <div className="realstorycontainer2">
                    <h2> "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"</h2>
                    <p className="paratext">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                </div> 
        </div>    
    
    
        <div className="otherwaysheader1">
            <div className="otherwaysheader">
                <div className="otherwaysmenu1">Lorem Ipsum is not simply random text</div>
                <div className="otherwaysmenu">Contrary to popular belief<span className="careright"><CaretRightOutlined /></span></div>
                <div className="otherwaysmenu">Contrary to popular belief<span className="careright"><CaretRightOutlined /></span></div>
                <div className="otherwaysmenu">Contrary to popular belief<span className="careright"><CaretRightOutlined /></span></div>
            </div>
        </div>
    
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
            <p>About Us</p>
            <p>Get In Touch</p>
            <p>Careers</p>
            <p>Site map</p>
            <p>Our Location</p>
        </div>
        <div>
            <h2>Assistance</h2>
            <p>Financial Tips</p>
            <p>Scam & Fraud Protection</p>
            <p>Privacy Policy</p>
            <p>Site disclaimer</p>
            <p>Terms & condition</p>
            <p>Accessibility</p>
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