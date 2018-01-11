import React, { Component } from "react";
import PropTypes from 'prop-types';
import { AnimeButton } from "../styled-components";

const ButtonPressedStyle = {
  transform: "scale(0.8)"
};

const SpanWrapperStyle = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
}
export default class AnimationButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonPressed: false
    };
    this.handlePressed = this.handlePressed.bind(this);
  }
  handlePressed() {
    this.props.handleClick();

    this.setState({
      buttonPressed: !this.state.buttonPressed
    });
    window.setTimeout(() => {
      this.setState({
        buttonPressed: !this.state.buttonPressed
      });
    }, 50);
  }
  render() {
    return (
      <span>
        <AnimeButton
          href="#"
          onClick={this.handlePressed}
          style={this.state.buttonPressed ? { ...ButtonPressedStyle } : null}
        >
          {this.state.animate ? "Animate" : "Return"}
        </AnimeButton>
      </span>
    );
  }
}

AnimationButton.propTypes = {
    handleClick: PropTypes.func
}