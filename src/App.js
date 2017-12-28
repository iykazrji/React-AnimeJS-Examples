import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Styled from "styled-components";
import SingleAnimation from "./pages/single-animations/single-animations.js";
import MultipleAnimations from "./pages/multiple-animations/multiple-animaitons.js";
import { MenuComponent } from "./components/menu-component";
import { PageTitleSpan1, PageTitleContainer, AppWrapper, MenuWrapper } from "./styled-components";

class App extends Component {
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
            <Route exact path="/" component={SingleAnimation} />
            <Route path="/multiple-animations" component={MultipleAnimations} />
          </AppWrapper>
      </Router>
    );
  }
}

export default App;
