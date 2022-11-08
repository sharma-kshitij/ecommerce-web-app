export function camelCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toUpperCase();
        })
        .replace(/^(.)/, function (b) {
            return b.toUpperCase();
        });
}

export function reverseCamelCase(str) {
    return str
        .replace(/\s(.)/g, function (a) {
            return a.toLowerCase();
        })
        .replace(/^(.)/, function (b) {
            return b.toLowerCase();
        });
}