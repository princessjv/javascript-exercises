const getTheTitles = function(books) {
        return books.map(book => book.title);

        //also:
        // return books.reduce((titles, book) => {
        //     return titles.concat(book.title);
        //   }, []);
};

// Do not edit below this line
module.exports = getTheTitles;
