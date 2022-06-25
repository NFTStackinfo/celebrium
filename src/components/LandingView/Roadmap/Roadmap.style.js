import styled from 'styled-components'

export const RoadmapStyle = styled.section`
	padding-top: 120px;
	margin-top: 40px;

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
	    margin-top: 0;
	}

	.container {
    .title-content {
      text-align: center;

      >p {
        margin-top: 24px;
      }
    }

		.roadmap-body {
			margin-top: 48px;

			@media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
				margin-top: 40px;
			}
		}
	}
`
