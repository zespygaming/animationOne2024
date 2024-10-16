	function doTheTriggerV2(){
		if(document.getElementById('w2a2v2').style.display=='none'){
			document.getElementById('w2a2v1').style.display='none';
			document.getElementById('w2a2v2').style.display='block';

			document.getElementById('triggerV2').style='background-color:black;color:white;';
		}else{
			document.getElementById('w2a2v1').style.display='block';
			document.getElementById('w2a2v2').style.display='none';

			document.getElementById('triggerV2').style='background-color:white;color:black;';
		}
	}