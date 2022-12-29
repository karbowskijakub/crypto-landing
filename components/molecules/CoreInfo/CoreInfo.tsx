import React, { useEffect } from 'react'
import { TitleBox, TextBox, CryptoBox, DataBox, CategoryBox } from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideLeft } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'
import { IconBox, SetupBox, InformationBox, NameBox } from './CoreInfo.styles'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const CoreInfo = ({ name, text, thumbnail }: any) => {
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
				variants={slideLeft}
				initial='initial'
				custom={{ duration: 1.1 }}
				animate={animationControlsSecond}>
				<SetupBox>
					<IconBox>
						<Image
							src={'https:' + thumbnail.fields.file.url}
							width={thumbnail.fields.file.details.image.width}
							height={thumbnail.fields.file.details.image.height}
							alt='icon'
						/>
					</IconBox>
					<NameBox>
						<h2>{name}</h2>
					</NameBox>
				</SetupBox>
				<InformationBox>{documentToReactComponents(text)}</InformationBox>
			</CryptoBox>
		</>
	)
}

export default CoreInfo
