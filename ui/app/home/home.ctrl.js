class HomeCtrl {

    constructor () {
        this.getEthnicsData();
    }

    getEthnicsData () {
        let ctx = $('#ethnicsChart');
        let data = [
            [
                "White", 119
            ],
            [
                "Black", 181
            ],
            [
                "AmIndAKNative",2
            ]
        ];
        var chartData = {
            labels: [
                data[0][0],
                data[1][0],
                data[2][0]
            ],
            datasets: [
                {
                    data: [data[0][1], data[1][1],data[2][1]],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
        var myDonutChart = new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: {}
        });
    }
}

export default HomeCtrl;