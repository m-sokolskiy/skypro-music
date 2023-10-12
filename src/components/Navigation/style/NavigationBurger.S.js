import styled from 'styled-components';

export const NavBurger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
`
 export const BurgerLine = styled.div`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
`