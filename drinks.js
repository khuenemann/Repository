 //to run on localhost: python -m http.server 8000


  // information for the api
      var CLIENT_ID = '360508408212-d53dln9jf96ldb5j3i4co652tpucugjq.apps.googleusercontent.com';
      var API_KEY = 'AIzaSyCnm1OXlgXfFyXisknNNbBF7R8Thl1Msfs';
      var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
      var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";



//loads the list of drinks
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
			//drink sheet rather than user sheet
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

								if (ing5.length > 2) {{

		for (i = 0; i < range.values.length; i++){
			var row = range.values[i];
			var drinkName = range.values[0];

			var finalArr = [];

			if (row[0] === ing1){
			         for (var u = 1; u < row.length; u++) {

					    var rowOne = row[u];

					    if (rowOne > 0){
					       for (e = 1; e < range.values.length; e++){
						      var rowTwo = range.values[e];
						            if (rowTwo[0] === ing2 && rowTwo[u] > 0){
					                for (r = 1; r < range.values.length; r++){
						                var rowThree = range.values[r];
				                	if (rowThree[0] === ing2 && rowThree[u] > 0){
	                                            for (a = 1; a < range.values.length; a++){
	                                               var rowFour = range.values[a];
	                                       if (rowFour[0] === ing4 && rowFour[u] > 0){

	                                               for (b = 1; b < range.values.length; b++){
	                                               var rowFive = range.values[b];
	                if (rowFive[0] === ing5 && rowFive[u] > 0){
						var drink = drinkName[u];
						if (drink != undefined){
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[u] > 0){

							list += "<br>" + add[0] + " " + add[u] ;

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
					               }
			                 }
			         }
		          }


			}
		}
				}
								//4 ingredients
								else{

		for (i = 0; i < range.values.length; i++){
			var row = range.values[i];
			var drinkName = range.values[0
    ];

			var finalArr = [];

			if (row[0] === ing1){
			         for (var u = 1; u < row.length; u++) {

					    var rowOne = row[u];

					    if (rowOne > 0){
					       for (e = 1; e < range.values.length; e++){
						      var rowTwo = range.values[e];
						            if (rowTwo[0] === ing2 && rowTwo[u] > 0){
					                for (r = 1; r < range.values.length; r++){
						                var rowThree = range.values[r];
				                	if (rowThree[0] === ing2 && rowThree[u] > 0){
	                                            for (a = 1; a < range.values.length; a++){
	                                               var rowFour = range.values[a];
	            if (rowFour[0] === ing4 && rowFour[u] > 0){
						var drink = drinkName[u];
						if (drink != undefined){
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[u] > 0){

							list += "<br>" + add[0] + " " + add[u] ;

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
		          }


			}
		}
				}
							}
							//3 ingredients
							else{

		for (i = 0; i < range.values.length; i++){
			var row = range.values[i];
			var drinkName = range.values[0];

			var finalArr = [];

			if (row[0] === ing1){
			         for (var u = 1; u < row.length; u++) {

					    var rowOne = row[u];

					    if (rowOne > 0){
					       for (e = 1; e < range.values.length; e++){
						      var rowTwo = range.values[e];
						            if (rowTwo[0] === ing2 && rowTwo[u] > 0){
					                for (r = 1; r < range.values.length; r++){
						                var rowThree = range.values[r];
					if (rowThree[0] === ing3 && rowThree[u] > 0){
						var drink = drinkName[u];
						if (drink != undefined){
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[u] > 0){

							list += "<br>" + add[0] + " " + add[u] ;

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
		}
				}
						}
						// 2 ingredients
						else{

		for (i = 0; i < range.values.length; i++){
			var row = range.values[i];
			var drinkName = range.values[0];

			var finalArr = [];

			if (row[0] === ing1){
			         for (var u = 1; u < row.length; u++) {

					    var rowOne = row[u];

					    if (rowOne > 0){
					       for (e = 1; e < range.values.length; e++){
						      var rowTwo = range.values[e];
					if (rowTwo[0] === ing2 && rowTwo[u] > 0){
						var drink = drinkName[u];
						if (drink != undefined){
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[u] > 0){

							list += "<br>" + add[0] + " " + add[u] ;

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
			}
					//1 ingredient
					else{
		for (i = 0; i < range.values.length; i++){
			var row = range.values[i];
			var drinkName = range.values[0];

			var finalArr = [];

			if (row[0] === ing1){


				for (var e = 1; e < row.length; e++) {

					var rowOne = row[e];

					if (rowOne > 0){
						var drink = drinkName[e];
						if (drink != undefined){
							list += "<br>"  + drink + "<br>";
						for (var o = 0; o < range.values.length; o++) {
							var add = range.values[o];
							if (add[e] > 0){

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
				};

				}
document.getElementById("window").innerHTML = list;
})
}}
}
