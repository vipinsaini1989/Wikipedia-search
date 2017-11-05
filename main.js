function getURL() {
	let searchURL = "https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=";
	var searchObj = document.getElementById('textBox').value;
	searchObj = searchObj.replace (' ', '%20');
	searchURL += searchObj;
	return searchURL;
}

function fetchIt(){
	fetch(getURL())
	.then (data => data.json())
	.then (value => getPages(value))

}

function getPages(value) {
	//let value = document.querySelector('input').value;
	console.log(value);
	document.getElementById("unordered").innerHTML = "";
	for (var i =0; i< value[1].length; i++){

		var element  = '<a target="_blank" href=' +value[3][i] + 'a>'+ value[1][i] +'</a>'+ '<br>'+value[2][i];
		document.getElementById("unordered").innerHTML += '<li>'+element+'</li>';
		
	}
}

function listenKey(e){
	if(e.keyCode === 13){
		fetchIt();
	}
}

let searchBox = document.getElementById('textBox');
searchBox.addEventListener('keyup',listenKey);

let searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', fetchIt);