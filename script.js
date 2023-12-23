function makeid(l) {
  // write your code here
	function valcode(){
		let num=parseInt(Math.random()*100);
		if((48<=num && num<=57) || (65<=num && num<=90) || (97<=num && num<=99)){
			return num;
		}
		return 100+parseInt(num/5);
	}
		let str="";
	
	for(let i=1;i<=l;i++){
		str+=String.fromCharCode(valcode());
	}
	return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
