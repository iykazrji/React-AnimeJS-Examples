import Anime from 'animejs'
import {color_green} from '../styled-components/styled-components'

export const MultipleAnimationsWithDelay = (target, animate) => {
    Anime.remove(target.childNodes);
    let nodes = target.childNodes;
    let parentNode = target.parentNode;
    let animation = Anime({
      targets: nodes,
      translateX: animate ? `${target.offsetWidth - 90}` : '0',
      rotate: animate ? 360 : 0,
      backgroundColor: animate ? `${color_green}`: 'rgba(0,0,0,0)',
      color: animate ? '#16222A' : color_green,
      duration: (el, l) => {
        return 2000
      },
      elasticity: 600,  
      delay: (el, l) => {
        return (l * 300)
      }
    })
  }
  