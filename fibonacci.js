export function fibs(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const result = [0, 1];
    for (let i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}

export function fibsRec(n) {
    console.log("This was printed recursively");

    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const prev = fibsRec(n - 1);
    return [...prev, prev[prev.length - 1] + prev[prev.length - 2]];
}
