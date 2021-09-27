import styled from "styled-components"

export const InputBox = styled.div`
width: 100%;
border: 1px solid lightgrey;
padding: 15px;
&:focus-within{
outline: 1px auto var(--black);
}
`;

export const TrFromToBox = styled.div`
margin-bottom: 10px;
display: flex;
align-items: center;
svg{
width: 15px;
margin: 0 10px;
}

`;
export const Select = styled.select`
padding: 5px;

&:focus{
outline: 0;
}
`;

export const Textarea = styled.textarea`
width: 100%;
min-height: 40px;
border: 0;
resize: none;
font-size: 20px;

&::placeholder{
font-size: 20px;
}
&:focus{
outline: 0;
}

@media only screen and (max-width: 768px){
font-size: 18px;
&::placeholder{
font-size: 18px;
}

@media only screen and (max-width: 425px){
font-size: 15px;
&::placeholder{
font-size: 15px;
}

}
`