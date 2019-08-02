$(document).ready(()=>
{
	filter_all();	
	$("#category").change(function(){
        var category = $(this).children("option:selected").val();
        if(category=="all")
        {
        	filter_all();
        }
        else
        {
        	filter_category(category);	
        }
    });
    $(".box").mouseenter(function() {
    	$(this).addClass('bounceIn');
    });
    $(".col-lg-3").mouseleave(function() {
    	$(this).children('.box').removeClass('bounceIn');
    });
    $(".navbar-brand").mouseenter(function() {
    	$(this).addClass('bounceIn');
    });
    $(".navbar").mouseleave(function() {
    	$(".navbar-brand").removeClass('bounceIn');
    });
    $(".card").mouseenter(function() {
    	$(this).addClass('bounceIn');
    });
    $(".author").mouseleave(function() {
    	$(this).children('.card').removeClass('bounceIn');
    });
});
function filter_all()
{
	$(".port").show('2000');
	$(".port").addClass('bounceIn');
	var number=$(".port").length;
	if(number<1)
	{
		$(".category-alert").css({display: 'block'});
		$(".category-alert").addClass('bounceIn');
	}
	else
	{
		$(".category-alert").css({display: 'none'});
	}
	setTimeout(()=>
	{
		$(".port").removeClass('bounceIn');
		$(".category-alert").removeClass('bounceIn');
	},1000);
}
function filter_category(category)
{
	$(".port").not("."+category).hide('2000');
	$(".port").filter("."+category).show('2000');
	$(".port").filter("."+category).addClass('bounceIn');
	var number=$("."+category).length;
	if(number<1)
	{
		$(".category-alert").css({display: 'block'});
		$(".category-alert").addClass('bounceIn');
	}
	else
	{
		$(".category-alert").css({display: 'none'});
	}
	setTimeout(()=>
	{
		$(".port").filter("."+category).removeClass('bounceIn');
		$(".category-alert").removeClass('bounceIn');
	},1000);
}