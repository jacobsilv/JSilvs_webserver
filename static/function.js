

function showSubTab(selected, total) {

	for(i = 1; i <= total; i += 1){


		if (selected == i){
			if (document.getElementById('subtabs-' + selected).style.display == 'block'){
				document.getElementById('subtabs-' + i).style.display = 'none';

			}

			else{
				document.getElementById('subtabs-' + selected).style.display = 'block';
			}

		}else {
			document.getElementById('subtabs-' + i).style.display = 'none';
		} 
		/*if (document.getElementById('tabs-' + 3).style.display = 'none'){
			document.getElementById('subtabs-' + 1).style.display = 'none';
			document.getElementById('subtabs-' + 2).style.display = 'none';
			document.getElementById('subtabs-' + 3).style.display = 'none';
			document.getElementById('subtabs-' + 4).style.display = 'none';
		}*/
		

	}
}




function showTab(selected, total) {

	for(i = 1; i <= total; i += 1){


		if (selected == i){
			if (document.getElementById('tabs-' + selected).style.display == 'block'){
				document.getElementById('tabs-' + i).style.display = 'none';

			}

			else{
				

				document.getElementById('tabs-' + selected).style.display = 'block';
			}

		}else {
			document.getElementById('tabs-' + i).style.display = 'none';
		}

	}
}



function loading() {
	var myWindow = window.open("Window");
	myWindow.document.write("<CENTER><image src='dog.gif'></CETNER><br></a><CENTER><p>Loading!</p></CENTER>");

	myWindow.document.write("<br><CENTER><p>type this into your terminal <br> osascript -e 'tell application \"Finder\" to Shut down' </p>");
}

function virus(){
	n = 4;
	for (i =1; i <=n; i++){
		
		if (i==4){
			alert('now beginning download');
		} else{
			alert('Press OK to download Virus '+i);
		}
	}

}
