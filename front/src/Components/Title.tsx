import styled from 'styled-components';

export const Title = styled.h1`
	text-align: center;
	height: 100px;
	margin: 20px 0;
	line-height: 100px;

	@media screen and (max-width: 767px) {
		height: 50px;
		line-height: 50px;
	}
`;
