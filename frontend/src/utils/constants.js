export const REGEXP = {
    PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    EMAIL: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
    PHONE: /^(07\d{8})$/,
    INTEGER_ABOVE_ZERO_OR_EQUAL: /^(0|[1-9]\d*)$/,
    INTEGER_ABOVE_ZERO: /^[1-9][0-9]*$/,
    FLOAT_ABOVE_ZERO_OR_EQUAL: /^(?:0|[1-9]\d*)(?:\.\d+)?$/,
};