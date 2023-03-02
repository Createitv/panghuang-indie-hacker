# Go语言流程控制

![At last, the secrets of golang are revealed](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)

在Go语言中，流程控制有三种基本结构：条件语句、循环语句和跳转语句。下面将通过代码演示这三种语句的使用。

## 条件语句

条件语句使用关键字`if`，可以根据条件执行不同的语句块。示例代码如下：

```go
package main

import "fmt"

func main() {
    num := 10
    if num > 0 {
        fmt.Println("num是正数")
    } else if num < 0 {
        fmt.Println("num是负数")
    } else {
        fmt.Println("num是0")
    }
}
```

输出结果为：

```
num是正数
```

## 循环语句

循环语句使用关键字`for`，可以重复执行一段代码块。Go语言中只有一种循环结构，就是`for`循环。示例代码如下：

```go
package main

import "fmt"

func main() {
    sum := 0
    for i := 1; i <= 100; i++ {
        sum += i
    }
    fmt.Println("1到100的和为：", sum)
}
```

输出结果为：

```
1到100的和为： 5050
```

## 跳转语句

跳转语句包括`break`、`continue`和`goto`三种。`break`语句可以用于跳出循环，`continue`语句可以用于跳过循环中的某次迭代，`goto`语句可以无条件地转移到函数内的另一个标签。示例代码如下：

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        if i == 5 {
            break
        }
        if i%2 == 0 {
            continue
        }
        fmt.Println(i)
    }

    goto FLAG
    fmt.Println("这句话不会被执行")
FLAG:
    fmt.Println("跳转到这里了")
}
```

输出结果为：

```
1
3
7
9
跳转到这里了
```

## Switch-Case

在Go语言中，还有一种流程控制语句是switch语句，可以根据不同的条件执行不同的代码块。示例代码如下：

```go
package main

import "fmt"

func main() {
    day := "周一"
    switch day {
    case "周一":
        fmt.Println("今天是周一")
    case "周二":
        fmt.Println("今天是周二")
    case "周三":
        fmt.Println("今天是周三")
    case "周四":
        fmt.Println("今天是周四")
    case "周五":
        fmt.Println("今天是周五")
    default:
        fmt.Println("今天是周末")
    }
}
```

输出结果为：

```bash
今天是周一
```

