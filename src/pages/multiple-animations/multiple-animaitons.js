import React, { Component } from "react";
import Styled from "styled-components";

import {
  BgContainer,
  PageTitleP1,
  AnimationContainer,
  AnimeButton,
  MultipleAnimationsElementContainer,
  MultipleAnimationsWrapper
} from "../../styled-components";

import AnimationButton from "../../components/animation-button";

class MultipleAnimations extends Component {
  
constructor(props){
    super(props);
    this.state = {
      animate: false
    }
}

setOrReset(){
  console.log('Runing Animation')
}

render() {
    return (
      <div>
        <BgContainer className="bg-container">
          <PageTitleP1>Multiple Animations</PageTitleP1>
          <AnimationContainer className="multiple-animations-container">
            <MultipleAnimationsWrapper className="multiple-animations-wrapper">
                <MultipleAnimationsElementContainer className="multiple-animations-element__container">
                    <li className="multiple-animations-element__li">1</li>
                    <li className="multiple-animations-element__li">2</li>
                    <li className="multiple-animations-element__li">3</li>
                </MultipleAnimationsElementContainer>
            </MultipleAnimationsWrapper>
            <AnimationButton handleClick={this.setOrReset} href="#"> Animation </AnimationButton>
          </AnimationContainer>
        </BgContainer>
      </div>
    );
  }
}

export default MultipleAnimations;
