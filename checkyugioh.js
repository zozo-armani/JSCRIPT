function checkYuGiOh(n) {
    let sequence = [];
    if (!Number(n)) {
        return `invalid parameter: ${n}`;
    }
    for (let i = 1; i <= n; i++) {
        if (i % 30 === 0) {
            sequence.push("yu-gi-oh");
        } else if (i % 15 === 0) {
            sequence.push("gi-oh");
        } else if (i % 10 === 0) {
            sequence.push("yu-oh");
        } else if (i % 6 === 0) {
            sequence.push("yu-gi");
        } else if (i % 5 === 0) {
            sequence.push("oh");
        } else if (i % 3 === 0) {
            sequence.push("gi");
        } else if (i % 2 === 0) {
            sequence.push("yu");
        } else {
            sequence.push(i);
        }
    }

    return sequence;
}
console.log(checkYuGiOh(2));