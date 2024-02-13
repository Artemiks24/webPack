import { ModuleOptions } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshTypeScript from "react-refresh-typescript";
import { BuildOptions } from "./types/types";
export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {

    const isDev = options.mode === 'development';

    const cssWithModule = {
        loader: "css-loader",
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            }
        },
    }


    const assetLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    }

    const svgrLoader = {
        test: /\.svg$/i,
        use: [
            {
                loader: '@svgr/webpack',
                options: {
                    icon: true
                }
            }
        ],
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            cssWithModule,
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    const tsLoader = {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [{
            loader: 'ts-loader',
            options: {
                transpileOnly: true,
                getCustomTransformers: () => ({
                    before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
                }),
            }
        }]
    }

    return [
        assetLoader,
        cssLoader,
        tsLoader,
        svgrLoader
    ]
}

function ReactRefreshTypescript() {
    throw new Error("Function not implemented.");
}
