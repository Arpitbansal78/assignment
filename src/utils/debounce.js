export const debounce = function (func, delay) {
    let clearTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(clearTimer);
        console.log(func, context)
        clearTimer = setTimeout(() => func.apply(context, args), delay)
    }
}
