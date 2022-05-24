// import apiQuotes from "./quotes.js"
// console.log(apiQuotes)

const quoteContainer =document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn =document.getElementById("new-quote")
const loader = document.getElementById("loader")

let apiQuotes =[]

const showLoadingSpinner =()=>{
    loader.hidden =false;
    quoteContainer.hidden =true;
}

const removeLoadingSpinner =()=>{
    loader.hidden =true;
    quoteContainer.hidden =false;
}
const getQuotes = async ()=>{
    const apiUrl ="https://type.fit/api/quotes"

    try{
        const response =await fetch(apiUrl)
        apiQuotes =await response.json()
        console.log(apiQuotes)

        newQuote()
    }catch(error){
        console.log(error)
    }
}

getQuotes();

const newQuote =()=>{
    showLoadingSpinner()

    setTimeout(function(){

        const randIndex =Math.floor(Math.random()*apiQuotes.length)

        const quote =apiQuotes[randIndex]
        if(!quote.author){
            authorText.textContent ="Unknown"
        }else{
            author.textContent=quote.author
        }

        if(quote.text.length>100){
            quoteText.classList.add("long-quote")
        }else{
            quoteText.classList.remove("long-quote")
        }

        quoteText.textContent = quote.text;
        removeLoadingSpinner()
    },500)
}


newQuoteBtn.addEventListener("click",newQuote)
