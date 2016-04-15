var randomAuthor, randomQuotes;

$(document).ready(function() {

    function getQuote() {

        var quotes = ["we're here to put a dent in the universe otherwise why else even be here?", "If you born poor it's not your mistake, but if you die poor it's your mistake", "Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.", "Keep calm and code HTML", "If you want to test a man's character give him power.", "If you do right no one remembers, if you do wrong no one forgets.", "Do not pray for an easy life, pray for the strenth to endure a difficult one.", "In three words i can aum up everything i've learned about life: it's goes on.", "If you're good at some things never do it for free."];
        var author = ["~Steve Jobs", "~Bill Gates", "~Mark Zuckerberg", "~Amit Bhandari", "~Abraham Lincoln", "Amit Bhandari", "~Bruce Lee", "~Robert Frost", "~Joker"];
        var randomNum = Math.floor(Math.random() * quotes.length);
        randomQuotes = quotes[randomNum];
        randomAuthor = author[randomNum];
        $(".quote").text(randomQuotes);
        $(".author").text(randomAuthor);
    }
    getQuote();
    $("#change").on("click", function() {
        getQuote();
    });
});

// twitter
$(document).ready(function() {
    $("#tweet").on("click", function() {
        var myUrl = "https://twitter.com/intent/tweet?text=" + randomQuotes + " " + randomAuthor + ".  " + "from @androboy101";
        window.open(myUrl, 'twitter');
        return false;
    });
});
