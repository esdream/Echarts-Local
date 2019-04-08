var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();

$.get('/static/data/primacy_graph.json', function (json_data) {

    myChart.hideLoading();

    var data = JSON.parse(json_data);

    // var graph = echarts.dataTool.gexf.parse(xml);
    // var categories = [];
    // for (var i = 0; i < 9; i++) {
    //     categories[i] = {
    //         name: '类目' + i
    //     };
    // }
    // graph.nodes.forEach(function (node) {
    //     node.itemStyle = null;
    //     node.value = node.symbolSize;
    //     node.symbolSize /= 1.5;
    //     node.label = {
    //         normal: {
    //             show: node.symbolSize > 10
    //         }
    //     };
    //     node.category = node.attributes.modularity_class;
    // });

    option = {
        // title: {
        //     text: 'Les Miserables',
        //     subtext: 'Circular layout',
        //     top: 'bottom',
        //     left: 'right'
        // },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: data.categories.map(function (a) {
                return a.name;
            })
        }],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                // name: 'Les Miserables',
                type: 'graph',
                layout: 'circular',
                circular: {
                    rotateLabel: true
                },
                data: data.nodes,
                links: data.links,
                categories: data.categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right',
                        formatter: '{b}: {c}'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'source',
                        curveness: 0.3
                    }
                }
            }
        ],
        // toolbox中包括了一个下载图片的设置要素
        toolbox: {
            show: true,
            feature: {
                // 添加一个保存图表的要素
                saveAsImage: {
                    pixelRatio: 2, // 分辨率，默认为1，与容器一致
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