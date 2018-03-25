import React, {Component} from 'react';
import Styled from 'styled-components';
import Transition from 'react-transition-group';
import {
    color_green,
    color_purple
} from "../../styled-components/styled-components"; 


let ListItemWrapper = Styled.li`
    display: block;
    color: ${color_green};
    width: 100%;
    border: 1px solid;
    padding: 5px 0px;
    display: flex;
    flex-direction: row;
`

let ListItemClosedBtn = Styled.button`
    display: block;
    border-left: 1px solid;
    background: rgb(0,0,0,0);
    color: ${color_green};
    height: 80px;
`

let ListItemLabel = Styled.div`
    text-align: center;
    font-size: 18px;
    flex: 2;
`
class ListItem extends Component{
    constructor(){
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
        <Transition
            in={this.state.animate}
            duration={1000}
            timeout={500}
            onEnter={}
            onExit={}>
            <ListItemWrapper>
                <ListItemLabel>{this.props.item}</ListItemLabel>
                <ListItemClosedBtn>Close</ListItemClosedBtn>
            </ListItemWrapper>
        </Transition>
    }
}