import React, { useEffect, useRef } from 'react'
import { createFromIconfontCN } from '../src'

const MyIcon = createFromIconfontCN({
	scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
	extraCommonProps: {
		testProps: 'test',
	},
})
export default function () {
	const ref = useRef(null)
	useEffect(() => {
		console.log(ref.current)
	})
	return <>
		<MyIcon ref={ref} type='icon-xiangyou' onClick={e => console.log(e.target)}/>
		<MyIcon type='icon-xiangyou' spin/>
		<MyIcon type='icon-xiangyou' rotate={180}/>
		<MyIcon type='icon-xiangyou' style={{ color: 'red' }}/>
	</>
}
