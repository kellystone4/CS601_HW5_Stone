// document.querySelector("#clickHere").addEventListener('click', function (event) {
    async function getDegrees(url) {
        // fetch the url
        await fetch(url)
          //get your data here, and check for the response status. If it's not 200, throw an error
          .then((response) => response.json())
          .then((data) =>
            document.write(
                // `Hello, welcome to my site! Learn about my degree's here: `
            //   `My first degree was a ${data.data[0].degrees.bachelors.data.type} from ${data.data[0].degrees.bachelors.data.school} in ${data.data[0].degrees.bachelors.data.program}`
              `My second degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}`

            )
          )
      }

      getDegrees("./degrees.json")
// }
// )
// const result = document.querySelector('#result')

// gets data from API and sets the content of #result div

// const getData = async function() {
//     await fetch("https://kellystone.netlify.app/")
//           //get your data here, and check for the response status. If it's not 200, throw an error
//           .then((response) => response.json())
//           .then(data => {
//             result.innerText = JSON.stringify(data.data[0].degrees.masters.data.type)
//           })

        //   .then((data) =>
        //     document.write(
        //       `My first degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}`
        //     )
        //   )
    // .catch(error => console.log(error))
// }

// if (onclick.clickBtn) {
// async function getDegrees(url) {
//     // fetch the url
//     await fetch(url)
//       //get your data here, and check for the response status. If it's not 200, throw an error
//       .then((response) => response.json())
//       .then((data) =>
//         document.write(
//           `My first degree was a ${data.data[0].degrees.masters.data.type} from ${data.data[0].degrees.masters.data.school} in ${data.data[0].degrees.masters.data.program}`
//         )
//       )
//   }

// if (clickBtn) {
//     getDegrees("./degrees.json")
// }
//   const callFunction = getDegrees("./degrees.json");

//   clickBtn.addEventListener(getDegrees)


//   clickBtn.addEventListener('./degrees.json', getData)

// }
  


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

