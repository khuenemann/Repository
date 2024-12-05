 //to run on localhost: python -m http.server 8000


  // information for the api
      var CLIENT_ID = '360508408212-d53dln9jf96ldb5j3i4co652tpucugjq.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyCnm1OXlgXfFyXisknNNbBF7R8Thl1Msfs';
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";



//loads the list of cars
function getdrinks(){

		gapi.load('client:auth2', start);
	function start() {
		gapi.client.init({
		apiKey: API_KEY,
		clientId: CLIENT_ID,
		discoveryDocs: DISCOVERY_DOCS,
		scope: SCOPES
		}).then(function () {
		getSheet();
		})
// Executes an API request, and returns a Promise.
	function getSheet(){
		gapi.client.sheets.spreadsheets.values.get({
			//car sheet rather than user sheet
		spreadsheetId: '1bXLGUmSgPiIreS76OwdFdH3ysYMxIVd1icWU-5f9XHQ',
		range: 'Sheet1!A1:A',
	}).then(function(response) {
			var range = response.result;
			var newIngr;
			var eff;
			var arr = [];
			var finalArr = []
			if (range.values.length > 0) {
				for (i = 2; i < range.values.length; i++) //
					{
						var row = range.values[i];
						newIngr = row[0];
						var addIngr = document.getElementById("ingr1");
						addIngr.options[addIngr.options.length] = new Option(newIngr, newIngr);

						eff = row[5];
						arr = [];
						arr.push(newIngr, eff);
						finalArr.push(arr);

					}
				}
			if (range.values.length > 0) {
				for (i = 2; i < range.values.length; i++) //
					{
						var row = range.values[i];
						newIngr = row[0];
						var addIngr = document.getElementById("ingr2");
						addIngr.options[addIngr.options.length] = new Option(newIngr, newIngr);
					}
				}
			if (range.values.length > 0) {
				for (i = 2; i < range.values.length; i++) //
					{
						var row = range.values[i];
						newIngr = row[0];
						var addIngr = document.getElementById("ingr3");
						addIngr.options[addIngr.options.length] = new Option(newIngr, newIngr);
					}
				}
			if (range.values.length > 0) {
				for (i = 2; i < range.values.length; i++) //
					{
						var row = range.values[i];
						newIngr = row[0];
						var addIngr = document.getElementById("ingr4");
						addIngr.options[addIngr.options.length] = new Option(newIngr, newIngr);
					}
				}
			if (range.values.length > 0) {
				for (i = 2; i < range.values.length; i++) //
					{
						var row = range.values[i];
						newIngr = row[0];
						var addIngr = document.getElementById("ingr5");
						addIngr.options[addIngr.options.length] = new Option(newIngr, newIngr)

					}
				}

});
}
}
}




function setValues(){

var ing1, ing2, ing3, ing4, ing5;

ing1 = document.getElementById("ingr1").value;
ing2 = document.getElementById("ingr2").value;
ing3 = document.getElementById("ingr3").value;
ing4 = document.getElementById("ingr4").value;
ing5 = document.getElementById("ingr5").value;


gapi.load('client:auth2', start);
	function start() {
		gapi.client.init({
		apiKey: API_KEY,
		clientId: CLIENT_ID,
		discoveryDocs: DISCOVERY_DOCS,
		scope: SCOPES
		}).then(function () {
		getSheet();
		})
// Executes an API request, and returns a Promise.
	function getSheet(){
		gapi.client.sheets.spreadsheets.values.get({
		spreadsheetId: '1bXLGUmSgPiIreS76OwdFdH3ysYMxIVd1icWU-5f9XHQ',
		range: 'Sheet1',
	}).then(function(response) {
			var range = response.result;
			var newIng;
			var eff;
			var arr = [];
			var list = "";
			if (range.values.length > 0) {

				if (ing1.length > 2) {
					if (ing2.length > 2) {
						if (ing3.length > 2) {
							if (ing4.length > 2) {
								if (ing5.length > 2) {

		for (i = 0; i < range.values.length; i++) //
		{
			var row = range.values[i];
			var drinkList = range.values[1];

			var finalArr = [];

			if (row[0] === ing1){
					for (p = 0; p < range.values.length; p++){
						var row2 = range.values[p];
						var drinkList2 = range.values[1];

					if (row2[0] === ing2){

							for (z = 0; z < range.values.length; z++){
								var row3 = range.values[z];
								var drinkList3 = range.values[1];

								if (row3[0] === ing3){


									for (y = 0; y < range.values.length; y++){
										var row4 = range.values[y];
										var drinkList4 = range.values[1];

										if (row4[0] === ing4){
													for (x = 0; x < range.values.length; x++){
												var row5 = range.values[x];
												var drinkList5 = range.values[1];

												if (row5[0] === ing5){
				for (var e = 1; e < row.length; e++) {

					var measure = row[e];

					if (measure > 0){
						var drink = drinkList[e];
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[e] > 0){
							/*newIng = row[0] + " " + row[e] ;
							arr = [];
							arr.push(newIng);
							finalArr.push(arr);
							*/
							//seperate this over a number of functions
							list += "<br>" + add[0] + " " + add[e] ;

							}
						}
						list +=  "<br>" + "---------------------------" + "<br>";
					}
				}
				}
			}
						}
					}
				}}}}}}
		}
								else{

		for (i = 0; i < range.values.length; i++) //
		{
			var row = range.values[i];
			var drinkList = range.values[1];

			var finalArr = [];

			if (row[0] === ing1){
					for (p = 0; p < range.values.length; p++){
						var row2 = range.values[p];
						var drinkList2 = range.values[1];

					if (row2[0] === ing2){

							for (z = 0; z < range.values.length; z++){
								var row3 = range.values[z];
								var drinkList3 = range.values[1];

								if (row3[0] === ing3){


									for (y = 0; y < range.values.length; y++){
										var row4 = range.values[y];
										var drinkList4 = range.values[1];

										if (row4[0] === ing4){
				for (var e = 1; e < row.length; e++) {

					var measure = row[e];

					if (measure > 0){
						var drink = drinkList[e];
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[e] > 0){
							/*newIng = row[0] + " " + row[e] ;
							arr = [];
							arr.push(newIng);
							finalArr.push(arr);
							*/
							//seperate this over a number of functions
							list += "<br>" + add[0] + " " + add[e] ;

							}
						}
						list +=  "<br>" + "---------------------------" + "<br>";
					}
				}
				}
			}
						}
					}
				}}}}}
							}
							else{

		for (i = 0; i < range.values.length; i++) //
		{
			var row = range.values[i];
			var drinkList = range.values[1];

			var finalArr = [];

			if (row[0] === ing1){
					for (p = 0; p < range.values.length; p++){
						var row2 = range.values[p];
						var drinkList2 = range.values[1];

					if (row2[0] === ing2){

							for (z = 0; z < range.values.length; z++){
								var row3 = range.values[z];
								var drinkList3 = range.values[1];

								if (row3[0] === ing3){
				for (var e = 1; e < row.length; e++) {

					var measure = row[e];

					if (measure > 0){
						var drink = drinkList[e];
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[e] > 0){
							/*newIng = row[0] + " " + row[e] ;
							arr = [];
							arr.push(newIng);
							finalArr.push(arr);
							*/
							//seperate this over a number of functions
							list += "<br>" + add[0] + " " + add[e] ;

							}
						}
						list +=  "<br>" + "---------------------------" + "<br>";
					}
				}
				}
			}
						}
					}
				}}}
						}
						else{

		for (i = 0; i < range.values.length; i++) //
		{
			var row = range.values[i];
			var drinkList = range.values[1];

			var finalArr = [];

			if (row[0] === ing1){
					for (p = 0; p < range.values.length; p++){
						var row2 = range.values[p];
						var drinkList2 = range.values[1];

					if (row2[0] === ing2){

				for (var e = 1; e < row.length; e++) {

					var measure = row[e];

					if (measure > 0){
						var drink = drinkList[e];
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[e] > 0){
							/*newIng = row[0] + " " + row[e] ;
							arr = [];
							arr.push(newIng);
							finalArr.push(arr);
							*/
							//seperate this over a number of functions
							list += "<br>" + add[0] + " " + add[e] ;

							}
						}
						list +=  "<br>" + "---------------------------" + "<br>";
					}
				}
				}
			}
						}
					}
				}
			}
					else{
		for (i = 0; i < range.values.length; i++) //
		{
			var row = range.values[i];
			var drinkList = range.values[1];

			var finalArr = [];

			if (row[0] === ing1){


				for (var e = 1; e < row.length; e++) {

					var measure = row[e];

					if (measure > 0){
						var drink = drinkList[e];
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[e] > 0){
							/*newIng = row[0] + " " + row[e] ;
							arr = [];
							arr.push(newIng);
							finalArr.push(arr);
							*/
							//seperate this over a number of functions
							list += "<br>" + add[0] + " " + add[e] ;

							}
						}
						list +=  "<br>" + "---------------------------" + "<br>";
					}
				}
				}
			}
		}
				};
//document.getElementById("window").innerHTML = list;
				}
document.getElementById("window").innerHTML = list;
	})
}}
}
/*
	.then(function() {
			document.getElementById("window").value = list;
				});
}
}


}

function fill(){

}

function getTrend(){

var carrent, carPast;
if(localStorage.getItem("log")){
var log = localStorage.getItem("log");
}
var carrent, carPast;

		gapi.load('client:auth2', start);
	function start() {
		gapi.client.init({
		apiKey: API_KEY,
		clientId: CLIENT_ID,
		discoveryDocs: DISCOVERY_DOCS,
		scope: SCOPES
		}).then(function () {
		getSheet();
		})
	}
}

*/
// Executes an API request, and returns a Promise.
	function getSheet(){
		gapi.client.sheets.spreadsheets.values.get({
		spreadsheetId: '1bXLGUmSgPiIreS76OwdFdH3ysYMxIVd1icWU-5f9XHQ',
		range: 'profile!C1:AC',
	}).then(function(response) {
			var range = response.result;
			var back;
			if (range.values.length > 0) {
				for (i = 0; i < range.values.length; i++) {
					var row = range.values[i];
					carrent = row[3]
					carPast = row[13]
					}
				}

		}).then(function() {
			makeTrend();
				});
	}
