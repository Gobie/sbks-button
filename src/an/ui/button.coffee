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
    @export
  ###
  constructor: (@content, opt_renderer, opt_domHelper) ->
    super opt_domHelper
    @_iconEl = goog.dom.createDom 'i' #, class: 'icon'
    @updated = no
    @contentIsHtml = yes

  ###*
    @inheritDoc
    @export
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

    goog.dom.appendChild @getContentElement(), @_iconEl
    return

  ###*
    @param {string} content
    @param {boolean|null=} contentIsHtml
    @export
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
    @export
  ###
  getHTMLContent: () ->
    @getElement().innerHTML


  ###*
    @return {string}
    @export
  ###
  getTextContent: () ->
    @getElement().innerText

  ###*
    @param {boolean} updated
    @export
  ###
  setUpdated: (@updated) ->

  ###*
    @return {boolean}
    @export
  ###
  isUpdated: () ->
    @updated

  ###*
    @override
    @export
  ###
  enterDocument: () ->
    super
    @getHandler().listen @getElement(), goog.events.EventType.CLICK, @handleClick
    return

  ###*
    @param {goog.events.Event} ev
    @export
  ###
  handleClick: (ev) ->
    return unless @isEnabled()
    @dispatchEvent goog.ui.Component.EventType.ACTION

    return

  ###*
    @param {string} icon
    @export
  ###
  setIcon: (icon) =>
    goog.dom.classlist.add @_iconEl, icon
    goog.dom.classlist.add @_iconEl, 'icon'
    return
