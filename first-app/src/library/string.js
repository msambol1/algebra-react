function trancate(value, limit, symbol) {
    if (value.length > limit) {
        return value.slice(0, limit) + symbol;
    }
    return value;
}

export default trancate;