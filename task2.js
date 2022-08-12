const foo = (root) => {

    if (root.left === 1) {
        root.left = 0

    } else if (root.left === 0) {
        root.left = 1
    }

    if (root.right === 0) {
        root.right = 1;
    } else if (root.right === 1) {
        root.right = 0
    }

    if (root.left || root.right) {
        foo(root.left)
        foo(root.right)
    }
    return root
}


const d = {
    left: {
        left: {
            left: 1,
            right: {
                left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 1,
}


console.log(foo(d))
