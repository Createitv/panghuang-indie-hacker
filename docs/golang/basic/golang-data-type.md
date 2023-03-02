# Go语言数据类型

![At last, the secrets of golang are revealed](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)

[[toc]]

Go是一种静态类型的编程语言，它提供了一组基本数据类型来支持变量的定义和操作。在Go中，基础数据类型被称为预定义类型，这些类型是预先定义好的，并且可以直接用于变量的声明和初始化。下面是Golang的基础数据类型：

## 整数类型

Golang提供了四种整数类型：int8、int16、int32和int64，它们分别占用8、16、32和64位，有符号整数类型。此外，Golang还提供了uint8、uint16、uint32和uint64，它们是无符号整数类型，也分别占用8、16、32和64位。除此之外，还有一个int类型，它的大小根据所在的计算机硬件平台而定。

|  类型  |                             描述                             |
| :----: | :----------------------------------------------------------: |
| uint8  |                  无符号 8位整型 (0 到 255)                   |
| uint16 |                 无符号 16位整型 (0 到 65535)                 |
| uint32 |              无符号 32位整型 (0 到 4294967295)               |
| uint64 |         无符号 64位整型 (0 到 18446744073709551615)          |
|  int8  |                 有符号 8位整型 (-128 到 127)                 |
| int16  |              有符号 16位整型 (-32768 到 32767)               |
| int32  |         有符号 32位整型 (-2147483648 到 2147483647)          |
| int64  | 有符号 64位整型 (-9223372036854775808 到 9223372036854775807) |

```go
package main
 
import "fmt"
 
func main(){
	// 十进制
	var a int = 10
	fmt.Printf("%d \n", a)  // 10
	fmt.Printf("%b \n", a)  // 1010  占位符%b表示二进制
 
	// 八进制  以0开头
	var b int = 077
	fmt.Printf("%o \n", b)  // 77
 
	// 十六进制  以0x开头
	var c int = 0xff
	fmt.Printf("%x \n", c)  // ff
	fmt.Printf("%X \n", c)  // FF
}

```



::: tip 特殊整型

|  类型   |                          描述                          |
| :-----: | :----------------------------------------------------: |
|  uint   | 32位操作系统上就是`uint32`，64位操作系统上就是`uint64` |
|   int   |  32位操作系统上就是`int32`，64位操作系统上就是`int64`  |
| uintptr |              无符号整型，用于存放一个指针              |

**注意：** 在使用`int`和 `uint`类型时，不能假定它是32位或64位的整型，而是考虑`int`和`uint`可能在不同平台上的差异。

:::

## 浮点类型

Golang提供了两种浮点类型：float32和float64。float32占用32位，float64占用64位。通常情况下，建议使用float64，因为它提供了更高的精度。

```go
package main
import (
        "fmt"
        "math"
)
func main() {
        fmt.Printf("%f\n", math.Pi)
        fmt.Printf("%.4f\n", math.Pi)
}
```

## 复数类型

Golang提供了两种复数类型：complex64和complex128。它们分别由两个浮点类型组成，complex64由两个float32类型组成，complex128由两个float64类型组成。

```go
var c1 complex64
c1 = 1 + 2i
var c2 complex128
c2 = 2 + 3i
fmt.Println(c1)
fmt.Println(c2)
```

## 布尔类型

Golang提供了bool类型，它只有两个取值：true和false。

:::warning

1. 布尔类型变量的默认值为`false`。
2. Go 语言中不允许将整型强制转换为布尔型.
3. 布尔型无法参与数值运算，也无法与其他类型进行转换。

:::

## 字符串类型

Golang提供了string类型，它用于表示字符串。字符串是由一个或多个字符组成的序列，每个字符占用一个字节。可以使用+运算符将两个字符串连接起来。

```go
s1 := "hello"
s2 := "你好"
fmt.Println(s1+s2)
```

## byte和rune类型

在Golang中，byte类型用于表示ASCII字符集中的单个字符，它实际上是uint8类型的别名。而rune类型则用于表示Unicode字符集中的单个字符，它实际上是int32类型的别名。

```go

package main

import "fmt"

func main() {
    // byte类型示例
    var b byte = 97
    fmt.Printf("%c\\n", b) // 输出：a

    // rune类型示例
    var r rune = '中'
    fmt.Printf("%c\\n", r) // 输出：中
}
```

## 派生类型

Golang还提供了一些派生类型，包括指针类型、数组类型、切片类型、字典类型、通道类型和结构体类型。这些类型可以根据基础数据类型进行定义和初始化。

### 指针类型

指针是一个变量，其值为另一个变量的地址。Golang提供了指针类型来支持指针变量的声明和使用。指针变量可以通过&运算符获取变量的地址，可以通过*运算符获取指针变量指向的变量的值。

```go
var x int = 1
var p *int = &x // p指向变量x的地址
fmt.Println(*p) // 通过指针变量p获取x的值，输出1
```

### 数组类型

数组是一组具有相同类型的元素的集合。Golang提供了数组类型来支持数组的声明和使用。数组可以通过下标访问元素，下标从0开始，最大下标为数组长度减1。数组类型声明了长度就不会更改。

```go
var a [5]int // 定义一个长度为5的int类型数组
a[0] = 1 // 给数组下标为0的元素赋值为1
a[1] = 2 // 给数组下标为1的元素赋值为2
...
a[4] = 5 // 给数组下标为4的元素赋值为5
```

### 切片类型

切片是一个动态数组，可以根据需要动态地增加或减少元素。Golang提供了切片类型来支持切片的声明和使用。切片可以通过下标访问元素，下标从0开始，最大下标为切片长度减1。

```go
var s []int // 定义一个int类型的切片
s = append(s, 1) // 在切片末尾添加元素1
s = append(s, 2, 3, 4) // 在切片末尾添加元素2, 3和4

```

### 字典类型

字典是一组键值对的集合。Golang提供了字典类型来支持字典的声明和使用。字典可以根据键访问值，键可以是任何类型，值也可以是任何类型。

```go
// 字典类型
package main

import "fmt"

func main() {
    // 声明一个键为string类型，值为int类型的字典
    var numbers map[string]int
    // 创建一个字典
    numbers = make(map[string]int)

    // 添加键值对
    numbers["one"] = 1
    numbers["two"] = 2
    numbers["three"] = 3

    // 访问键值对
    fmt.Println(numbers["one"])
    fmt.Println(numbers["two"])
    fmt.Println(numbers["three"])

    // 删除键值对
    delete(numbers, "two")

    // 循环遍历键值对
    for key, value := range numbers {
        fmt.Println(key, value)
    }
}
```

### 通道类型

通道是用于在多个goroutine之间进行通信的数据结构。Golang提供了通道类型来支持通道的声明和使用。通道可以用于发送和接收值，可以是任何类型的值。

```go
// 通道类型
package main

import "fmt"

func main() {
    // 声明一个string类型的通道
    messages := make(chan string)

    // 启动一个goroutine，向通道中发送一个值
    go func() { messages <- "hello" }()

    // 从通道中接收值，并输出
    msg := <-messages
    fmt.Println(msg)
}
```

### 结构体类型

结构体是一组字段的集合，每个字段都有一个名称和一个类型。Golang提供了结构体类型来支持结构体的声明和使用。结构体可以通过字段访问元素。

```go
// 结构体类型
package main

import "fmt"

// 定义一个person结构体类型
type person struct {
    name string
    age  int
}

func main() {
    // 声明一个person类型的变量
    var p1 person

    // 初始化person类型的变量
    p1.name = "Alice"
    p1.age = 25

    // 输出person类型的变量
    fmt.Println(p1)

    // 声明并初始化一个匿名person类型的变量
    p2 := struct {
        name string
        age  int
    }{
        name: "Bob",
        age:  30,
    }

    // 输出匿名person类型的变量
    fmt.Println(p2)
}

```

