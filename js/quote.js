console.log(window.navigator.language)
function getQuote(){
    fetch("https://api.quotable.io/random").then((response) => { return response.json()})
        .then((data) => { 
            document.getElementById('quote').innerHTML = `"${data.content}"`
            document.getElementById('author').innerHTML = data.author
        })
}
getQuote()