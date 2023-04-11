const removeFromArray = function(numArray, num) {
    return numArray.filter(value => {
        return value !== num;
    })
};

// Do not edit below this line
module.exports = removeFromArray;
