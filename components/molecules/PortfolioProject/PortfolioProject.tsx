import React, { useContext } from 'react'
import {
	TitleBox,
	TextBox,
	CryptoBox,
	DataBox,
	IconBox,
	InformationBox,
	CategoryBox,
	NameBox,
} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const PortfolioProject = ({ date, name, type, text, thumbnail }: any) => {
	const animationControlsSecond = useAnimation()
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	if (inView2) {
		animationControlsSecond.start('animate')
	}

	return (
		<>
			<CryptoBox
				ref={ref2}
				variants={slideRight}
				initial='initial'
				custom={{ duration: 1.1 }}
				animate={animationControlsSecond}>
				<DataBox>
					<h2>{date}</h2>
				</DataBox>
				<NameBox>
					<IconBox>
						<Image
							src={'https:' + thumbnail.fields.file.url}
							width={thumbnail.fields.file.details.image.width}
							height={thumbnail.fields.file.details.image.height}
							alt='dds'
						/>
					</IconBox>
					<CategoryBox>
						<h2>{type}</h2>
						<h2>{name}</h2>
					</CategoryBox>
				</NameBox>
				<InformationBox>{documentToReactComponents(text)}</InformationBox>
			</CryptoBox>
		</>
	)
}

export default PortfolioProject
