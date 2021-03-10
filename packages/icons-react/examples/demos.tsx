import React, { useEffect, useRef } from 'react'
import { Alipay } from '../src'

export default function () {
	const ref = useRef(null)
	useEffect(() => {
		console.log(ref.current)
	})
	return <>
		<Alipay/>
		<Alipay spin/>
		<Alipay rotate={180}/>
		<Alipay className="xxx" style={{ color: 'red' }}/>
		<Alipay ref={ref} onClick={(e: any) => console.log(e.target)}/>
	</>
}
