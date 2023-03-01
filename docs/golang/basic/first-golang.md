# Go 语言第一个程序

以下是Go语言的第一个程序示例：

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

这个程序打印出一个简单的“Hello, World!”消息。这个程序由三个部分组成：

1. `package main` 指定了当前文件属于`main`包，这是一个特殊的包名，用于告诉Go编译器这个程序是可执行的。
2. `import "fmt"` 告诉Go编译器我们需要使用`fmt`包的内容。`fmt`包提供了一些格式化输出函数。
3. `func main()` 是程序的入口点。当程序运行时，它将首先运行`main`函数。

希望这个简单的例子能帮助你入门Go语言编程！

如果你已经安装好了Go语言环境，可以通过以下步骤运行上面的程序：

1. 打开命令行终端
2. 进入到存放程序的目录
3. 输入 `go run main.go` 命令，即可运行程序

