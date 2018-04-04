import Styled from "styled-components";

// This would be the container for the various Animations
// We are trying out.

export const color_purple = '#C26EFF';
export const color_green = '#18FF92';
export const BgContainer = Styled.div`
    width: 60%;
    border: 1px solid ${color_green};
    margin: 0 auto;
    padding: 50px;
    box-shadow: 0px 0px 4px rgba(12, 204, 120, 0.12);
    border-radius: 1px;
    left: 0;
    right: 0;
    transition: all 0.7s ease-out;
    overflow: hidden;
`;

export const PageTitleSpan1 = Styled.span`
    font-weight: 800;
    font-style: italic;
    text-transform: uppercase;
    display: block;
    color: ${color_green};
    width: 90%;
    margin: 0 auto;
    text-align: left;
    top: 10px;
    font-size: 20px;
    letter-spacing: 4px;
`;

export const AnimationContainer = Styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    position: relative;
    flex-direction: column;
`;

export const AnimeElement = Styled.div`
    height: 30px;
    width: 20%;
    border: 1px solid ${color_green};
    background: rgba(0,0,0,0);
    margin-top: 10px;
`;
export const AnimeButton = Styled.button`
    display: block;
    height: 40px;
    width: 180px;
    align-self: center;
    background: rgba(0, 0, 0, 0);
    border: 1px solid ${color_green};
    color: ${color_green};
    box-shadow: 1px 1px 2px rgba(20, 20, 20, 0.08);
    outline: none;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 10px;
    font-family: 'Montserrat', sans-serif;
    margin: 0 auto;
    margin-top: 60px;
    cursor: pointer;
    border-radius: 32px;
    transition: all 0.1s ease-in;
`;

export const PageTitleP1 = Styled.p`
    font-size: 20px;
    font-weight: 700;
    font-family: 'Montserrat', sans-serif;
    text-align: center;
    color: ${color_green};
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-top: 50px;
`;

export const PageTitleContainer = Styled.div`
    position: relative;
    width: 100%;
    display: block;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(150, 150, 150, 0.5);
`;

export const AppWrapper = Styled.div`
    max-width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(#16222A, #16222A);
    max-height: 100vh;  
    padding-bottom: 300px;
    display: flex;
    flex-direction: row;
`;

export const MenuWrapper = Styled.div`
    display: flex;
    width: 300px;
    position: relative;
    margin: 0 auto;
    flex-direction: column;
    padding-bottom: 30px;
`;

export const MultipleAnimationsElementContainer = Styled.ul`
    width: 100%;
    min-height: 50px;
    left: 0; right: 0;
    list-style: none;
    flex-direction: row;
    padding-left: 0px;
    display: inline-block;
    li{
      width: 50px;
      height: 50px;
      border: 0.5px solid ${color_green};
      margin: 0;
      margin-bottom: 20px;
      box-shadow: 1px 2px 5px rgba(0,0,0,0.12);
      font-weight: 800;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${color_green};
    }
`
export const MultipleAnimationsWrapper = Styled.div`
    
`