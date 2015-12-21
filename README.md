# Component Style

React `<style>`component.

This package is [scoped](https://docs.npmjs.com/misc/scope) because it has some particular opinions baked into it. 

## Install

```sh
npm install --save @asbjornenge/react-style
```

## Use

```js
import Style   from '@asbjornenge/react-style'
import styling from './style/component.styl'

class StyledComponent extends React.Component {
    render() {
        <div>
            <Style style={styling} />
            <h1>YO</h1>
        </div>
    }
}
```

## Changelog

### 1.0.1

* Added missing `browserify` section to package.json

### 1.0.0

* Initial release :tada:

enjoy
