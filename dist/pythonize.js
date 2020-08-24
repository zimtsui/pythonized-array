function pythonize(JsArray) {
    return class PythonArray extends JsArray {
        constructor(...args) {
            super(...args);
            return new Proxy(this, {
                get: function (target, field, receiver) {
                    if (typeof field === 'string') {
                        const index = Number.parseInt(field);
                        if (!Number.isNaN(index))
                            field = index;
                    }
                    if (typeof field === 'number')
                        return target[field < 0 ? field += target.length : field];
                    else {
                        const returnValue = Reflect.get(target, field, target);
                        if (returnValue === target)
                            return receiver;
                        else
                            return returnValue;
                    }
                }
            });
        }
    };
}
export { pythonize as default, pythonize, };
//# sourceMappingURL=pythonize.js.map