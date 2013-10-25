$(document).ready(function(){

	var stor = false;

	$('<li class="leaf staekkarinn"><a href="javascript:void(0);">Stækka spilarann</a></li>').appendTo('.undir-valmynd .menu');

	$('.staekkarinn').click(function(){
		if (!stor) {
			$('#dagskra-haegri').css('margin-top', 572);
			$('#sarphugavert').css('margin-top', 572);
			$('#spilarinn').attr('width',976);
			$('#spilarinn').attr('height',550);
			$('.staekkarinn a').text('Minnka spilarann');
			stor = true;
		} else {
			$('#dagskra-haegri').css('margin-top', 6);
			$('#sarphugavert').css('margin-top', 6);
			$('#spilarinn').attr('width',640);
			$('#spilarinn').attr('height',360);
			$('.staekkarinn a').text('Stækka spilarann');
			stor = false;
		}

	});



});