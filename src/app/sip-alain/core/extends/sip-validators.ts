import { Validators, FormControl } from '@angular/forms';
import { Lib } from './lib';

export class SipValidators {
    static required = function (control: FormControl) {
        let ret = Validators.required(control);
        if (ret) ret.requiredText = '请输入或选择值';
        return ret;
    };
    static min = function (min: number) {
        let vFn = Validators.min(min);
        return function (control: FormControl) {
            let ret = vFn(control);
            if (ret) ret.minText = '不能小于：' + min;
            return ret;
        }
    };
    static max = function (max: number) {
        let vFn = Validators.max(max);
        return function (control: FormControl) {
            let ret = vFn(control);
            if (ret) ret.maxText = '不能大于：' + max;
            return ret;
        }
    };
    static minLength = function (min: number) {
        let vFn = Validators.minLength(min);
        return function (control: FormControl) {
            let ret = vFn(control);
            if (ret) ret.minLengthText = '长度不能小于：' + min;
            return ret;
        }
    };
    static maxLength = function (max: number) {
        let vFn = Validators.maxLength(max);
        return function (control: FormControl) {
            let ret = vFn(control);
            if (ret) ret.maxLengthText = '长度不能大于：' + max;
            return ret;
        }
    };
    static email = function (control: FormControl) {
        let ret = Validators.email(control);
        if (ret) ret.emailText = '非法email';
        return ret;
    };
    static pattern = function (pattern: string | RegExp) {
        let vFn = Validators.pattern(pattern);
        return function (control: FormControl) {
            let ret = vFn(control);
            if (ret) ret.patternText = '不匹配正则：' + pattern.toString();
            return ret;
        }
    };
    static range = function (min: number, max: number) {
        return function (control: FormControl) {
            let value = ~~control.value;
            if (value < min || value > max)
                return {
                    range: { min: min, max: max },
                    rangeText: Lib.format('范围：{0} - {1}', min, max)
                };
        };
    };
    static rangeLength = function (minLength: number, maxLength: number) {
        return function (control: FormControl) {
            let value = control.value;
            let len = value ? (value + '').length : 0;
            if (len < minLength || len > maxLength)
                return {
                    rangeLength: {
                        minLength: minLength, maxLength: maxLength
                    },
                    rangeLengthText: Lib.format('长度范围：{0} - {1}', minLength, maxLength)
                };
        };
    };
    static confirm = function (confirmControl: FormControl) {
        return function (control: FormControl): { [s: string]: boolean } {
            if (control.value !== confirmControl.value) {
                return { confirm: true, error: true };
            }
        };
    };
}
