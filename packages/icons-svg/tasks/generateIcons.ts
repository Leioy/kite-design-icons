import { src, dest } from 'gulp'
import rename from 'gulp-rename'
import SVGO from 'svgo';
import { svgo } from '../plugins/svgo'
import { svgToDefinition } from '../plugins/svgToDefinition'
import { useTemplate, UseTemplateOptions } from '../plugins/useTemplate'

interface GenerateIconsOptions extends UseTemplateOptions {
	from: string[]
	to: string
	svgoConfig: SVGO.Options
	fillName: (name: string) => string
}

export const generateIcons = ({
	                              from,
	                              to,
	                              template,
	                              mapToInterpolate,
	                              svgoConfig,
	                              fillName,
                              }: GenerateIconsOptions) => function GenerateIcons () {
	return src(from)
		.pipe(svgo(svgoConfig))
		.pipe(svgToDefinition())
		.pipe(useTemplate({ template, mapToInterpolate }))
		.pipe(rename((file) => {
			if (file.basename) {
				file.basename = fillName(file.basename)
				file.extname = '.ts'
			}
		}))
		.pipe(dest(to))
}
