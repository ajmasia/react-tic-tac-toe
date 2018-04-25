/**
 * Import dependences
 */
import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

/**
 * Styled Square components
 */
const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	margin: auto;
`;

const LogoStyled = styled.img`
	animation: App-logo-spin infinite 20s linear;
	height: 30px;
	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const ValueStyled = styled.h1`
	font-size: 1.2em;
`;

/**
 * Square functional component
 */
const Title = props => (
	<TitleWrapper>
		<LogoStyled src={logo} />
		<ValueStyled>TIC TAC TOE</ValueStyled>
	</TitleWrapper>
);

// Export Square component
export default Title;
