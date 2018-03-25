import React, { Component } from 'react'
import Styled from 'styled-components'
import {
    color_green,
    color_purple
} from "../../styled-components/styled-components"; 

let ListContainerWrapper = Styled.div`
    color: ${color_green};
    width: 100%;
    min-height: 600px;
    border: 1px solid;
    display: flex;
    flex-direction: column;
`
class ListContainer extends Component {
    constructor(){
        super();
        this.state = {
            list: []
        }
    }

    render () {
        return (
            <ListContainerWrapper>

            </ListContainerWrapper>
        )
    }
}

export default ListContainer