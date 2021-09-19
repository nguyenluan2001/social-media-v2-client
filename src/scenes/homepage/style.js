import styled from "styled-components";
export const Container=styled.div`
display:grid;
grid-template-columns:1fr 2fr 1fr;
background:rgb(237,239,242);
width:100%;
@media screen and (max-width:800px)
{
    // grid-template-columns:1fr 0fr;
    display:block;
}
`