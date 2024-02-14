import { conf } from "../../conf/conf";
import Signup from "../components/Signup";

function SignUpPage(){
    console.log(conf.databaseId);
    return <div className="py-8">
        <Signup />
    </div>
}

export default SignUpPage