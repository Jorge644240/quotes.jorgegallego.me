const generateQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(response => {
        return response.json();
    })
    .then(data => {
        const quote = "\"".concat(data.content), author = data.author;
        if (document.querySelector(".quote blockquote").innerHTML != "") {
            document.querySelector(".quote blockquote").innerHTML = "";
            document.querySelector(".quote p").innerHTML = "";
        }
        let i = 0;
        const title = () => {
            if (i < quote.length) {
                document.querySelector(".quote blockquote").innerHTML += quote.charAt(i);
                i++;
                setTimeout(title, 150);
            } else {
                document.querySelector(".quote blockquote").innerHTML += "\"";
                document.querySelector(".quote p").innerHTML = `-${author}`;
                document.querySelector(".quote p").style.opacity = 1;
            }
        }
        title();
    });
}

window.onload = generateQuote;

document.querySelector("button").addEventListener("click", generateQuote);