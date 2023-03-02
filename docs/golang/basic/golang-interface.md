# Go语言接口

![At last, the secrets of golang are revealed](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)
[[toc]]
## Golang 接口

### 接口的定义

在 Golang 中，接口是一种类型，它定义了一组方法集。一个类型只要实现了接口中的所有方法，就可以称之为实现了该接口。接口可以被任意类型实现，包括结构体、基本类型、函数等。

接口的定义使用关键字 `type` 和 `interface`，其基本语法如下：

```go
type interface_name interface {
    method1(args) return_type
    method2(args) return_type
    ...
}

```

其中，`interface_name` 是接口的名称，`method1`、`method2` 等是接口中定义的方法名和参数列表，`return_type` 是方法的返回值类型。

例如，定义一个接口，包含一个计算面积的方法：

```go
type Shape interface {
    Area() float64
}

```

### 接口的实现

在 Golang 中，一个类型只要实现了接口中的所有方法，就可以称之为实现了该接口。可以使用结构体来实现一个接口。例如，定义一个表示圆形的结构体，并实现 `Shape` 接口中的 `Area` 方法：

```go
type Circle struct {
    radius float64
}

func (c Circle) Area() float64 {
    return math.Pi * c.radius * c.radius
}

```

其中，`Circle` 结构体实现了 `Shape` 接口中的 `Area()` 方法。

可以使用接口类型的变量来保存实现了该接口的类型的实例。例如，定义一个函数，计算任意形状的面积：

```go
func GetArea(s Shape) float64 {
    return s.Area()
}

```

可以将 `Circle` 结构体的实例传递给 `GetArea` 函数，计算圆形的面积：

```go
c := Circle{radius: 5}
area := GetArea(c)

```

### 接口的嵌套

在 Golang 中，可以在接口中嵌套其他接口。嵌套的接口可以组成一个新的接口。

例如，定义一个表示带有名称的形状的接口，并嵌套 `Shape` 接口：

```go
type NamedShape interface {
    Shape
    Name() string
}

```

其中，`NamedShape` 接口嵌套了 `Shape` 接口，并定义了一个 `Name()` 方法。

可以使用结构体来实现 `NamedShape` 接口。例如，定义一个表示带有名称的圆形的结构体，并实现 `NamedShape` 接口：

```go
type NamedCircle struct {
    Circle
    name string
}

func (c NamedCircle) Name() string {
    return c.name
}

```

其中，`NamedCircle` 结构体嵌套了 `Circle` 结构体，并实现了 `NamedShape` 接口中的 `Name()` 方法。

### 接口的类型断言

在 Golang 中，可以使用类型断言来判断一个接口变量是否实现了指定的接口或类型。类型断言有两种形式：类型断言表达式和类型断言语句。

类型断言表达式的语法如下：

```go
value, ok := interface_variable.(interface_type)

```

其中，`interface_variable` 是接口变量，`interface_type` 是接口类型，`value` 是接口变量底层的值，`ok` 是一个布尔值，表示类型断言是否成功。

例如，判断一个 `Shape` 接口变量是否实现了 `NamedShape` 接口：

```go
var s Shape = NamedCircle{Circle{5}, "Circle"}
v, ok := s.(NamedShape)
if ok {
    fmt.Println("Name:", v.Name())
}

```

类型断言语句的语法如下：

```go
value := interface_variable.(type)

```

其中，`interface_variable` 是接口变量，`value` 是一个变量，用于保存接口变量底层的值。`type` 关键字表示该语句是一个类型断言语句。

例如，判断一个变量是否是 `int` 类型：

```go
var x interface{}
x = 3
switch v := x.(type) {
case int:
    fmt.Println("x is an int")
default:
    fmt.Printf("x is of type %T\\n", v)
}

```

## error 接口
在 Golang 中，error 接口是一个非常常见的接口，它定义了一个方法 `Error()`，用于返回一个字符串，表示错误的详细信息。如果一个函数或方法可能返回一个错误，通常会将返回值设置为 `error` 类型。

```go
type error interface {
    Error() string
}
```
以下是一个例子，演示如何使用 `error` 接口处理文件读取错误：

```go
file, err := os.Open("test.txt")
if err != nil {
    fmt.Println("Error:", err)
    return
}
defer file.Close()

// read file content
buf := make([]byte, 1024)
for {
    n, err := file.Read(buf)
    if err != nil && err != io.EOF {
        fmt.Println("Error:", err)
        break
    }
    if n == 0 {
        break
    }
    fmt.Println(string(buf[:n]))
}

```

在上面的代码中，如果打开文件时发生了错误，会输出错误信息并退出函数。如果在读取文件时发生了错误，会输出错误信息并停止读取。

除了使用 Golang 标准库提供的错误类型，还可以自定义实现 error 接口。例如，定义一个自定义的错误类型：

```go
type MyError struct {
    Msg string
}

func (e *MyError) Error() string {
    return fmt.Sprintf("MyError: %s", e.Msg)
}

```

在上面的代码中，定义了一个 `MyError` 结构体类型，实现了 `error` 接口中的 `Error()` 方法。

可以在程序中使用自定义的错误类型。例如：

```go
func DoSomething() error {
    return &MyError{Msg: "Something went wrong."}
}

func main() {
    if err := DoSomething(); err != nil {
        fmt.Println(err)
    }
}

```

在上面的代码中，`DoSomething()` 函数返回一个自定义的错误类型，`main()` 函数判断是否发生了错误并输出错误信息。
