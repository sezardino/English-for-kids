const getRandNumInRange = (min, max) => {
    return Math.floor(Math.random() * max + min);
};

const randomizeArr = (arr) => {
    const randomizedArr = [];
    let bool = true;
    do {
        const item = arr[getRandNumInRange(0, arr.length)];
        if (!randomizedArr.includes(item)) {
            randomizedArr.push(item);
        }
        if (randomizedArr.length === arr.length) {
            bool = false;
        }
    } while (bool);
    return randomizedArr;
};

export { getRandNumInRange, randomizeArr };
