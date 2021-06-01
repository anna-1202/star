//import {Board} from "./Board.js";

let width = 8;
let height =8;
const symbol = "*";

let arr = [];
//let board1 = new Board();
//console.log(board1);


fillArray();
main();

function main(){
	forwardArr(true);
	downArr(true);
	backArr(true);
	upArr(true);
	if (isSquare()){
		oblique(true);
	}
	
}

function isSquare(){
	return (width == height);
}

function wait (sec){
	let counter = sec * 1000000000;
	for (let i=0; i<counter; i++){
		
	}
}

function nextLine(num){
	return repeatSymbol(num, "\n");


}

function space(num){
	let result =  repeatSymbol(num, " ");
	return result;
 
 }

 function symb(num){
	let result =  repeatSymbol(num, symbol);
	return result;
 
 }

function repeatSymbol (num, sym) {
	let jump = "";
	for ( let i=0; i<num; i++){
		jump = jump + sym;
	}
	return jump;
}


function forwardArr (isClean){
		for (let j=0; j<arr[0].length; j++){
			arr[0][j] = symbol;
			if (isClean) {
				arr[0][j-1] = " ";
			}
			print();
			wait(0.5);
			console.clear();
		}
}


function downArr(isClean){
	for (let i=1; i<arr.length; i++){
		arr[i][width-1] = symbol;
		if (isClean) {
			arr[i-1][width-1] = " ";
		}
		print();
		wait(0.5);
		console.clear();
	}

}


function backArr(isClean){
		for (let j=width-2; j>=0; j--){
			arr[height-1][j] = symbol;
			if (isClean) {
			arr[height-1][j+1] = " ";
		}
		print();
		wait(0.5);
		console.clear();
		}
}

function upArr(isClean){
	for (let i=height-2; i>=0; i--){
			arr[i][0] = symbol;
			if (isClean) {
			arr[i+1][0] = " ";
		}
		print();
		wait(0.5);
		console.clear();
	}
}

function fillArray(){
	arr = new Array(height);
	for(let i=0; i<arr.length; i++){
		arr[i] = new Array(width);
	}


	for (let i=0; i<arr.length; i++){
		for (let j=0; j<arr[i].length; j++){
			arr[i][j] = "-";
		}
	}
}

function print(){

let fullArr = "";
for (let i=0; i<arr.length; i++){
	for (let f=0; f<arr[i].length; f++){
		fullArr = fullArr + (arr[i][f]);
		
	}
	console.log(fullArr);
	fullArr = "";
	}
}
function oblique(isClean){
	for (let i=1; i<arr.length; i++){
		arr[i][i] = symbol;
		if (isClean) {
			arr[i-1][i-1] = " ";
		}
		print();
		wait(0.5);
		console.clear();
	}

}










