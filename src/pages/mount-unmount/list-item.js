import React, {Component} from 'react';
import Styled from 'styled-components';
import { Transition } from 'react-transition-group';
import {
    color_green,
    color_purple
} from "../../styled-components/styled-components"; 
import Anime from 'animejs';

let ListItemWrapperContainer = Styled.div`
    padding: 10px;
    transition: all 0.6s ease-out;
    height: 40px;
    border: 1px solid;
`

let ListItemWrapper = Styled.li`
    display: block;
    color: ${color_green};
    width: 100%;
    border: 1px solid;
    padding: 5px 0px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
`
let ListItemClosedBtn = Styled.button`
    display: block;
    height: 40px;
    background-color: ${color_green};
    border: none;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 10px;
    :hover{
        cursor: pointer;
    }
`
let ListItemLabel = Styled.div`
    text-align: center;
    font-size: 18px;
    flex: 2;
    align-self: center;
`
let EnterAnimation = (target)=>{
    Anime.remove(target);
    let animation = Anime({
        targets: target,
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1000,
        delay: 700
    })
}

let ExitAnimation = (target, container)=>{
    console.log('Exit animation...')
    Anime.remove(target);
    let animation = Anime.timeline()
    animation.add({
        targets: target,
        opacity: [1, 0],
        scale: [1, 0.9],
        duration: 1000
    })
}

export default class ListItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            entering: false
        }
    }
    setOrReset(){
        this.setState({
            entering: !this.state.entering
        })
    }
    render(){
        return(
            <Transition
                key={this.props.key}
                {...this.props}
                timeout={1100}
                appear={true}
                onEnter={()=>{ EnterAnimation(this.listItem)}}
                onExiting={()=>{ ExitAnimation(this.listItem, this.listItemContainer)}}>

                <ListItemWrapperContainer innerRef={ node => {this.listItemContainer = node } }>
                    <ListItemWrapper innerRef={ node => { this.listItem = node }}>
                        <ListItemLabel>{this.props.item}</ListItemLabel>
                        <ListItemClosedBtn onClick={()=>{ this.props.close(this.props.index) }}>Close</ListItemClosedBtn>
                    </ListItemWrapper>
                </ListItemWrapperContainer>

            </Transition>
        )
    }
}