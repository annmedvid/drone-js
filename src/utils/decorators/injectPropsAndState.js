function injectPropsAndState(target, name, descriptor) {
    const oldFunction = descriptor.value

    descriptor.value = function propsInjectorFunction() {
        return oldFunction.bind(this)(this.props, this.state)
    }

    return descriptor
}

export default injectPropsAndState

