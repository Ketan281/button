import styled from 'styled-components'

const Button = styled.button`
 margin-left:5px;
 margin-right:5px;
 padding:1vh;
 background-color:${({Primary})=>(Primary ? 'blue':'while')};
 color:${({Primary})=>Primary ? 'white':'black'};
 border:${({Primary,Dashed})=>Dashed?'dashed 1px #cecece': Primary ? 'none' : 'solid 1px #cecece'};
`

export  {Button};
