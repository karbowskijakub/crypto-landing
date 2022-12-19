

const springTransition = {
	type: 'spring',
	duration: 0.3,
}

const slideRight = {
	initial: { x: -50, opacity: 0 },
	animate: ({ delay, duration }) => ({
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			duration: duration || 0,
			delay: delay || 0.2,
		},
	}),
}


const Right= {
	initial: {  opacity: 0 },
	animate: ({ delay, duration }) => ({
		opacity: 1,
		transition: {
			type: 'spring',
			duration: duration || 0.2,
			delay: delay || 0,
		},
	}),
}

const scaleY = {
	initial: {
		opacity: 0,
		scaleY: 0.8,
	},
	animate: (delay = 0.3) => ({
		opacity: 1,
		scaleY: 1,
		transition: { delay, ...springTransition },
	}),
}



export { slideRight,Right,scaleY};