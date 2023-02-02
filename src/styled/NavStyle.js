import styled from 'styled-components';
import { Link } from 'react-router-dom';

export  const  NavStyle  =  styled.div`
background-color: white;
padding: 16px 32px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const NavLogo = styled.img `
cursor: pointer;
`

export const NavDiv = styled.div `
display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`

export const NavLink = styled(Link) `
   text-decoration: none;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 19px;
    color: black;
    cursor: pointer;
    `