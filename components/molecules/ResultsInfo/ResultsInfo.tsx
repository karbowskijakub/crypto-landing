import React, { useContext } from 'react';
import {Element,ElementWrap,ElementNumber,ElementInfo} from './ResultsInfo.styles'
import { CryptoContext } from '../../../providers/CryptoProvider'
import { scaleY } from '../../animations/animations.ts'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import Image from 'next/image'




const ResultsInfo = ({resultsData,inView,index}) => {

    const { strategy } = useContext(CryptoContext)
	const animationControlsThird = useAnimation()



  return (
    
    <Element
    variants={scaleY}
      initial='initial'
      animate={inView && 'animate'}
      custom={index* 0.8}
    >
    <ElementWrap>
    <ElementNumber><h1>{resultsData.number}</h1></ElementNumber>
<ElementInfo><p>{resultsData.text}</p></ElementInfo>
    </ElementWrap>
</Element>

  )
}

export default ResultsInfo