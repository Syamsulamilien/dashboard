// script.js
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Winter', 'Spring', 'Summer', 'Autumn'],
            datasets: [{
                label: 'Performance',
                data: [25, 50, 75, 87],
                backgroundColor: 'rgba(76, 59, 222, 0.3)',
                borderColor: 'rgba(76, 59, 222, 1)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 25
                    }
                }
            }
        }
    });
});
