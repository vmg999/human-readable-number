module.exports = function toReadable (n) {
  let S={
	'1':"one",
	'2':"two",
	'3':"three",
	'4':"four",
	'5':"five",
	'6':"six",
	'7':"seven",
	'8':"eight",
	'9':"nine",
	'10':"ten",
	'11':"eleven",
	'12':"twelve",
	'13':"thirteen",
	'14':"fourteen",
	'15':"fifteen",
	'16':"sixteen",
	'17':"seventeen",
	'18':"eighteen",
	'19':"nineteen",
	'20':"twenty",
	'30':"thirty",
	'40':"forty",
	'50':"fifty",
	'60':"sixty",
	'70':"seventy",
	'80':"eighty",
	'90':"ninety",
	'100':"hundred",
	'1000':"thousand"
}
  
if(n===0){
	return "zero";
}else if(n>=0 && n<=20){
	return S[String(n)];
}else if(n>20 && n<100){
	// return S[String(n-n%10)]+" "+S[String(n)[1]];
	return S[String(n-n%10)]+((n%10!=0)?(" "+S[String(n)[1]]):"");
}else if(n>=100 && n<1000){
	return S[String(n)[0]]+" "+S['100']+((n%100!=0)?(" "+toReadable(n%100)):"");
}else if(n>=1000 && n<10000){
	return S[String(n)[0]]+" "+S['1000']+((n%1000!=0)?(" "+toReadable(n%1000)):"");
}  
}
