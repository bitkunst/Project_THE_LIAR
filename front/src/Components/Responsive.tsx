import React from 'react';
import styled from 'styled-components';
import { Props } from '../types';

export const ResponsiveTemplate = styled.div`
	width: 1024px;
	height: 100vh;
	margin: 0 auto;
	overflow: hidden;

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
export const Responsive = ({ children }: Props) => {
	return <ResponsiveTemplate>{children}</ResponsiveTemplate>;
};
