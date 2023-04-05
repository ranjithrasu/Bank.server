import Headerscopy from "./headercopy"
import "./Appform_page1.css"
import Stepsorder from "./step";
import Buttom_content from "./personal info/appformbuttom";




function Appform(){
    return(
        <div className="BODY" style={{backgroundColor: "rgba(0, 0, 0, 0.02)"}}>
            <div>
             <Headerscopy></Headerscopy>   
            </div>
            <h1>Appform</h1>
            <div>
            <Stepsorder></Stepsorder>
            </div>
            
          
            <Buttom_content></Buttom_content>
        
        </div>
           
    )
    
}
export default Appform;