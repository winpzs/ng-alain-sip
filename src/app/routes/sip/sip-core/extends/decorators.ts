import { Lib } from './lib';

let undef;

//region equals

let _equalArrayIn = function (array1: Array<any>, array2: Array<any>) {
    var ok = true;
    Lib.each(array1, function (item, index) {
        if (item != array2[index]) {
            ok = false; return false;
        }
    });
    return ok;
},
    _equalArray = function (array1: Array<any>, array2: Array<any>): boolean {
        if ((!array1 || !array2)) return array1 == array2;

        return array1.length == array2.length && _equalArrayIn(array1, array2);
    },
    _equalObject = function (obj1, obj2) {
        if (obj1 == obj2) return true;
        if (!Lib.isObject(obj2)) return false;

        var count = 0, ok = true;
        Lib.eachProp(obj1, function (item, n) {
            count++;
            if (obj2[n] !== item) { ok = false; return false; }
        });
        ok && Lib.eachProp(obj2, function () {
            count--;
        });
        return ok && (count === 0);
    },
    _equals = function (p, p1) {
        if (Lib.isArray(p))
            return _equalArray(p, p1);
        else if (Lib.isObject(p))
            return _equalObject(p, p1);
        else
            return p == p1;
    }

//endregion equals

// region watch

let _vmName = "__vm__",
    _getVM = function (target: any): any {
        return target[_vmName] || (target[_vmName] = {});
    },
    _getVMProp = function (target: any, prop: string, defaultVal?: any) {
        var vm = _getVM(target),
            temp = vm[prop];
        return Lib.isUndefined(temp) ? (defaultVal ? vm[prop] = defaultVal : undef) : temp;
    },
    _setVMProp = function (target: any, prop: string, value: any) {
        return (_getVM(target)[prop] = value);
    },
    _getWatchs = function (target: any) {
        return _getVMProp(target, 'watchs', []);
    },
    _initWatchFn = function (target: any) {
        let prop = 'initWatch',
            isInitWatch = _getVMProp(target, prop, false);

        if (!isInitWatch) {
            let oldCheckFn = target.ngDoCheck,
                doWatchFn = _getWatchContext(target);
            target.ngDoCheck = function () {
                let ret = oldCheckFn && oldCheckFn.apply(this, arguments);
                doWatchFn(this);
                return ret;
            };
            _setVMProp(target, prop, true);
        }
    },
    _getWatchContext = function (target: any): (obj: any) => void {
        let watchs = _getWatchs(target);
        if (!watchs) return null;
        let values = {}, isInit = false,
            getVal = function (name) {
                return values[name] || (values[name] = []);
            };
        return function (obj: any) {
            let val, newVal, fn, isC, res, valList;
            Lib.each(watchs, function (item) {
                valList = getVal(item.name);
                fn = item.fn;
                isC = false;
                res = [];
                Lib.each(item.watchs, function (item, idx) {
                    val = valList[idx];
                    if (Lib.isArray(item)) {
                        let newValList = [];
                        val || (val = []);
                        isC = true;
                        Lib.each(item, function (item, idx) {
                            newVal = item.call(obj);
                            if (_equals(val[idx], newVal)) {
                                isC = false;
                            }
                            newValList.push(newVal);
                        });
                        res.push(newValList);
                    } else {
                        newVal = item.call(obj);
                        if (!_equals(val, newVal)) {
                            isC = true;
                            //valList[idx] = newVal;
                        }
                        res.push(newVal);
                    }
                    item.init || (item.init = true)
                });
                if (isC) {
                    values[item.name] = res;
                    isInit && fn.apply(obj, res);
                }
            });
            isInit || (isInit = true);
        };
    };

/**
 * 观察，只能用于Component
 * @param args 观察对象，可以字串、数组和方法
 */
export function Watch(...args: any[]) {
    return function (target: any, propKey: string) {
        _initWatchFn(target);
        let watchs = _getWatchs(target),
            fn = target[propKey],
            res = [];
        Lib.each(args, function (item) {
            if (Lib.isArray(item)) {
                let tL = [];
                Lib.each(item, function (item) {
                    tL.push(Lib.isString(item) ? new Function(['return ', item].join('')) : item);
                });
                res.push(tL);
            }
            else
                res.push(Lib.isString(item) ? new Function(['return ', item].join('')) : item);
        });

        watchs.push({
            name: propKey,
            watchs: res,
            fn: fn,
            init: false,
            values: []
        });
    };
}

// endregion

// region component events

let _getVMEvents = function (target: any, eventName: string): any[] {
    var eventObj = _getVMProp(target, 'events', {});
    return eventObj[eventName] || (eventObj[eventName] = []);
},
    _getEvents = function (target: any, eventName: string): any[] {
        let events = _getVMEvents(target, eventName);

        if (events.length == 0) {
            let oldFn = target[eventName];
            target[eventName] = function () {
                let args = arguments;
                let ret = oldFn && oldFn.apply(this, args);
                events.forEach((item) => {
                    item && item.apply(this, args);
                });
                return ret;
            };
        }
        return events;
    };

/**
 * 在Angular第一次显示数据绑定和设置指令/组件的输入属性之后，初始化指令/组件。在第一轮EventChange()完成之后调用，只调用一次。
 */
export function EventInit() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngOnInit');
        events.push(target[propKey]);
    };
}

/**
 * 检测，并在发生Angular无法或不愿意自己检测的变化时作出反应。在每个Angular变更检测周期中调用，EventChange()和EventInit()之后。
 */
export function EventCheck() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngDoCheck');
        events.push(target[propKey]);
    };
}

/**
 * 当Angular（重新）设置数据绑定输入属性时响应。 该方法接受当前和上一属性值的SimpleChanges对，当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在EventInit()之前。
 */
export function EventChange() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngOnChanges');
        events.push(target[propKey]);
    };
}

/**
 * 当把内容投影进组件之后调用。第一次EventCheck()之后调用，只调用一次。只适用于组件。
 */
export function EventAfterContentInit() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngAfterContentInit');
        events.push(target[propKey]);
    };
}

/**
 * 每次完成被投影组件内容的变更检测之后调用。EventAfterContentInit()和每次EventCheck()之后调用，只适合组件。
 */
export function EventAfterContentChecked() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngAfterContentChecked');
        events.push(target[propKey]);
    };
}

/**
 * 初始化完组件视图及其子视图之后调用。第一次EventAfterContentChecked()之后调用，只调用一次。只适合组件。
 */
export function EventAfterViewInit() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngAfterViewInit');
        events.push(target[propKey]);
    };
}

/**
 * 每次做完组件视图和子视图的变更检测之后调用。EventAfterViewInit()和每次EventAfterContentChecked()之后调用。只适合组件。
 */``
export function EventAfterViewChecked() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngAfterViewChecked');
        events.push(target[propKey]);
    };
}

/**
 * 当Angular每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。在Angular销毁指令/组件之前调用。
 */
export function EventDestroy() {
    return function (target: any, propKey: string) {
        var events = _getEvents(target, 'ngOnDestroy');
        events.push(target[propKey]);
    };
}


// endregion
