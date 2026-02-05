let book = {
    name : "Meditations",
    author : "Marcus Aurelius",
    price : 250,

    getDetails : function(){
        return "Book name : " + this.name + " by " + this.author + " ₹" + this.price
    },
    isCheap : function(){
        if(this.price < 300){
            return "Cheap"}
        else {return "Expensive"

            }
    }
};

console.log(book.getDetails());
book.name="Harry Potter";
console.log(book.getDetails());
console.log(book);
console.log(book.isCheap());