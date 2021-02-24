import { src, dest } from 'gulp'

export interface CopyOptions {
	from: string[]
	to: string
}

export const copy = ({ from, to }: CopyOptions) =>
	() => src(from).pipe(dest(to))
