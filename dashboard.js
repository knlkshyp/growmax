async function getValueForDailySales() {
    let cost = [], volume = [], name = [], DailySalesValue = [];
    let map = new Map();
    let info = await salesInfo();
    for (index = 0; index < info.length; index++) {
        volume.push(info[index][1]);
        name.push(info[index][0]);
    }
    cost = await productDetail(name);
    for(index=0; index < cost.length; index++) {
        DailySalesValue[index] = cost[index] * volume[index];
        map.set(name[index], DailySalesValue[index]);
    }
    return map;
}

async function barGraph(containerId) {
    let map = await getValueForDailySales();
    let keys = map.keys();
    let values = map.values();
    let data = [
        [keys.next().value, values.next().value],
        [keys.next().value, values.next().value],
        [keys.next().value, values.next().value],
        [keys.next().value, values.next().value],
        [keys.next().value, values.next().value]
    ];
    chart = anychart.column();
    chart.column(data);
    chart.container(containerId);
    chart.draw();
}

function avgUnitsPerOutlet() {
    var data = [
        ["January", 10000],
        ["February", 12000],
        ["March", 18000],
        ["April", 11000],
        ["May", 9000]
    ];

    chart = anychart.line();
    var series = chart.line(data);
    chart.container("avg-units-per-outlet");
    chart.draw();
}

function stepLineChart(containerId) {
    var data = [
        { x: "1995", value: 0.10 },
        { x: "1996", value: 0.10 },
        { x: "1997", value: 0.12 },
        { x: "1998", value: 0.13 },
        { x: "1999", value: 0.15 },
        { x: "2000", value: 0.15 },
        { x: "2001", value: 0.15 },
        { x: "2002", value: 0.19 },
        { x: "2003", value: 0.20 }
    ];

    chart = anychart.stepLine();
    var series = chart.stepLine(data);
    series.stepDirection("forward");
    chart.container(containerId);
    chart.draw();
}

function areaChart(containerId) {
    var data = [
        ["January", 10000],
        ["February", 12000],
        ["March", 18000],
        ["April", 11000],
        ["May", 9000]
    ];

    chart = anychart.area();
    var series = chart.area(data);
    chart.container(containerId);
    chart.draw();
}

async function salesInfo() {
    const response = await fetch("/sales-info", {
        method: 'GET'
      });
    const json = await response.json();
    return json;
}

async function productDetail(name) {
    const response = await fetch("/product-detail", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(name)
      });
    const json = await response.json();
    return json;
}

productDetail

barGraph("avg-daily-sales");
// barGraph("avg-sales-per-outlet");
// barGraph("total-inventory");
// barGraph("total-sales");

// areaChart("avg-units-per-outlet");
// areaChart("total-leads");

// stepLineChart("avg-order-time");
// stepLineChart("profit-margin");