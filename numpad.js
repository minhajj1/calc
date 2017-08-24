	
	function setValue(num){
		document.getElementById('numbers').value += document.getElementById('myForm').elements.item(num).value;
	}
	function setZero(){
		document.getElementById('numbers').value += 0;

	}
	function setPeriod(){
		document.getElementById('numbers').value += '.';

	}
	function clearBox(){
		document.getElementById('numbers').value = '';
	}