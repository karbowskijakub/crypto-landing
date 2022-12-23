import React, { useContext } from 'react'
import {
	TitleBox,
	TextBox,
	CryptoBox,
	DataBox,
	InformationBox,
	CategoryBox,
	NameBox,
} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'
import { IconBox } from './CoreInfo.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CoreInfo = ({ name, text, thumbnail }: any) => {
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
				<IconBox>
					<Image
						src={'https:' + thumbnail.fields.file.url}
						width={thumbnail.fields.file.details.image.width}
						height={thumbnail.fields.file.details.image.height}
						alt='dds'
					/>
				</IconBox>
				<NameBox>
					<h2>{name}</h2>
				</NameBox>
				<InformationBox>{documentToReactComponents(text)}</InformationBox>
			</CryptoBox>
		</>
	)
}

export default CoreInfo
