$(document).ready(function(){
    $(".clickable-row").click(function() {
        var url = $(this).data("href");
    	window.open(url,'_blank');
    });
});