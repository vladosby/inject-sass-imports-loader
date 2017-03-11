[![npm][npm]][npm-url]
[![deps][deps]][deps-url]

# Inject common scss import in files for Webpack

<h2 align="center">Install</h2>

```bash
npm install inject-sass-imports-loader --save-dev
```

<h2 align="center">Configuration</h2>
Beforehand, need to configure alias to folder where the files, that need to include, are located.
For example: 
```javascript
    alias: {
        styles: __dirname + '/src/app/styles'
    }
```
Add configuration object to `module.loaders` in the end of loaders for scss.

```javascript
    {
        test: /\.scss$/,
        use: ['to-string-loader', 'css-loader', 'sass-loader', 'postscss-loader?parser=postcss-scss',
            {
                loader: 'inject-sass-imports-loader',
                options: {
                    imports: ['~styles/styles']
                }
            }]
    }
```

<h2 align="center">Options</h2>

#### `imports: [...string]`
Adds a specified imports in every scss file

warning: Must be specified

example: ```javascript imports: ['~styles/styles', '~styles2/style2']  ```

[npm]: https://img.shields.io/npm/v/inject-sass-imports-loader.svg
[npm-url]: https://npmjs.com/package/inject-sass-imports-loader

[deps]: https://david-dm.org/vladosby/inject-sass-imports-loader.svg
[deps-url]: https://david-dm.org/vladosby/inject-sass-imports-loader

