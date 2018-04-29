import React from 'react';
import { Link } from 'react-router-dom';
import Styled from 'styled-components';
import { PageTitleSpan1, PageTitleContainer } from '../styled-components/styled-components'

const MenuComponentUl = Styled.div`
    list-style: none;
    display: flex;   
    flex-direction: column;
    align-items: flex-start;
    flex-spacing: space-around;
    color: #f9f9f9;
    height: 100%;
    margin-top: 0px;
    padding: 0px;
    overflow: hidden;
    div{
        padding: 20px 20px;
        width: 100%;
        position: relative;
        display: inline-block;
        a{
            color: #f9f9f9;
            text-decoration: none;
            font-size: 14px;
            display: block;
        }
    }
`
const MenuComponentWrapper = Styled.div`
    border-right: 1px solid rgba(150, 150, 150, 0.6);
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    width: inherit;
`
export const MenuComponent = (props) => {
    return (
        <MenuComponentWrapper className="menu-component-wrapper">
            <PageTitleContainer>
                <PageTitleSpan1>React - AnimeJS Examples.</PageTitleSpan1>
            </PageTitleContainer>   
            <MenuComponentUl>
                <div><Link to="/single-animations">Single Animations</Link></div>
                <div><Link to="/multiple-animations">Multiple Elements Animations (With Delay)</Link></div>
                <div><Link to="/timeline-animations">TimeLine Animations</Link></div>
                <div><Link to="/svg-animations">SVG Animations</Link></div>
                <div><Link to="/text-animations">Text Animations</Link></div>
                <div><Link to="/mount-unmount-animations">Mount & Unmount Animations</Link></div>
            </MenuComponentUl>
        </MenuComponentWrapper>
    )
}