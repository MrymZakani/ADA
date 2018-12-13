$(document).ready(function () {
    $.getJSON('../data/countries_flags.json', function (json) {
        var categories = json.categories;
        for (var i = 0; i < categories.length; i++) {

            var new_row = "";

            new_row += "<tr><td style='text-align: center'>" + categories[i].category_name + "</td>";

            for (var j = 0; j < categories[i].countries.length; j++) {
                new_row += "<td style='text-align: center'>" +
                    "<img src=" + categories[i].countries[j].icon + " alt=" + categories[i].countries[j].name + " width='50' height='50' uk-tooltip='" +
                    categories[i].countries[j].amount + "'>" +
                    "<p>" + categories[i].countries[j].name + "</p>"
                    + "</td>";
            }

            new_row += "</tr>";
            $("#swiss-importer-flags").append(new_row)
            ;
        }
    });
});