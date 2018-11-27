var chartCanvas = document.getElementById('myChart');

var chartOptions = {
    type: 'bar',
    data: {
        labels: ["Josh Hawley", "Claire McCaskill"],
        datasets: [{
            label: '# of Votes',
            data: [1246382, 1101377],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
};

var myChart = new Chart(chartCanvas, chartOptions);
