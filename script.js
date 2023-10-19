const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('', n => {
  readline.question('', arr => {
    arr = arr.split(' ').map(Number);
    let ans = ArrayProblem6(n, arr);
    console.log(ans);
    readline.close();
  });
});

function ArrayProblem6(n, arr) {
  // Write code here
	let res = arr.length;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[i]>0 && arr[j]>0 && arr[i]%2 === 0 && arr[j]%2 === 0) {
				let difference = j-i;
				if (difference < res) {
					res = difference;
				}
			}
		}
	}

	if (res === arr.length) {
		return -1;
	} 
	return res;
}