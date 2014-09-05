goog.require 'goog.dom.classlist'
goog.require 'goog.array'
goog.require 'goog.ui.Component'

goog.provide 'an.ui.Component'

class an.ui.Component extends goog.ui.Component

  ###*
    @param {goog.dom.DomHelper=} domHelper
    @param {string=} localClassName
    @constructor
    @extends {goog.ui.Component}
  ###
  constructor: (domHelper = null, localClassName) ->
    super domHelper
    @extraClassNames = if localClassName? then [localClassName] else []

  ###*
    @type {string}
    @protected
  ###
  DISABLED_CLS: 'an-component-disabled'

  ###*
    @type {boolean}
    @protected
  ###
  enabled: true

  ###*
    @type {Array.<string>|null}
    @protected
  ###
  extraClassNames: null

  ###*
    @type {?string}
    @private
  ###
  _urlKey: null

  ###*
    @type {boolean}
    @private
  ###
  loadOnEnterDocument: yes

  ###*
    @param {string=} _urlKey
  ###
  setUrlKey: (@_urlKey = null) ->

  ###*
    @return {?string}
  ###
  getUrlKey: -> @_urlKey

  ###*
    @override
  ###
  createDom: ()->
    super
    @addExtraClassesToElement()

  ###*
    @param {boolean} loadOnEnterDocument
  ###
  enableLoadOnEnterDocument: (@loadOnEnterDocument) ->

  loadModelIfNeeded: ->
    @getModel?()?.loadData?() if @loadOnEnterDocument

  ###*
    @param {*} model
    @param {Object=} eventConfig
    @param {boolean=} clearEvents
    @override
  ###
  setModel: (model, eventConfig = null, clearEvents = no) ->
    super model
    m = (`/** @type {goog.events.Listenable} */`) model
    if eventConfig?
      @getHandler().removeAll() if clearEvents
      for eventName, eventHandler of eventConfig
        @getHandler().listen m, eventName, eventHandler
    return

  ###*
    @return {boolean}
  ###
  isEnabled: () ->
    @enabled

  ###*
    @param {boolean} enabled
  ###
  setEnabled: (enabled) ->
    @enabled = enabled

    @enableClassName @DISABLED_CLS, !enabled

    return

  ###*
    @param {string|Array.<string>} classNames
    @param {boolean} enabled
  ###
  enableClassName: (classNames, enabled) ->
    classNames = [classNames] if typeof classNames == 'string'

    for className in classNames
      if enabled
        @extraClassNames.push(className) unless goog.array.contains @extraClassNames, className
      else
        goog.array.remove @extraClassNames, className

      if @getElement()
        goog.dom.classlist.enable @getElement(), className, enabled

    return

  ###*
    @param {string|Array.<string>} classNames
  ###
  addClassName: (classNames) ->
    @enableClassName classNames, yes
    return

  ###*
    @param {string|Array.<string>} classNames
  ###
  removeClassName: (classNames) ->
    @enableClassName classNames, no
    return

  ###*
    this should be called in createDom, if your component dont extend this createDom function, you have call it manually
    @param {Element=} element
  ###
  addExtraClassesToElement: (element = @getElement()) ->
    if element and @extraClassNames? and !goog.array.isEmpty @extraClassNames
      for className in @extraClassNames
        goog.dom.classlist.enable element, className, yes

    return

  ###*
    Feel free to override it on child component.
    @param {string} state
    @protected
  ###
  handleUrlStateInternal: (state) ->
    return

  ###*
    Feel free to override it on child component.
    @return {?string}
    @protected
  ###
  getUrlStateInternal: ->
    null
