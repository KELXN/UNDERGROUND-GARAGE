$(function()
{
	//alert();
	//Метод raggable() - перетягнення; //Метод droppable()- drop 25.1,25.2
	var count=0,suma=0;
	
	$('#draggable1').draggable();
$('#draggable2').draggable();
	$('#draggable3').draggable();
	$('#draggable4').draggable();
	var $gallery=$('.features-grids'), $trash=$('.koshik-wrapper');
	$trash.droppable({
		accept:'.features-grids>div',
		classes:{'ui-droppable-active':'ui-state-highlight'},
		
		drop:function(event,ui){
		deleteImg(ui.draggable);
			
		}
		
	});
	
	/*function deleteImg($item){
		$item.fadeOut(function(){
			var 
		})$list=$('ul,$trash').length ?
	}*/

	var $carousel = $('.product-carousel');
	if ($carousel.length) {
		var scrollSpeed = 0.9;
		setInterval(function() {
			var maxScroll = $carousel[0].scrollWidth - $carousel.outerWidth();
			if ($carousel.scrollLeft() >= maxScroll) {
				$carousel.scrollLeft(0);
			} else {
				$carousel.scrollLeft($carousel.scrollLeft() + scrollSpeed);
			}
		}, 40);
	}

	$('.product-card').on('mousemove', function(event) {
		var $card = $(this);
		var offset = $card.offset();
		var width = $card.outerWidth();
		var height = $card.outerHeight();
		var x = event.pageX - offset.left - width / 2;
		var y = event.pageY - offset.top - height / 2;
		var rotateX = (y / height) * 12;
		var rotateY = -(x / width) * 12;
		$card.addClass('tilt').css('transform', 'translateY(-6px) scale(1.03) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	});

	$('.product-card').on('mouseleave', function() {
		var $card = $(this);
		$card.removeClass('tilt').css('transform', 'translateY(0) scale(1) rotateX(0deg) rotateY(0deg)');
	});
});
