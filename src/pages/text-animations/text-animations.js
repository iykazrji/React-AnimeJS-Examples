import React, { Component } from 'react';
import Styled from 'styled-components';
import Anime from 'animejs';
import {
    BgContainer,
    PageTitleP1,
    AnimeButton,
    color_green
} from '../../styled-components/styled-components';
import AnimationButton from '../../components/animation-button';

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
    font-size: 35px;
    letter-spacing: 10px;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    margin: 0 auto;
    display: block;
    .span-item{
        display: inline-block;
        transform: translateY(-110%);
    }
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

const SplitWord = (text) => {
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
let animation = null;

const clearAnimation = (currentAnimation) => {
    if (currentAnimation) {
        currentAnimation.pause();
    }
}

let animateTextIn = (target) =>{
    clearAnimation(animation);
    let spanItem = target.querySelectorAll(".span-item");
    animation = Anime({
        targets: spanItem,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeOutExpo',
        translateY: ['-110%', '0%'],
        delay: (el, l)=>{
            return 150 + 40 * l
        }
    })
}

let animateTextOut = (target) => {
    clearAnimation(animation);
    let spanItem = target.querySelectorAll(".span-item");
    animation = Anime({
        targets: spanItem,
        opacity: 0,
        duration: 500,
        easing: 'easeOutExpo',
        translateY: ['-110%'],
        delay: (el, l)=>{
            return 200 + 80 * l
        }
    })
}


class TextAnimations extends Component {
    constructor(props){
        super(props);
        this.state = {
            animate: false
        }
        this.setOrReset = this.setOrReset.bind(this)
    }
    setOrReset(){
        this.setState({
            animate: !this.state.animate
        })
    }

    // Since there's no assurance of Synchronous State change update,
    // We'd use a componentDidUpdate to track for changes in animation
    // State...
    componentDidUpdate(prevProps, prevState){
        if(this.state.animate){
            animateTextIn(this.animation_span)
        }else{
            animateTextOut(this.animation_span)
        }
    }
    componentDidMount(){
        animateTextIn(this.animation_span)
    }
    render() {
        return (
            <div>
                <BgContainer className="bg-container">
                    <PageTitleP1>Text Animations</PageTitleP1>
                    <TextAnimationContainer>
                        <TextAnimationSpan innerRef={ node => { this.animation_span = node }}>{ SplitWord("Free Fallin'") }</TextAnimationSpan>
                    </TextAnimationContainer>
                    <AnimationButton handleClick={this.setOrReset} />
                </BgContainer>
            </div>
        );
    }
}

export default TextAnimations;