	$(document).ready(function() {

		var Random=Math.floor(Math.random()*98+1)
		
		$('#randomNumber').text(Random);

		var num1= Math.floor(Math.random()*11+1)
		var num2= Math.floor(Math.random()*11+1)
		var num3= Math.floor(Math.random()*11+1)
		var num4= Math.floor(Math.random()*11+1)

		var userTotal= 0;
		var wins=0;
		var losses=0;

		$('#numberWins').text(wins);
		$('#numberLosses').text(losses);

		function yay(){
			alert("You Win!");
			wins++;
			$('#numberWins').text(wins);
			reset();
		}

		function lose() {

			alert("You Lose!!!");
			losses++;
			$('#numberLosses').text(losses);
			reset();
		}

		function reset () {
			Random=Math.floor(Math.random()*98+1);
			console.log(Random)
			$('#randomNumber').text(Random);
		var num1= Math.floor(Math.random()*11+1);
		var num2= Math.floor(Math.random()*11+1);
		var num3= Math.floor(Math.random()*11+1);
		var num4= Math.floor(Math.random()*11+1);
		userTotal=0;
		$('#finalTotal').text(userTotal);
		}

		$('#one').on('click', function() {
			userTotal = userTotal + num1;
			console.log("New UserTotal= " + userTotal);
			$('#finalTotal').text(userTotal);

			if (userTotal === Random){
				yay();
			}
			else if (userTotal > Random){
				lose();
			}
		})
		$('#two').on('click', function() {
			userTotal = userTotal + num2;
			console.log("New UserTotal= " + userTotal);
			$('#finalTotal').text(userTotal);

			if(userTotal == Random){
				yay();
			}
			else if (userTotal > Random) {
				lose();
			}
		})
		$('#three').on('click', function() {
			userTotal = userTotal + num3;
			console.log("New UserTotal= " + userTotal);
			$('#finalTotal').text(userTotal);

			if(userTotal == Random){
				yay();
			}
			else if (userTotal > Random) {
				lose();
			}
		})
		$('#four').on('click', function() {
			userTotal = userTotal + num4;
			console.log("New UserTotal= " + userTotal);
			$('#finalTotal').text(userTotal);

			if(userTotal == Random){
				yay();
			}
			else if (userTotal > Random) {
				lose();
			}
		});
	});
	

