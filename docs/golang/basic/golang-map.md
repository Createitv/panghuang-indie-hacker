# Go语言Map类型

![At last, the secrets of golang are revealed](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)
[[toc]]
![Go映射类型](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230302155845.png)

map（映射）是存储一系列无序的key/value对，通过key来对value进行操作（增、删、改、查）。
映射的key只能为可使用==运算符的值类型（字符串、数字、布尔、数组），value可以为任意类型


## 概述
map的设计也被称为The dictionary problem，它的任务是设计一种数据结构用来维护一个集合的数据，并且可以同时对集合进行增删查改的操作

Go里的map用于存放key/value对，在其它地方常称为hash、dictionary、关联数组，这几种称呼都是对同一种数据结构的不同称呼，它们都用于将key经过hash函数处理，然后映射到value，实现一一对应的关系

映射是存储一系列无序的key/value对，通过key来对value进行操作（增、删、改、查）

## Golang 映射

在 Golang 中，映射是一种无序的键值对集合。每个键必须是唯一的，但值可以重复。映射是一种引用类型，可以使用 `make` 函数来创建。

### 映射的定义

Golang 中的映射定义使用关键字 `var` 和 `map`，其基本语法如下：

```go
var map_name map[key_type]value_type
```

其中，`map_name` 是映射的名称，`key_type` 是键的类型，`value_type` 是值的类型。

例如，定义一个存储字符串类型值的映射：

```go
var m map[string]string
```

可以使用一个初始化列表来初始化映射：

```go
var m = map[string]string{
    "name":  "Alice",
    "email": "alice@example.com",
}
```

### 访问映射中的元素

Golang 中可以使用下标操作符 `[]` 来访问映射中的元素。例如，访问上文中定义的映射 `m` 中的 "name" 元素：

```go
x := m["name"]
```

如果映射中不存在指定的键，则返回该值类型的零值。例如，访问上文中定义的映射 `m` 中的 "age" 元素：

```go
x := m["age"] // x 是空字符串
```

### 映射的遍历

Golang 中可以使用 `range` 关键字来遍历映射中的键值对。例如，遍历上文中定义的映射 `m`：

```go
for k, v := range m {
    fmt.Printf("%s: %s\\\\\\\\n", k, v)
}
```

### 向映射中添加元素

Golang 中可以使用下标操作符 `[]` 向映射中添加或更新元素。例如，向上文中定义的映射 `m` 中添加一个元素：

```go
m["age"] = "30"
```

### 从映射中删除元素

Golang 中可以使用 `delete` 函数从映射中删除指定的键值对。例如，从上文中定义的映射 `m` 中删除 "email" 元素：

```go
delete(m, "email")
```

### 判断映射中是否存在指定的键

Golang 中可以使用下标操作符 `[]` 来判断映射中是否存在指定的键。例如，判断上文中定义的映射 `m` 中是否存在 "email" 键：

```go
if _, ok := m["email"]; ok {
    fmt.Println("email exists")
}
```

### 映射的长度

Golang 中可以使用内置函数 `len` 来获取映射中键值对的数量。例如，获取上文中定义的映射 `m` 中键值对的数量：

```go
l := len(m)
```

以上就是 Golang 中映射的基本用法和语法。映射是 Golang 中常用的数据结构之一，掌握映射的使用方法对于编写高质量的 Golang 程序至关重要。

## Golang 映射操作

### 映射的排序

Golang 中的映射是无序的，不能直接排序。不过可以将映射中的键值对拷贝到一个切片中，然后对切片进行排序。

例如，将一个映射中的键值对按键排序：

```go
m := map[string]int{
    "Alice": 30,
    "Bob":   25,
    "Eve":   42,
}

keys := make([]string, 0, len(m))
for k := range m {
    keys = append(keys, k)
}

sort.Strings(keys)

for _, k := range keys {
    fmt.Println(k, m[k])
}
```

### 映射的合并

Golang 中可以使用 `range` 关键字和下标操作符 `[]` 将一个映射中的键值对合并到另一个映射中。例如，将一个映射中的键值对合并到另一个映射中：

```go
m1 := map[string]string{
    "name":  "Alice",
    "email": "alice@example.com",
}

m2 := map[string]string{
    "name": "Bob",
    "age":  "25",
}

for k, v := range m2 {
    m1[k] = v
}
```

### 映射的过滤

Golang 中可以使用 `range` 关键字和下标操作符 `[]` 将一个映射中符合条件的键值对复制到另一个映射中。例如，将一个映射中年龄大于 30 的键值对复制到另一个映射中：

```go
m := map[string]int{
    "Alice": 30,
    "Bob":   25,
    "Eve":   42,
}

m2 := make(map[string]int)

for k, v := range m {
    if v > 30 {
        m2[k] = v
    }
}

```
