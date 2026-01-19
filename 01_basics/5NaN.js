// NaN = Not a Number , invalid or undefined numeric result.

console.log(typeof NaN)
console.log(typeof NaN === "number")
// Because NaN is part of the IEEE-754 numeric standard.

console.log(0/0)

console.log(NaN)

console.log(NaN+2)
console.log(NaN*5)


// NaN appears when JavaScript tries to do numeric operations that don’t make sense.
console.log(undefined+1)
console.log(Math.sqrt(-1))  // NaN
console.log(Number("abc"))

// Any operation with NaN results in NaN.

console.log(NaN==NaN)
console.log(NaN===NaN)

// isNaN() vs Number.isNaN()
console.log(isNaN("abc"))
console.log(Number.isNaN("abc"))