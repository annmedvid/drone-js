function injectState(target, name, descriptor) {
    const oldFunction = descriptor.value

    descriptor.value = function propsInjectorFunction() {
        return oldFunction.bind(this)(this.state)
    }

    return descriptor
}

export default injectState
