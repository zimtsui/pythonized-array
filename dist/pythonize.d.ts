interface ArrayLikeConstructor<T> {
    new (...args: any[]): ArrayLike<T>;
}
declare function pythonize<T>(JsArray: ArrayLikeConstructor<T>): ArrayLikeConstructor<T>;
export { pythonize as default, pythonize, };
