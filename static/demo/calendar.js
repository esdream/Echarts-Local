// 日历热力图
var myChart = echarts.init(document.getElementById('main'));

// 随机生成一些日期数据
function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(year + '-12-31');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time <= end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}


var option = {
    title: {
        top: 30,
        left: 'center',
        text: '2016年某人每天的步数'
    },
    visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise', // 分段型视觉映射。可以自定义分段，详细分段方式见https://www.echartsjs.com/option.html#visualMap-piecewise.type
        orient: 'horizontal',
        left: 'center',
        top: 65,
        textStyle: {
            color: '#000'
        }
    },
    legend: {},
    calendar: {
        range: '2017',
        top: 120,
        left: 30,
        right: 30,
        // cellSize: ['auto', 13],
    },
    tooltip: {},
    series: {
        type: 'heatmap',    // 这里绘制的是按日期的热力图，类似于github上coding的热力图
        coordinateSystem: 'calendar',   // 这里选择日历坐标轴即可
        data: getVirtulData(2017)
    }
};

myChart.setOption(option);