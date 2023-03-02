# Golang基础语法

![Golang基础语法](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)

在Golang中仅仅只有23个关键字，相比较其他编程语言少了很多。所以`Golang`不仅是一门性能强悍的语言还是一门极易上手的语言。

- break: 跳出循环，switch或select语句
- case: switch语句的分支条件
- chan: 用于通信的管道
- const: 常量声明
- continue: 结束本次循环，继续执行下一次循环
- default: switch语句的默认情况
- defer: 延迟执行语句
- else: if语句中条件不成立时执行的语句
- fallthrough: switch语句的贯穿效果
- for: 循环语句
- func: 函数声明
- go: 开启一个新的goroutine
- goto: 跳转到指定的标签
- if: 条件语句
- import: 导入包
- interface: 接口类型声明
- map: 映射类型声明
- package: 包声明
- range: 循环迭代器
- return: 函数返回值
- select: 多路复用通信
- struct: 结构体类型声明
- switch: 多路分支语句
- type: 类型声明
- var: 变量声明

以上这些关键字在Golang中有特殊的用途，不能被用于其他用途。在编写代码时，请注意不要将这些关键字作为自定义标识符。

## 变量声明

在Go中，变量声明需要指定变量类型，可以使用var关键字进行声明。例如：

```go
var a int
var b string
var c bool
```

也可以在声明时初始化变量：

```go
var a int = 10
var b string = "hello world"
var c bool = true
```

另外，Go还提供了短变量声明语法，可以在不指定变量类型的情况下声明和初始化变量：

```go
a := 10
b := "hello world"
c := true
```

## 函数声明

在Go中，函数使用func关键字进行声明，函数可以有多个参数和返回值。例如：

```go
func add(a, b int) int {
    return a + b
}

func swap(a, b string) (string, string) {
    return b, a
}
```

## 控制语句

Go中的控制语句与其他语言类似，包括if、for、switch等。

if语句示例：

```go
if x > 0 {
    fmt.Println("positive")
} else if x == 0 {
    fmt.Println("zero")
} else {
    fmt.Println("negative")
}
```

for语句示例：

```go
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
```

switch语句示例：

```go
switch os := runtime.GOOS; os {
case "darwin":
    fmt.Println("OS X.")
case "linux":
    fmt.Println("Linux.")
default:
    fmt.Printf("%s.", os)
}
```

## 结构体和方法

Go中的结构体和方法是非常重要的概念，可以用于实现面向对象编程。

结构体示例：

```go
type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{"Bob", 20}
    fmt.Println(p.Name, p.Age)
}
```

方法示例：

```go
type Person struct {
    Name string
    Age  int
}

func (p Person) sayHello() {
    fmt.Printf("Hello, my name is %s, I am %d years old.", p.Name, p.Age)
}

func main() {
    p := Person{"Bob", 20}
    p.sayHello()
}
```

## 并发编程

Go语言天生支持并发编程，使用goroutine可以轻松创建并发程序。例如：

```go
func sayHello() {
    fmt.Println("Hello world.")
}

func main() {
    go sayHello()
}
```

以上是基本的Golang语法和代码示例，希望能够帮助初学者快速入门。

## 指针

在Go语言中，指针是一种非常重要的概念，可以用于在函数间传递变量的引用，而不是变量的拷贝。例如：

```go
func swap(a, b *int) {
    tmp := *a
    *a = *b
    *b = tmp
}

func main() {
    x, y := 1, 2
    swap(&x, &y)
    fmt.Println(x, y)
}
```

## 包管理

Go语言支持使用包来组织代码，每个包可以包含多个文件，方便代码管理和复用。在使用其他人编写的包之前，需要先将其下载并安装到本地。例如：

```go
go get github.com/gin-gonic/gin
```

## 错误处理

在Go语言中，错误处理非常重要，可以使用error类型来表示错误。例如：

```go
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println(result)
    }
}
```

## 测试

Go语言提供了内置的测试框架，可以用于编写和运行单元测试和性能测试。例如：

```go
func TestAdd(t *testing.T) {
    result := add(1, 2)
    if result != 3 {
        t.Errorf("add(1, 2) = %d; want 3", result)
    }
}

func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        add(1, 2)
    }
}
```

## 总结

本文介绍了Golang的基本语法和代码示例，包括变量声明、函数声明、控制语句、结构体、方法、并发编程、指针、包管理、错误处理和测试。希望这些内容能够帮助你更好地理解和使用Go语言。
