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
    width: 30%;
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
    padding-top: 30px;
    padding-bottom: 30px;
    transform: translateY(-150%);
    opacity: 0;
    span{
        color: ${color_green};
        font-weight: 800;
        text-align: center;
        display: block;
    }
`
const TimeLineAnimationStart = (target) => {
    let target_container = target;
    let target_parent = target.parentNode;
    let target_childeren = target.childNodes;
    Anime.remove(target_container);
    Anime.remove(target_childeren);
    let animation = Anime.timeline();
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
        duration: 3000,
        delay: (el, l) => {
            return (l*400)
        }
    })
}

const TimeLineAnimationReturn = (target) => {
    let target_container = target;
    let target_parent = target.parentNode;
    let target_childeren = target.childNodes;
    Anime.remove(target_container);
    Anime.remove(target_childeren);
    let animation = Anime.timeline();
    animation
    .add({
        targets: target_childeren,
        translateY: ['0px', '-50px'],
        opacity: [1, 0],
        duration: 1200,
        offset: (el, l)=>{
            return -(l * 400)
        },
        delay: (el, l) =>{
            return (l * 400)
        }
    }).add({
        targets: target_container,
        width: ['80%', '10%'],
        duration: 1600,
        elasticity: 150
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
        if(animate){
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