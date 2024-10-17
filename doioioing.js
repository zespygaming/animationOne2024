	function doTheTriggerV2(){
		if(document.getElementById('triggerVV2').innerHTML=='sho'){
			document.getElementById('w2a2v1').style.display='block';
			document.getElementById('w2a2v2').style.display='none';

			document.getElementById('triggerV2').style='background-color:white;color:black;';
			document.getElementById('triggerV2').innerHTML='V';
			document.getElementById('triggerVV2').innerHTML='hid';
		}else{
			document.getElementById('w2a2v1').style.display='none';
			document.getElementById('w2a2v2').style.display='block';

			document.getElementById('triggerV2').style='background-color:black;color:white;';
			document.getElementById('triggerV2').innerHTML='Q';
			document.getElementById('triggerVV2').innerHTML='sho';
		}
	}