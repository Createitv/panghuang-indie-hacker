# Golang 函数

Golang 是一门支持函数式编程的语言，函数是 Golang 中的一等公民，可以像其他类型的值一样被传递和使用。

[[toc]]

## 函数的定义

Golang 中的函数定义使用关键字 `func`，其基本语法如下：

```go
func function_name( [parameter list] ) [return_types] {
   函数体
}
```

其中，`parameter list` 是参数列表，可以包含零个或多个参数；`return_types` 是返回值列表，也可以包含零个或多个返回值。

例如，定义一个接受两个 int 类型参数并返回它们之和的函数：

```go
func add(x int, y int) int {
   return x + y
}
```

也可以简写为：

```go
func add(x, y int) int {
   return x + y
}
```

## 函数的调用

Golang 中的函数调用与其他语言类似，使用函数名和实参列表来调用函数。例如，调用上文定义的 `add` 函数：

```go
sum := add(1, 2)
```

## 匿名函数

Golang 中支持匿名函数的定义和使用，可以通过将函数赋值给变量或作为参数传递给其他函数来使用。例如：

```go
func main() {
   // 将匿名函数赋值给变量
   add := func(x, y int) int {
      return x + y
   }

   // 调用匿名函数
   sum := add(1, 2)
}
```

以上就是 Golang 中函数的基本用法和语法。

## 函数的参数传递

Golang 中函数的参数传递有值传递和引用传递两种方式。

值传递是将变量的值复制一份传递给函数，因此在函数内部修改参数的值并不会影响到原始变量的值。例如：

```go
func double(x int) {
   x = x * 2
}

func main() {
   num := 10
   double(num)
   fmt.Println(num) // 输出 10
}
```

引用传递是将变量的地址传递给函数，在函数内部修改参数的值会影响到原始变量的值。例如：

```go
func double(x *int) {
   *x = *x * 2
}

func main() {
   num := 10
   double(&num)
   fmt.Println(num) // 输出 20
}
```

## 多返回值

Golang 中的函数支持返回多个值，只需要在函数定义时指定多个返回值类型即可。例如：

```go
func swap(x, y int) (int, int) {
   return y, x
}

func main() {
   a, b := swap(1, 2)
   fmt.Println(a, b) // 输出 2 1
}
```

## 延迟函数调用

Golang 中的 `defer` 关键字可以用于延迟函数的调用，即在函数返回前执行某个函数。例如：

```go
func main() {
   defer fmt.Println("world")

   fmt.Println("hello")
}
```

以上代码会先输出 "hello"，再输出 "world"。

## 函数作为参数和返回值

Golang 中的函数可以作为参数传递和返回值使用，这使得函数式编程变得更加方便。例如：

```go
func apply(f func(int) int, x int) int {
   return f(x)
}

func addOne(x int) int {
   return x + 1
}

func main() {
   result := apply(addOne, 1)
   fmt.Println(result) // 输出 2
}
```

以上代码定义了一个 `apply` 函数，它接受一个函数和一个 int 类型的参数，并返回函数对参数的计算结果。在 `main` 函数中，将 `addOne` 函数和参数 `1` 传递给 `apply` 函数，得到结果 `2`。

