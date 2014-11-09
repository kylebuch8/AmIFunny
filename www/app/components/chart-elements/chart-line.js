(function () {
    'use strict';

    /*global Polymer, Chart*/
    Polymer('chart-line', {
        ready: function () {
            this.addEventListener('draw', function () {
                var data = {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            fillColor: 'rgba(0, 150, 136, 0.2)',
                            strokeColor: 'rgba(0, 150, 136, 1)',
                            pointColor: 'rgba(0, 150, 136, 1)',
                            pointStrokeColor: '#fff',
                            pointHighlightFill: '#fff',
                            pointHighlightStroke: 'rgba(220,220,220,1)',
                            data: [65, 59, 80, 81, 56, 55, 40]
                        }
                    ]
                };

                var ctx = this.$.canvas.getContext('2d');

                new Chart(ctx).Line(data, {
                    responsive: true,
                    showScale: false,
                    scaleShowLabels: false,
                    animation: false,
                    maintainAspectRatio: false,
                    pointDotStrokeWidth : 2
                });
            });
        }
    });
}());
