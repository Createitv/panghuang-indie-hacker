# 基本语法

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: details Click me to view the code
```js
console.log('Hello, VitePress!')
```
:::


```js{1-3}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Highlighted!'  // [!code  hl]
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code  focus]
    }
  }
}
```

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code  --]
      msg: 'Added' // [!code  ++]
    }
  }
}
```

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
