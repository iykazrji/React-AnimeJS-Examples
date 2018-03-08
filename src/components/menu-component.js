import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';

const MenuComponentUl = Styled.ul`
    list-style: none;
    display: flex;   
    flex-direction: row;
    padding: 0px;
    align-items: center;
    justify-content: center;
    flex-spacing: space-around;
    color: #f9f9f9;
    li{
        margin-left: 50px;
        a{
            color: #f9f9f9;
            text-decoration: none;
            font-size: 14px;
        }
    }
`
export const MenuComponent  = (props)=>{
    return(
         <MenuComponentUl>
            <li><Link to="/">Single Animations</Link></li>
            <li><Link to="/multiple-animations">Multiple Elements Animations (With Delay)</Link></li>
            <li><Link to="/timeline-animations">TimeLine Animations</Link></li>
            <li><Link to="/svg-animations">SVG Animations</Link></li>
            <li><Link to="/text-animations">Text Animations</Link></li>
         </MenuComponentUl>
    )
}