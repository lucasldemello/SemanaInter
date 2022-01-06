import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";

import Card from '../../components/Card'

import background from '../../assets/images/background-login.jpg';
import logoInter from '../../assets/images/Inter-orange.png';
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate, Link } from "react-router-dom";

const SignUp = () => {

    const navigate = useNavigate();

    const handleToSignIn = () => {
        navigate('/dashboard');
    }

    return (
        <Wrapper>
            <Background image={background}/>
            <Card width="403px">
            <img src={logoInter} width={172} height={61} alt="logo inter"></img>

            <InputContainer>
                <Input placeholder="NOME"></Input>
                <Input placeholder="SOBRENOME"></Input>
                <Input placeholder="EMAIL"></Input>
                <Input placeholder="SENHA" type="password"></Input>
                <Input placeholder="CONFIRMAR SENHA" type="password"></Input>
            </InputContainer>

            <ButtonContainer>
                <Button type="button" onClick={handleToSignIn}> Entrar </Button>
                <p>Já tem uma conta? <Link to="/">Entre Já</Link></p>
            </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignUp;
