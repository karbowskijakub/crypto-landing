import React from 'react'
import {Container} from './AboutSection.styles'
import { Decoration,InfoBox,TitleBox,TextBox,ButtonBox} from '../../atoms/SectionScheme/SectionScheme.styles'
import {slideRight,Right} from '../../animations/animations.ts'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion'
import {HeroButtonBlack} from '../../atoms/Button/Button'
import {HeroLinkBlack} from '../HeroSection/HeroSection.styles'
import {ShareBlack} from '../HeroSection/HeroSection.styles'

const AboutSection = () => {



	const [ref, inView] = useInView({ threshold: 0.5 })
	const [ref2, inView2] = useInView({ threshold: 0.5 })
	const [ref3, inView3] = useInView({ threshold: 0.5 })
	const [ref4, inView4] = useInView({ threshold: 0.5 })
	const animationControls = useAnimation()
	const animationControlsSecond = useAnimation()
	const animationControlsThird = useAnimation()
	const animationControlsFourth = useAnimation()

	if (inView) {
		animationControls.start('animate')
	}
	if (inView2) {
		animationControlsSecond.start('animate')
	}
	if (inView3) {
		animationControlsThird.start('animate')
	}
	if (inView4) {
		animationControlsFourth.start('animate')
	}


  return (
    <Container>
<Decoration
ref={ref}
variants={slideRight}
initial='initial'
custom={{ duration: 1.1 }}
animate={animationControls}

/>
<InfoBox>

<TitleBox
ref={ref2}
variants={Right}
initial='initial'
custom={{ duration: 1.1 }}
animate={animationControlsSecond}
>
<h1>About our investments</h1>
</TitleBox>
<TextBox 
ref={ref3}
variants={Right}
initial='initial'
custom={{ duration: 1.1 }}
animate={animationControlsThird}>
<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p> 
</TextBox>
<ButtonBox>
<HeroButtonBlack 
ref={ref4}
variants={Right}
initial='initial'
custom={{ duration: 1.1 }}
animate={animationControlsFourth}><HeroLinkBlack href="#">More about us<ShareBlack/></HeroLinkBlack></HeroButtonBlack>
</ButtonBox>

</InfoBox>



    </Container>
  )
}

export default AboutSection