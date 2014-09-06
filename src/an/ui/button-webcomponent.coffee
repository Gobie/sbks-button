goog.require 'an.ui.Button'

goog.provide 'an.ui.Button.WebComponent'

class an.ui.Button.WebComponent extends HTMLElement
  ###*
    @constructor
    @extends {HTMLElement}
    @export
  ###
  constructor: ->
    super

  ###*
    @export
  ###
  createdCallback: ->
    @button = new an.ui.Button ''
    return

  ###*
    @export
  ###
  attachedCallback: =>
    @button.setContent @innerHTML, yes
    @innerHTML = ''
    @button.render @
    return

  ###*
    @export
  ###
  detachedCallback: =>
    @button.exitDocument()
    return

###*
  @export
###
SBKSButton = document.registerElement 'sbks-button',
  prototype: an.ui.Button.WebComponent::