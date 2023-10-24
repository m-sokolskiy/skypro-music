import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarItem = styled.li`
    width: 250px;
    height: 150px;
    margin-bottom: 30px;

`

export const SidebarLink = styled(Link)`
    width: 100%;
    height: 100%;
`

export const SidebarImg = styled.img`
    width: 100%;
    height: auto;
    transition: all 0.3s ease;

    
    &:hover{
        transform: scale(1.13);
    }
`