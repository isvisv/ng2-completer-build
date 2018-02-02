import { AfterViewChecked, ChangeDetectorRef, EventEmitter, OnInit, AfterViewInit, ElementRef } from "@angular/core";
import { ControlValueAccessor, FormControl } from "@angular/forms";
import { CtrCompleter } from "../directives/ctr-completer";
import { CompleterData } from "../services/completer-data";
import { CompleterService } from "../services/completer-service";
import { CompleterItem } from "./completer-item";
import "rxjs/add/operator/catch";
export declare class CompleterCmp implements OnInit, ControlValueAccessor, AfterViewChecked, AfterViewInit {
    private completerService;
    private cdr;
    dataService: CompleterData;
    inputName: string;
    inputId: string;
    pause: number;
    minSearchLength: number;
    maxChars: number;
    overrideSuggested: boolean;
    clearSelected: boolean;
    clearUnselected: boolean;
    fillHighlighted: boolean;
    placeholder: string;
    matchClass: string;
    fieldTabindex: number;
    autoMatch: boolean;
    disableInput: boolean;
    inputClass: string;
    autofocus: boolean;
    openOnFocus: boolean;
    openOnClick: boolean;
    selectOnClick: boolean;
    selectOnFocus: boolean;
    initialValue: any;
    autoHighlight: boolean;
    label: string;
    selected: EventEmitter<CompleterItem>;
    highlighted: EventEmitter<CompleterItem>;
    blurEvent: EventEmitter<void>;
    click: EventEmitter<void>;
    focusEvent: EventEmitter<void>;
    opened: EventEmitter<boolean>;
    keyup: EventEmitter<any>;
    keydown: EventEmitter<any>;
    completer: CtrCompleter;
    ctrInput: ElementRef;
    control: FormControl;
    displaySearching: boolean;
    displayNoResults: boolean;
    _textNoResults: string;
    _textSearching: string;
    private _onTouchedCallback;
    private _onChangeCallback;
    private _focus;
    private _open;
    private _searchStr;
    constructor(completerService: CompleterService, cdr: ChangeDetectorRef);
    value: any;
    searchStr: string;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    onTouched(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    datasource: CompleterData | string | Array<any>;
    textNoResults: string;
    textSearching: string;
    ngOnInit(): void;
    onBlur(): void;
    onFocus(): void;
    onClick(event: any): void;
    onKeyup(event: any): void;
    onKeydown(event: any): void;
    onChange(value: string): void;
    open(): void;
    close(): void;
    focus(): void;
    blur(): void;
    isOpen(): boolean;
}
