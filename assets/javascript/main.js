// Check off specific todos by clicking

$("ul").on("click", "li", function() {
    console.log('hi')
    $(this).toggleClass("completed");
});

// click on x to delete todo
$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500,function(){ //this refers tot the span
        $(this).remove(); //this refers to the li, not the span
    })
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        let todoText = $(this).val();

        $(this).val("");

        $("ul").append("<li><i class='fa fa-trash'></i>" + todoText + "</li>")
    }

});

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
});