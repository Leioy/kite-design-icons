import { createTransformStream } from '../creators'
import parseXml, { XmlElement } from '@rgrove/parse-xml';
import { AbstractNode } from '../../templates/types'


export const svgToDefinition = () => {
	return createTransformStream((SVGString, file) => {
		element2AbstractNode((parseXml(SVGString).children[0]) as XmlElement)
		return JSON.stringify({
			name: file.stem,
			icon: element2AbstractNode((parseXml(SVGString).children[0]) as XmlElement),
		})
	})
}

function element2AbstractNode ({ name: tag, attributes, children }: XmlElement): AbstractNode {
	if (children.length) {
		return {
			tag,
			attrs: attributes,
			children: children.map(i => element2AbstractNode(i as XmlElement)),
		}
	} else {
		return {
			tag,
			attrs: attributes,
		}
	}
}
