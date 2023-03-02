# Go语言环境变量

![At last, the secrets of golang are revealed](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blog20230301230835.png)

> 说明：本文以macOS为例来安装go环境

下载完安装包后，双击安装包，傻瓜式安装即可，macOS的go默认安装路径为:

```bash
macOS的go默认安装路径：/usr/local/go

Windows的go默认安装路径：C:/go
```

安装完成之后，配置GO环境变量。编辑.bash_profile文件，在该文件下增加以下内容（根据自己的实际情况进行配置）

```bash
1、打开.bash_profile or .zsh_profile文件
vim ~/.bash_profile
vim ~/.zsh_profile

2、在配置文件中增加以下内容（编辑完之后保存并退出）
#Seeting path for Golang（这一行是注释）
export GOROOT=/usr/local/go #go的安装路径
export PATH=$GOROOT/bin:$PATH
export GOPATH=/Users/tnt/panghuang/GolangProject #Golang的工作区文件, 使用go mod之后可以忽略工作区
export GOBIN=/Users/tnt/panghuang/GolangProject/bin #这里存放的是源代码编译后生成的可执行文件

3、使刚才编辑的.bash_profile立刻生效。执行
source ~/.bash_profile
```

执行以下命令来验证是否安装成功

```bash
查看版本信息
go version
// 输出


go version go1.21.1 darwin/amd64
```

#### 查看Go默认环境变量

```bash
go env
```

利用注释解释一下常用的几个

```bash
GO111MODULE="on" // 是否开启的go mod 模式
GOARCH="amd64" // GOARCH的值是为其编译代码的CPU架构或处理器。比如amd64、386、arm等
GOBIN="" // GOBIN用来存放我们的项目代码编译后生成的二进制文件 
GOCACHE="/Users/tnt/Library/Caches/go-build"
GOENV="/Users/tnt/Library/Application Support/go/env"
GOEXE=""
GOEXPERIMENT=""
GOFLAGS=""
GOHOSTARCH="amd64"
GOHOSTOS="darwin"
GOINSECURE=""
GOMODCACHE="/Users/tnt/go/pkg/mod"
GONOPROXY=""
GONOSUMDB=""
GOOS="darwin" //go 语言平台 例如：linux、darwin、windows、netbsd、freebsd、openbsd、solaris
GOPATH="/Users/tnt/go" // GoPath目录
GOPRIVATE=""
GOPROXY="https://goproxy.cn,direct"  // Go 下载proxy设置
GOROOT="/usr/local/Cellar/go/1.21/libexec" // GOROOT是go语言的安装目录，它的作用就是用来索引go安装目录下的资源
GOSUMDB="sum.golang.org"
GOTMPDIR=""
GOTOOLDIR="/usr/local/Cellar/go/1.21/libexec/pkg/tool/darwin_amd64"
GOVCS=""
GOVERSION="go1.21" // Go 版本信息
GCCGO="gccgo"
GOAMD64="v1"
AR="ar"
CC="clang"
CXX="clang++"
CGO_ENABLED="1"
GOMOD="/dev/null"
GOWORK=""
CGO_CFLAGS="-g -O2"
CGO_CPPFLAGS=""
CGO_CXXFLAGS="-g -O2"
CGO_FFLAGS="-g -O2"
CGO_LDFLAGS="-g -O2"
PKG_CONFIG="pkg-config"
GOGCCFLAGS="-fPIC -arch x86_64 -m64 -pthread -fno-caret-diagnostics -Qunused-arguments -fmessage-length=0 -fdebug-prefix-map=/var/folders/tl/g7dv9txs2ql62nwl63m017g40000gn/T/go-build1441073130=/tmp/go-build -gno-record-gcc-switches -fno-common"
```



