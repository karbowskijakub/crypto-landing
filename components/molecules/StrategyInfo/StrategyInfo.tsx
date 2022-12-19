import React, { useContext } from 'react';
import {TitleBox,TextBox,CryptoBox, DataBox, IconBox, InformationBox, NameBox} from '../../atoms/SectionScheme/SectionScheme.styles'
import { CryptoContext } from '../../../providers/CryptoProvider'
import { slideRight } from '../../animations/animations.js'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import {CategoryBox} from './StrategyInfo.styles'




const StrategyInfo = ({strategyData}:any) => {


    const { strategy } = useContext(CryptoContext)
	const animationControlsThird = useAnimation()
	const [ref3, inView3] = useInView({ threshold: 0 })
	if (inView3) {
		animationControlsThird.start('animate')
	}



  return (
    <>
    <CryptoBox key={strategyData.name}
    	ref={ref3}
        variants={slideRight}
        initial='initial'
        custom={{ duration: 1.1 }}
        animate={animationControlsThird}>
						<DataBox>
							<h2>{strategyData.number}</h2>
						</DataBox>
						<NameBox>
							<CategoryBox>
								<h2>{strategyData.name}</h2>
							</CategoryBox>
						</NameBox>
						<InformationBox>{strategyData.text}</InformationBox>
					</CryptoBox>
</>
  )
}

export default StrategyInfo