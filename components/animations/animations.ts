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
			delay: delay || 0,
			duration: duration || 0.9,
		},
	}),
}

const Right= {
	initial: {  opacity: 0 },
	animate: ({ delay, duration }) => ({
		opacity: 1,
		transition: {
			type: 'spring',
			duration: duration || 0.9,
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

const scaleUpDown = {
	initial: { opacity: 0 },
	animate: (delay = 0) => ({
		opacity: 1,
		scale: [1, 1.3, 1],
		transition: {
			delay,
			type: 'spring',
			duration: 0.4,
		},
	}),
}
const slideTop = {
	initial: { y: -50, opacity: 0 },
	animate: (delay = 0) => ({
		y: 0,
		opacity: 1,
		transition: {
			type: 'tween',
			duration: 0.4,
			delay,
		},
	}),
}


export { slideRight,Right,scaleY,scaleUpDown,slideTop};