import React from 'react'
import { InfoBox, TextBox } from '../../atoms/SectionScheme/SectionScheme.styles'

import { Container ,CopyBox, CopyContainer,LogoBox } from './Footer.styles'
import { LogoContainer } from '../Navbar/Navbar.styles'
import { IconsWrapper, LinkContainerIcon, LinkedinIcon, TwitterIcon } from '../../molecules/NavLinks/NavLinks.styles'

const Footer = () => {
	return (
		<Container>
			<InfoBox>
				<LogoBox>
					<LogoContainer href='#' passHref>
						CryptoEnth
					</LogoContainer>
				</LogoBox>
				<TextBox>
					<p>
						Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
						Latin literature from 45 BC, making it over 2000 years old.
					</p>
				</TextBox>
				<CopyBox>
					<CopyContainer>
						<p>dasdasdasdasdasdasdasdasdas</p>
					</CopyContainer>
					<IconsWrapper>
						<LinkContainerIcon href='#'>
							<TwitterIcon />
						</LinkContainerIcon>
						<LinkContainerIcon href='#'>
							<LinkedinIcon />
						</LinkContainerIcon>
					</IconsWrapper>
				</CopyBox>
			</InfoBox>
		</Container>
	)
}

export default Footer
