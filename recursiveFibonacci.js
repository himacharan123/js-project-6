function fibsRec(n) {
    if (n <= 0) return []; 
    if (n === 1) return [0]; 
    if (n === 2) return [0, 1]; 

    const previousSequence = fibsRec(n - 1); 
    const nextNumber = previousSequence[previousSequence.length - 1] + previousSequence[previousSequence.length - 2]; 
    return [...previousSequence, nextNumber];
}

console.log(fibsRec(8)); 
