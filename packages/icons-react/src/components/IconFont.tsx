import * as React from 'react'
import Icon, { IconBaseProps } from './CustomIcon'

export interface IconFontOptions {
	scriptUrl?: string | string[]
	extraCommonProps?: { [key: string]: any }
}

export interface IconFontProps extends IconBaseProps {
	type: string
}

const customCache = new Set<string>()

function isValidCustomScriptUrl (scriptUrl: string) {
	return scriptUrl.length && !customCache.has(scriptUrl)
}

function createScriptUrlElements (scriptUrls: string[], index = 0) {
	const currentScriptUrl = scriptUrls[index]
	if (isValidCustomScriptUrl(currentScriptUrl)) {
		const script = document.createElement('script')
		script.setAttribute('src', currentScriptUrl)
		script.setAttribute('data-namespace', currentScriptUrl)
		if (scriptUrls.length > index + 1) {
			script.onload = () => {
				createScriptUrlElements(scriptUrls, index + 1)
			}
			script.onerror = () => {
				createScriptUrlElements(scriptUrls, index + 1)
			}
		}
		customCache.add(currentScriptUrl)
		document.body.appendChild(script);
	}
}

export default function create (options: IconFontOptions = {}) {
	const { scriptUrl, extraCommonProps } = options
	if (
		scriptUrl &&
		typeof document !== undefined &&
		typeof window !== undefined &&
		typeof document.createElement === 'function'
	) {
		if (Array.isArray(scriptUrl)) {
			createScriptUrlElements(scriptUrl)
		} else {
			createScriptUrlElements([ scriptUrl ])
		}
	}
	
	const IconFont = React.forwardRef<HTMLSpanElement, IconFontProps>((props, ref) => {
		const { type, children, ...rest } = props
		const content = <use xlinkHref={`#${type}`}/>;
		return <Icon {...extraCommonProps} {...rest} ref={ref}>
			{content}
		</Icon>
	})
	IconFont.displayName = 'IconFont'
	return IconFont
}
