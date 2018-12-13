$(document).ready(function () {
    $.getJSON('../data/countries_flags.json', function (json) {

        var categories_switzerland = json.Switzerland.categories;
        for (var i = 0; i < categories_switzerland.length; i++) {
            var new_row = "";
            new_row += "<tr><td style='text-align: center'>" + categories_switzerland[i].category_name + "</td>";

            for (var j = 0; j < categories_switzerland[i].countries.length; j++) {
                new_row += "<td style='text-align: center'>" +
                    "<img src=" + categories_switzerland[i].countries[j].icon + " alt=" + categories_switzerland[i].countries[j].name + " width='50' height='50' uk-tooltip='" +
                    categories_switzerland[i].countries[j].amount + "'>" +
                    "<p>" + categories_switzerland[i].countries[j].name + "</p>"
                    + "</td>";
            }
            new_row += "</tr>";
            $("#swiss-importer-flags").append(new_row);
        }

        var categories_europe = json.Europe.categories;
        for (var i = 0; i < categories_europe.length; i++) {
            var new_row = "";
            new_row += "<tr><td style='text-align: center'>" + categories_europe[i].category_name + "</td>";

            for (var j = 0; j < categories_europe[i].countries.length; j++) {
                new_row += "<td style='text-align: center'>" +
                    "<img src=" + categories_europe[i].countries[j].icon + " alt=" + categories_europe[i].countries[j].name + " width='50' height='50' uk-tooltip='" +
                    categories_europe[i].countries[j].amount + "'>" +
                    "<p>" + categories_europe[i].countries[j].name + "</p>"
                    + "</td>";
            }
            new_row += "</tr>";
            $("#europe-importer-flags").append(new_row);
        }
    });
});