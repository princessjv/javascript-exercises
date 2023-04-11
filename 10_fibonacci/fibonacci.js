const fibonacci = function(_aNumber) {
    let sequence = [1,1];

    for (let i = 2; i < _aNumber; ++i) {
        
        let nextNumber = sequence[i -1] + sequence[i-2];
        sequence.push(nextNumber);
        
    }
    return sequence.slice(-1)[0];
};

// Do not edit below this line
module.exports = fibonacci;
