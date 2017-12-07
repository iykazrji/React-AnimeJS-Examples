import Styled from 'styled-components'

export const BgContainer = Styled.div`
    background: linear-gradient(#16222A, #16222A);
    height: 100vh;
    width: 100vw;
`;
export const PageTitleContainer = Styled.div`
    position: relative;
    width: 100%;
    display: block;
    align-items: center;
    padding-top: 50px;
`;
export const PageTitleSpan1 = Styled.p`
    font-weight: 800;
    font-style: italic;
    text-transform: uppercase;
    display: block;
    opacity: 0.7;
    color: #0CCC78;
    width: 80%;
    margin: 0 auto;
    text-align: center;
    top: 10px;
    font-size: 60px;
    letter-spacing: 4px;
`;
export const AnimationContainer = Styled.div`
    width: 70%;
    margin: 0 auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

export const AnimeElement = Styled.div`
    height: 30px;
    width: 300px;
    background: linear-gradient(90deg, #bc4e9c, #f80759);
    box-shadow: 1px 1px 2px rgba(20, 20, 20, 0.2);
    margin-top: 40px;
`;
export const AnimeButton = Styled.button`
    display: block;
    height: 45px;
    width: 150px;
    align-self: center;
    background-color: #5B86E5;
    color: #ffffff;
    box-shadow: 1px 1px 2px rgba(20, 20, 20, 0.2);
    outline: none;
    border: none;
    font-weight: 800;
    font-family: 'Montserrat', sans-serif;
    margin-top: 100px;
    border-radius: 30px;
`;
