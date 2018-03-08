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
    margin-top: 200px;
    margin-bottom: 200px;
`
let TextAnimationSpan = Styled.span`
    font-size: 30px;
    letter-spacing: 10px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    display: block;
`
let CharItem = Styled.span``

let WordItem = Styled.div`
    display: inline-block;
    margin-right: 20px;
`

const SplitText = (text) => {
    let textArray = text.split("");
    let count = -1;

    let spanArray = textArray.map(value => {
        count++;
        return <span className="span-item" key={count}>{value !== " " ? value : "\u00A0"}</span>;
    });
    return spanArray;
}

const SplitWord = (word) => {
    let count = -1;
    let wordArray = text.split(" ");
    let textArray = wordArray.map(word => {
        count++;
        return (
            <WordItem key={count}>
                {SplitText(word)}
            </WordItem>
        );
    });

    console.log("Text array: " + textArray);
    return textArray;
}

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