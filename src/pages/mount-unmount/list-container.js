import React, { Component } from 'react';
import Styled from 'styled-components';
import ShortId from 'shortid';
import {
    color_green,
    color_purple
} from "../../styled-components/styled-components"; 
import ListItem from './list-item';
import { TransitionGroup } from 'react-transition-group';

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
        :hover{
            cursor: pointer;
        }
    }
`
let ListContainerListItemsWrapper = Styled.div`
    flex: 2;
    padding-left: 20px;
    padding-top: 20px;
    padding-right: 20px;
    overflow: auto;
    overflow-x: hidden;
    
`
class ListContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [{item: 'Omo Shepeteri',
                    id: ShortId.generate()}, 
                    {item: 'Legbegbe',
                     id: ShortId.generate()}, 
                    {item:'Science Student',
                    id: ShortId.generate()}],
            textInputValue: "",
            id_count: 2
        }
        this.changeTextInputValue = this.changeTextInputValue.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.updateScroll = this.updateScroll.bind(this);
    }

    componentDidUpdate(){

        // Run update scroll when there's a State change
        this.updateScroll();
    }
    
    changeTextInputValue(e){
        this.setState({
            textInputValue: e.target.value
        })
    }

    renderListItems(){
        console.log(this.state.list)
        let list = this.state.list;
        let listMap = list.map((item, index)=>{ 
            return <ListItem item={item.item} index={index} key={item.id} close={this.handleClose} />
        })
        return listMap;
    }
    
    updateScroll(){
        var element = this.itemsWrapper
        element.scrollTop = element.scrollHeight;
    }

    handleClose(index){
        let newList = this.state.list.slice();
        newList.splice(index, 1);
        this.setState({
            list: newList
        })
    }
    
    handleAdd(){
        let item = this.state.textInputValue;
        let item_obj = {
            item: item,
            id: ShortId.generate()
        }
        this.setState({
            list:  [...this.state.list, item_obj],
            textInputValue: ""
        });
    }

    render () {
        return (
            <ListContainerWrapper>
                <ListContainerListItemsWrapper innerRef={node=>{ this.itemsWrapper = node }}>
                    <TransitionGroup>
                        {this.renderListItems()}
                    </TransitionGroup>
                </ListContainerListItemsWrapper>
                <ListContainerTextInputWrapper>
                    <input className="text-input" 
                           value={this.state.textInputValue} 
                           placeholder="Add New Item" 
                           onChange={this.changeTextInputValue} />
                    <button className="add-btn" onClick={this.handleAdd}>Add</button>
                </ListContainerTextInputWrapper>
            </ListContainerWrapper>
        )
    }
}

export default ListContainer