import React, { useContext } from 'react';
import {TitleBox,TextBox,CryptoBox, DataBox,  InformationBox, CategoryBox, NameBox} from '../../atoms/SectionScheme/SectionScheme.styles'
import { CryptoContext } from '../../../providers/CryptoProvider'
import { slideRight } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'
import {IconBox} from './CoreInfo.styles'


const CoreInfo = ({coreData}:any) => {
    
	const animationControlsSecond = useAnimation()
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	if (inView2) {
		animationControlsSecond.start('animate')
	}

  return (
  <>
        <CryptoBox key={coreData.name}
        ref={ref2}
    variants={slideRight}
    initial='initial'
    custom={{ duration: 1.1 }}
    animate={animationControlsSecond}>
        <IconBox>
                    <Image
                        src={coreData.icon}
                        width='100'
                        height='100'
                        quality={100}
                        alt='icon'
                    />
                </IconBox>
            <NameBox>
            <h2>{coreData.name}</h2>
            </NameBox>
            <InformationBox>{coreData.text}</InformationBox>
        </CryptoBox>
    </>
  )
}

export default CoreInfo