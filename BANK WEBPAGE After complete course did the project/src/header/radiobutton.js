import Bankmethods from "./bankingmethod";
import Password from "./password";

export default function Radiobutton(){
    return(
        <div>
            <div>
                    <p>Choose a sign-in method</p>
                    <Bankmethods></Bankmethods>
                </div>
                <div>
                    <p>Debit Card Number</p>
                    <Password></Password>
                </div>
                <div>
                    <p>Debit Card Pin</p>
                    <Password></Password>
                </div>
        </div>
    )
}