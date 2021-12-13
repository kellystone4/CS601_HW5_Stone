function writeStuff(words) {
    document.write(words)
}

writeStuff("Hello")

(function () {
    document.getElementById("button").onclick = function () {
        makeRequest("url");
    };
    function requestDegrees(url){
        fetch(url)
            .then((reponse) => reponse.json())
            .then((data) => console.log(data))
    }
})

