import { createTransformStream } from '../creators'
import template from 'lodash.template'

export interface UseTemplateOptions {
	template: string
	mapToInterpolate: (meta: { name: string, content: string, path: string }) => object
}

export const useTemplate = ({ template: tplContent, mapToInterpolate }: UseTemplateOptions) => {
	const executor = template(tplContent)
	return createTransformStream((content, { stem: name, path }) => {
			return executor(mapToInterpolate({ name, content, path }))
		},
	)
}
