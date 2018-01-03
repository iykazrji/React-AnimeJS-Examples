import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styled from "styled-components";
import SingleAnimation from "./pages/single-animations/single-animations.js";
import MultipleAnimations from "./pages/multiple-animations/multiple-animaitons.js";
import { MenuComponent } from "./components/menu-component";
import { TransitionGroup, Transition } from "react-transition-group";
import {
  PageTitleSpan1,
  PageTitleContainer,
  AppWrapper,
  MenuWrapper
} from "./styled-components";
import Anime from "animejs";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const animatePageIn = PageElement => {
  let animation = Anime({
    targets: PageElement,
    translateX: ["100%", "0"],
    opacity: [0, 1]
  });
  console.log("Entering: " + PageElement);
};
const animatePageOut = PageElement => {
  let animation = Anime({
    targets: PageElement,
    translateX: ["0", "100%"],
    opacity: [1, 0]
  });
};

class App extends Component {
  constructor(props){
    super(props);
    console.log(props)
  }
  render() {
    return (
      <Router>
        <AppWrapper>
          <PageTitleContainer>
            <PageTitleSpan1>React - Anime Examples.</PageTitleSpan1>
          </PageTitleContainer>
          <MenuWrapper>
            <MenuComponent />
          </MenuWrapper>
          <TransitionGroup>
              <Route exact path="/" component={SingleAnimation} />
              <Route path="/multiple-animations" component={MultipleAnimations} />    
          </TransitionGroup>
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
