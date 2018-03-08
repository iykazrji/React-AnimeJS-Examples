import React, { Component } from "react";
import Styled from "styled-components";
import Anime from 'animejs';
import {
  BgContainer,
  PageTitleP1,
  AnimationContainer,
  AnimeButton,
  MultipleAnimationsElementContainer,
  MultipleAnimationsWrapper,
  color_green,
  color_purple
} from "../../styled-components/styled-components";

import {MultipleAnimationsWithDelay} from '../../animations/multiple-animations';

import AnimationButton from "../../components/animation-button";

class MultipleAnimations extends Component {

  constructor(props) {
    super(props);
    this.state = {
      animate: false
    }
    this.setOrReset = this.setOrReset.bind(this);
  }

  setOrReset() {
    this.setState({
      animate: !this.state.animate
    })
  }

  componentDidUpdate(){
    MultipleAnimationsWithDelay(this.AnimationContainer, this.state.animate);
  }

  render() {
    return (
      <div>
        <BgContainer className="bg-container">
          <PageTitleP1>Multiple Animations</PageTitleP1>
          <AnimationContainer className="multiple-animations-container">
            <MultipleAnimationsWrapper className="multiple-animations-wrapper">
              {
                <MultipleAnimationsElementContainer innerRef={node => { this.AnimationContainer = node }} className="multiple-animations-element__container">
                  <li className="multiple-animations-element__li">1</li>
                  <li className="multiple-animations-element__li">2</li>
                  <li className="multiple-animations-element__li">3</li>
                </MultipleAnimationsElementContainer>

              }

            </MultipleAnimationsWrapper>
            <AnimationButton handleClick={this.setOrReset.bind(this)} href="#"> Animation </AnimationButton>
          </AnimationContainer>
        </BgContainer>
      </div>
    );
  }
}

export default MultipleAnimations;
