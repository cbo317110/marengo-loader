module.exports = (c) => {
	let detection = 'Marengo ='
	if (c.includes(detection)) {
		c = c.replace(detection, `
			import M from 'marengo'
			import settings from './marengo/settings'
			import plugins from './marengo/plugins'
			let Marengo =
		`)
		c += `
			Marengo = M(Marengo, settings, plugins)
			export default Marengo
		`
	}
	return c
}