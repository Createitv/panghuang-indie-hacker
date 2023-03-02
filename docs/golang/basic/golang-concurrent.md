# Go 语言并发

![At last, the secrets of golang are revealed](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)
[[toc]]

## Go 语言并发

在 Golang 中，使用 `goroutine` 实现并发非常方便。`goroutine` 是一种非常轻量级的线程，可以在单个程序中同时运行多个 `goroutine`。使用 `goroutine` 可以在不增加额外开销的情况下实现并发。以下是一个例子，演示如何使用 `goroutine` 实现并发：

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    go func() {
        for i := 0; i < 10; i++ {
            fmt.Println("goroutine:", i)
            time.Sleep(time.Millisecond * 100)
        }
    }()

    for i := 0; i < 10; i++ {
        fmt.Println("main:", i)
        time.Sleep(time.Millisecond * 100)
    }
}

```

在上面的代码中，我们使用 `go` 关键字启动一个新的 `goroutine`。在 `goroutine` 中打印 `goroutine` 和计数器的值，并使用 `time.Sleep()` 函数模拟一些处理时间。在主函数中也打印计数器的值，并模拟一些处理时间。可以看到，在单个程序中同时运行多个 `goroutine` 非常容易，而且由于 `goroutine` 的轻量级特性，创建和销毁 `goroutine` 的开销非常小。

除了 `goroutine`，Golang 还提供了一些其他的并发原语，例如通道（channel）、互斥锁（mutex）和条件变量（condition variable）。这些并发原语可以帮助开发者更加方便地实现并发。以下是一个例子，演示如何使用通道实现并发：

```go
package main

import (
    "fmt"
    "time"
)

func main() {
    ch := make(chan int)

    go func() {
        for i := 0; i < 10; i++ {
            ch <- i
            time.Sleep(time.Millisecond * 100)
        }
    }()

    for i := 0; i < 10; i++ {
        fmt.Println(<-ch)
    }
}

```

在上面的代码中，我们使用 `make()` 函数创建了一个通道。在另一个 `goroutine` 中，我们循环将计数器的值发送到通道中，并使用 `time.Sleep()` 函数模拟一些处理时间。在主函数中，我们循环从通道中读取数据并输出。可以看到，使用通道实现并发非常方便，而且通道的使用方式非常直观。

除了并发原语之外，Golang 还提供了一些标准库函数，可以帮助我们更加方便地实现并发。例如，`sync.WaitGroup` 类型可以帮助我们等待一组 `goroutine` 的完成。以下是一个例子，演示如何使用 `sync.WaitGroup` 实现并发：

```go
package main

import (
    "fmt"
    "sync"
    "time"
)

func main() {
    var wg sync.WaitGroup

    for i := 0; i < 10; i++ {
        wg.Add(1)
        go func(i int) {
            defer wg.Done()
            fmt.Println("goroutine:", i)
            time.Sleep(time.Millisecond * 100)
        }(i)
    }

    wg.Wait()
    fmt.Println("all goroutines finished")
}

```

## Go 语言并发HTTP举例

以下是一个例子，演示如何使用 Golang 的并发特性处理 HTTP 请求：

```go
package main

import (
    "fmt"
    "net/http"
    "sync"
)

func main() {
    urls := []string{
        "<https://www.google.com>",
        "<https://www.baidu.com>",
        "<https://www.yahoo.com>",
        "<https://www.microsoft.com>",
    }

    var wg sync.WaitGroup
    for _, url := range urls {
        wg.Add(1)
        go func(url string) {
            defer wg.Done()
            resp, err := http.Get(url)
            if err != nil {
                fmt.Printf("%s failed: %s\\n", url, err)
                return
            }
            fmt.Printf("%s status: %s\\n", url, resp.Status)
        }(url)
    }

    wg.Wait()
}

```

在上面的代码中，我们定义了一个 URL 列表，并在循环中启动了一组 `goroutine`，每个 `goroutine` 都会向指定的 URL 发送 HTTP 请求，并打印响应的状态码。在主函数中，我们使用 `sync.WaitGroup` 类型等待所有 `goroutine` 结束。

使用并发可以大大提高程序的性能和响应能力，但需要注意避免并发安全问题。
