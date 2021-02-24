import camelCase from 'lodash.camelcase'
import upperFirst from 'lodash.upperfirst'

export const getIdentifier = (name: string) => upperFirst(camelCase(name))
