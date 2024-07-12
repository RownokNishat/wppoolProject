window.onload = function () {
    var chart = new CanvasJS.Chart("chartContainer", {
        title: {
            // text: "House Median Price",
        },
        axisX: {
            valueFormatString: "DD MMM",
        },
        axisY: [
            {
                // title: "Median List Price",
                prefix: "",
                suffix: "%",
                lineThickness: 1,
                interval: 10,
                minimum: -10,
                maximum: 100,
            },
        ],
        toolTip: {
            shared: true,
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "center",
            dockInsidePlotArea: false,
            markerType: "square",
            itemclick: toggleDataSeries,
            fontWeight: 700,
        },
        data: [
            {
                type: "line",
                axisYIndex: 0,
                name: "WPPOOL",
                showInLegend: true,
                markerSize: 0,
                yValueFormatString: "#,###.##%",
                dataPoints: generateDataPoints(new Date(2024, 0, 1), 2),
            },
            {
                type: "line",
                axisYIndex: 0,
                name: "Google",
                showInLegend: true,
                markerSize: 0,
                yValueFormatString: "#,###.##%",
                dataPoints: generateDataPoints(new Date(2024, 0, 1), 2),
            },
            {
                type: "line",
                axisYIndex: 0,
                name: "Microsoft",
                showInLegend: true,
                markerSize: 0,
                yValueFormatString: "#,###.##%",
                dataPoints: generateDataPoints(new Date(2024, 0, 1), 2),
            },
            {
                type: "line",
                axisYIndex: 0,
                name: "Twitter",
                showInLegend: true,
                markerSize: 0,
                yValueFormatString: "#,###.##%",
                dataPoints: generateDataPoints(new Date(2024, 0, 1), 2),
            },
        ],
    });
    chart.render();

    function toggleDataSeries(e) {
        if (
            typeof e.dataSeries.visible === "undefined" ||
            e.dataSeries.visible
        ) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart.render();
    }

    function generateDataPoints(startDate, months) {
        const dataPoints = [];
        let date = new Date(startDate);
        for (let i = 0; i < months * 15; i++) {
            dataPoints.push({
                x: new Date(date),
                y: Math.random() * 100,
            });
            date.setDate(date.getDate() + 1);
        }
        return dataPoints;
    }
};