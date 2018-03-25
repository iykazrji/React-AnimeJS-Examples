import React, { Component } from 'react';
import Styled from 'styled-components';
import Anime from 'animejs';
import { Transition, TransitionGroup } from 'react-transition-group'
import {
    BgContainer,
    PageTitleP1,
    AnimationContainer,
    AnimeButton,
    color_green,
    color_purple
  } from "../../styled-components/styled-components";

class MountUnmount extends Component {
    render () {
        return (
            <div>
                <BgContainer className="bg-container">
                    <PageTitleP1>Mounting and Unmounting Components</PageTitleP1>
                    <AnimationContainer className="mount-unmount-container">
                        
                    </AnimationContainer>
                </BgContainer>
            </div>
        )
    }
}

export default MountUnmount