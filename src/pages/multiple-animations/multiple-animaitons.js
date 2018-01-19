import React, { Component } from "react";
import Styled from "styled-components";
import Anime from 'animejs';
import {
  BgContainer,
  PageTitleP1,
  AnimationContainer,
  AnimeButton,
  MultipleAnimationsElementContainer,
  MultipleAnimationsWrapper
} from "../../styled-components";

import AnimationButton from "../../components/animation-button";

const MultipleAnimationsWithDelay = (target, animate)=>{
  Anime.remove(target.childNodes);
  let nodes = target.childNodes;
  let parentNode = target.parentNode;
  let animation = Anime({
    targets: nodes,
    translateX: animate ? `${target.offsetWidth - 150}` : '0',
    rotate: animate ? 360 : 0,
    borderRadius: animate ? '50%' : '0',
    duration: (el, l) =>{
      return (2000 / (l+1))
    },
    elasticity: 600,
    delay: (el, l) =>{
      return (l * 300)
    }
  })
}

let decoratorTest = (target) => {
  target.message = "This is a decorated whatever..." 
}

class MultipleAnimations extends Component {
  
constructor(props){
    super(props);
    this.state = {
      animate: true
    }
    this.setOrReset = this.setOrReset.bind(this);
}

setOrReset(){
  this.setState({
    animate: !this.state.animate
  })
  MultipleAnimationsWithDelay(this.AnimationContainer, this.state.animate);
}

render() {
    return (
      <div>
        <BgContainer className="bg-container">
          <PageTitleP1>Multiple Animations</PageTitleP1>
          <AnimationContainer className="multiple-animations-container">
            <MultipleAnimationsWrapper className="multiple-animations-wrapper">
                <MultipleAnimationsElementContainer innerRef={ node =>{ this.AnimationContainer = node }} className="multiple-animations-element__container">
                    <li className="multiple-animations-element__li">1</li>
                    <li className="multiple-animations-element__li">2</li>
                    <li className="multiple-animations-element__li">3</li>
                </MultipleAnimationsElementContainer>
            </MultipleAnimationsWrapper>
            <AnimationButton handleClick={this.setOrReset.bind(this)} href="#"> Animation </AnimationButton>
          </AnimationContainer>
        </BgContainer>
      </div>
    );
  }
}

export default MultipleAnimations;
