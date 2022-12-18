import React, { useContext } from 'react';
import {TitleBox,TextBox,CryptoBox, DataBox, IconBox, InformationBox, CategoryBox, NameBox} from '../../atoms/SectionScheme/SectionScheme.styles'
import { CryptoContext } from '../../../providers/CryptoProvider'
import { slideRight } from '../../animations/animations.ts'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/legacy/image'



const PortfolioProject = ({cryptoData}) => {
    
	const animationControlsSecond = useAnimation()
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	if (inView2) {
		animationControlsSecond.start('animate')
	}

  return (
  <>
        <CryptoBox key={cryptoData.name}
        ref={ref2}
    variants={slideRight}
    initial='initial'
    custom={{ duration: 1.1 }}
    animate={animationControlsSecond}>
            <DataBox>
                <h2>{cryptoData.date}</h2>
            </DataBox>
            <NameBox>
                <IconBox>
                    <Image
                        src={cryptoData.icon}
                        width='100%'
                        height='100%'
                        quality={100}
                        alt='icon'
                    />
                </IconBox>
                <CategoryBox>
                    <h2>{cryptoData.type}</h2>
                    <h2>{cryptoData.name}</h2>
                </CategoryBox>
            </NameBox>
            <InformationBox>{cryptoData.text}</InformationBox>
        </CryptoBox>
    </>
  )
}

export default PortfolioProject