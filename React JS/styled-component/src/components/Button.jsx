import styled from 'styled-components'

const Button = styled.div`
	width : 100px ;
	cursor: pointer ;
	text-decoration : none;
	color : white ;
    background-color : ${props => props.bg };
	margin : 0 auto ;
	font-size:2rem;
`

export default Button;
