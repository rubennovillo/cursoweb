(function(){var t,n,w,a,v,b,it;try{t=window.$MicrosoftMaps8;n=t.Internal;n.TaskData=n.TaskData||{};var et=t.Anchor,ot=t.BasicMapAnimation,st=t.BirdseyeV2Metadata,ht=t.BitmapImageTemplate,ct=n._BoundsAccumulator,lt=n._ComponentNames,c=n.Control,f=n.ControlTemplate,at=n._BaseMapTemplateSelector,k=t.Internal._Debug,vt=t.DefaultTemplateSelector,yt=n.DelayLoadedObject,pt=n._EntityHelper,wt=n._EntryPoints,bt=n._FeatureNames,s=t.GlobalConfig,kt=n._Gimme,l=n._Helper,dt=t.ImageryMapLayer,ut=n._JSEvent,gt=n._LandmarkEntity,ni=n._LatLonCrs,ti=t.LocationRect,ii=n._LocalStorageCache,ri=n._LoggerConstants,ui=n._LruCache,fi=t.MapMath,ei=s.features.mapDelay,i=t.MapQuadrant,r=t.MapTypeId,oi=n._MercatorTileId,si=n._MercatorTileUtility,hi=t.MapView,ci=t.Location,li=n._Network,ai=n._Observable,ft=n._ObservableObject,y=n._Overlay,vi=t.Point,yi=t.PrimitiveOverlayHelper,pi=t.RasterImageryScene,wi=t.Rectangle,h=t.ResourceManager.MapDelay,bi=t.SimplePointPrimitive,ki=t.Size,di=s.features.streetside,gi=s.features.sharing,nr=s.features.traffic,tr=t.VectorImageTemplate,ir=t.VectorMapLayer,rr=n._VectorMath,ur=t.Viewport,d=t.ZoomLevel,e=this&&this.__extends||function(){var n=function(t,i){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i])},n(t,i)};return function(t,i){function r(){this.constructor=t}n(t,i);t.prototype=i===null?Object.create(i):(r.prototype=i.prototype,new r)}}(),p=function(n){function t(i,r,u){var e=n.call(this)||this,o=t._copyrightContainerTemplate;return u&&r&&r.copyrightTermsLinkUrl&&(o+=t._termsLinkTemplate.replace("{termsLink}",r.copyrightTermsLinkUrl)),o+=t._copyrightControlTemplate,e._clickableCopyrightEnabled=l._isFeatureEnabled("clickableCopyright"),e._clickableCopyrightEnabled&&(o+=t._clickableCopyrightTemplate),o+="<\/span><\/div><\/div>",e._map=i,e.defineProperty("shadowTextStyle"),e.defineProperty("copyrightAttributions"),e.defineProperty("CopyrightLinkHref"),e.defineProperty("CopyrightLinkText"),e.setTemplate(new f(o)),e.setShadowTextStyle("ShadowTextDark"),e._minStart=null,e._maxEnd=null,e.copyrightUpdated=new ut,e.disposables.push(e._map.copyrightChanged.addThrottled(function(){return e._updateCopyright()},2e3)),e.disposables.push(e._map.mapTypeChanged.add(function(n){return e._onMapTypeChanged(n)})),e.disposables.push(e._map.actualSizeChanged.add(function(){e._updateMinStart();e._updateMaxEnd();e._updateCopyrightSize()})),e.rendered.addOne(function(){e._copyrightControl=e.getRootElement().select("#CopyrightControl");e._map.getConfig().useOverlayQuadrants&&e.getRootElement().add_class("quadrantOverride")}),e._updateCopyright(),e}return e(t,n),t.prototype._updateCopyright=function(){var n=this;this._map&&this._map.getCopyrights(function(t){var r="",i,u;for(n._copyrightWithLink=null,i=0,u=t.length;i<u;i++)if(t[i].indexOf("http")>=0){n._clickableCopyrightEnabled?n._copyrightWithLink=t.splice(i,1)[0]:t.splice(i,1);break}r=t.join(", ");n._updateCopyrightLinkDiv()&&(r+=", ");n.copyrightString!==r&&(n.copyrightProviders=t,n.copyrightString=r,n.setCopyrightAttributions&&n.setCopyrightAttributions(r),n._updateCopyrightSize(),n.copyrightUpdated.invoke())})},t.prototype._onMapTypeChanged=function(n){var t=this,i=n.newMapTypeId!==r.birdseyeV2||!s.isMapsVertical;this.setVisible(n.newMapTypeId!==r.streetside&&i);n.oldMapTypeId===r.aerial||n.oldMapTypeId===r.birdseye||n.newMapTypeId!==r.aerial&&n.newMapTypeId!==r.birdseye||this.setShadowTextStyle("ShadowTextLight");n.oldMapTypeId!==r.aerial&&n.oldMapTypeId!==r.birdseye||n.newMapTypeId===r.aerial||n.newMapTypeId===r.birdseye||this.setShadowTextStyle("ShadowTextDark");Microsoft.Maps.setTimeout(function(){t._updateCopyright()},0)},t.prototype._updateCopyrightLinkDiv=function(){var t=!1,u,i,n,o;if(this._copyrightWithLink)if(this._copyrightWithLink.indexOf("href")>=0){if(u=new DOMParser,i=u.parseFromString(this._copyrightWithLink,"text/xml"),i&&i.firstChild){var r=i.firstChild,f=r.textContent,e=r.attributes.getNamedItem("href")&&r.attributes.getNamedItem("href").nodeValue;f&&e&&(this.setCopyrightLinkText(f),this.setCopyrightLinkHref(e),t=!0)}}else n=this._copyrightWithLink.trim().split(" "),n.length>=3&&(t=!0,this.setCopyrightLinkText(n[0]+" "+n[1]),this.setCopyrightLinkHref(n[2]));return o=t?"":"none",this.getRootElement().select("#copyrightLink").set_style({display:o}),t},t.prototype._updateCopyrightSize=function(){var n,t;this._minStart||this._updateMinStart();this._maxEnd||this._updateMaxEnd();n=this._map.getConfig().useOverlayQuadrants?this.getRootElement().get_absolute_pos().x:this.getRootElement().get_relative_pos().x;n<this._minStart?this.getRootElement().add_class("multiLine"):this.getRootElement().remove_class("multiLine");t=this._maxEnd-(this._minStart+1);this._copyrightControl.set_style({"max-width":parseInt(t+"",10)+"px"})},t.prototype._updateMinStart=function(){var n,t;this._map.getConfig().useOverlayQuadrants?(n=this._map.getMapOverlayManager(),n&&(t=n.getQuadrantForControl(this),this._minStart=n.getXStartForQuadrant(t))):this._minStart=this._map.getLogoEnd()},t.prototype._updateMaxEnd=function(){var n=document.getElementById("TermsLinkContainer");this._maxEnd=n?n.getBoundingClientRect().left:this._map.getActualSize().width},t._copyrightContainerTemplate='<div id="CopyrightContainer" class="CopyrightContainer">',t._termsLinkTemplate='<div id="TermsLinkContainer" class="TermsLinkContainer"><a class="{TemplateBinding ShadowTextStyle}" href="{termsLink}" title="Terms" target="mc_bingMaps" style="pointer-events: auto">Terms<\/a><\/div>',t._copyrightControlTemplate='<div id="CopyrightControl" class="CopyrightControl"><span class="{TemplateBinding ShadowTextStyle}"><span class="CopyrightAttributionStyle"><TextBlock Text="{TemplateBinding CopyrightAttributions}"/><\/span>',t._clickableCopyrightTemplate='<a id="copyrightLink" href="{TemplateBinding CopyrightLinkHref}" class="ShadowTextDark" style="pointer-events: auto"><TextBlock Text="{TemplateBinding CopyrightLinkText}"/><\/a>',t}(c);f.registerControl("CopyrightControl",p);w=function(n){function t(t){var i=this,r;return t&&(r=t.getRootElement(),i=n.call(this,r,null,null)||this),i}return e(t,n),t}(y);a=function(n){function t(t,i){var r=n.call(this)||this,u;return r._hrefFormat="//www.bing.com/maps?cp={lat}~{lon}&lvl={lvl}&style={style}&FORM=BMLOGO",r.defineProperty("BingHref"),r.defineProperty("LogoStyle"),r.defineProperty("Clickable"),u=t.getConfig().useOverlayQuadrants?" quadrantOverride":"",r.setTemplate(new f('<div class="bm_LogoContainer'+u+'"><a href="{TemplateBinding BingHref}" title="Bing Maps" target="mc_bingMaps" style="{TemplateBinding Clickable}"><div id="bingLogo" class="{TemplateBinding LogoStyle}"/><\/a><\/div>')),r._map=t,typeof i!="undefined"&&i?(r.setClickable("pointer-events: auto"),r.disposables.push(r._map.viewChanged.add(function(){return r._updateHref()}))):r.setClickable("pointer-events: none"),r.disposables.push(r._map.mapTypeChanged.add(function(n){return r._onMapTypeChanged(n)})),r._setLogoStyle(r._map.getMapType().id),r}return e(t,n),t.prototype._updateHref=function(){var n=this._map.getView().cameraLocation,t=n.latitude,i=n.longitude,r=this._map.getMercatorZoomLevel(),u=this._map.getMapType().id.charAt(0);this.setBingHref(this._formattedHref(t,i,r,u))},t.prototype._formattedHref=function(n,t,i,r){var u=location&&location.protocol?location.protocol:"https:";return u+this._hrefFormat.replace("{lat}",""+n).replace("{lon}",""+t).replace("{lvl}",""+i).replace("{style}",r)},t.prototype._onMapTypeChanged=function(n){this.setVisible(n.newMapTypeId!==r.streetside);this._setLogoStyle(n.newMapTypeId)},t.prototype._setLogoStyle=function(n){n===r.aerial||n===r.birdseye||n===r.birdseyeV2?this.setLogoStyle("bingLogoDark"):this.setLogoStyle("bingLogoLight");this._updateHref()},t}(c);f.registerControl("LogoControl",a);var g=function(n){function t(t){var i=this,r;return t&&(r=t.getRootElement(),i=n.call(this,r,null,null)||this),i}return e(t,n),t}(y),u=function(){function n(){}return n.metersPerKm=1e3,n.yardsPerMeter=1.0936133,n.yardsPerMile=1760,n.feetPerYard=3,n.feetPerMeter=3.2808399,n.feetPerMile=5280,n}(),nt=function(n){function t(t){var i=this,r=t?t:{};return i=n.call(this,r)||this,r.defineProperty("metersPerPixel"),i}return e(t,n),t}(ft),o=function(){function n(){}return n.getScaleBarStyle=function(t){return t&&t.getConfig().useOverlayQuadrants?n._deserializeStyleObject(n._style.ScaleBarContainerQuadrant):n._deserializeStyleObject(n._style.ScaleBarContainer)},n.getScaleBarControlStyle=function(){return n._deserializeStyleObject(n._style.ScaleBarControl)},n.getShadowTextDarkStyle=function(){return n._deserializeStyleObject(n._style.ShadowTextDark)},n.getShadowTextLightStyle=function(){return n._deserializeStyleObject(n._style.ShadowTextLight)},n.getScaleBarRectStyle=function(){return n._deserializeStyleObject(n._style.ScaleBarRect)},n.getScaleBarRectFillStyle=function(){return n._deserializeStyleObject(n._style.ScaleBarRectFill)},n._deserializeStyleObject=function(n){var t=[],r;for(var i in n)n.hasOwnProperty(i)&&(r=n[i],t[t.length]=[i+": "+r.toString()]);return t.join(";")},n._style={ScaleBarContainer:{"z-index":0,"font-family":"arial, helvetica, sans-serif","font-size":"9px","text-align":"right",right:"25px",bottom:"20px",position:"absolute",display:l._isSmallMapShownOnSerp()?"none":"block"},ScaleBarContainerQuadrant:{"z-index":0,"font-family":"arial, helvetica, sans-serif","font-size":"9px","text-align":"right",display:l._isSmallMapShownOnSerp()?"none":"block"},ScaleBarControl:{display:"inline-block",position:"relative","margin-left":"1em","padding-top":".5em","padding-bottom":".05em",width:"{x}px"},ShadowTextDark:{color:"#000","text-shadow":"#fff 1px 1px"},ShadowTextLight:{color:"#fff","text-shadow":"#000 1px 1px"},ScaleBarRect:{width:"100%",height:"3px",border:"1px solid #fff","line-height":0,overflow:"hidden"},ScaleBarRectFill:{width:"100%",height:"0",border:"10px solid #49f"}},n}(),tt=function(n){function t(i){var r=n.call(this)||this;return r.defineProperty("dataModel",function(n,t){return r._onDataModelChanged(n,t)}),r.defineProperty("units"),r.defineProperty("width"),r.defineProperty("text"),r.defineProperty("style"),r.defineProperty("shadowTextStyle"),r.defineProperty("scaleBarRectStyle"),r.defineProperty("scaleBarRectFillStyle"),r._map=i.map,r.disposables.push(r._map.mapTypeChanged.add(function(n){return r.handleMapChange(n)})),r.setTemplate(new f(t._template)),r.setStyle(o.getScaleBarControlStyle()),r.setShadowTextStyle(o.getShadowTextDarkStyle()),r.setScaleBarRectStyle(o.getScaleBarRectStyle()),r.setScaleBarRectFillStyle(o.getScaleBarRectFillStyle()),r}return e(t,n),t.prototype._onDataModelChanged=function(n,t){k.assertNotNull(t,"new meters per pixel");t&&this._setScale(t.getMetersPerPixel())},t.prototype._setScale=function(n){var i,r,f,s,e,o;this.getUnits()===2?(s=t._maxWidth*n,s>u.metersPerKm?(i=this._largestRoundedNumber(s/u.metersPerKm),r=Math.floor(i*u.metersPerKm/n),f=h.L_ScaleBarKilometers_Text):(i=this._largestRoundedNumber(s),r=Math.floor(i/n),f=h.L_ScaleBarMeters_Text)):(e=n*u.feetPerMeter,o=e*t._maxWidth,o>u.feetPerMile?(i=this._largestRoundedNumber(o/u.feetPerMile),r=Math.floor(i*u.feetPerMile/e),f=h.L_ScaleBarMiles_Text):this.getUnits()===0?(i=this._largestRoundedNumber(o),r=Math.floor(i/e),f=h.L_ScaleBarFeet_Text):(i=this._largestRoundedNumber(o/u.feetPerYard),r=Math.floor(i*u.feetPerYard/e),f=h.L_ScaleBarYards_Text));this._updateScaleBarControl(r,i.toString()+" "+f)},t.prototype._updateScaleBarControl=function(n,t){this.setText(t);this.setWidth(n+2);this.setStyle(o.getScaleBarControlStyle().replace("{x}",this.getWidth().toString()))},t.prototype._largestRoundedNumber=function(n){var u=Math.log(n)/t._ln10,f=Math.floor(u),i=Math.pow(10,f),r=n/i;return i===1?this._getSingleDigitValue(r):this._getMultiDigitValue(r,i)},t.prototype._getSingleDigitValue=function(n){for(var r,u=Math.floor(n),i=0;i<t._singleDigitValues.length;i++)if(r=t._singleDigitValues[i],u>r)return r;return 1},t.prototype._getMultiDigitValue=function(n,i){for(var u,r=0;r<t._multiDigitValues.length;r++)if(u=t._multiDigitValues[r],n>u)return u*i;return i},t.prototype.handleMapChange=function(n){n.oldMapTypeId===r.aerial||n.oldMapTypeId===r.birdseye||n.newMapTypeId!==r.aerial&&n.newMapTypeId!==r.birdseye||this.setShadowTextStyle(o.getShadowTextLightStyle());n.oldMapTypeId!==r.aerial&&n.oldMapTypeId!==r.birdseye||n.newMapTypeId===r.aerial||n.newMapTypeId===r.birdseye||this.setShadowTextStyle(o.getShadowTextDarkStyle())},t._template='<div style="{TemplateBinding Style}"><div style="{TemplateBinding ShadowTextStyle}"><TextBlock Text="{TemplateBinding Text}"/><\/div><div style="{TemplateBinding ScaleBarRectStyle}"><div style="{TemplateBinding ScaleBarRectFillStyle}"><\/div><\/div><\/div>',t._singleDigitValues=[5,2],t._multiDigitValues=[5,2.5,2],t._maxWidth=100,t._ln10=2.302585092994046,t}(c);f.registerControl("ScaleBarControl",tt);v=function(n){function t(i){var r=n.call(this,null,{map:i})||this,u;return r._map=i,r.disposables=[],r.unitsMiles=0,r.unitsKMs=2,r.defineProperty("style"),r.defineProperty("scaleBarDataModel"),r.disposables.push(r._map.viewChanged.addThrottled(function(){return r._updateScaleBar()},300)),u=i.getConfig().useOverlayQuadrants?" quadrantOverride":"",r.setTemplate(new f(t._defaultTemplate.replace("{quadrantOverride}",u))),r.setStyle(o.getScaleBarStyle(r._map)),r._updateScaleBar(),r}return e(t,n),t.prototype._updateScaleBar=function(){var r=new nt,n,e=this._map.getView(),u=e.cameraLocation,f=d.fromLocation(u,!0),t=this._map.getMode(),i=t.getCurrentCrs&&t.getCurrentCrs()||t.getTilePyramid&&t.getTilePyramid().getCrs();i&&i.sceneMetadata&&(n=i.getScale({pixelWidth:0,pixelHeight:0,bounds:[],crs:i,zoom:f}));typeof n!="number"&&(n=d.toScale(u,f,!1));r.setMetersPerPixel(n);this.setScaleBarDataModel(r)},t._defaultTemplate='<div id="ScaleBarId" class="bm_disable_highlighting{quadrantOverride}" style="{TemplateBinding Style}"><ScaleBarControl units="{TemplateBinding unitsMiles}" dataModel="{TemplateBinding ScaleBarDataModel}"><\/ScaleBarControl><ScaleBarControl units="{TemplateBinding unitsKMs}" dataModel="{TemplateBinding ScaleBarDataModel}"><\/ScaleBarControl><\/div>',t}(c);f.registerControl("ScaleBar",v);b=function(n){function t(t){var r=this,i;return k.assertNotNull(t,"scaleBarControl"),i=t.getRootElement(),n.call(this,i,null,null)||this}return e(t,n),t}(y);it=function(){function n(n,t){this._map=n;this._mapOptions=this._map.getMapOptions();this._disposables=[];this._rootElement=t;this._initializeOverlayContainers()}return n.prototype.getCopyrightControl=function(){return this._copyrightControl},n.prototype.getLogoControl=function(){return this._logoControl},n.prototype.getScaleBar=function(){return this._scaleBar},n.prototype.getXStartForQuadrant=function(n){switch(n){case i.BottomRight:if(this._bottomLeftOverlayContainer)return this._bottomLeftOverlayContainer.get_relative_pos().x+this._bottomLeftOverlayContainer.get_size().width;case i.TopRight:if(this._topLeftOverlayContainer)return this._topLeftOverlayContainer.get_relative_pos().x+this._topLeftOverlayContainer.get_size().width;default:return 0}},n.prototype.getXEndForQuadrant=function(n){switch(n){case i.BottomLeft:if(this._bottomRightOverlayContainer)return this._bottomRightOverlayContainer.get_relative_pos().x;case i.TopLeft:if(this._topRightOverlayContainer)return this._topRightOverlayContainer.get_relative_pos().x;default:return this._map.getActualSize().width}},n.prototype.getQuadrantForControl=function(n){var t=n.getRootElement()[0];return this._topLeftOverlayContainer&&this._topLeftOverlayContainer.has(t)?i.TopLeft:this._topRightOverlayContainer&&this._topRightOverlayContainer.has(t)?i.TopRight:this._bottomLeftOverlayContainer&&this._bottomLeftOverlayContainer.has(t)?i.BottomLeft:this._bottomRightOverlayContainer&&this._bottomRightOverlayContainer.has(t)?i.BottomRight:i.None},n.prototype._appendMapOverlay=function(n,t){switch(t){case i.TopLeft:this._topLeftOverlayContainer||(this._topLeftOverlayContainer=this._createQuadrantDiv(t));this._topLeftOverlayContainer.append(n.getOverlayElement());break;case i.TopRight:this._topRightOverlayContainer||(this._topRightOverlayContainer=this._createQuadrantDiv(t));this._topRightOverlayContainer.append(n.getOverlayElement());break;case i.BottomRight:this._bottomRightOverlayContainer||(this._bottomRightOverlayContainer=this._createQuadrantDiv(t));this._bottomRightOverlayContainer.append(n.getOverlayElement());break;case i.BottomLeft:this._bottomLeftOverlayContainer||(this._bottomLeftOverlayContainer=this._createQuadrantDiv(t));this._bottomLeftOverlayContainer.append(n.getOverlayElement())}},n.prototype._createQuadrantDiv=function(n){var t={position:"absolute"},r="",u;switch(n){case i.topLeft:t.left="5px";t.top="5px";r="bm_topLeftOverlay";break;case i.topRight:t.right="5px";t.top="5px";r="bm_topRightOverlay";break;case i.bottomLeft:t.left="5px";t.bottom="5px";r="bm_bottomLeftOverlay";break;case i.bottomRight:t.right="25px";t.bottom="5px";r="bm_bottomRightOverlay"}return u=l._createElement("div").set_style(t).add_class(r),this._rootElement.append(u),u},n.prototype._initializeOverlayContainers=function(){this._mapOptions&&(s.isOnChina&&typeof this._mapOptions.copyrightLocation=="undefined"&&(this._mapOptions.copyrightLocation=i.BottomLeft),(typeof this._mapOptions.copyrightLocation=="undefined"||this._mapOptions.copyrightLocation===i.none)&&(this._mapOptions.copyrightLocation=i.BottomRight),(typeof this._mapOptions.scalebarLocation=="undefined"||this._mapOptions.scalebarLocation===i.none)&&(this._mapOptions.scalebarLocation=i.BottomRight),(typeof this._mapOptions.logoLocation=="undefined"||this._mapOptions.logoLocation===i.none)&&(this._mapOptions.logoLocation=i.BottomLeft),this._mapOptions.showLogo&&this._createLogoControl(),this._mapOptions.showScalebar&&this._createScaleBarControl(),this._mapOptions.showCopyright&&this._createCopyrightControl())},n.prototype._createCopyrightControl=function(){var n=this._mapOptions.showTermsLink?this._mapOptions.showTermsLink:!1;this._copyrightControl=new p(this._map,this._map.getConfig(),n);this._appendMapOverlay(new w(this._copyrightControl),this._mapOptions.copyrightLocation);this._map.copyrightControlLoaded.invoke(this._copyrightControl);this._disposables.push(this._copyrightControl)},n.prototype._createLogoControl=function(){var n=typeof this._mapOptions.enableClickableLogo!="undefined"?this._mapOptions.enableClickableLogo:!0;this._logoControl=new a(this._map,n);this._appendMapOverlay(new g(this._logoControl),this._mapOptions.logoLocation);this._disposables.push(this._logoControl)},n.prototype._createScaleBarControl=function(){this._scaleBar=new v(this._map);this._appendMapOverlay(new b(this._scaleBar),this._mapOptions.scalebarLocation);this._disposables.push(this._scaleBar)},n.prototype.dispose=function(){for(var t,n=0;n<this._disposables.length;n++)t=this._disposables[n],t.dispose();this._disposables=[];this._rootElement&&this._rootElement.clear();this._topLeftOverlayContainer&&this._topLeftOverlayContainer.clear();this._topRightOverlayContainer&&this._topRightOverlayContainer.clear();this._bottomLeftOverlayContainer&&this._bottomLeftOverlayContainer.clear();this._bottomRightOverlayContainer&&this._bottomRightOverlayContainer.clear()},n}();t.LogoOverlay=g;n.LogoControl=a;t.CopyrightOverlay=w;n.CopyrightControl=p;t.ScaleBarOverlay=b;n.ScaleBar=v;n.ScaleBarControl=tt;n.ScaleBarDataModel=nt;n.MapOverlayManager=it}catch(rt){if(t.logger)t.logger.logCriticalError(rt);else throw rt;}}).call(window)