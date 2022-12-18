import React, { useContext } from 'react'
import { Decoration} from '../../atoms/SectionScheme/SectionScheme.styles'
import { slideRight,Right } from '../../animations/animations.ts'
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { HeroButtonBlack } from '../../atoms/Button/Button'
import { HeroLinkBlack } from '../HeroSection/HeroSection.styles'
import { ShareBlack } from '../HeroSection/HeroSection.styles'
import {Container,InfoBox,TitleBox,TextBox,StatsBox} from './ResultSection.styles'
import { CryptoContext } from '../../../providers/CryptoProvider'
import ResultsInfo from '../../molecules/ResultsInfo/ResultsInfo'

const ResultSection = () => {

    const { results } = useContext(CryptoContext)
	const animationControls = useAnimation()
	const animationControlsFourth = useAnimation()
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()
    const [ref4 ,inView4]  = useInView({ threshold: 0.8 })
    const [ref2 ,inView2]  = useInView({ threshold: 0.5 })
    const [ref3 ,inView3]  = useInView({ threshold: 0.5 })
	const [ref, inView] = useInView({ threshold: 0 })
    if (inView4) {
		animationControlsFourth.start('animate')
	}
    if (inView2) {
		animationControlsSecond.start('animate')
	}
    if (inView3) {
		animationControlsThird.start('animate')
	}

  return (
    <Container>
    <Decoration
ref={ref4}
variants={slideRight}
initial='initial'
custom={{ duration: 1.1 }}
animate={animationControlsFourth}

/>

    <InfoBox>
      <div>
        <TitleBox
        ref={ref2}
        variants={Right}
        initial='initial'
        custom={{ duration: 1.1 }}
        animate={animationControlsSecond}
        >
            <h1>Results</h1>
        </TitleBox>
        <TextBox
         ref={ref3}
         variants={Right}
         initial='initial'
         custom={{ duration: 1.1 }}
         animate={animationControlsThird}
        >
            <p>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
            </p>
        </TextBox>
        </div>
        <StatsBox
        ref={ref}
        >
        {results.map((resultsData,i) => (
          <ResultsInfo key={resultsData.number} resultsData={resultsData} inView={inView} index={i} />
        ))}
</StatsBox>
        
    </InfoBox>
</Container>
  )
}

export default ResultSection