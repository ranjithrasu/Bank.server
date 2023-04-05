
import { InfoCircleOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import "./appform3rd.css"

function Appformicon(){
    return(
<div className="appicon">
    
    <div className="loaninformationmaincontent">
            <div className="loaninformationheader">
                <h1>Review and consent</h1>
            </div>
        <div className="loaninformationalertcontainer">
             <div className="loaninformationalertcontainerlogo">
             <span className="InfoCircleOutlined" ><InfoCircleOutlined /></span>
            </div>   
            <div className="loaninformationalertcontainercontent">
                Please make sure all the information below is accurate.You will not be able to further update this information once you continue to the next page
            </div>  
        </div>
        <div className="loaninformation_middle_content">
            <div className="loaninformation_subheading">Person Name, review your information below</div>
            <div className="Personal_information_container">
                <div className="Personal_information_table">
                    <p className="personinfo_heading" >Personal information</p>
                    <p className="personinfo_editlogo">Edit<span className="EditOutlined"><EditOutlined /></span></p>
                </div>
            <div className="Personal_information_listside" >
                <div className="Personal_information_listheader ">
                <p className="sideheader_title">Full name</p>
                <p className="listheader_titleanswer">Person full name</p>
                <p className="sideheader_title">Social security number</p>
                <p className="listheader_titleanswer">XXXXXX-234</p>
                
            </div>
            <div className="Personal_information_sideheader">
                <p className="sideheader_title">Countries of citizenship</p>
                <p className="listheader_titleanswer">Type of citizen</p>
                <p className="sideheader_title">Date of birth</p>
                <p className="listheader_titleanswer">00/00/0000</p>
            </div>
            </div>
            <div className="Personal_information_table">
                    <p className="personinfo_heading" >Contact information</p>
                    <p className="personinfo_editlogo">Edit<span className="EditOutlined"><EditOutlined /></span></p>
                </div>
            <div className="Personal_information_listside" >
                <div className="Personal_information_listheader ">

                <p className="sideheader_title">Primary contact number</p>
                <p className="listheader_titleanswer">Cell Phone - (978)-090-00090</p>
                
            </div>
            <div className="Personal_information_sideheader s1">
                <p className="sideheader_title">Email address</p>
                <p className="listheader_titleanswer">dummyPerson@gmail.com</p>

            </div>
            </div>

            <div className="Personal_information_table">
                    <p className="personinfo_heading" >Employment and income information</p>
                    <p className="personinfo_editlogo">Edit<span className="EditOutlined"><EditOutlined /></span></p>
                </div>
            <div className="Personal_information_listside" >
                <div className="Personal_information_listheader ">
                <p className="sideheader_title">Employer name</p>
                <p className="listheader_titleanswer">John</p>
                <p className="sideheader_title">Employment</p>
                <p className="listheader_titleanswer">Current</p>
                <p className="sideheader_title">Since</p>
                <p className="listheader_titleanswer">08/2019</p>
                
            </div>
            <div className="Personal_information_sideheader s2">
                <p className="sideheader_title">Employment occupation</p>
                <p className="listheader_titleanswer">Prof/Tech</p>
                <p className="sideheader_title">Employment status</p>
                <p className="listheader_titleanswer">Employed</p>

            </div>
            </div>

            <div style={{borderTop:"1px dashed #008000",margin:"52px 194px 10px 194px"}}></div>
           
           

            <div className="Personal_information_listheader s3">
                <p className="sideheader_title">Gross annual income</p>
                <p className="listheader_titleanswer">$400,00000</p>

            </div>


            <div className="Personal_information_table">
                    <p className="personinfo_heading" >Address information</p>
                    <p className="personinfo_editlogo">Edit<span className="EditOutlined"><EditOutlined /></span></p>
                </div>
            <div className="Personal_information_listside" >
                <div className="Personal_information_listheader  s4">
                <p className="sideheader_title">Primary</p>
                <p className="listheader_titleanswer">1st cross street</p>
                <p className="listheader_titleanswer">cat, AL 35242</p>      
            </div>
          
            </div>
           
            </div>  
            
        </div>



    </div>




</div>
    )
}
export default Appformicon;