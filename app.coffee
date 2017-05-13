
# Framer Defaults
Framer.Defaults.Animation =
	curve: Bezier.ease
	time: .2
Framer.Defaults.Layer.backgroundColor = 'tomato'
Framer.Extras.Hints.disable()
nothingHappens = () ->
	null

{ToolTip} = require 'ToolTip'

box = new Layer
	x: 300
	y: 300
	height: 400

tooltip = new ToolTip
	text: 'What is going asdadasdsdn.'
	target: box
	timeOut: 3
	backgroundColor: '#363a45'
	arrow: 'top'


