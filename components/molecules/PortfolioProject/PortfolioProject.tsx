import React, { useEffect } from 'react'
import {
	TitleBox,
	TextBox,
	DataBox,
	IconBox,
	InformationBox,
	CategoryBox,
	HoverBox,
} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { CryptoBox, NameBox } from './PortfolioProject.styles'
import Image from 'next/legacy/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const PortfolioProject = ({ date, name, type, text, thumbnail }: any) => {
	const animationControlsSecond = useAnimation()
	const [ref2, inView2] = useInView({ threshold: 0.5 })

	useEffect(() => {
		if (inView2) {
			animationControlsSecond.start('animate')
		}
	}, [animationControlsSecond, inView2])

	return (
		<>
			<CryptoBox
				ref={ref2}
				variants={slideRight}
				initial='initial'
				custom={{ duration: 1.1 }}
				animate={animationControlsSecond}>
				<HoverBox>
					<DataBox>
						<h2>{date}</h2>
					</DataBox>
					<NameBox>
						<IconBox>
							<Image
								src={'https:' + thumbnail.fields.file.url}
								width={thumbnail.fields.file.details.image.width}
								height={thumbnail.fields.file.details.image.height}
								alt='crypto icon'
							/>
						</IconBox>

						<CategoryBox>
							<h1>{name}</h1>
							<p>{type}</p>
						</CategoryBox>
					</NameBox>
					<InformationBox>{documentToReactComponents(text)}</InformationBox>
				</HoverBox>
			</CryptoBox>
		</>
	)
}

export default PortfolioProject
