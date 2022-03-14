import styled from 'styled-components';

export const Title = styled.div`
    padding: 2rem 1rem 0rem;
    color: yellow;
    text-align: center;
    font-size: 3rem;
`

export const Container = styled.header`
    background: #8257e6;
`

export const Content=styled.div`
    max-width:1128px;
    margin:0 auto;

    padding: 2rem 1rem 4rem;
    display:flex;
    align-items: center;
    justify-content: space-between;
`;

export const Button = styled.a`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: transparent;
    color: white;
    border: 2px solid white;
    transition: filter 0.2s;
    text-align: center;
    text-decoration: none;
    
    &:hover{
        filter:brightness(0.75);
    }
`;

