import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenu = styled.div`
    display: block;
    visibility: visible;
`
export const MenuList = styled.ul`
    padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
    padding: 5px 0;
    argin-bottom: 16px;
`
export const MenuLink = styled(Link)`
    color: #ffffff;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
`