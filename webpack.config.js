const path = require('path');
const HtmlWebpackPlugin= require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist'),
        //告诉webpack不使用箭头函数
        environment: {
            arrowFunction: false,
            const: false //兼容ie10
        }
    },
    mode:"development",
    resolve: {
     extensions:[".js",".ts"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude:/node_modules/,
                use:[
                    {
                    loader:'babel-loader',
                    options:{
                        presets:[
                            ["@babel/preset-env",{
                                "corejs":"3",
                                "useBuiltIns":"usage"
                            }]
                        ]
                    },
                    
                    },
                   'ts-loader'
                ],
               
            },
            {
                test:/\.less$/,
                use:["style-loader","css-loader"
                ,
                {
                    loader:"postcss-loader",
                    options:{
                        postcssOptions:{
                            plugins:[
                                [
                                    "postcss-preset-env",
                                    {
                                        browsers:"last 2 versions"
                                    }
                                ]]
                        }
                    }
                },
                "less-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./src/index.html'
            }
        ),
        new CleanWebpackPlugin()
    ],
    devServer:{
        port:'8000',
        open:true,
    }
}

