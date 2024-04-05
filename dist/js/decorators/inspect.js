export function inspect() {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--- Método: ${propertyKey}`);
            console.log(`------ Parâmetros: ${JSON.stringify(args)}`);
            const retorno = metodoOriginal.apply(this, args);
            console.log(`------ Retorno: ${JSON.stringify(retorno)}`);
            retorno;
        };
        return descriptor;
    };
}
