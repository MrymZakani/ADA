$(document).ready(function () {
    $.getJSON('../data/countries_flags.json', function (json) {

        var categories = json.categories;
        for (var i = 0; i < categories.length; i++) {
            var new_row = "";
            new_row += "<tr><td style='text-align: center'>" +
                "<img src=" + categories[i].category_icon + " alt=" + categories[i].category_name + " width='50' height='50' uk-tooltip='" +

                categories[i].category_name + "'></td>";

            for (var j = 0; j < categories[i].countries.length; j++) {
                new_row += "<td style='text-align: center'>" +
                    "<img src=" + categories[i].countries[j].icon + " alt=" + categories[i].countries[j].name + " width='40' height='40' uk-tooltip='" +
                    categories[i].countries[j].name + "\n" + categories[i].countries[j].amount + "'>" +"</td>";
            }
            new_row += "</tr>";
            $("#importer-flags").append(new_row);
        }
    });

    var ctx = document.getElementById("myChart").getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["2012", "2013", "2014", "2015"],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Number of Votes',
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: 'Number of Votes 3',
                    data: [15, 4, 1, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    },
                    stacked: true
                }],
                xAxes: [{
                    stacked: true
                }]
            }
        }
    });
    chart.data.datasets[0].data[2] = 50;
    chart.update();
    removeData(chart);


    function addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets[0].data.push(10);
        chart.update();
    }

    function removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets[0].data.pop();
        chart.update();
    }
})
;


