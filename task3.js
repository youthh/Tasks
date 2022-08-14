const bar = (n) => {
    let arr = []

    for (let i = 0; i < n; i++) {
        arr[i] = []
        for (let j = 0; j < n; j++) {
            arr[i][j] = 0

            // draw 1
            if (i === 0 || i === n - 1) {
                arr[i][j] = 1;
            }

            // draw 1
            if (arr[i][j - 1] !== 2 && j === Math.round(n / 2)) {
                arr[i][j - 1] = 1;
            }

            // draw left diagonal
            if (i === j) {
                arr[i][j] = 2
            }

            // draw right diagonal
            if (j === n - 1) {
                arr[i][j - i] = 2
            }


        }


    }


    return arr
}


console.log(bar(5))
