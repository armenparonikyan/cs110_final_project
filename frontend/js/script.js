const socket = io();


console.log('Heleluyah');

socket.on('no space', data => {
	console.log(data);
	document.getElementById('sorry').style.display = "block";
})

const send = function(){
	const value = document.getElementById('input').value;
	console.log(value);
	socket.emit('user step', value);
};

socket.on('result', data=>{
	console.log(data);
	document.getElementById("history").innerHTML = data.history;
	document.getElementById("total").innerHTML = data.total;
})
