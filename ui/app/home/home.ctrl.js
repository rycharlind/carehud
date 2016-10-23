class HomeCtrl {

    /**@ngInject*/
    constructor (homeSvc) {
        this.homeSvc = homeSvc;
        this.getEthnicsData();
        this.getGenderData();
        this.getDisabilityTypesData();
        this.getEmploymentData();
        this.getVerteransData();
    }

    getEthnicsData () {
        let data;
        this.homeSvc.getEthnics().then(response=>{
            data = response.data;
            let ctx = $('#ethnicsChart');
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
                options: {
                    animation: {animateRotate: true},
                    legend: {
                        display:true
                    }
                }
            });
        });
    }


    getGenderData () {
        let data;
        this.homeSvc.getGenders().then(response=>{
            data = response.data;
            let ctx = $('#genderChart');
            var chartData = {
                labels: [
                    data[0][0],
                    data[1][0]
                ],
                datasets: [
                    {
                        data: [data[0][1], data[1][1]],
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
                type: 'pie',
                data: chartData,
                options: {
                    animation: {animateRotate: true},
                    legend: {
                        display:true
                    }
                }
            });
        });
    }


    getDisabilityTypesData () {
        let data;
        this.homeSvc.getDisabilityTypes().then(response=>{
            data = response.data;
            let ctx = $('#disabilityTypeChart');
            var chartData = {
                labels: [
                    data[0][0],
                    data[1][0],
                    data[2][0],
                    data[3][0],
                    data[4][0]
                ],
                datasets: [
                    {
                        data: [data[0][1], data[1][1], data[2][1], data[3][1], data[4][1]],
                        backgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        hoverBackgroundColor: [
                            "#FF6384",
                            "#36A2EB",
                            "#FFCE56",
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ]
                    }]
            };
            var myDonutChart = new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: {
                    animation: {animateRotate: true},
                    legend: {
                        display:false
                    }
                }
            });
        });
    }


    getEmploymentData () {
        let data;
        this.homeSvc.getDisabilityTypes().then(response=>{
            data = response.data;
            let ctx = $('#employmentChart');
            var chartData = {
                labels: [
                    data[0][0],
                    data[1][0],
                    data[2][0]
                ],
                datasets: [
                    {
                        data: [data[0][1], data[1][1], data[2][1]],
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
                options: {
                    animation: {animateRotate: true},
                    legend: {
                        display:true
                    }
                }
            });
        });
    }



    getVerteransData () {
        let data;
        this.homeSvc.getVeterans().then(response=>{
            data = response.data;
            let ctx = $('#veteransChart');
            var chartData = {
                labels: [
                    "Vet",
                    "Non-Vet"
                ],
                datasets: [
                    {
                        data: [data[0][1], data[1][1]],
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
                type: 'pie',
                data: chartData,
                options: {
                    animation: {animateRotate: true},
                    legend: {
                        display:true
                    }
                }
            });
        });
    }




}

export default HomeCtrl;