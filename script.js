// var clickBtn = document.getElementById("clickHere")

// if (onclick.clickBtn) {
async function getDegrees(url) {
    // fetch the url
    await fetch(url)
      //get your data here, and check for the response status. If it's not 200, throw an error
      .then((response) => response.json())
      .then((data) =>
        document.write(
          `My first degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}`
        )
      );
  }
// }
  
  getDegrees("./degrees.json");


// function writeStuff(words) {
//     document.write(words)
// }

// writeStuff("Hello")

// (function () {
//     document.getElementById("button").onclick = function () {
//         makeRequest("url");
//     };
//     function requestDegrees(url){
//         fetch(url)
//             .then((reponse) => reponse.json())
//             .then((data) => console.log(data))
//     }
// })

