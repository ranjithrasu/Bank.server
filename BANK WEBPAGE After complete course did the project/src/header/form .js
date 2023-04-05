
import Linkheader from "./linkheader"
import Header2 from "./headerstage2"
import Stepsorder from "./step";
import Buttom_content from "./personal info/appformbuttom";
export default function Form() {
    return(
        <div>
<Linkheader/>
 <div className="headerleft">
<Header2/>
 </div>
 <div>
            <Stepsorder></Stepsorder>
            </div>
            
            <Buttom_content></Buttom_content>     
   </div>
    )
}