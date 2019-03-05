var myChart = echarts.init(document.getElementById('main'), 'vintage');
// 加载数据时使用Loading动画
myChart.showLoading();

// 异步加载数据，加载的json数据是文本形式，需要解析
$.get('/static/data/drink.json', function(json_data){

    // 加载数据完成后隐藏Loading动画
    myChart.hideLoading();

    // 调用JSON.parse方法解析json数据
    var data = JSON.parse(json_data);

    var option = {
        legend: {},
        tooltip: {},

        // 示例1
        // dataset: {
        //     source: [
        //         ['product', '2012', '2013', '2014', '2015'],
        //         ['Matcha Latte', 41.1, 30.4, 65.1, 53.3],
        //         ['Milk Tea', 86.5, 92.1, 85.7, 83.1],
        //         ['Cheese Cocoa', 24.1, 67.2, 79.5, 86.4]
        //     ]
        // },
        // xAxis: [
        //     { type: 'category', gridIndex: 0 },
        //     { type: 'category', gridIndex: 1 }
        // ],
        // yAxis: [
        //     { gridIndex: 0 },
        //     { gridIndex: 1 }
        // ],
        // grid: [
        //     { bottom: '55%' },
        //     { top: '55%' }
        // ],
        // series: [
        //     // 这几个系列会在第一个直角坐标系中，每个系列对应到 dataset 的每一行。
        //     { type: 'bar', seriesLayoutBy: 'row' },
        //     { type: 'bar', seriesLayoutBy: 'row' },
        //     { type: 'bar', seriesLayoutBy: 'row' },
        //     // 这几个系列会在第二个直角坐标系中，每个系列对应到 dataset 的每一列。
        //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
        //     { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
        // ],

        // 示例2：使用encode进行映射
        // dataset: {
        //     source: [
        //         ['score', 'amount', 'product'],
        //         [89.3, 58212, 'Matcha Latte'],
        //         [57.1, 78254, 'Milk Tea'],
        //         [74.4, 41032, 'Cheese Cocoa'],
        //         [50.1, 12755, 'Cheese Brownie'],
        //         [89.7, 20145, 'Matcha Cocoa'],
        //         [68.1, 79146, 'Tea'],
        //         [19.6, 91852, 'Orange Juice'],
        //         [10.6, 101852, 'Lemon Juice'],
        //         [32.7, 20112, 'Walnut Brownie']
        //     ]
        // },
        // xAxis: {},
        // yAxis: { type: 'category' },
        // series: [
        //     {
        //         type: 'bar',
        //         encode: {
        //             // 将 "amount" 列映射到 X 轴。
        //             x: 'amount',
        //             // 将 "product" 列映射到 Y 轴。
        //             y: 'product'
        //         }
        //     }
        // ],

        // 示例3：使用encode声明管理数据维度，详细见https://www.echartsjs.com/tutorial.html#%E4%BD%BF%E7%94%A8%20dataset%20%E7%AE%A1%E7%90%86%E6%95%B0%E6%8D%AE

        dataset: {
            source: data,
        },
        series: [{
            type: 'pie',
            radius: 60,
            center: ['25%', '30%'],
        }, {
            type: 'pie',
            radius: 60,
            center: ['75%', '30%'],
            encode: {
                itemName: 'product',
                value: '2013'
            }
        }, {
            type: 'pie',
            radius: 60,
            center: ['25%', '75%'],
            encode: {
                itemName: 'product',
                value: '2014',
            }
        }, {
            type: 'pie',
            radius: 60,
            center: ['75%', '75%'],
            encode: {
                itemName: 'product',
                value: '2015'
            }
        }],

        // toolbox中包括了一个下载图片的设置要素
        toolbox: {
            show: true,
            left: 'center',
            feature: {
                // 添加一个保存图表的要素
                saveAsImage: {
                    pixelRatio: 3, // 分辨率，默认为1，与容器一致
                    title: '保存为图片',
                    type: 'png', // 图表保存的类型
                    lang: ['点击保存']
                },
                // 添加一个区域缩放要素
                dataZoom: {},
            }
        }
    };

    myChart.setOption(option);
});



