$(document).ready(function() {
    $('form').submit(function() {
        // your code here (build up your url)

        var city = $("[name=city]").val();
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=48cfb9fd41142babb8cbe9b0c8e7234f";

        $.get(url, function(res) {

            var temp = Math.floor(res.main.temp * 9/5 - 459.67);
            var html = "<h2>" + res.name + "</h2>";
            html += "<p>Temperature = </p>" + " " + "<p>" + temp + "</p>" + " " + "<p> ˚F </p>";
            $('#printOut').append(html);

            // your code here
        }, 'json');
        return false;
    });
});
