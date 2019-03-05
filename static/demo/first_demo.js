// first_demo中包含了许多基础配置

// 基于准备好的dom，初始化echarts实例
// 默认有两套主题light和dart，其他主题已下载保存在theme目录中。在index.html中引入主题的js文件，然后修改init中的主题名参数，即可使用主题
var myChart = echarts.init(document.getElementById('main'), 'vintage');
// var myChart = echarts.init(document.getElementById('main'), 'light');
// var myChart = echarts.init(document.getElementById('main'), 'dark');

// 引入draggable.js，实现拖动布局。以下代码从Start到End复制即可使用。
$.when(
    $.getScript('/static/draggable.js')
).done(function () {
    draggable.init(
        $('div[_echarts_instance_]')[0],
        myChart,
        {
            width: 700,
            height: 400,
            throttle: 70
        }
    );

    // 指定图表的配置项和数据
    var option = {
        legend: {}, // 图例组件
        tooltip: {}, // 提示框组件

        dataset: {
            // 这里指定了维度名的顺序，从而可以利用默认的维度到坐标轴的映射。
            // 如果不指定 dimensions，也可以通过指定 series.encode 完成映射。
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
                { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
            ]
        },

        xAxis: {type: 'category'},
        yAxis: {},
        // 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ],

        // echarts 4之前数据只能声明在各个series中
        // option: {
        //     xAxis: {
        //         type: 'category',
        //         data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
        //     },
        //     yAxis: {}
        //     series: [
        //         {
        //             type: 'bar',
        //             name: '2015',
        //             data: [89.3, 92.1, 94.4, 85.4]
        //         },
        //         {
        //             type: 'bar',
        //             name: '2016',
        //             data: [95.8, 89.4, 91.2, 76.9]
        //         },
        //         {
        //             type: 'bar',
        //             name: '2017',
        //             data: [97.7, 83.1, 92.5, 78.1]
        //         }
        //     ]
        // },

        // 文字颜色
        // textStyle: {
        //     color: 'rgba(255, 255, 255, 0.3)'
        // },

        // 背景颜色
        // backgroundColor: '#2c343c',

        // toolbox中包括了一个下载图片的设置要素
        toolbox: {
            show: true,
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

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

});