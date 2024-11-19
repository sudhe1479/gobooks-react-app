import { useContext } from "react";
import { AppContext } from "../context/App.context";

function SignUp() {
const {isUserLogin} = useContext(AppContext)
    return (
        <>{isUserLogin}</>
    );
}

export default SignUp