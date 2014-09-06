goog.require 'an.ui.Component'
goog.require 'goog.dom.classlist'

goog.provide 'an.ui.Button'

class an.ui.Button extends an.ui.Component
  ###*
    @param {string} content
    @param {goog.ui.ButtonRenderer=} opt_renderer
    @param {goog.dom.DomHelper=} opt_domHelper
    @constructor
    @extends {an.ui.Component}
  ###
  constructor: (@content, opt_renderer, opt_domHelper) ->
    super opt_domHelper
    @updated = no
    @contentIsHtml = yes

  ###*
    @inheritDoc
  ###
  createDom: ->
    super
    @decorateInternal @getElement()

  ###*
    @inheritDoc
  ###
  decorateInternal: (element) ->
    super element
    goog.dom.classlist.enable element, 'an-btn', yes
    @setEnabled @enabled
    @setContent @content
    return

  ###*
    @param {string} content
    @param {boolean|null=} contentIsHtml
  ###
  setContent: (@content, contentIsHtml = null) ->
    if contentIsHtml? then @contentIsHtml = contentIsHtml

    if el = @getElement()
      if @contentIsHtml
        el.innerHTML = @content
      else
        @dom_.setTextContent el, @content

  ###*
    @return {string}
  ###
  getHTMLContent: () ->
    @getElement().innerHTML


  ###*
    @return {string}
  ###
  getTextContent: () ->
    @getElement().innerText

  ###*
    @param {boolean} updated
  ###
  setUpdated: (@updated) ->

  ###*
    @return {boolean}
  ###
  isUpdated: () ->
    @updated

  ###*
    @override
  ###
  enterDocument: () ->
    super
    @getHandler().listen @getElement(), goog.events.EventType.CLICK, @handleClick
    return

  ###*
    @param {goog.events.Event} ev
  ###
  handleClick: (ev) ->
    return unless @isEnabled()
    console.log 'clicked'
    return
