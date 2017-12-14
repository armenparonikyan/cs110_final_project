const socket = io();

let number = 0;
let history = '';
console.log('Heleluyah');

socket.on('no space', data => {
	console.log(data);
	document.getElementById('sorry').style.display = "block";
});

const send = function(){
	const value = document.getElementById('input').value;
	console.log(value);
	socket.emit('user step', value);
};

socket.on('result', data =>{
	console.log(data);
	history += '<label style="color:'+ data.color +';">' + data.history.substring(data.history.length-2) + "</label>";
	$("#history").html(history);
	$("#total").text(data.total);
});


socket.on('start game', function(data) {
	console.log("game started");
	$('#goal').html("<b>"+ data.goal +"</b>");
	$('.game-components').removeClass('invisible');
	$('#wait').addClass('invisible');
});

socket.on('your turn', data => {
	console.log("your turn worked");
});

$('.button').click((e) => {
	console.log('click');
	$('.button').removeClass('active');
	$(e.target).addClass('active');
	console.log($(e.target).data('value'));
});
