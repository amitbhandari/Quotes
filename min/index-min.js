var randomAuthor,randomQuotes;$(document).ready(function(){function e(){var e=["We're here to put a dent in the universe otherwise why else even be here?","If you are born poor it's not your mistake, but if you die poor it's your mistake","Move fast and break things. Unless you are breaking stuff, you are not moving fast enough.","Keep calm and code HTML","If you want to test a man's character give him power.","If you do right no one remembers, if you do wrong no one forgets.","Do not pray for an easy life, pray for the strength to endure a difficult one.","In three words I can sum up everything I've learned about life: It goes on.","If you're good at some thing never do it for free."],o=["~Steve Jobs","~Bill Gates","~Mark Zuckerberg","~Amit Bhandari","~Abraham Lincoln","Amit Bhandari","~Bruce Lee","~Robert Frost","~Joker"],t=Math.floor(Math.random()*e.length);randomQuotes=e[t],randomAuthor=o[t],$(".quote").text(randomQuotes),$(".author").text(randomAuthor)}e(),$("#change").on("click",function(){e()})}),$(document).ready(function(){$("#tweet").on("click",function(){var e="https://twitter.com/intent/tweet?text="+randomQuotes+" "+randomAuthor+".  from @androboy101";return window.open(e,"twitter"),!1})});