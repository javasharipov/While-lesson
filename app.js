//  Do  While and While matters

{
	// masala 1
	let a = 10
	let b = 3
	while (a >= b) {
		a -= b
	}
	console.log(a)
}

{
	// masala 2
	let a = 6
	let b = 2
	let count = 0
	while (a >= b) {
		a -= b
		count++
	}
	console.log(count)
}

{
	// masala 3

	let n = 20
	let k = 3

	let count = 0
	let remainder = n

	while (remainder >= k) {
		remainder -= k
		count += 1
	}

	console.log(`Fit ${count} , Left ${remainder}`)
}

{
	// masala 4

	let n = 9

	let currentPower = 1

	while (currentPower < n) {
		currentPower *= 3
	}

	if (currentPower === n) {
		console.log('3 - ning darajasi')
	} else {
		console.log('3 - ning darajasi emas')
	}
}

{
	// masala 5
	let n = 32
	let k = 0
	while (n >= 2) {
		n /= 2
		k++
	}
	console.log(k)
}

{
	// masala 6
	let n = 6
	let result = 1

	while (n > 1) {
		result *= n
		n -= 2
	}

	if (n === 1) {
		result *= n
	}

	console.log(`Result ${result} `)
}

{
	// masala 7
	let n = 20

	let k = 1

	while (k * k <= n) {
		k++
	}

	console.log(`The smallest k number is ${k}`)
}

{
	// masala 8
	// Masalaning mavzusini uncha tushumadim va erp da comment berib keting
	let n = 30

	let k = 1

	while (k * k <= n) {
		k++
	}

	k--

	console.log('The largest number:', k)
}

{
	// masala 9
	let n = 50

	let k = 0
	let currentPower = 1

	while (currentPower < n) {
		k++
		currentPower *= 3
	}

	console.log('The smallest number:', k)
}

{
	// masala 10
}
