import * as allIconDefs from '@kite-design/icons-svg'
import { IconDefinition } from '@kite-design/icons-svg/es/types'
import * as path from 'path'
import { promises as fs } from 'fs'
import { template } from 'lodash'

interface IconDefinitionWithIdentifier extends IconDefinition {
	svgIdentifier: string
}

function walk<T> (fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
	return Promise.all(
		Object.keys(allIconDefs)
			.map(svgIdentifier => {
				const iconDef = (allIconDefs as { [id: string]: IconDefinition })[svgIdentifier];
				return fn({ svgIdentifier, ...iconDef });
			}),
	)
}

async function generateIcons () {
	const iconsDir = path.join(__dirname, '../src/icons')
	try {
		await fs.access(iconsDir)
	} catch (e) {
		await fs.mkdir(iconsDir)
	}
	
	const render = template(`
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import * as React from 'react'
import <%= svgIdentifier %>Svg from '@kite-design/icons-svg/lib/asn/<%= svgIdentifier %>';
import KiteIcon from '../components/KiteIcon'
import { IconBaseProps } from '../components/CustomIcon'

const <%= svgIdentifier %> = (
  props: IconBaseProps,
  ref: React.ForwardedRef<HTMLSpanElement>
) => <KiteIcon {...props} ref={ref} icon={<%= svgIdentifier %>Svg} />;

<%= svgIdentifier %>.displayName = '<%= svgIdentifier %>';
export default React.forwardRef<HTMLSpanElement, IconBaseProps>(<%= svgIdentifier %>);
`.trim());
	
	await walk(async ({ svgIdentifier }) => {
		await fs.writeFile(path.resolve(__dirname, `../src/icons/${svgIdentifier}.tsx`), render({ svgIdentifier }))
	})
	
	// generate icon index
	const entryText = Object.keys(allIconDefs)
		.sort()
		.map(svgIdentifier => `export { default as ${svgIdentifier} } from './${svgIdentifier}';`)
		.join('\n');
	
	await fs.appendFile(
		path.resolve(__dirname, '../src/icons/index.tsx'),
		`
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

${entryText}
    `.trim(),
	);
}

async function generateEntries() {
	const render = template(`
'use strict';
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;
  
  var _<%= svgIdentifier %> = _interopRequireDefault(require('./lib/icons/<%= svgIdentifier %>'));
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _default = _<%= svgIdentifier %>;
  exports.default = _default;
  module.exports = _default;
`.trim());
	
	await walk(async ({ svgIdentifier }) => {
		// generate `Icon.js` in root folder
		await fs.writeFile(
			path.resolve(__dirname, `../${svgIdentifier}.js`),
			render({
				svgIdentifier,
			}),
		);
		
		// generate `Icon.d.ts` in root folder
		await fs.writeFile(
			path.resolve(__dirname, `../${svgIdentifier}.d.ts`),
			`export { default } from './lib/icons/${svgIdentifier}';`,
		);
	});
}

if (process.argv[2] === '--target=icon') {
	generateIcons();
}

if (process.argv[2] === '--target=entry') {
	generateEntries();
}
