const ctx = document.getElementById('lineChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'Earings in $',
            data: [1243, 1400, 1300, 1800, 900, 1131, 1236, 2131, 1243, 2897, 1233, 2341, 1233],
            backgroundColor: [
                'rgba(85,85,85,1)'
            ],
            borderColor: [
                'rgb(41,155,91)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});

const ctx2 = document.getElementById('doughnut').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Academic', 'Non-academic', 'Administartor', 'Others'],
        datasets: [{
            label: '# of Votes',
            data: [54, 48, 62, 12],
            backgroundColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 12, 192, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 12, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});