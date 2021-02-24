import { createTransformStream } from '../plugins/creators'

export const xxx = () =>{
	return createTransformStream((content,file) => {
		console.log(file.basename)
		return ''
	})
}
