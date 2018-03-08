import React, { Component } from 'react';
import Styled from 'styled-components';
import Anime from 'animejs';
import {
    BgContainer,
    PageTitleP1,
    AnimeButton,
    color_green
} from '../../styled-components/styled-components';

let TextAnimationContainer = Styled.div`
    overflow: hidden;
    width: 80%;
    height: auto;
    margin: 0 auto;
    color: ${color_green};
`
let TextAnimationSpan = Styled.span`
    font-size: 30px;
    letter-spacing: 1.5px;
    font-weight: 600;
`

class TextAnimations extends Component {
    render() {
        return (
            <div>
                <BgContainer className="bg-container">
                    <PageTitleP1>Text Animations</PageTitleP1>
                    <TextAnimationContainer>
                        <TextAnimationSpan>Free Fallin'</TextAnimationSpan>
                    </TextAnimationContainer>
                </BgContainer>
            </div>
        );
    }
}

export default TextAnimations;