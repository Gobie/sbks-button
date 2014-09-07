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
  attachedCallback: ->
    content = @getAttribute 'content'
    if content
      @button.setContent content, yes
    else
      @button.setContent @innerHTML, yes

    @innerHTML = ''
    @button.render @
    return

  ###*
    @export
  ###
  detachedCallback: ->
    @button.exitDocument()
    return

###*
  @export
###
SBKSButton = document.registerElement 'sbks-button',
  prototype: an.ui.Button.WebComponent::