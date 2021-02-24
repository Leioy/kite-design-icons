import { src, dest } from 'gulp'
import concat from 'gulp-concat'
import header from 'gulp-header'
import { useTemplate, UseTemplateOptions } from '../plugins/useTemplate'

export interface GenerateEntryOptions extends UseTemplateOptions {
	entryName: string
	from: string[]
	toDir: string
	banner?: string
}

export const generateEntry = ({
	                              entryName,
	                              from,
	                              toDir,
	                              template,
	                              mapToInterpolate,
	                              banner,
                              }: GenerateEntryOptions) => function GenerateEntry () {
	return src(from)
		.pipe(useTemplate({ template, mapToInterpolate }))
		.pipe(concat(entryName))
		.pipe(header(banner!))
		.pipe(dest(toDir))
}
