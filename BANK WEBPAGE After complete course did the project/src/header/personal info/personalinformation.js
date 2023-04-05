import "./personalinformation.css"
import Personalinput from "./personalinput"
import { MailOutlined } from "@ant-design/icons/lib/icons"
import Housedetails from "./housedetails"
import State from "./state"
import Country from "./country"
import Step2radio from "../step2radio"
import Step3radio from "../step3radio"
import Status from "./status"
import Add_Income from "./addtional_income"

export default function Personalinformation(){
    return(
        <div className="body">
            <div className="headd">
                <h1>Primary Applicant </h1>
            </div>
             <h2 className="info">Personal Information</h2>
                <div><Personalinput></Personalinput></div>
                <div className="contactS">
                    <h2 className="primary">Contact Information</h2>
                    <div className="information">
                        <div className="numbers">
                    <div className="mobilenumber">
                    <div><p>Cell Phone Number</p></div>
                    <div><input type="text" className='contactnumber'/></div>
                    </div>
                    <div className="alt_mobilenumber">
                        <div><p>Alternate Mobile Number</p></div>
                        <div><input type="text" className='contactnumber'/></div></div>
                    </div>
                    <p className="textssss"><b>Why we ask for your cell phone number:</b> A cell phone number is required to complete verification steps for closing your loan.</p>
                    <div className="numbers">
                    <div className="mobilenumber">
                    <div><p>Email</p></div>
                    <div className="mail"><span><MailOutlined /></span><input type="text" className='contactnumber'/></div>
                    </div>
                    <div className="alt_mobilenumber">
                        <div><p>Perferred Method Of Contact</p></div>
                        <div><input type="text" className='contactnumber'/></div></div>
                    </div>
                    <p className="textssss">By providing your email address, you are agreeing that Truist may contact you electronically regarding your saved application, submitted application, and future communications.</p>
                    <div><h2  className="primary">Primary Residency</h2></div> 
                    <p className="textss">Please provide a minimum of 2 years of address history.</p>
                    <div className="homedetails">
                        <div className="h1">
                            <Housedetails></Housedetails>
                        </div>
                        <div className="h2" >
                            <p>Street Address</p>
                            <input type="text" className="street" />
                        </div>
                        <div className="h3">
                            <p>Apt/Other(optional)</p>
                            <input type="text"   className="inputs"/>
                        </div>
                        </div>
                        <div className="Statess">
                            <div className="citycss"> 
                            <p>City</p>
                            <input type="text"className="city" />
                            </div>
                            <div className="statecss">
                            <p>state</p>
                            <State></State>
                            </div>
                            <div className="zipcodecss">
                            <p>Zipcode</p>
                            <input type="text" className="zipcode" />
                            </div>
                        </div>
                        <div className="country">
                            <div className="countrycss">
                            <p>Country</p>
                            <Country></Country>                           
                            </div>
                            <div className="addresscss"> 
                            <p>At This Address Since</p>
                            <input type="text"className="Address" />
                            </div>
                            </div>
                        <div className="Radiostep2">
                            <Step2radio></Step2radio>
                        </div>
                        <div >
                            <div className="class_step3"><p>Employment</p></div>
                            <div className="class_stepss"><p>Please provide at least 2 years of employment history.</p></div>
                            <div style={{marginTop:30}}><Step3radio></Step3radio></div>
                            <div className="status_1">
                                <div className="statuscss">
                                    <p>Status</p>
                                    <Status></Status>
                                </div>
                                <div className="sincecss"> 
                                <p>Since</p>
                                <input type="text"className="Since" />
                                </div>  
                            </div>
                            <div className="annualincome">
                                <p className="Annual">Annual Income</p>
                                <div className="income_head">
                                <p >Gross Annual Income</p>
                                <input type="text"className="Income" />
                                </div>
                            </div>   
                            <div className="additionalincome">
                                <p className="additional">Your Additional Income</p>
                                <div className="addtional_head">
                                <p >Additional Source Of Income</p>
                                <Add_Income></Add_Income>
                                </div>
                            </div>  
                            <div className="last">
                            <div style={{padding:10}}><p className="last_content">Alimony, child support, or separate maintenance income need not be revealed if you do not wish to have it considered as a basis for repaying this obligation.</p></div>
                            <div style={{padding:10}}><p className="last_content1">Agreement must be opened prior to proceeding with your application. It will open in a new window, and you can download the file</p></div>
                            </div> 
                            <div className="lastss">
                                <h3>E-Sign Disclosure and Consent Agreement</h3>
                            </div>



                        </div>
                    </div>
                </div>
                </div>
        
    )
}