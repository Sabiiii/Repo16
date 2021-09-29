class Book {
    constructor(title) {
        this._title = title;

    } 

    
    get title() {
    return this._title;
     }
     
    set title(newTitle) {
    this.title = newTitle;
    }
}


const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince";
console.log(littlePrince.title);

module.exports = Book;































