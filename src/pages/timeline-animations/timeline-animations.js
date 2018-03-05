import React, { Component } from 'react';
import Anime from 'animejs';
import Styled from 'styled-components';
import { 
    BgContainer,
    PageTitleP1,
    AnimeButton,
    color_green
} from '../../styled-components/styled-components'; 
import AnimationButton from '../../components/animation-button'

let TimelineContainer = Styled.div`
    margin: 0 auto;
    margin-top: 50px;
    width: 10%;
    border: 1px solid ${color_green};
    min-height: 50px;
    padding: 50px 0px;
    padding-bottom: 80px;
    overflow: hidden;
`
let TimelineElement = Styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    border: 1px solid ${color_green};
    padding-top: 15px;
    padding-bottom: 15px;
    transform: translateY(-150%);
    opacity: 0;
    span{
        color: ${color_green};
        font-weight: 800;
        text-align: center;
        display: block;
    }
`

let animation = null; 

const clearCurrentAnimation = (currentAnimation) => {
    if(currentAnimation){
        console.log('Remove current animation...')
        currentAnimation.pause()
    }
}

const TimeLineAnimationStart = (target) => {

    clearCurrentAnimation(animation)

    let target_container = target;
    let target_parent = target.parentNode;
    let target_childeren = target.childNodes;
    animation = Anime.timeline();
    animation
    .add({ 
        targets: target_container,
        width: ['10%','80%'],
        duration: 1500,
        elasticity: 100
    }).add({
        targets: target_childeren,
        translateY: ['-50px', '0px'],
        opacity: [0, 1],
        duration: 900,
        elasticity: 300,
        delay: (el, l) => {
            return (l*100)
        }
    })
}

const TimeLineAnimationReturn = (target) => {

    clearCurrentAnimation(animation)

    let target_container = target;
    let target_parent = target.parentNode;
    let target_childeren = target.childNodes;

    animation = Anime.timeline();
    animation
    .add({
        targets: target_childeren,
        translateY: -50,
        opacity: [1, 0],
        duration: 800,
        delay: (el, l) =>{
            return (l * 100)
        },
        easing: 'easeOutSine',

    }).add({
        targets: target_container,
        width: ['80%', '10%'],
        duration: 1600,
        elasticity: 150,
    })
}

class TimelineAnimations extends Component {
    constructor(props){
        super(props);
        this.state = {
            animate: true
        }
        this.setOrReset = this.setOrReset.bind(this)
    }
    setOrReset(){
        this.setState({
            animate: !this.state.animate
        })
        if(this.state.animate){
            TimeLineAnimationStart(this.node)
        }else{
            TimeLineAnimationReturn(this.node)
        }
    }
    render() {
        return (
            <div>
                <BgContainer className="bg-container">
                    <PageTitleP1>Timeline Animations</PageTitleP1>
                    <TimelineContainer innerRef={ node => {this.node = node}}>
                        <TimelineElement className="timeline_element"><span>1</span></TimelineElement>
                        <TimelineElement className="timeline_element"><span>2</span></TimelineElement>
                        <TimelineElement className="timeline_element"><span>3</span></TimelineElement>
                    </TimelineContainer>
                    <AnimationButton handleClick={this.setOrReset}/>
                </BgContainer>          
            </div>
        );
    }
}

export default TimelineAnimations;