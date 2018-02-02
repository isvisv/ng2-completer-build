!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@angular/core"),require("@angular/forms"),require("@angular/http"),require("rxjs/Observable"),require("rxjs/add/operator/catch"),require("rxjs/Subject"),require("rxjs/add/operator/map"),require("rxjs/add/observable/timer"),require("rxjs/add/operator/retryWhen"),require("rxjs/add/operator/do"),require("@angular/common")):"function"==typeof define&&define.amd?define(["exports","@angular/core","@angular/forms","@angular/http","rxjs/Observable","rxjs/add/operator/catch","rxjs/Subject","rxjs/add/operator/map","rxjs/add/observable/timer","rxjs/add/operator/retryWhen","rxjs/add/operator/do","@angular/common"],e):e(t.ng2Completer=t.ng2Completer||{},t.ng.core,t.ng.forms,t.ng.http,t.Rx,t.Rx.Operator.catch,t.Rx,t.Rx.Operator.map,null,null,null,t.ng.common)}(this,function(t,e,i,r,n,o,s,c,a,h,l,p){"use strict";function u(t){return void 0===t||null===t}function d(){return function(){return new _}}function g(t){return function(){return new O(t)}}var f=function(){function t(){this.selected=new e.EventEmitter,this.highlighted=new e.EventEmitter,this.opened=new e.EventEmitter,this.dataSourceChange=new e.EventEmitter,this._hasHighlighted=!1,this._hasSelected=!1,this._cancelBlur=!1,this._isOpen=!1}return t.prototype.registerList=function(t){this.list=t},t.prototype.registerDropdown=function(t){this.dropdown=t},t.prototype.onHighlighted=function(t){this.highlighted.emit(t),this._hasHighlighted=!!t},t.prototype.onSelected=function(t,e){void 0===e&&(e=!0),this.selected.emit(t),t&&(this._hasSelected=!0),e&&this.clear()},t.prototype.onDataSourceChange=function(){this.hasSelected&&(this.selected.emit(null),this._hasSelected=!1),this.dataSourceChange.emit()},t.prototype.search=function(t){this._hasSelected&&(this.selected.emit(null),this._hasSelected=!1),this.list&&this.list.search(t)},t.prototype.clear=function(){this._hasHighlighted=!1,this.isOpen=!1,this.dropdown&&this.dropdown.clear(),this.list&&this.list.clear()},t.prototype.selectCurrent=function(){this.dropdown&&this.dropdown.selectCurrent()},t.prototype.nextRow=function(){this.dropdown&&this.dropdown.nextRow()},t.prototype.prevRow=function(){this.dropdown&&this.dropdown.prevRow()},t.prototype.hasHighlighted=function(){return this._hasHighlighted},t.prototype.cancelBlur=function(t){this._cancelBlur=t},t.prototype.isCancelBlur=function(){return this._cancelBlur},t.prototype.open=function(){this._isOpen||(this.isOpen=!0,this.list.open())},Object.defineProperty(t.prototype,"isOpen",{get:function(){return this._isOpen},set:function(t){this._isOpen=t,this.opened.emit(this._isOpen),this.list&&this.list.isOpen(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"autoHighlightIndex",{get:function(){return this._autoHighlightIndex},set:function(t){this._autoHighlightIndex=t,this.dropdown&&this.dropdown.highlightRow(this._autoHighlightIndex)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hasSelected",{get:function(){return this._hasSelected},enumerable:!0,configurable:!0}),t.decorators=[{type:e.Directive,args:[{selector:"[ctrCompleter]"}]}],t.ctorParameters=function(){return[]},t.propDecorators={selected:[{type:e.Output}],highlighted:[{type:e.Output}],opened:[{type:e.Output}],dataSourceChange:[{type:e.Output}]},t}(),m=524288,y=3,v=10,w="Searching...",S="No results found",b=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),x=function(t){function e(){return t.call(this)||this}return b(e,t),e.prototype.cancel=function(){},e.prototype.searchFields=function(t){return this._searchFields=t,this},e.prototype.titleField=function(t){return this._titleField=t,this},e.prototype.descriptionField=function(t){return this._descriptionField=t,this},e.prototype.imageField=function(t){return this._imageField=t,this},e.prototype.convertToItem=function(t){var e,i=null,r=null;return e=this._titleField?this.extractTitle(t):t,"string"!=typeof e&&(e=JSON.stringify(e)),this._descriptionField&&(r=this.extractValue(t,this._descriptionField)),this._imageField&&(i=this.extractValue(t,this._imageField)),u(e)?null:{title:e,description:r,image:i,originalObject:t}},e.prototype.extractMatches=function(t,e){var i=this,r=this._searchFields?this._searchFields.split(","):null;return null!==this._searchFields&&void 0!==this._searchFields&&""!=e?t.filter(function(t){return(r?r.map(function(e){return i.extractValue(t,e)}).filter(function(t){return!!t}):[t]).some(function(t){return t.toString().toLowerCase().indexOf(e.toString().toLowerCase())>=0})}):t},e.prototype.extractTitle=function(t){var e=this;return this._titleField.split(",").map(function(i){return e.extractValue(t,i)}).reduce(function(t,e){return t?t+" "+e:e})},e.prototype.extractValue=function(t,e){var i,r;if(e){i=e.split("."),r=t;for(var n=0;n<i.length;n++)r&&(r=r[i[n]])}else r=t;return r},e.prototype.processResults=function(t){var e,i=[];if(t&&t.length>0)for(e=0;e<t.length;e++){var r=this.convertToItem(t[e]);r&&i.push(r)}return i},e}(s.Subject),C=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),_=function(t){function i(){var i=t.call(this)||this;return i.dataSourceChange=new e.EventEmitter,i}return C(i,t),i.prototype.data=function(t){var e=this;if(t instanceof n.Observable){t.catch(function(){return[]}).subscribe(function(t){e._data=t,e.savedTerm&&e.search(e.savedTerm),e.dataSourceChange.emit()})}else this._data=t;return this.dataSourceChange.emit(),this},i.prototype.search=function(t){if(this._data){this.savedTerm=null;var e=this.extractMatches(this._data,t);this.next(this.processResults(e))}else this.savedTerm=t},i.prototype.convertToItem=function(e){return t.prototype.convertToItem.call(this,e)},i.decorators=[{type:e.Injectable}],i.ctorParameters=function(){return[]},i}(x),I=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])};return function(e,i){function r(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),O=function(t){function i(i){var r=t.call(this)||this;return r.http=i,r.dataSourceChange=new e.EventEmitter,r._urlFormater=null,r._dataField=null,r}return I(i,t),i.prototype.remoteUrl=function(t){return this._remoteUrl=t,this.dataSourceChange.emit(),this},i.prototype.urlFormater=function(t){this._urlFormater=t},i.prototype.dataField=function(t){this._dataField=t},i.prototype.headers=function(t){this._headers=t},i.prototype.requestOptions=function(t){this._requestOptions=t},i.prototype.search=function(t){var e=this;this.cancel();var i="";i=this._urlFormater?this._urlFormater(t):this._remoteUrl+encodeURIComponent(t),this._requestOptions||(this._requestOptions=new r.RequestOptions,this._requestOptions.headers=this._headers||new r.Headers),this.remoteSearch=this.http.get(i,this._requestOptions.merge()).map(function(t){return t.json()}).map(function(i){var r=e.extractValue(i,e._dataField);return e.extractMatches(r,t)}).catch(function(){return[]}).subscribe(function(t){var i=e.processResults(t);e.next(i)})},i.prototype.cancel=function(){this.remoteSearch&&this.remoteSearch.unsubscribe()},i.prototype.convertToItem=function(e){return t.prototype.convertToItem.call(this,e)},i}(x),H=function(){function t(t,e){this.localDataFactory=t,this.remoteDataFactory=e}return t.prototype.local=function(t,e,i){return void 0===e&&(e=""),void 0===i&&(i=""),this.localDataFactory().data(t).searchFields(e).titleField(i)},t.prototype.remote=function(t,e,i){return void 0===e&&(e=""),void 0===i&&(i=""),this.remoteDataFactory().remoteUrl(t).searchFields(e).titleField(i)},t.decorators=[{type:e.Injectable}],t.ctorParameters=function(){return[{type:void 0,decorators:[{type:e.Inject,args:[_]}]},{type:void 0,decorators:[{type:e.Inject,args:[O]}]}]},t}(),R=function(){},T={provide:i.NG_VALUE_ACCESSOR,useExisting:e.forwardRef(function(){return E}),multi:!0},E=function(){function t(t,r){this.completerService=t,this.cdr=r,this.inputName="",this.inputId="",this.pause=v,this.minSearchLength=y,this.maxChars=m,this.overrideSuggested=!1,this.clearSelected=!1,this.clearUnselected=!1,this.fillHighlighted=!0,this.placeholder="",this.autoMatch=!1,this.disableInput=!1,this.autofocus=!1,this.openOnFocus=!1,this.openOnClick=!1,this.selectOnClick=!1,this.selectOnFocus=!1,this.autoHighlight=!1,this.label="",this.selected=new e.EventEmitter,this.highlighted=new e.EventEmitter,this.blurEvent=new e.EventEmitter,this.click=new e.EventEmitter,this.focusEvent=new e.EventEmitter,this.opened=new e.EventEmitter,this.keyup=new e.EventEmitter,this.keydown=new e.EventEmitter,this.control=new i.FormControl(""),this.displaySearching=!0,this.displayNoResults=!0,this._textNoResults=S,this._textSearching=w,this._onTouchedCallback=R,this._onChangeCallback=R,this._focus=!1,this._open=!1,this._searchStr=""}return Object.defineProperty(t.prototype,"value",{get:function(){return this.searchStr},set:function(t){t!==this.searchStr&&(this.searchStr=t),this._onChangeCallback(t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"searchStr",{get:function(){return this._searchStr},set:function(t){"string"==typeof t||u(t)?this._searchStr=t:this._searchStr=JSON.stringify(t)},enumerable:!0,configurable:!0}),t.prototype.ngAfterViewInit=function(){this.autofocus&&(this._focus=!0)},t.prototype.ngAfterViewChecked=function(){var t=this;this._focus&&setTimeout(function(){t.ctrInput.nativeElement.focus(),t._focus=!1},0)},t.prototype.onTouched=function(){this._onTouchedCallback()},t.prototype.writeValue=function(t){this.searchStr=t},t.prototype.registerOnChange=function(t){this._onChangeCallback=t},t.prototype.registerOnTouched=function(t){this._onTouchedCallback=t},t.prototype.setDisabledState=function(t){this.disableInput=t},Object.defineProperty(t.prototype,"datasource",{set:function(t){t&&(t instanceof Array?this.dataService=this.completerService.local(t):this.dataService="string"==typeof t?this.completerService.remote(t):t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textNoResults",{set:function(t){this._textNoResults!=t&&(this._textNoResults=t,this.displayNoResults=!!this._textNoResults&&"false"!==this._textNoResults)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textSearching",{set:function(t){this._textSearching!=t&&(this._textSearching=t,this.displaySearching=!!this._textSearching&&"false"!==this._textSearching)},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.completer.selected.subscribe(function(e){t.selected.emit(e)}),this.completer.highlighted.subscribe(function(e){t.highlighted.emit(e)}),this.completer.opened.subscribe(function(e){t._open=e,t.opened.emit(e)}),this._searchStr=this.initialValue||""},t.prototype.onBlur=function(){this.blurEvent.emit(),this.onTouched(),this.cdr.detectChanges()},t.prototype.onFocus=function(){this.focusEvent.emit(),this.onTouched()},t.prototype.onClick=function(t){this.click.emit(t),this.onTouched()},t.prototype.onKeyup=function(t){this.keyup.emit(t),t.stopPropagation()},t.prototype.onKeydown=function(t){this.keydown.emit(t),t.stopPropagation()},t.prototype.onChange=function(t){this.value=t},t.prototype.open=function(){this.completer.open()},t.prototype.close=function(){this.completer.clear()},t.prototype.focus=function(){this.ctrInput?this.ctrInput.nativeElement.focus():this._focus=!0},t.prototype.blur=function(){this.ctrInput?this.ctrInput.nativeElement.blur():this._focus=!1},t.prototype.isOpen=function(){return this._open},t.decorators=[{type:e.Component,args:[{selector:"ng2-completer",template:'\n        <div class="completer-holder form-group" ctrCompleter>\n            <label [attr.for]="inputId">{{label}}</label>\n            <input #ctrInput [attr.id]="inputId.length > 0 ? inputId : null" type="text" class="completer-input form-control" ctrInput [ngClass]="inputClass"\n                [(ngModel)]="searchStr" (ngModelChange)="onChange($event)" [attr.name]="inputName" [placeholder]="placeholder"\n                [attr.maxlength]="maxChars" [tabindex]="fieldTabindex" [disabled]="disableInput"\n                [clearSelected]="clearSelected" [clearUnselected]="clearUnselected"\n                [overrideSuggested]="overrideSuggested" [openOnFocus]="openOnFocus" [fillHighlighted]="fillHighlighted" \n                [openOnClick]="openOnClick" [selectOnClick]="selectOnClick" [selectOnFocus]="selectOnFocus"\n                (blur)="onBlur()" (focus)="onFocus()" (keyup)="onKeyup($event)" (keydown)="onKeydown($event)" (click)="onClick($event)"\n                autocomplete="off" autocorrect="off" autocapitalize="off" required/>\n            <div [hidden]="!(ctrInput.dirty && ctrInput.invalid)">\n                <small class="form-text text-danger" jhiTranslate="entity.validation.required">\n                    This field is required.\n                </small>\n            </div>\n            \n\n            <div class="completer-dropdown-holder"\n                *ctrList="dataService;\n                    minSearchLength: minSearchLength;\n                    pause: pause;\n                    autoMatch: autoMatch;\n                    initialValue: initialValue;\n                    autoHighlight: autoHighlight;\n                    displaySearching: displaySearching;\n                    let items = results;\n                    let searchActive = searching;\n                    let isInitialized = searchInitialized;\n                    let isOpen = isOpen;">\n                <div class="completer-dropdown" ctrDropdown *ngIf="isInitialized && isOpen && (( items?.length > 0|| (displayNoResults && !searchActive)) || (searchActive && displaySearching))">\n                    <div *ngIf="searchActive && displaySearching" class="completer-searching">{{_textSearching}}</div>\n                    <div *ngIf="!searchActive && (!items || items?.length === 0)" class="completer-no-results">{{_textNoResults}}</div>\n                    <div class="completer-row-wrapper" *ngFor="let item of items; let rowIndex=index">\n                        <div class="completer-row" [ctrRow]="rowIndex" [dataItem]="item">\n                            <div *ngIf="item.image || item.image === \'\'" class="completer-image-holder">\n                                <img *ngIf="item.image != \'\'" src="{{item.image}}" class="completer-image" />\n                                <div *ngIf="item.image === \'\'" class="completer-image-default"></div>\n                            </div>\n                            <div class="completer-item-text" [ngClass]="{\'completer-item-text-image\': item.image || item.image === \'\' }">\n                                <completer-list-item class="completer-title" [text]="item.title" [matchClass]="matchClass" [searchStr]="searchStr" [type]="\'title\'"></completer-list-item>\n                                <completer-list-item *ngIf="item.description && item.description != \'\'" class="completer-description" [text]="item.description"\n                                    [matchClass]="matchClass" [searchStr]="searchStr" [type]="\'description\'">\n                                </completer-list-item>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ',styles:['\n    .completer-dropdown {\n        border-color: #ececec;\n        border-width: 1px;\n        border-style: solid;\n        border-radius: 2px;\n        width: 100%;\n        padding: 6px;\n        cursor: pointer;\n        z-index: 9999;\n        position: absolute;\n        margin-top: -6px;\n        background-color: #ffffff;\n    }\n\n    .completer-row {\n        padding: 5px;\n        padding-right: 0.75rem;\n        color: #000000;\n        margin-bottom: 4px;\n        clear: both;\n        display: inline-block;\n        width: 103%;\n    }\n\n    .completer-selected-row {\n        background-color: lightblue;\n        color: #ffffff;\n    }\n\n    .completer-description {\n        font-size: 14px;\n    }\n\n    .completer-image-default {\n        width: 16px;\n        height: 16px;\n        background-image: url("demo/res/img/default.png");\n    }\n\n    .completer-image-holder {\n        float: left;\n        width: 10%;\n    }\n    .completer-item-text-image {\n        float: right;\n        width: 90%;\n    }\n    '],providers:[T]}]}],t.ctorParameters=function(){return[{type:H},{type:e.ChangeDetectorRef}]},t.propDecorators={dataService:[{type:e.Input}],inputName:[{type:e.Input}],inputId:[{type:e.Input}],pause:[{type:e.Input}],minSearchLength:[{type:e.Input}],maxChars:[{type:e.Input}],overrideSuggested:[{type:e.Input}],clearSelected:[{type:e.Input}],clearUnselected:[{type:e.Input}],fillHighlighted:[{type:e.Input}],placeholder:[{type:e.Input}],matchClass:[{type:e.Input}],fieldTabindex:[{type:e.Input}],autoMatch:[{type:e.Input}],disableInput:[{type:e.Input}],inputClass:[{type:e.Input}],autofocus:[{type:e.Input}],openOnFocus:[{type:e.Input}],openOnClick:[{type:e.Input}],selectOnClick:[{type:e.Input}],selectOnFocus:[{type:e.Input}],initialValue:[{type:e.Input}],autoHighlight:[{type:e.Input}],label:[{type:e.Input}],selected:[{type:e.Output}],highlighted:[{type:e.Output}],blurEvent:[{type:e.Output,args:["blur"]}],click:[{type:e.Output}],focusEvent:[{type:e.Output,args:["focus"]}],opened:[{type:e.Output}],keyup:[{type:e.Output}],keydown:[{type:e.Output}],completer:[{type:e.ViewChild,args:[f]}],ctrInput:[{type:e.ViewChild,args:["ctrInput"]}],datasource:[{type:e.Input}],textNoResults:[{type:e.Input}],textSearching:[{type:e.Input}]},t}(),L=function(){function t(){this.parts=[]}return t.prototype.ngOnInit=function(){if(!this.searchStr)return void this.parts.push({isMatch:!1,text:this.text});for(var t=this.text.toLowerCase(),e=t.indexOf(this.searchStr.toLowerCase()),i=0;e>=0;){var r=this.text.slice(e,e+this.searchStr.length);if(0===e)this.parts.push({isMatch:!0,text:r}),i+=this.searchStr.length;else if(e>0){var n=this.text.slice(i,e);this.parts.push({isMatch:!1,text:n}),this.parts.push({isMatch:!0,text:r}),i+=this.searchStr.length+n.length}e=t.indexOf(this.searchStr.toLowerCase(),i)}i<this.text.length&&this.parts.push({isMatch:!1,text:this.text.slice(i,this.text.length)})},t.decorators=[{type:e.Component,args:[{selector:"completer-list-item",template:'<span class="completer-list-item-holder" [ngClass]="{\'completer-title\': type === \'title\', \'completer-description\': type === \'description\'}" >\n        <span class="completer-list-item" *ngFor="let part of parts" [ngClass]="part.isMatch ? matchClass : null">{{part.text}}</span>\n    </span>'}]}],t.ctorParameters=function(){return[]},t.propDecorators={text:[{type:e.Input}],searchStr:[{type:e.Input}],matchClass:[{type:e.Input}],type:[{type:e.Input}]},t}(),F={provide:_,useFactory:d},k={provide:O,useFactory:g,deps:[r.Http]},D=function(){function t(t,e){this.row=t,this.index=e}return t}(),M=function(){function t(t,e){this.completer=t,this.el=e,this.rows=[],this._rowMouseDown=!1,this.completer.registerDropdown(this)}return t.prototype.ngOnDestroy=function(){this.completer.registerDropdown(null)},t.prototype.ngAfterViewInit=function(){var t=this,e=getComputedStyle(this.el.nativeElement),i=this.completer.autoHighlightIndex;this.isScrollOn=!!e.maxHeight&&"auto"===e.overflowY,i&&setTimeout(function(){t.highlightRow(i)},0)},t.prototype.onMouseDown=function(t){var e=this;this._rowMouseDown?this._rowMouseDown=!1:(this.completer.cancelBlur(!0),setTimeout(function(){e.completer.cancelBlur(!1)},0))},t.prototype.registerRow=function(t){var e=this.rows.findIndex(function(e){return e.index===t.index});e>=0?this.rows[e]=t:this.rows.push(t)},t.prototype.unregisterRow=function(t){var e=this.rows.findIndex(function(e){return e.index===t});this.rows.splice(e,1),this.currHighlighted&&t===this.currHighlighted.index&&this.highlightRow(null)},t.prototype.highlightRow=function(t){var e=this.rows.find(function(e){return e.index===t});if(u(t)||t<0)return this.currHighlighted&&this.currHighlighted.row.setHighlighted(!1),this.currHighlighted=void 0,void this.completer.onHighlighted(null);if(e&&(this.currHighlighted&&this.currHighlighted.row.setHighlighted(!1),this.currHighlighted=e,this.currHighlighted.row.setHighlighted(!0),this.completer.onHighlighted(this.currHighlighted.row.getDataItem()),this.isScrollOn&&this.currHighlighted)){var i=this.dropdownRowTop();if(!i)return;if(i<0)this.dropdownScrollTopTo(i-1);else{var r=this.currHighlighted.row.getNativeElement();this.dropdownHeight()<r.getBoundingClientRect().bottom&&(this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(r)),this.el.nativeElement.getBoundingClientRect().bottom-this.dropdownRowOffsetHeight(r)<r.getBoundingClientRect().top&&this.dropdownScrollTopTo(r.getBoundingClientRect().top-(this.el.nativeElement.getBoundingClientRect().top+parseInt(getComputedStyle(this.el.nativeElement).paddingTop,10))))}}},t.prototype.clear=function(){this.rows=[]},t.prototype.onSelected=function(t){this.completer.onSelected(t)},t.prototype.rowMouseDown=function(){this._rowMouseDown=!0},t.prototype.selectCurrent=function(){this.currHighlighted?this.onSelected(this.currHighlighted.row.getDataItem()):this.rows.length>0&&this.onSelected(this.rows[0].row.getDataItem())},t.prototype.nextRow=function(){var t=0;this.currHighlighted&&(t=this.currHighlighted.index+1),this.highlightRow(t)},t.prototype.prevRow=function(){var t=-1;this.currHighlighted&&(t=this.currHighlighted.index-1),this.highlightRow(t)},t.prototype.dropdownScrollTopTo=function(t){this.el.nativeElement.scrollTop=this.el.nativeElement.scrollTop+t},t.prototype.dropdownRowTop=function(){if(this.currHighlighted)return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top-(this.el.nativeElement.getBoundingClientRect().top+parseInt(getComputedStyle(this.el.nativeElement).paddingTop,10))},t.prototype.dropdownHeight=function(){return this.el.nativeElement.getBoundingClientRect().top+parseInt(getComputedStyle(this.el.nativeElement).maxHeight,10)},t.prototype.dropdownRowOffsetHeight=function(t){var e=getComputedStyle(t.parentElement);return t.parentElement.offsetHeight+parseInt(e.marginTop,10)+parseInt(e.marginBottom,10)},t.decorators=[{type:e.Directive,args:[{selector:"[ctrDropdown]"}]}],t.ctorParameters=function(){return[{type:f,decorators:[{type:e.Host}]},{type:e.ElementRef}]},t.propDecorators={onMouseDown:[{type:e.HostListener,args:["mousedown",["$event"]]}]},t}(),j=function(){function t(t,i,r){var n=this;this.completer=t,this.ngModel=i,this.el=r,this.clearSelected=!1,this.clearUnselected=!1,this.overrideSuggested=!1,this.fillHighlighted=!0,this.openOnFocus=!1,this.openOnClick=!1,this.selectOnClick=!1,this.selectOnFocus=!1,this.ngModelChange=new e.EventEmitter,this._searchStr="",this._displayStr="",this.blurTimer=null,this.completer.selected.subscribe(function(t){t&&(n.clearSelected?n.searchStr="":n.searchStr=t.title,n.ngModelChange.emit(n.searchStr))}),this.completer.highlighted.subscribe(function(t){n.fillHighlighted&&(t?(n._displayStr=t.title,n.ngModelChange.emit(t.title)):(n._displayStr=n.searchStr,n.ngModelChange.emit(n.searchStr)))}),this.completer.dataSourceChange.subscribe(function(){n.searchStr="",n.ngModelChange.emit(n.searchStr)}),this.ngModel.valueChanges&&this.ngModel.valueChanges.subscribe(function(t){u(t)||n._displayStr===t||(n.searchStr!==t&&n.completer.search(t),n.searchStr=t)})}return t.prototype.keyupHandler=function(t){37!==t.keyCode&&39!==t.keyCode&&9!==t.keyCode&&(38===t.keyCode||13===t.keyCode?t.preventDefault():40===t.keyCode?(t.preventDefault(),this.completer.search(this.searchStr)):27===t.keyCode&&this.completer.isOpen&&(this.restoreSearchValue(),this.completer.clear(),t.stopPropagation(),t.preventDefault()))},t.prototype.pasteHandler=function(t){this.completer.open()},t.prototype.keydownHandler=function(t){var e=t.keyCode||t.which;13===e?(this.completer.hasHighlighted()&&t.preventDefault(),this.handleSelection()):40===e?(t.preventDefault(),this.completer.open(),this.completer.nextRow()):38===e?(t.preventDefault(),this.completer.prevRow()):9===e?this.handleSelection():8===e?this.completer.open():27===e?(t.preventDefault(),this.completer.isOpen&&t.stopPropagation()):0===e||16===e||20===e||!(e<=112||e>=123)||t.ctrlKey||t.metaKey||t.altKey||this.completer.open()},t.prototype.onBlur=function(t){var e=this;if(this.completer.isCancelBlur())return void setTimeout(function(){e.el.nativeElement.focus()},0);this.completer.isOpen&&(this.blurTimer=n.Observable.timer(200).subscribe(function(){return e.doBlur()}))},t.prototype.onfocus=function(){this.blurTimer&&(this.blurTimer.unsubscribe(),this.blurTimer=null),this.selectOnFocus&&this.el.nativeElement.select(),this.openOnFocus&&this.completer.open()},t.prototype.onClick=function(t){this.selectOnClick&&this.el.nativeElement.select(),this.openOnClick&&(this.completer.isOpen?this.completer.clear():this.completer.open())},Object.defineProperty(t.prototype,"searchStr",{get:function(){return this._searchStr},set:function(t){this._searchStr=t,this._displayStr=t},enumerable:!0,configurable:!0}),t.prototype.handleSelection=function(){this.completer.hasHighlighted()?(this._searchStr="",this.completer.selectCurrent()):this.overrideSuggested?this.completer.onSelected({title:this.searchStr,originalObject:null}):(this.clearUnselected&&(this.searchStr="",this.ngModelChange.emit(this.searchStr)),this.completer.clear())},t.prototype.restoreSearchValue=function(){this.fillHighlighted&&this._displayStr!=this.searchStr&&(this._displayStr=this.searchStr,this.ngModelChange.emit(this.searchStr))},t.prototype.doBlur=function(){this.blurTimer&&(this.blurTimer.unsubscribe(),this.blurTimer=null),this.overrideSuggested?this.completer.onSelected({title:this.searchStr,originalObject:null}):this.clearUnselected&&!this.completer.hasSelected?(this.searchStr="",this.ngModelChange.emit(this.searchStr)):this.restoreSearchValue(),this.completer.clear()},t.decorators=[{type:e.Directive,args:[{selector:"[ctrInput]"}]}],t.ctorParameters=function(){return[{type:f,decorators:[{type:e.Host}]},{type:i.NgModel},{type:e.ElementRef}]},t.propDecorators={clearSelected:[{type:e.Input,args:["clearSelected"]}],clearUnselected:[{type:e.Input,args:["clearUnselected"]}],overrideSuggested:[{type:e.Input,args:["overrideSuggested"]}],fillHighlighted:[{type:e.Input,args:["fillHighlighted"]}],openOnFocus:[{type:e.Input,args:["openOnFocus"]}],openOnClick:[{type:e.Input,args:["openOnClick"]}],selectOnClick:[{type:e.Input,args:["selectOnClick"]}],selectOnFocus:[{type:e.Input,args:["selectOnFocus"]}],ngModelChange:[{type:e.Output}],keyupHandler:[{type:e.HostListener,args:["keyup",["$event"]]}],pasteHandler:[{type:e.HostListener,args:["paste",["$event"]]}],keydownHandler:[{type:e.HostListener,args:["keydown",["$event"]]}],onBlur:[{type:e.HostListener,args:["blur",["$event"]]}],onfocus:[{type:e.HostListener,args:["focus",[]]}],onClick:[{type:e.HostListener,args:["click",["$event"]]}]},t}(),P=function(){function t(t,e,i,r){this.results=t,this.searching=e,this.searchInitialized=i,this.isOpen=r}return t}(),V=function(){function t(t,e,i,r){this.completer=t,this.templateRef=e,this.viewContainer=i,this.cd=r,this.ctrListMinSearchLength=y,this.ctrListPause=v,this.ctrListAutoMatch=!1,this.ctrListAutoHighlight=!1,this.ctrListDisplaySearching=!0,this.term=null,this.searchTimer=null,this.clearTimer=null,this.ctx=new P([],!1,!1,!1),this._initialValue=null,this.viewRef=null}return t.prototype.ngOnInit=function(){this.completer.registerList(this),this.viewRef=this.viewContainer.createEmbeddedView(this.templateRef,new P([],!1,!1,!1))},Object.defineProperty(t.prototype,"dataService",{set:function(t){this._dataService=t,this.dataServiceSubscribe()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"initialValue",{set:function(t){var e=this;this._dataService&&"function"==typeof this._dataService.convertToItem?setTimeout(function(){var i=e._dataService.convertToItem(t);i&&e.completer.onSelected(i,!1)}):this._dataService||(this._initialValue=t)},enumerable:!0,configurable:!0}),t.prototype.search=function(t){var e=this;!u(t)&&t.length>=this.ctrListMinSearchLength&&this.term!==t?(this.searchTimer&&(this.searchTimer.unsubscribe(),this.searchTimer=null),this.ctx.searching||(this.ctrListDisplaySearching&&(this.ctx.results=[]),this.ctx.searching=!0,this.ctx.searchInitialized=!0,this.refreshTemplate()),this.clearTimer&&this.clearTimer.unsubscribe(),this.searchTimer=n.Observable.timer(this.ctrListPause).subscribe(function(){e.searchTimerComplete(t)})):!u(t)&&t.length<this.ctrListMinSearchLength&&(this.clear(),this.term="")},t.prototype.clear=function(){var t=this;this.searchTimer&&this.searchTimer.unsubscribe(),this.clearTimer=n.Observable.timer(50).subscribe(function(){t._clear()})},t.prototype.open=function(){this.ctx.searchInitialized||this.search(""),this.refreshTemplate()},t.prototype.isOpen=function(t){this.ctx.isOpen=t},t.prototype._clear=function(){this.searchTimer&&(this.searchTimer.unsubscribe(),this.searchTimer=null),this.dataService&&this.dataService.cancel(),this.viewContainer.clear(),this.viewRef=null},t.prototype.searchTimerComplete=function(t){if(u(t)||t.length<this.ctrListMinSearchLength)return void(this.ctx.searching=!1);this.term=t,this._dataService.search(t)},t.prototype.refreshTemplate=function(){this.viewRef?this.viewRef.destroyed||(this.viewRef.context.isOpen=this.ctx.isOpen,this.viewRef.context.results=this.ctx.results,this.viewRef.context.searching=this.ctx.searching,this.viewRef.context.searchInitialized=this.ctx.searchInitialized,this.viewRef.detectChanges()):this.viewRef=this.viewContainer.createEmbeddedView(this.templateRef,this.ctx),this.cd.markForCheck()},t.prototype.getBestMatchIndex=function(){var t=this;if(!this.ctx.results||!this.term)return null;var e=this.ctx.results.findIndex(function(e){return e.title.toLowerCase()===t.term.toLocaleLowerCase()});return e<0&&(e=this.ctx.results.findIndex(function(e){return e.title.toLowerCase().startsWith(t.term.toLocaleLowerCase())})),e<0&&(e=this.ctx.results.findIndex(function(e){return e.title.toLowerCase().includes(t.term.toLocaleLowerCase())})),e<0?null:e},t.prototype.dataServiceSubscribe=function(){var t=this;this._dataService&&(this._dataService.catch(function(t){return console.error(t),console.error("Unexpected error in dataService: errors should be handled by the dataService Observable"),[]}).subscribe(function(e){if(t.ctx.searchInitialized=!0,t.ctx.searching=!1,t.ctx.results=e,t.ctrListAutoMatch&&e&&1===e.length&&e[0].title&&!u(t.term)&&e[0].title.toLocaleLowerCase()===t.term.toLocaleLowerCase())return void t.completer.onSelected(e[0]);t._initialValue&&(t.initialValue=t._initialValue,t._initialValue=null),t.refreshTemplate(),t.ctrListAutoHighlight&&(t.completer.autoHighlightIndex=t.getBestMatchIndex())}),this._dataService.dataSourceChange&&this._dataService.dataSourceChange.subscribe(function(){t.term=null,t.ctx.searchInitialized=!1,t.ctx.searching=!1,t.ctx.results=[],t.refreshTemplate(),t.completer.onDataSourceChange()}))},t.decorators=[{type:e.Directive,args:[{selector:"[ctrList]"}]}],t.ctorParameters=function(){return[{type:f,decorators:[{type:e.Host}]},{type:e.TemplateRef},{type:e.ViewContainerRef},{type:e.ChangeDetectorRef}]},t.propDecorators={ctrListMinSearchLength:[{type:e.Input}],ctrListPause:[{type:e.Input}],ctrListAutoMatch:[{type:e.Input}],ctrListAutoHighlight:[{type:e.Input}],ctrListDisplaySearching:[{type:e.Input}],dataService:[{
type:e.Input,args:["ctrList"]}],initialValue:[{type:e.Input,args:["ctrListInitialValue"]}]},t}(),B=function(){function t(t,e,i){this.el=t,this.renderer=e,this.dropdown=i,this.selected=!1}return t.prototype.ngOnDestroy=function(){this._rowIndex&&this.dropdown.unregisterRow(this._rowIndex)},Object.defineProperty(t.prototype,"ctrRow",{set:function(t){this._rowIndex=t,this.dropdown.registerRow(new D(this,this._rowIndex))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"dataItem",{set:function(t){this._item=t},enumerable:!0,configurable:!0}),t.prototype.onClick=function(t){this.dropdown.onSelected(this._item)},t.prototype.onMouseEnter=function(t){this.dropdown.highlightRow(this._rowIndex)},t.prototype.onMouseDown=function(t){this.dropdown.rowMouseDown()},t.prototype.setHighlighted=function(t){this.selected=t,this.renderer.setElementClass(this.el.nativeElement,"completer-selected-row",this.selected)},t.prototype.getNativeElement=function(){return this.el.nativeElement},t.prototype.getDataItem=function(){return this._item},t.decorators=[{type:e.Directive,args:[{selector:"[ctrRow]"}]}],t.ctorParameters=function(){return[{type:e.ElementRef},{type:e.Renderer},{type:M,decorators:[{type:e.Host}]}]},t.propDecorators={ctrRow:[{type:e.Input}],dataItem:[{type:e.Input}],onClick:[{type:e.HostListener,args:["click",["$event"]]}],onMouseEnter:[{type:e.HostListener,args:["mouseenter",["$event"]]}],onMouseDown:[{type:e.HostListener,args:["mousedown",["$event"]]}]},t}(),N=function(){function t(){}return t.decorators=[{type:e.NgModule,args:[{imports:[p.CommonModule,i.FormsModule,r.HttpModule],declarations:[L,f,M,j,V,B,E],exports:[E,L,f,M,j,V,B],providers:[H,F,k]}]}],t.ctorParameters=function(){return[]},t}();t.Ng2CompleterModule=N,t.CompleterCmp=E,t.CompleterListItemCmp=L,t.CompleterService=H,t.localDataFactory=d,t.LocalDataFactoryProvider=F,t.remoteDataFactory=g,t.RemoteDataFactoryProvider=k,t.LocalData=_,t.RemoteData=O,t.CompleterBaseData=x,t.CtrCompleter=f,t.CtrDropdown=M,t.CtrInput=j,t.CtrList=V,t.CtrRow=B,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ng2-completer.umd.js.map