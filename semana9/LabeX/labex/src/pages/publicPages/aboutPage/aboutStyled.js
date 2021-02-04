import styled from "styled-components"

export const AboutMainStyled = styled.div`
display: grid;
margin-left: auto;
margin-right: auto;
width: 80vw;
height: 80vh;
`
export const AboutGridStyled = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr;
justify-items: center;
align-items: center;
text-align: center;
`

export const GridStyled = styled.div`
display: grid;
grid-column: 1/3;
border: 1px solid black;
background: blue;

`

export const ColumnGridStyled = styled.div`
display: grid;
grid-row: 1/2;
border: 1px solid black;
`