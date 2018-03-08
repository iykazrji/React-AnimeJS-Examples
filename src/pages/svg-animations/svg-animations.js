import React, { Component } from 'react';
import Anime from 'animejs';
import Styled from 'styled-components';
import { 
    BgContainer,
    PageTitleP1,
    AnimeButton,
    color_green,
    color_purple
} from '../../styled-components/styled-components'; 
import AnimationButton from '../../components/animation-button';

const AnimeSVG = Styled.svg`
    margin: 0 auto;
    width: 60%;
    height: 380px;
    display: block;
    .st0, st1{
        fill: none;
        stroke: ${color_purple};
        stroke-miterlimit: 10;
    }
    .st1{
        fill: none;
        stroke: ${color_green};
    }
`

const drawSVG = (target) => {

    let purple_lines = target.querySelectorAll(".st0");
    let green_lines = target.querySelectorAll(".st1");

    Anime.remove(purple_lines);
    Anime.remove(green_lines);

    let animateGreenLines =  Anime({
        targets: green_lines,
        opacity: [0, 1],
        strokeDashoffset: [0, Anime.setDashoffset],
        easing: 'easeInOutSine',
        duration: 2300,
        delay: function(el, i) { return i * 350 },
        direction: 'reverse',
        loop: true
    })

    let animatePurpleLines =  Anime({
      targets: purple_lines,
      opacity: [0, 1],
      strokeDashoffset: [0, Anime.setDashoffset],
      easing: 'easeInOutSine',
      duration: 1900,
      delay: function(el, i) { return i * 350 },
      direction: 'alternate',
      loop: true
    })

}

const completeSVG = (target) => {
    let purple_lines = target.querySelectorAll(".st0");
    let green_lines = target.querySelectorAll(".st1");

    Anime.remove(purple_lines);
    Anime.remove(green_lines);

    let animateGreenLines =  Anime({
        targets: green_lines,
        opacity: 1,
        strokeDashoffset: 0,
        easing: 'easeInOutSine',
        duration: 2300,
        delay: function(el, i) { return i * 350 },
        direction: 'alternate',
        loop: false
    })

    let animatePurpleLines =  Anime({
      targets: purple_lines,
      opacity: 1,
      strokeDashoffset: 0,
      easing: 'easeInOutSine',
      duration: 1900,
      delay: function(el, i) { return i * 350 },
      direction: 'alternate',
      loop: false  
    })
}

class SVGAnimations extends Component {
    constructor(props){
        super(props)
        this.state = {
            animate: false
        }
        this.setOrReset = this.setOrReset.bind(this)
        
    }
    componentDidMount(){
        // drawSVG(this.svg);
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.animate !== this.state.animate){
            if(this.state.animate){
                drawSVG(this.svg)
            }else{
                completeSVG(this.svg)
            }
        }
    }
    setOrReset(){
        this.setState({
            animate: !this.state.animate
        });
    }
    render() {
        return (
            <div>
                <BgContainer className="bg-container">
                    <PageTitleP1>SVG Animations</PageTitleP1>
                    <AnimeSVG id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 560" innerRef= { node => { this.svg = node }}>
                        <g id="XMLID_37_">
                            <path id="XMLID_38_" className="st0" d="M154.6,156.1l29.3-1.4l-42.4,114.5l-29.3,1.4L154.6,156.1z"/>
                            <path id="XMLID_40_" className="st0" d="M299.3,176.5c-4-2.5-8.4-3.7-13.4-3.5c-5.7,0.3-11.3,2-17.1,5.1c-5.7,3.1-10.8,7.3-15.4,12.4
                                c-4.5,5.2-8,10.9-10.3,17.1c-2.3,6.2-3,11.8-2.3,16.7c0.8,4.9,3,8.7,6.6,11.4c3.6,2.7,8.2,3.9,13.9,3.6c4.6-0.2,9.8-1.6,15.7-4.3
                                c5.9-2.6,11.6-6.1,17.1-10.4l10.2,18c-8.5,6.8-17.7,12.4-27.5,16.6c-9.8,4.3-18.8,6.6-27,7c-11.1,0.5-20.2-1.6-27.2-6.4
                                c-7-4.8-11.4-11.6-13.2-20.4c-1.8-8.8-0.6-18.8,3.6-30c4.1-11.1,10.4-21.2,19-30.4c8.5-9.2,18.3-16.5,29.3-22.1
                                c11-5.5,22.2-8.6,33.5-9.1c8.3-0.4,15.9,1,22.7,4.1c6.8,3.2,11.9,7.7,15.3,13.5l-24.7,21.7C306.2,182.6,303.2,179.1,299.3,176.5z"
                                />
                            <path id="XMLID_42_" className="st0" d="M403.8,174.6c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.4,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C390.4,169.7,398,171.2,403.8,174.6z M356.7,200.4c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8c1.9,3.9,5.7,5.7,11.2,5.4
                                c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.3c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C366.8,194,361.6,196.2,356.7,200.4z"/>
                            <path id="XMLID_45_" className="st0" d="M542.2,131.3l-44.8,121.2l-28.5,1.3l4.2-11.4c-4.5,4.3-9.3,7.6-14.4,9.9
                                c-5.1,2.3-10.4,3.6-15.8,3.9c-8,0.4-14.3-1.2-19-4.7c-4.7-3.5-7.4-8.7-8.2-15.4c-0.8-6.8,0.5-14.7,3.8-23.7
                                c3.3-8.9,7.9-16.8,13.7-23.8c5.8-6.9,12.4-12.4,19.7-16.3c7.3-4,15-6.2,22.9-6.5c5.5-0.3,10.1,0.6,13.8,2.6c3.6,2,6.2,4.9,7.8,8.8
                                l16.4-44.4L542.2,131.3z M474.1,226.2c4.9-4.2,8.6-9.6,11-16.2c2.5-6.6,2.7-11.9,0.8-15.8c-1.9-3.9-5.7-5.7-11.2-5.4
                                c-5.6,0.3-10.8,2.5-15.8,6.8c-5,4.2-8.7,9.6-11.1,16.2c-2.4,6.5-2.6,11.8-0.7,15.7c2,3.9,5.7,5.7,11.3,5.5
                                C463.9,232.7,469.2,230.5,474.1,226.2z"/>
                            <path id="XMLID_48_" className="st0" d="M618.9,171.5c4.4,8.1,3.9,19.6-1.6,34.4c-0.8,2.3-1.5,4-2.1,5.2l-60.2,2.8
                                c-0.5,4.9,0.5,8.7,2.9,11.2c2.4,2.5,6.1,3.6,11,3.4c3.7-0.2,7.6-1.1,11.7-2.8c4-1.7,8-4.1,12-7.1l9.3,14.5
                                c-6.4,5.3-13.2,9.5-20.6,12.4c-7.3,3-15,4.6-23,5c-9.3,0.4-16.7-1-22.3-4.4c-5.6-3.4-8.9-8.3-10.1-14.9c-1.2-6.6-0.1-14.3,3.2-23.3
                                c3.3-9,8.2-17.1,14.5-24.2c6.3-7.1,13.6-12.7,21.8-16.8c8.2-4.1,16.8-6.3,25.8-6.8C605.2,159.6,614.5,163.3,618.9,171.5z
                                M593.5,196.9c1.9-5.1,1.9-9.2,0.2-12.1c-1.8-3-5.1-4.3-9.9-4.1c-4.5,0.2-8.8,1.9-13,5.1c-4.2,3.2-7.7,7.4-10.6,12.7L593.5,196.9z"
                                />
                            <path id="XMLID_51_" className="st0" d="M724.1,146.6c-2.4,1.7-4.2,4.1-5.3,7.2l-2.1,5.7l19.2-0.9l-7.1,19.3l-19.2,0.9l-24,64.8
                                l-28.3,1.3l24-64.8l-11.7,0.6l7.1-19.3l11.7-0.6l3-8.2c3.5-9.4,9.3-16.9,17.4-22.6c8.1-5.7,17-8.7,26.6-9.2
                                c6.3-0.3,12.1,0.6,17.3,2.6l-11.8,22.2c-3.7-1.3-6.6-1.9-8.8-1.8C729.2,144,726.5,144.9,724.1,146.6z"/>
                            <path id="XMLID_53_" className="st0" d="M809.9,155.5c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.4,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C796.6,150.6,804.1,152.1,809.9,155.5z M762.8,181.2c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8
                                c1.9,3.9,5.7,5.7,11.2,5.4c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.2c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C772.9,174.8,767.7,177,762.8,181.2z"/>
                            <path id="XMLID_56_" className="st0" d="M887.8,150.1c5.8-2.9,11.7-4.6,17.8-4.9l-9.8,26.6c-0.9-0.1-2.3-0.1-4.3,0
                                c-6.7,0.3-12.8,2.2-18.1,5.6c-5.4,3.4-9.4,7.9-12.1,13.5l-16.7,45.1l-28.5,1.3l32.7-88.4l28.5-1.3l-5.4,14.7
                                C876.7,157.2,882,153.1,887.8,150.1z"/>
                            <path id="XMLID_58_" className="st0" d="M105.3,289.5l83.9-4l-9,23.9l-54.4,2.6l-9.4,25.5l50.3-2.4l-8.8,23.8l-50.3,2.4l-15.3,41.3
                                L63,404L105.3,289.5z"/>
                            <path id="XMLID_60_" className="st0" d="M256.2,312.6c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.5,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C242.8,307.7,250.4,309.2,256.2,312.6z M209,338.4c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8c1.9,3.9,5.7,5.7,11.2,5.4
                                c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.3c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C219.2,331.9,213.9,334.2,209,338.4z"/>
                            <path id="XMLID_63_" className="st0" d="M358.3,307.8c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.5,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C345,302.9,352.6,304.4,358.3,307.8z M311.2,333.5c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8c1.9,3.9,5.7,5.7,11.2,5.4
                                c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.3c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C321.3,327.1,316.1,329.3,311.2,333.5z"/>
                            <path id="XMLID_66_" className="st0" d="M496.8,264.4l-44.8,121.2l-28.5,1.3l4.2-11.4c-4.5,4.3-9.3,7.6-14.4,9.9
                                c-5.1,2.3-10.4,3.6-15.8,3.9c-8,0.4-14.3-1.2-19-4.7c-4.7-3.5-7.4-8.7-8.2-15.4c-0.8-6.8,0.5-14.7,3.8-23.7
                                c3.3-8.9,7.9-16.8,13.7-23.8c5.8-6.9,12.4-12.4,19.7-16.3c7.3-4,15-6.2,22.9-6.5c5.5-0.3,10.1,0.6,13.8,2.6c3.6,2,6.2,4.9,7.8,8.8
                                l16.4-44.4L496.8,264.4z M428.6,359.4c4.9-4.2,8.6-9.6,11-16.2c2.5-6.6,2.7-11.9,0.8-15.8c-1.9-3.9-5.7-5.7-11.2-5.4
                                s-10.8,2.5-15.8,6.8c-5,4.2-8.7,9.6-11.1,16.2c-2.4,6.5-2.6,11.8-0.7,15.7c2,3.9,5.7,5.7,11.3,5.5S423.7,363.6,428.6,359.4z"/>
                            <path id="XMLID_69_" className="st0" d="M537.2,359c1.6,2.5,1.6,5.8,0.1,9.9c-1.5,4.1-4.1,7.6-7.6,10.4c-3.5,2.8-7.4,4.3-11.4,4.5
                                c-4,0.2-6.7-1-8.3-3.5c-1.6-2.5-1.6-5.9-0.1-10c1.5-4.1,4-7.6,7.5-10.3c3.5-2.7,7.2-4.2,11.3-4.4
                                C532.7,355.3,535.6,356.5,537.2,359z"/>
                        </g>
                        <g id="XMLID_3_">
                            <path id="XMLID_4_" className="st1" d="M165.6,150.8l29.3-1.4l-42.4,114.5l-29.3,1.4L165.6,150.8z"/>
                            <path id="XMLID_6_" className="st1" d="M310.3,171.2c-4-2.5-8.4-3.7-13.4-3.5c-5.7,0.3-11.3,2-17.1,5.1c-5.7,3.1-10.8,7.3-15.4,12.4
                                c-4.5,5.2-8,10.9-10.3,17.1c-2.3,6.2-3,11.8-2.3,16.7c0.8,4.9,3,8.7,6.6,11.4c3.6,2.7,8.2,3.9,13.9,3.6c4.6-0.2,9.8-1.6,15.7-4.3
                                c5.9-2.6,11.6-6.1,17.1-10.4l10.2,18c-8.5,6.8-17.7,12.4-27.5,16.6c-9.8,4.3-18.8,6.6-27,7c-11.1,0.5-20.2-1.6-27.2-6.4
                                c-7-4.8-11.4-11.6-13.2-20.4c-1.8-8.8-0.6-18.8,3.6-30c4.1-11.1,10.4-21.2,19-30.4c8.5-9.2,18.3-16.5,29.3-22.1
                                c11-5.5,22.2-8.6,33.5-9.1c8.3-0.4,15.9,1,22.7,4.1c6.8,3.2,11.9,7.7,15.3,13.5l-24.7,21.7C317.2,177.3,314.2,173.7,310.3,171.2z"
                                />
                            <path id="XMLID_8_" className="st1" d="M414.8,169.3c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.4,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C401.4,164.4,409,165.9,414.8,169.3z M367.7,195c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8c1.9,3.9,5.7,5.7,11.2,5.4
                                c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.3c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C377.8,188.6,372.6,190.8,367.7,195z"/>
                            <path id="XMLID_11_" className="st1" d="M553.2,125.9l-44.8,121.2l-28.5,1.3l4.2-11.4c-4.5,4.3-9.3,7.6-14.4,9.9
                                c-5.1,2.3-10.4,3.6-15.8,3.9c-8,0.4-14.3-1.2-19-4.7c-4.7-3.5-7.4-8.7-8.2-15.4c-0.8-6.8,0.5-14.7,3.8-23.7
                                c3.3-8.9,7.9-16.8,13.7-23.8c5.8-6.9,12.4-12.4,19.7-16.3c7.3-4,15-6.2,22.9-6.5c5.5-0.3,10.1,0.6,13.8,2.6c3.6,2,6.2,4.9,7.8,8.8
                                l16.4-44.4L553.2,125.9z M485.1,220.9c4.9-4.2,8.6-9.6,11-16.2c2.5-6.6,2.7-11.9,0.8-15.8c-1.9-3.9-5.7-5.7-11.2-5.4
                                c-5.6,0.3-10.8,2.5-15.8,6.8c-5,4.2-8.7,9.6-11.1,16.2c-2.4,6.5-2.6,11.8-0.7,15.7c2,3.9,5.7,5.7,11.3,5.5
                                C474.9,227.4,480.2,225.1,485.1,220.9z"/>
                            <path id="XMLID_14_" className="st1" d="M629.9,166.1c4.4,8.1,3.9,19.6-1.6,34.4c-0.8,2.3-1.5,4-2.1,5.2l-60.2,2.8
                                c-0.5,4.9,0.5,8.7,2.9,11.2c2.4,2.5,6.1,3.6,11,3.4c3.7-0.2,7.6-1.1,11.7-2.8c4-1.7,8-4.1,12-7.1l9.3,14.5
                                c-6.4,5.3-13.2,9.5-20.6,12.4c-7.3,3-15,4.6-23,5c-9.3,0.4-16.7-1-22.3-4.4c-5.6-3.4-8.9-8.3-10.1-14.9c-1.2-6.6-0.1-14.3,3.2-23.3
                                c3.3-9,8.2-17.1,14.5-24.2c6.3-7.1,13.6-12.7,21.8-16.8c8.2-4.1,16.8-6.3,25.8-6.8C616.2,154.3,625.5,158,629.9,166.1z
                                M604.5,191.6c1.9-5.1,1.9-9.2,0.2-12.1c-1.8-3-5.1-4.3-9.9-4.1c-4.5,0.2-8.8,1.9-13,5.1c-4.2,3.2-7.7,7.4-10.6,12.7L604.5,191.6z"
                                />
                            <path id="XMLID_17_" className="st1" d="M735.1,141.3c-2.4,1.7-4.2,4.1-5.3,7.2l-2.1,5.7l19.2-0.9l-7.1,19.3l-19.2,0.9l-24,64.8
                                l-28.3,1.3l24-64.8l-11.7,0.6l7.1-19.3l11.7-0.6l3-8.2c3.5-9.4,9.3-16.9,17.4-22.6c8.1-5.7,17-8.7,26.6-9.2
                                c6.3-0.3,12.1,0.6,17.3,2.6l-11.8,22.2c-3.7-1.3-6.6-1.9-8.8-1.8C740.2,138.6,737.5,139.5,735.1,141.3z"/>
                            <path id="XMLID_19_" className="st1" d="M820.9,150.1c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.4,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C807.6,145.2,815.1,146.7,820.9,150.1z M773.8,175.9c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8
                                c1.9,3.9,5.7,5.7,11.2,5.4c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.2c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C783.9,169.5,778.7,171.7,773.8,175.9z"/>
                            <path id="XMLID_22_" className="st1" d="M898.8,144.8c5.8-2.9,11.7-4.6,17.8-4.9l-9.8,26.6c-0.9-0.1-2.3-0.1-4.3,0
                                c-6.7,0.3-12.8,2.2-18.1,5.6c-5.4,3.4-9.4,7.9-12.1,13.5l-16.7,45.1l-28.5,1.3l32.7-88.4l28.5-1.3l-5.4,14.7
                                C887.7,151.8,893,147.7,898.8,144.8z"/>
                            <path id="XMLID_24_" className="st1" d="M116.3,284.1l83.9-4l-9,23.9l-54.4,2.6l-9.4,25.5l50.3-2.4l-8.8,23.8l-50.3,2.4l-15.3,41.3
                                L74,398.7L116.3,284.1z"/>
                            <path id="XMLID_26_" className="st1" d="M267.2,307.3c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.5,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C253.8,302.4,261.4,303.9,267.2,307.3z M220,333c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8c1.9,3.9,5.7,5.7,11.2,5.4
                                c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.3c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C230.2,326.6,224.9,328.8,220,333z"/>
                            <path id="XMLID_29_" className="st1" d="M369.3,302.5c5.8,3.4,9.4,8.4,10.8,15.1c1.4,6.6,0.5,14.4-2.8,23.3c-3.3,9-8.3,17.1-14.7,24
                                c-6.5,7-14,12.5-22.5,16.6c-8.5,4.1-17.5,6.4-26.9,6.8c-9.4,0.4-17-1-22.7-4.5c-5.8-3.4-9.3-8.4-10.7-15.1
                                c-1.4-6.6-0.4-14.5,2.9-23.5c3.3-8.9,8.2-16.9,14.6-23.9c6.4-7,13.9-12.5,22.4-16.6c8.5-4.1,17.5-6.4,26.9-6.8
                                C356,297.6,363.6,299,369.3,302.5z M322.2,328.2c-4.9,4.2-8.6,9.6-11,16.1c-2.5,6.6-2.7,11.9-0.8,15.8c1.9,3.9,5.7,5.7,11.2,5.4
                                c5.7-0.3,10.9-2.5,15.8-6.7c4.9-4.2,8.6-9.6,11-16.3c2.4-6.5,2.6-11.7,0.7-15.6c-2-3.9-5.7-5.7-11.3-5.4
                                C332.3,321.8,327.1,324,322.2,328.2z"/>
                            <path id="XMLID_32_" className="st1" d="M507.8,259.1l-44.8,121.2l-28.5,1.3l4.2-11.4c-4.5,4.3-9.3,7.6-14.4,9.9
                                c-5.1,2.3-10.4,3.6-15.8,3.9c-8,0.4-14.3-1.2-19-4.7c-4.7-3.5-7.4-8.7-8.2-15.4c-0.8-6.8,0.5-14.7,3.8-23.7
                                c3.3-8.9,7.9-16.8,13.7-23.8c5.8-6.9,12.4-12.4,19.7-16.3c7.3-4,15-6.2,22.9-6.5c5.5-0.3,10.1,0.6,13.8,2.6c3.6,2,6.2,4.9,7.8,8.8
                                l16.4-44.4L507.8,259.1z M439.6,354c4.9-4.2,8.6-9.6,11-16.2c2.5-6.6,2.7-11.9,0.8-15.8c-1.9-3.9-5.7-5.7-11.2-5.4
                                s-10.8,2.5-15.8,6.8c-5,4.2-8.7,9.6-11.1,16.2c-2.4,6.5-2.6,11.8-0.7,15.7c2,3.9,5.7,5.7,11.3,5.5S434.7,358.3,439.6,354z"/>
                            <path id="XMLID_35_" className="st1" d="M548.2,353.7c1.6,2.5,1.6,5.8,0.1,9.9c-1.5,4.1-4.1,7.6-7.6,10.4c-3.5,2.8-7.4,4.3-11.4,4.5
                                c-4,0.2-6.7-1-8.3-3.5c-1.6-2.5-1.6-5.9-0.1-10c1.5-4.1,4-7.6,7.5-10.3c3.5-2.7,7.2-4.2,11.3-4.4
                                C543.7,350,546.6,351.2,548.2,353.7z"/>
                        </g>
                    </AnimeSVG>

                    <AnimationButton handleClick={this.setOrReset} />
                </BgContainer>
            </div>
        );
    }
}

export default SVGAnimations;