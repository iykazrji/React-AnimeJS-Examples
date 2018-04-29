import React, { Component } from "react";
import Anime from "animejs";
import Styled from "styled-components";
import ReactDOM from "react-dom";
import {
  BgContainer,
  PageTitleContainer,
  PageTitleSpan1,
  AnimationContainer,
  AnimeElement,
  AnimeButton,
  PageTitleP1
} from "../../styled-components/styled-components";
import Transition from 'react-transition-group/Transition';
import AnimationButton from '../../components/animation-button'

const AnimateElement = (target, animate) => {
  console.log("Animate stuff")
  Anime.remove(target); // Stop and remove this element from current animation if present...
  let targetParent = target.parentNode;
  let animation = Anime({
    targets: target,
    translateX: animate
      ? `${targetParent.offsetWidth - target.offsetWidth}px`
      : "0",
    backgroundColor: animate ? '#18FF92' : 'rgba(0,0,0,0)',
    scaleX: animate ? 0.13 : 1,
    scaleY: animate ? 8 : 1,
    duration: 1500,
    elasticity: 600,
  });
};

const ButtonPressedStyle = {
  transform: 'scale(0.8)'
}

export default class SingleAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false
    };
    this.setOrReset = this.setOrReset.bind(this);
  }
  setOrReset(e) {
    this.setState({
      animate: !this.state.animate
    });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   AnimateElement(this.AnimeElement, this.state.animate); //Run the animate Function
  // }
  render() {
    return (
      <div>
        <BgContainer className="bg-container">
          <PageTitleP1>Animating Single Elements</PageTitleP1>
          <Transition
            in={this.state.animate}
            duration={1000}
            timeout={500}
            onEnter={() => { AnimateElement(this.AnimeElement, this.state.animate) }}
            onExit={() => { AnimateElement(this.AnimeElement, this.state.animate) }}>
            <AnimationContainer>
              <AnimeElement
                id="anime-element"
                innerRef={node => {
                  this.AnimeElement = node;
                }}
              />
              <AnimationButton handleClick={this.setOrReset} />
            </AnimationContainer>
          </Transition>
        </BgContainer>
      </div>
    );
  }
}
