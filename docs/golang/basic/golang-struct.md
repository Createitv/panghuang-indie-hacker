# Go语言结构体

![At last, the secrets of golang are revealed](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)
[[toc]]
## Golang 结构体

在 Golang 中，结构体是一种用户自定义类型，它可以包含一组不同类型的值。结构体可以用来表示复杂的数据结构，例如二维坐标、图形、人员等等。在 Golang 中，结构体的定义使用关键字 `type` 和 `struct`，其基本语法如下：

```go
type struct_name struct {
    field1 type1
    field2 type2
    ...
}

```

其中，`struct_name` 是结构体的名称，`field1`、`field2` 等是结构体的字段名称，`type1`、`type2` 等是字段的类型。

例如，定义一个表示二维坐标的结构体：

```go
type Point struct {
    x int
    y int
}

```

可以使用结构体字面量来创建结构体变量。例如，创建一个表示坐标 (3, 4) 的 Point 变量：

```go
p := Point{x: 3, y: 4}

```

可以使用点操作符 `.` 来访问结构体中的字段。例如，访问上文中定义的 Point 变量 `p` 的 `y` 字段：

```go
y := p.y

```

可以将结构体作为函数的参数或返回值。例如，定义一个函数，将两个 Point 变量相加：

```go
func Add(p1 Point, p2 Point) Point {
    return Point{x: p1.x + p2.x, y: p1.y + p2.y}
}

```

以上就是 Golang 中结构体的基本用法和语法。结构体是 Golang 中常用的数据结构之一，掌握结构体的使用方法对于编写高质量的 Golang 程序至关重要。

## Golang 结构体操作

### 结构体的嵌套

在 Golang 中，结构体可以嵌套其他结构体。嵌套的结构体可以直接访问外层结构体的字段。例如，定义一个表示矩形的结构体：

```go
type Rect struct {
    left   float64
    top    float64
    right  float64
    bottom float64
}

```

可以在矩形结构体中嵌套一个表示坐标的结构体：

```go
type Rect struct {
    leftTop  Point
    rightTop Point
    leftBot  Point
    rightBot Point
}

```

其中，`Point` 是上文中定义的表示二维坐标的结构体。

可以通过点操作符 `.leftTop` 等访问 `Rect` 结构体中的 `Point` 结构体的字段。

### 结构体的比较

在 Golang 中，可以使用 `==` 或 `!=` 运算符比较两个结构体是否相等。如果结构体中的所有字段都相等，则认为结构体相等。

例如，比较两个 Point 变量是否相等：

```go
p1 := Point{x: 3, y: 4}
p2 := Point{x: 3, y: 4}

if p1 == p2 {
    fmt.Println("p1 and p2 are equal")
}

```

### 结构体的方法

在 Golang 中，可以为结构体定义方法。方法是一种与特定类型关联的函数，可以访问该类型的字段。

方法的定义使用关键字 `func`，在函数名之前指定类型。例如，为 Point 结构体定义一个计算距离的方法：

```go
func (p Point) Distance(q Point) float64 {
    dx := p.x - q.x
    dy := p.y - q.y
    return math.Sqrt(float64(dx*dx + dy*dy))
}

```

其中，`p Point` 表示方法所属的类型是 `Point` 结构体，`Distance` 是方法的名称。

可以使用点操作符 `.` 调用结构体的方法。例如，计算两个 Point 变量之间的距离：

```go
p := Point{x: 3, y: 4}
q := Point{x: 0, y: 0}

d := p.Distance(q)
fmt.Println(d)

```

### 结构体的指针

在 Golang 中，可以使用指针来访问结构体中的字段。如果一个结构体变量被声明为指针类型，则可以使用 `->` 操作符来访问字段，否则需要使用 `.` 操作符。

例如，定义一个指向 Point 结构体的指针：

```go
p := &Point{x: 3, y: 4}

```

可以使用 `->` 操作符访问指向 Point 结构体的指针的 `x` 字段：

```go
x := p->x

```

### 结构体的序列化和反序列化

在 Golang 中，可以使用内置包 `encoding/json` 将结构体序列化为 JSON 格式的
字符串，或者将 JSON 格式的字符串反序列化为结构体。

例如，将一个 Point 结构体序列化为 JSON 格式的字符串：

```go
p := Point{x: 3, y: 4}
b, err := json.Marshal(p)
if err != nil {
    fmt.Println("error:", err)
}
fmt.Println(string(b))

```

可以使用 `json.Unmarshal` 函数将 JSON 格式的字符串反序列化为结构体。例如，将一个 JSON 格式的字符串反序列化为 Point 结构体：

```go
s := `{"x":3,"y":4}`
var p Point
err := json.Unmarshal([]byte(s), &p)
if err != nil {
    fmt.Println("error:", err)
}
fmt.Println(p)

```

