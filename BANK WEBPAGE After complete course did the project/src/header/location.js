import Header2 from "./headerstage2"
import Linkheader from "./linkheader"
import Locationinput from "./locationinput"
import "./locatin.css"
import "./Maill.css"
import {FacebookOutlined,YoutubeOutlined,TwitterOutlined,InstagramOutlined ,LinkedinOutlined, FilterOutlined,PhoneOutlined } from "@ant-design/icons/lib/icons"
import "./home.css"
import Locationpanal from "./locationpanal"
export default function locaton() {
    return(

        <div>
    <Linkheader/>
             <div className="headerleft">
    <Header2/>
     </div>
    <div style={{marginTop:100}}>
        <div className="location-head">
        <h2 style={{margin :"50px 20px"}}>Find a ATM or branch near you</h2>        
        </div>
        <div className="location-head2">
            <Locationinput/>
            <div className="location-search-btb">search</div>
            <div className="location-customerfilter"><FilterOutlined /> <span >Custom Filter</span></div>
            </div> 
            <div style={{display:"flex" ,marginTop:20,padding:15}}>
                <div className="location-input-box" style={{width:"50%",height:"650px",overflowX:"clip",overflowY:"auto"}}>
                <div style={{display:"flex"}}>
                    <div className="serial-num" style={{position:"relative"}}> <img style={{width: "41px",height: "66px"}} src="https://tse4.mm.bing.net/th/id/OIP.WMsUjRrbBIAOFOSrtVuNQQAAAA?pid=ImgDet&rs=1"></img>
                    <div style={{position:"absolute",top: "11px",left: "16px",fontweight: "bolder"}}>1</div></div>
                    <div className=" location-top-con" style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                        <div className="locatin-tophead" style={{width:"290px" ,marginLeft:15}}>
                            <div className="atmname" style={{fontWeight:"bold",fontSize:"18px",color:"#008000"}}>DELECTUS UT QUIS OMNIS</div>
                            <div style={{fontSize:"16px",color:"#504b4b",fontWeight:"400px",lineHeight:"1.5",margin:"10px 0px"}}>Non praesentium repellat eos sequi odio sint et</div>
                        </div>
                        <div style={{float:"right"}}>
                            <div style={{color:"#008000" ,textAlign:"right",}}><h5 style={{marginBottom:"5px",fontSize:"18px"}}>1.0 Miles</h5></div>
                            <div className="getdirection" style={{fontSize:"16px",fontWeight:"bold",color:"#008000",marginBottom:"5px",textAlign:"right"}}>Get Directions</div>
                            <div > <img style={{width:16,height:12,textAlign:"right"}} src="https://tse1.mm.bing.net/th/id/OIP.7P7i9ZZpzUB6PbsSoSkrNAHaHF?w=211&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img><span className="pno" >123-456-7890</span></div>
                        </div>
                    </div>
                    </div>
                        <div style={{width:"100%",paddingLeft:54 ,marginTop:30 ,width: "674px"}}>
                            <h5 className="atmhead2">Branch / ATM Hours:</h5>
                            <p>Lobby: 9am-5pm</p>
                            <p>ATM: 24hrs</p>
                            <p>Drive Thru: 9am-5pm</p>
                            
                        </div>
                         <div> <Locationpanal/></div> 
                        <div style={{display:"flex",marginTop:20}}>
                            <div className="buttonlocation" style={{marginLeft:54}}>Make an Appointment</div>
                            <div className="buttonlocation b">View Details</div>
                            </div>
                        <hr></hr>
                        <div>
                        <div style={{display:"flex"}}>
                    <div className="serial-num"  style={{position:"relative"}}> <img style={{width: "41px",height: "66px"}} src="https://tse4.mm.bing.net/th/id/OIP.WMsUjRrbBIAOFOSrtVuNQQAAAA?pid=ImgDet&rs=1"></img>
                    <div style={{position:"absolute",top: "11px",left: "16px",fontweight: "bolder"}}>2</div></div>
                    <div className=" location-top-con" style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                        <div className="locatin-tophead" style={{width:"290px" ,marginLeft:15}}>
                            <div className="atmname" style={{fontWeight:"bold",fontSize:"18px",color:"#008000"}}>DOLOR SIT AMET</div>
                            <div style={{fontSize:"16px",color:"#504b4b",fontWeight:"400px",lineHeight:"1.5",margin:"10px 0px"}}>Non praesentium repellat eos sequi odio sint et</div>
                        </div>
                        <div style={{float:"right"}}>
                            <div style={{color:"#008000" ,textAlign:"right",}}><h5 style={{marginBottom:"5px",fontSize:"18px"}}>2.0 Miles</h5></div>
                            <div className="getdirection" style={{fontSize:"16px",fontWeight:"bold",color:"#008000",marginBottom:"5px",textAlign:"right"}}>Get Directions</div>
                            <div > <img style={{width:16,height:12,textAlign:"right"}} src="https://tse1.mm.bing.net/th/id/OIP.7P7i9ZZpzUB6PbsSoSkrNAHaHF?w=211&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img><span className="pno" >123-456-7890</span></div>
                        </div>
                    </div>
                    </div>
                        <div style={{width:"100%",paddingLeft:54 ,marginTop:30,width: "674px"}}>
                            <h5 className="atmhead2">Branch / ATM Hours:</h5>
                            <p>Lobby: 9am-5pm</p>
                            <p>ATM: 24hrs</p>
                            <p>Drive Thru: 9am-5pm</p>
                            
                        </div>
                         <div> <Locationpanal/></div> 
                        <div style={{display:"flex",marginTop:20}}>
                            <div className="buttonlocation" style={{marginLeft:54}}>Make an Appointment</div>
                            <div className="buttonlocation b">View Details</div>
                            </div>
                        <hr></hr>
                        </div>
                        <div><div style={{display:"flex"}}>
                    <div className="serial-num"style={{position:"relative"}} > <img style={{width: "41px",height: "66px"}} src="https://tse4.mm.bing.net/th/id/OIP.WMsUjRrbBIAOFOSrtVuNQQAAAA?pid=ImgDet&rs=1"></img>
                    <div style={{position:"absolute",top: "11px",left: "16px",fontweight: "bolder"}}>3</div></div>
                    <div className=" location-top-con" style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                        <div className="locatin-tophead" style={{width:"290px" ,marginLeft:15}}>
                            <div className="atmname" style={{fontWeight:"bold",fontSize:"18px",color:"#008000"}}>AUT VELIT QUAE EST</div>
                            <div style={{fontSize:"16px",color:"#504b4b",fontWeight:"400px",lineHeight:"1.5",margin:"10px 0px"}}>Non praesentium repellat eos sequi odio sint et</div>
                        </div>
                        <div style={{float:"right"}}>
                            <div style={{color:"#008000" ,textAlign:"right",}}><h5 style={{marginBottom:"5px",fontSize:"18px"}}>2.3 Miles</h5></div>
                            <div className="getdirection" style={{fontSize:"16px",fontWeight:"bold",color:"#008000",marginBottom:"5px",textAlign:"right"}}>Get Directions</div>
                            <div > <img style={{width:16,height:12,textAlign:"right"}} src="https://tse1.mm.bing.net/th/id/OIP.7P7i9ZZpzUB6PbsSoSkrNAHaHF?w=211&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img><span className="pno" >123-456-7890</span></div>
                        </div>
                    </div>
                    </div>
                        <div style={{width:"100%",paddingLeft:54 ,marginTop:30,width: "674px"}}>
                            <h5 className="atmhead2">Branch / ATM Hours:</h5>
                            <p>Lobby: 9am-5pm</p>
                            <p>ATM: 24hrs</p>
                            <p>Drive Thru: 9am-5pm</p>
                            
                        </div>
                         <div> <Locationpanal/></div> 
                        <div style={{display:"flex",marginTop:20}}>
                            <div className="buttonlocation" style={{marginLeft:54}}>Make an Appointment</div>
                            <div className="buttonlocation b">View Details</div>
                            </div>
                        <hr></hr></div>
                        <div><div style={{display:"flex"}}>
                    <div className="serial-num"style={{position:"relative"}} > <img style={{width: "41px",height: "66px"}} src="https://tse4.mm.bing.net/th/id/OIP.WMsUjRrbBIAOFOSrtVuNQQAAAA?pid=ImgDet&rs=1"></img>
                    <div style={{position:"absolute",top: "11px",left: "16px",fontweight: "bolder"}}>4</div></div>
                    <div className=" location-top-con" style={{display:"flex",justifyContent:"space-between", width:"100%"}}>
                        <div className="locatin-tophead" style={{width:"290px" ,marginLeft:15}}>
                            <div className="atmname" style={{fontWeight:"bold",fontSize:"18px",color:"#008000"}}>EX QUASI OMNIS EST</div>
                            <div style={{fontSize:"16px",color:"#504b4b",fontWeight:"400px",lineHeight:"1.5",margin:"10px 0px"}}>Non praesentium repellat eos sequi odio sint et</div>
                        </div>
                        <div style={{float:"right"}}>
                            <div style={{color:"#008000" ,textAlign:"right",}}><h5 style={{marginBottom:"5px",fontSize:"18px"}}>3.0 Miles</h5></div>
                            <div className="getdirection" style={{fontSize:"16px",fontWeight:"bold",color:"#008000",marginBottom:"5px",textAlign:"right"}}>Get Directions</div>
                            <div > <img style={{width:16,height:12,textAlign:"right"}} src="https://tse1.mm.bing.net/th/id/OIP.7P7i9ZZpzUB6PbsSoSkrNAHaHF?w=211&h=202&c=7&r=0&o=5&dpr=1.3&pid=1.7"></img><span className="pno" >123-456-7890</span></div>
                        </div>
                    </div>
                    </div>
                        <div style={{width:"100%",paddingLeft:54 ,marginTop:30,width: "674px"}}>
                            <h5 className="atmhead2">Branch / ATM Hours:</h5>
                            <p>Lobby: 9am-5pm</p>
                            <p>ATM: 24hrs</p>
                            <p>Drive Thru: 9am-5pm</p>
                            
                        </div>
                         <div> <Locationpanal/></div> 
                        <div style={{display:"flex",marginTop:20}}>
                            <div className="buttonlocation" style={{marginLeft:54}}>Make an Appointment</div>
                            <div className="buttonlocation b">View Details</div>
                            </div>
                        <hr></hr></div>
                      
                </div>
                <div className="map-pic" style={{padding:10}}>
                    <img style={{width: "723px"}} src="https://th.bing.com/th/id/R.0d0e19d2c14b4da49373ac00357930b2?rik=lVGN4gunq9rJSg&riu=http%3a%2f%2ftours-tv.com%2fobjects%2f_maps%2fmap-Chennai-karta.jpg&ehk=SPcccbd0RACdOwlKc1Sme%2fSVwIeGi0TnxNg2e3fSg7s%3d&risl=&pid=ImgRaw&r=0"></img>
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