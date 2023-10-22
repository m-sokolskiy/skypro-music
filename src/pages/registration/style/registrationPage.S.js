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
width: 366px;
height: 439px;
background-color: #ffffff;
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

export const ModalFormLoginLink = styled.a`
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


export const ModalBtnEnter = styled.button`
    width: 278px;
    height: 52px;
    background-color: #580ea2;
    border-radius: 6px;
    margin-top: 60px;
    margin-bottom: 20px;
    border: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;

    &:hover {
        background-color: #3f007d;
    }

    &:active {
        background-color: #271a58;
    }
`

export const ModalBtnEnterLink = styled.a`
width: 100%;
height: 100%;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
color: #ffffff;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;
`

export const ModalBtnSignUpEnt = styled.button`
    width: 278px;
    height: 62px;
    background-color: #580EA2;
    border-radius: 6px;
    margin-left: 4px;
    border: none;
    margin-top: 30px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;;

    &:hover {
        background-color: #3F007D;
    }

    &:active {
        background-color: #271A58;
    }
`

export const ModalBtnSignUpEntLink = styled.a`
    width: 100%;
    height: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #FFFFFF;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
`