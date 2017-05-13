class ToolTip extends TextLayer
	constructor: (options = {}) ->
		@arrow = options.arrow
		@target = options.target
		@timeOut = options.timeOut
		options.fontSize ?= 28
		options.color ?= 'white'
		options.backgroundColor ?= 'red'
		options.borderRadius = 5
		options.padding = [12, 20, 16, 20]
		options.x ?= 0
		options.y ?= 0
		options.timeOut ?= 3
		super(options)

		arrowSize = 18

		posTop = [(@width - arrowSize)/2, -arrowSize/2]
		posBottom = [(@width - arrowSize)/2, @height-arrowSize/2]
		posLeft = [-arrowSize/2, (@height - arrowSize)/2]
		posRight = [@width-arrowSize/2, (@height - arrowSize)/2]
		arrowPosition = posTop
		if @arrow is 'top'
			@.x = (@target.x - @width/2) + @target.width/2
			@.y = @target.y + @target.height
		if @arrow is 'bottom'
			arrowPosition = posBottom
			@.x = (@target.x - @width/2) + @target.width/2 + @.x
			@.y = @target.y - @height + @.y

		arrow = new Layer
			parent: this
			x: arrowPosition[0]
			y: arrowPosition[1]
			backgroundColor: @.backgroundColor
			rotation: 45
			width: arrowSize
			height: arrowSize

		timer = new Layer
			parent: this
			backgroundColor: 'transparent'

		timer.states =
			timeOut:
					opacity: 0
					options:
						time: @timeOut

		timer.animate 'timeOut'

		this.states =
			default:
				opacity: 1
			hidden:
				opacity: 0

		@.stateSwitch 'hidden'
		@.animate 'default'

		timer.onAnimationEnd ->
			this.parent.animate 'hidden', time: 1

exports.ToolTip = ToolTip
