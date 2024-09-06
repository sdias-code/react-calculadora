import styled from 'styled-components';

export const Container = styled.div`
whidth: 100%;
heigth: 100vh;
background-color: #b3b3cc;
padding: 10px;
`

export const Content = styled.div`
    background-color: #ffffcc;
    width: 35%;
    min-height: 350px;
    padding: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`