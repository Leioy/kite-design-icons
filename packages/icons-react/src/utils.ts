import { insertCss } from 'insert-css'
import type { AbstractNode } from '@kite-design/icons-svg/lib/types'
import React, { useEffect } from 'react'

export interface Attrs {
	[key: string]: string
}

const normalizeAttrs: (attrs: Attrs) => Attrs = (attrs = {}) => {
	return Object.keys(attrs).reduce((acc: Attrs, key) => {
		const val = attrs[key]
		switch (key) {
			case 'class':
				acc.className = val
				delete acc.class
				break
			default:
				acc[key] = val
		}
		return acc
	}, {})
}

export function generate (
	node: AbstractNode,
	key: string,
	rootProps?: { [key: string]: any } | false,
): any {
	if (!rootProps) {
		return React.createElement(
			node.tag,
			{ key, ...normalizeAttrs(node.attrs) },
			(node.children || []).map((child, index) => generate(child, `svg-${child.tag}-${index}`)),
		)
	}
	return React.createElement(
		node.tag,
		{
			key,
			...normalizeAttrs(node.attrs),
			...rootProps,
		},
		(node.children || []).map((child, index) => generate(child, `svg-${child.tag}-${index}`)),
	)
}

export const iconStyles = `
.kiteicon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.kiteicon > * {
  line-height: 1;
}

.kiteicon svg {
  display: inline-block;
}

.kiteicon::before {
  display: none;
}

.kiteicon .kiteicon-icon {
  display: block;
}

.kiteicon[tabindex] {
  cursor: pointer;
}

.kiteicon-spin::before,
.kiteicon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
let cssInjectedFlag = false;
export const useInsertStyles = (styleStr: string = iconStyles) => {
	useEffect(() => {
		if (!cssInjectedFlag) {
			insertCss(styleStr, {
				prepend: true,
			});
			cssInjectedFlag = true;
		}
	}, []);
}
