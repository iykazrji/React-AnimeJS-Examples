import React, { Component } from 'react'
import Styled from 'styled-components'
import {
    color_green,
    color_purple
} from "../../styled-components/styled-components"; 

let ListContainerWrapper = Styled.div`
    color: ${color_green};
    width: 100%;
    height: 450px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
`
let ListContainerTextInputWrapper = Styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    .text-input{
        background-color: rgba(0,0,0,0);
        height: 100%;
        color: ${color_green};
        border: none;
        border-top: 1px solid;
        flex: 2;
        padding-left: 20px;
        font-family: 'Montserrat',sans-serif;
        ::-webkit-input-placeholder{
            color: ${color_green};
            opacity: 0.4;
        }
        :focus{
            border: none;
        }
    }
    .add-btn{
        width: 100px;
        background-color: ${color_green};
        border: none;
        font-family: 'Montserrat',sans-serif;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 10px;
    }
`
let ListContainerListItemsWrapper = Styled.div`
    flex: 2;
    width: 100%;
    overflow: auto;
`
class ListContainer extends Component {
    constructor(){
        super();
        this.state = {
            list: ['Omo Shepeteri', 'Legbegbe', 'Science Student'],
            textInputValue: ""
        }
        this.changeTextInputValue = this.changeTextInputValue.bind(this)
    }

    changeTextInputValue(e){
        console.log(this.state.textInputValue)
        this.setState({
            textInputValue: e.target.value
        })
    }

    renderListItems(){
        
    }
    render () {
        return (
            <ListContainerWrapper>
                <ListContainerListItemsWrapper></ListContainerListItemsWrapper>
                <ListContainerTextInputWrapper>
                    <input className="text-input" 
                           value={this.state.textInputValue} 
                           placeholder="Add New Item" 
                           onChange={this.changeTextInputValue} />
                    <button className="add-btn">Add</button>
                </ListContainerTextInputWrapper>
            </ListContainerWrapper>
        )
    }
}

export default ListContainer