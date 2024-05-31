

export const Incrementer = () => {
    return {type : "Incrementer"}
}
export const Incrementerpar5 = (step) => {
    return {type : "Incrementerpar5", payload: step}
}
export const Decrementer = () => {
    return {type : "Decrementer"}
}
export const Reset = () => {
    return {type : "Reset"}
}