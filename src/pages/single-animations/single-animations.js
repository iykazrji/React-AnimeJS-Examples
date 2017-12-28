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
} from "../../styled-components";

const AnimateElement = (target, animate) => {
  console.log("target: " + target);
  Anime.remove(target); // Stop and remove this element from current animation if present...
  let targetParent = target.parentNode;
  let animation = Anime({
    targets: target,
    translateX: animate
      ? `${targetParent.offsetWidth - target.offsetWidth}px`
      : "0",
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
      animate: true,
      buttonPressed: false
    };
    this.setorreset = this.setorreset.bind(this);
  }
  setorreset(e) {
    e.preventDefault();
    this.setState({
      animate: !this.state.animate,
      buttonPressed: !this.state.buttonPressed
    });
    window.setTimeout(()=>{
        this.setState({
            buttonPressed: !this.state.buttonPressed
        })
    }, 50)
    AnimateElement(this.AnimeElement, this.state.animate); //Run the animate Function
  }
  render() {
    return (
      <div>
        <BgContainer className="bg-container">
         <PageTitleP1>Animating Single Elements</PageTitleP1>
          <AnimationContainer>
            <AnimeElement
              id="anime-element"
              innerRef={node => {
                this.AnimeElement = node;
              }}
            />
            <AnimeButton href="#" onClick={this.setorreset} style={this.state.buttonPressed ? {...ButtonPressedStyle} : null}>
              {this.state.animate ? "Animate" : "Return"}
            </AnimeButton>
          </AnimationContainer>
        </BgContainer>
      </div>
    );
  }
}
