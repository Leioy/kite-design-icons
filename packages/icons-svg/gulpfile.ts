import { series, parallel } from 'gulp'
import { generateIcons } from './tasks/generateIcons'
import { generateEntry } from './tasks/generateEntry'
import { generalConfig } from './plugins/svgo/config/general'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { getIdentifier } from './utils/getIdentifier'
import { copy } from './tasks/copy'

const iconTemplate = readFileSync(resolve(__dirname, './templates/icon.ts.ejs'), 'utf8')
export default series(
	parallel(
		copy({
			from: [ 'templates/*.ts' ],
			to: 'src',
		}),
		generateIcons({
				from: [ 'svg/*.svg' ],
				to: 'src/asn',
				template: iconTemplate,
				svgoConfig: generalConfig,
				mapToInterpolate: ({ name, content }) => ({
					identifier: getIdentifier(name),
					content,
				}),
				fillName: (name) => getIdentifier(name),
			},
		),
		generateEntry({
			entryName: 'index.ts',
			from: [ 'src/asn/*.ts' ],
			toDir: 'src',
			banner: '// This index.ts file is generated automatically.\n',
			template: `export { default as <%= identifier %> } from '<%= path %>';`,
			mapToInterpolate: ({ name }) => ({
				identifier: getIdentifier(name),
				path: `./asn/${getIdentifier(name)}`,
			}),
		}),
	),
)
