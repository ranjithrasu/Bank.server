import Radio from "./radio";
import Stateinput from "./stateinputbox";
import Citizen from "./citizenshipinputbox";





export default function Inputbox(){
    return(
        <div class="inputbox">
                <div>
                    <h1>Let's get started</h1>
                </div>
                <div>
                    <p>what is your state of residence ?</p>
                    <Stateinput></Stateinput>
                </div>
                <div>
                    <p>what's your citizenship status ?</p>
                    <Citizen></Citizen>
                </div>
                <Radio></Radio>
                
        
                </div>

    )
}




