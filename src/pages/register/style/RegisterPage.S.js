import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
`

export const ContainerEnter = styled.div`
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: rgba(0, 0, 0, 0.85);
`

export const ModalBlock = styled.div`
position: absolute;
z-index: 2;
left: calc(50% - (366px / 2));
top: calc(50% - (439px / 2));
opacity: 1;
`

export const ModalFormLogin = styled.form`
--modal-width: 366px;
--modal-height: 439px;

background-color: #ffffff;
padding: 43px 47px 47px 40px;
border-radius: 12px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
padding: 43px 47px 47px 40px;
`

export const ModalFormLoginLink = styled(Link)`
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer

    &:visited {
        text-decoration: none;
        font-family: "StratosSkyeng", sans-serif;
        cursor: pointer;
    }
`

export const ModalLogo = styled.div`
width: 140px;
height: 21px;
margin-bottom: 34px;
background-color: transparent;
`

export const ModalLogoImg = styled.img`
width: 140px;
height: auto;
`

export const ModalInput = styled.input`
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 1px;

    &::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }

    &:-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }

    &::-ms-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }

    &::placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        letter-spacing: -0.05px;
        color: #d0cece;
    }


`

export const ModalInputLogin = styled(ModalInput)`
margin-bottom: 30px;
`

export const ModalInputPassword = styled(ModalInput)`
margin-bottom: 30px;

`
export const ModalInputPasswordDouble = styled(ModalInput)`
margin-bottom: 30px;
`



const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;

    &:hover {
      background-color: #595959;
    }
  }
`;

export const SignUpButton = styled(Button)`
color: #ffffff;
background-color: #580ea2;

&:hover {
  background-color: #3f007d;
}

&:active {
  background-color: #271a58;
}
`

export const Error = styled.div`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: coral;
  width: 280px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`;

export const LoginButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`