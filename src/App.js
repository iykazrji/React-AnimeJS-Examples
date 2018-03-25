import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styled from "styled-components";
import SingleAnimation from "./pages/single-animations/single-animations";
import MultipleAnimations from "./pages/multiple-animations/multiple-animaitons";
import TimelineAnimations from  "./pages/timeline-animations/timeline-animations";
import MountUnmountAnimations from "./pages/mount-unmount/mount-unmount-animations";
import SVGAnimations from "./pages/svg-animations/svg-animations";
import TextAnimations from "./pages/text-animations/text-animations";
import { MenuComponent } from "./components/menu-component";
import { TransitionGroup, Transition } from "react-transition-group";
import { animatePageIn, animatePageOut } from "./animations/route-transtion";
import {
  PageTitleSpan1,
  PageTitleContainer,
  AppWrapper,
  MenuWrapper
} from "./styled-components/styled-components";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let animationDuration = 700;
    return (
      <Router>
        <AppWrapper>
          <PageTitleContainer>
            <PageTitleSpan1>React - AnimeJS Examples.</PageTitleSpan1>
          </PageTitleContainer>
          <MenuWrapper>
            <MenuComponent />
          </MenuWrapper>
          <Route
            render={props => {
              return (
                <TransitionGroup>
                  <Transition
                    key={props.location.pathname}
                    timeout={animationDuration}
                    onEnter={animatePageIn}
                    onExit={animatePageOut}
                  >
                    <Switch location={props.location}>
                      <Route exact path="/" component={SingleAnimation} />
                      <Route
                        path="/multiple-animations"
                        component={MultipleAnimations}
                      />
                      <Route 
                        path="/timeline-animations" 
                        component={TimelineAnimations} />
                      <Route
                        path="/svg-animations"
                        component={SVGAnimations} />
                      <Route
                        path="/text-animations"
                        component={TextAnimations} />
                      <Route 
                        path="/mount-unmount-animations"
                        component={MountUnmountAnimations} />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              );
            }}
          />
        </AppWrapper>
      </Router>
    );
  }
}

export default App;
