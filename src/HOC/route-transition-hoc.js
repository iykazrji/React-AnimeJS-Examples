import React, { Component } from "react";
import { Transition } from "react-transition-group";
import { animatePageIn, animatePageOut } from "../animations/route-transtion";

const RouteTransitionHOC = (RouteComponent, duration) => {
  return class RouteTransition extends Component {
    constructor(props) {
      super(props);
      this.state = {
        in: false
      };
    }

    componentWillMount() {
      this.setState({
        in: !this.state.in
      });
    }

    componentWillUnmount() {
      this.setState({
        in: !this.state.in
      });
      
    }

    render() {
     console.log(this.state.in)
      return (
        <Transition
          {...this.props}
          in={this.state.in}
          exit={true}
          timeout={{enter: 500, exit: 400}}
          onEnter={animatePageIn}
          onExit={animatePageOut}
          ref={(node)=>{this.node = node}}
        >
          <RouteComponent {...this.props} />
        </Transition>
      );
    }
  };
};

export default RouteTransitionHOC;