

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
	
	}
}




function showTab(selected, total) {

	for(i = 1; i <= total; i += 1){


		if (selected == i){

			if (document.getElementById('tabs-' + selected).style.display == 'block'){

				closeSubTabs(4);
				document.getElementById('tabs-' + selected).style.display = 'none';
			}

			else{

				

				document.getElementById('tabs-' + selected).style.display = 'block';
				
			}



		}else {
			document.getElementById('tabs-' + i).style.display = 'none';


			
		}

	}
	if (selected != 3){
		closeSubTabs(4);
	}




}




function closeSubTabs(total){
	for(i = 1; i <= total; i += 1){
		document.getElementById('subtabs-' + i).style.display = 'none';

	}

}



function loading() {
	var myWindow = window.open("Window");
	myWindow.document.write("<CENTER><a href='https://github.com/jacobsilv' style='position:relative; color:white' ><image src='dog.gif'></CETNER><br></a><CENTER><p>Loading!</p></CENTER>");

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
