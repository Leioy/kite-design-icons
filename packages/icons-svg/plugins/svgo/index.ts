import SVGO from 'svgo'
import { createTransformStreamAsync } from '../creators'

export const svgo = (svgoConfig: SVGO.Options) => {
	const optimizer = new SVGO(svgoConfig)
	return createTransformStreamAsync(async (before: string) => {
		const { data } = await optimizer.optimize(before);
		return data;
	})
}
