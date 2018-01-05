import React, { Component } from 'react';
import Styled from 'styled-components';

import { BgContainer, PageTitleP1, AnimationContainer, AnimeButton } from "../../styled-components";



class MultipleAnimations extends Component {
    render() {
        return (
            <div>
                <BgContainer className="bg-container">
                    <PageTitleP1>Multiple Animations</PageTitleP1>
                    <AnimationContainer>
                        <AnimeButton href="#"> Animation </AnimeButton>
                    </AnimationContainer>
                </BgContainer>
            </div>
        );
    }
}

export default MultipleAnimations;