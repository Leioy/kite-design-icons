import { defineComponent } from 'vue'
import Icon from './CustomIcon'

export interface CustomOptions {
	scriptUrl?: string | string[]
	extraCommonProps?: { [key: string]: any }
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

export default function create (options: CustomOptions = {}) {
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
	return defineComponent({
		name: 'IconFont',
		props: {
			spin: {
				type: Boolean,
				default: false,
			},
			rotate: Number,
			type: {
				type: String,
				required: true,
			},
		},
		setup (props) {
			const { type, ...restProps } = props
			const iconProps = {
				...restProps,
				...extraCommonProps,
			}
			return () => <Icon {...iconProps}>
				<use xlinkHref={`#${type}`}/>
			</Icon>
		},
	})
}

