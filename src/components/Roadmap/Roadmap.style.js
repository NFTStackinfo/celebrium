import styled from 'styled-components'

export const RoadmapStyle = styled.section`
	padding-top: 128px;
	margin-top: 72px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
		margin-top: 42px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}) {
		margin-top: 32px;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
		margin-top: 0;
		padding-top: 120px;
	}

	.container {
		> h2 {
			text-align: center;
		}

		.roadmap-body {
			margin-top: 48px;

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				margin-top: 40px;
			}
		}
	}
`
