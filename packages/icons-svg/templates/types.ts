export interface AbstractNode {
	tag: string
	attrs: {
		[key: string]: string
	}
	children?: AbstractNode[]
}

export interface IconDefinition {
	name: string
	icon: AbstractNode
}
