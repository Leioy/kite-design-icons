import React from  'react'
import {Alipay} from '../src'

console.log(Alipay)
export default function () {
	return <Alipay onClick={e=>console.log(e.target)}/>
}
