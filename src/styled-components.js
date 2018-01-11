import Styled from "styled-components";

// This would be the container for the various Animations
// We are trying out.
export const BgContainer = Styled.div`
    width: 60%;
    background-color: #f9f9f9;
    margin: 0 auto;
    padding: 50px;
    box-shadow: 2px 2px 4px rgba(50, 50, 50, 0.12);
    border-radius: 8px;
    position: absolute;
    left: 0;
    right: 0;
`;

export const PageTitleSpan1 = Styled.span`
    font-weight: 800;
    font-style: italic;
    text-transform: uppercase;
    display: block;
    color: #0CCC78;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    top: 10px;
    font-size: 60px;
    letter-spacing: 4px;
`;

export const AnimationContainer = Styled.div`
    width: 100%;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 20px;
    overflow: hidden;
`;

export const AnimeElement = Styled.div`
    height: 30px;
    width: 25%;
    background: linear-gradient(90deg, #bc4e9c, #f80759);
    margin-top: 10px;
`;
export const AnimeButton = Styled.button`
    display: block;
    height: 45px;
    width: 200px;
    align-self: center;
    background: linear-gradient(90deg, #36D1DC, #5B86E5);
    color: #ffffff;
    box-shadow: 1px 1px 2px rgba(20, 20, 20, 0.08);
    outline: none;
    border: none;
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
    color: #666;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-top: 50px;
`;

export const PageTitleContainer = Styled.div`
    position: relative;
    width: 100%;
    display: block;
    align-items: center;
    padding-top: 50px;
`;

export const AppWrapper = Styled.div`
    max-width: 100vw;
    overflow-x: hidden;
    background: linear-gradient(#16222A, #16222A);
    height: 100vh;
    padding-bottom: 300px;
`;

export const MenuWrapper = Styled.div`
    display: flex;
    width: 70%;
    margin: 0 auto;
    flex-direction: row;
    padding-top: 30px;
    padding-bottom: 30px;
`;

export const MultipleAnimationsElementContainer = Styled.ul`
    width: 100%;
    min-height: 50px;
    left: 0; right: 0;
    margin: 0 auto;
    list-style: none;
    -webkit-padding-start: 0px;
    flex-direction: column;
    padding: 10px;
    display: block;
    li{
      width: 90px;
      height: 90px;
      background:  linear-gradient(190deg, #fc5c7d, #6a82fb);
      margin-bottom: 20px;
      box-shadow: 1px 2px 5px rgba(0,0,0,0.12);
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
    }
`
export const MultipleAnimationsWrapper = Styled.div`
    overflow: hidden;
    
`