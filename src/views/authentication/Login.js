import Input from "../../components/reusables/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"

const handleClick = (e) => {
    console.log(e)
}

const Login = () => {
    return (
        <div>
            <Input text="email" handleClick={handleClick} icon={emailIcon} label="email" />
            <Input text="password" handleClick={handleClick} icon={passwordIcon} label="password" />
        </div>
    )
}

export default Login