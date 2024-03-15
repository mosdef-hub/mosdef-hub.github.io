// code from serpapi
// const { getJson } = require("serpapi");

// getJson({
//   engine: "google_scholar",
//   q: "MoSDeF",
//   cites: "6601697673056070612",
//   api_key: "secret_api_key"
// }, (json) => {
//   console.log(json["organic_results"]);
// });

// api url
// const api_url = "https://serpapi.com/search?engine=google_scholar?cites=6601697673056070612&hl=en&scipsc=1";
// 	//"https://scholar.google.com/scholar?cites=6601697673056070612&hl=en&scipsc=1";

// // Defining async function
// async function getapi(url) {

// 	// Storing response
// 	const response = await fetch(url);

// 	// Storing data in form of JSON
// 	var data = await response.json();
// 	console.log(data);
// 	if (response) {
// 		hideloader();
// 	}
// 	show(data);
// }
// // Calling that async function
// getapi(api_url);

// // Function to hide the loader
// function hideloader() {
// 	document.getElementById('loading').style.display = 'none';
// }
// // Function to define innerHTML for HTML table
// function show(data) {
// 	let tab = 
// 		`<tr>
// 		<th>Name</th>
// 		<th>Office</th>
// 		<th>Position</th>
// 		<th>Salary</th>
// 		</tr>`;

// 	// Loop to access all rows 
// 	for (let r of data.list) {
// 		tab += `<tr> 
// 	<td>${r.title} </td>	 
// </tr>`;
// 	}
// 	// Setting innerHTML as tab variable
// 	document.getElementById("citations").innerHTML = tab;
// }
const { getJson } = require("serpapi");

getJson({
  engine: "google_scholar_cite",
  q: "FDc6HiktlqEJ",
  api_key: "secret_api_key"
}, (json) => {
  console.log(json["citations"]);
});
