import { ComponentDoc } from 'vue-docgen-api'

export default function findOrigins(docs: ComponentDoc): string[] {
	const allDescriptors = [
		...(docs.props || []),
		...(docs.methods || []),
		...(docs.slots || []),
		...(docs.events || [])
	]
	const originFilePaths: string[] = []
	allDescriptors.forEach(p => {
		if (p.extends) {
			originFilePaths.push(p.extends.path)
		}
		if (p.mixin) {
			originFilePaths.push(p.mixin.path)
		}
	})
	return originFilePaths
}
