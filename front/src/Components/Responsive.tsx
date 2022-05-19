import React from 'react';
import styled from 'styled-components';
import { Props } from '../types';

const ResponsiveTemplate = styled.div`
	padding: 0 1rem;
	width: 1024px;
	margin: 0 auto;

	@media screen and (max-width: 1024px) {
		width: 768px;
	}

	@media screen and (max-width: 768px) {
		width: 100vw;
	}

	@media screen and (max-width: 320px) {
		width: 100vw;
	}
`;

const Responsive = ({ children }: Props) => {
	return <ResponsiveTemplate>{children}</ResponsiveTemplate>;
};

export default Responsive;
