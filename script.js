/**
 * Created by Vova on 27.10.2015.
 */
$(document).ready(function () {
    var author = '',
        quote = '',
        choose = "famous";
    /*btn-1*/
    createQuote();
    $('.btn-1').on("click", function () {
        createQuote();

    });

    $("select").change(function () {
        var str = "";
        choose = $("select option:selected").text();
        createQuote();
    });

    $(".btn-2").on("click",function(){
        var url='https://twitter.com/intent/tweet?text=' + '"' +
            quote + '", - '+ author+".";
        window.open(url,'twitter');
    });

    function createQuote() {
        var out = $.ajax({
            url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous' + choose,
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json',
            success: function (data) {
               $author = $('.author'),
                    $quote = $('.quote'),

                quote = data.quote;
                author = data.author;
                console.log(data);
                $quote.html('" ' + quote + ' "');

                $author.html(" " + choose + ": " + author);
                $author.addClass("font-weight");
                $author.parent().addClass("bc");


            },
            error: function () {
                console.log("dfssddssdf");
                document.getElementById('.quote').innerHTML = "dssad";
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "Sr4ugfUfUHmshOQ2IbeGXw8i1Gujp15JgPZjsnIcl0TaxHmdX3"); // Enter here your Mashape key
            }


        });
    };

});