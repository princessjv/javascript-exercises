const repeatString = function(string='hey',num) {
    let strings=""; //initily

    for(let count=0;
        count<num;
        ++count
        ){
            strings+=string;//accumulate the string
        }
        return strings;
};

// Do not edit below this line
module.exports = repeatString;
