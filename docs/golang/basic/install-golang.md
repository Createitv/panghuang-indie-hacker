# Go语言安装

### 下载地址

Go官网下载地址：https://golang.org/dl/

Go官方镜像站（推荐）：https://golang.google.cn/dl/

#### 版本的选择

Windows平台和Mac平台推荐下载可执行文件版，Linux平台下载压缩文件版。

下图中的版本号可能并不是最新的，但总体来说安装教程是类似的。Go语言更新迭代比较快，推荐使用较新版本，体验最新特性。

![golang.org](https://typora-1300715298.cos.ap-shanghai.myqcloud.com//blogimage-20230301204224921.png)



### Windows安装

此安装实例以 `64位Win10`系统安装 `Go1.20.1可执行文件版本`为例。将上一步选好的安装包下载到本地。和其他应用软件一样安装。

### Linux下安装

如果不是要在Linux平台敲go代码就不需要在Linux平台安装Go，我们开发机上写好的go代码只需要跨平台编译（详见文章末尾的跨平台编译）好之后就可以拷贝到Linux服务器上运行了，这也是go程序跨平台易部署的优势。

我们在版本选择页面选择并下载好go1.20.1.linux-amd64.tar.gz文件：

wget https://dl.google.com/go/go1.20.1.linux-amd64.tar.gz
将下载好的文件解压到/usr/local目录下：

```bash
# 解压
tar -zxvf go1.14.1.linux-amd64.tar.gz -C /usr/local 
```

如果提示没有权限，加上sudo以root用户的身份再运行。执行完就可以在/usr/local/下看到go目录了。

配置环境变量： Linux下有两个文件可以配置环境变量，其中/etc/profile是对所有用户生效的；$HOME/.profile是对当前用户生效的，根据自己的情况自行选择一个文件打开，添加如下两行代码，保存退出。

```bash
export GOROOT=/usr/local/go
export PATH=$PATH:$GOROOT/bin
```

修改/etc/profile后要重启生效，修改$HOME/.profile后使用source命令加载$HOME/.profile文件即可生效。 检查：

```bash
~ go version
go version go1.21.1 linux/amd64
```

### Mac下安装

下载可执行文件版，直接点击下一步安装即可，默认会将go安装到/usr/local/go目录下。Mac安装Go

![Mac安装Go](https://www.liwenzhou.com/images/Go/install_go_dev/mac_install_go.png)


上一步安装过程执行完毕后，可以打开终端窗口，输入`go version`命令，查看安装的Go版本。

### GOROOT和GOPATH

GOROOT和GOPATH都是环境变量，其中GOROOT是我们安装go开发包的路径，而从Go 1.8版本开始，Go开发包在安装完成后会为GOPATH设置一个默认目录，并且在Go1.14及之后的版本中启用了Go Module模式之后，不一定非要将代码写到GOPATH目录下，所以也就不需要我们再自己配置GOPATH了，使用默认的即可。

想要查看你电脑上的GOPATH路径，只需要打开终端输入以下命令并回车：

```bash
go env
```

在终端输出的内容中找到GOPATH对应的具体路径。

## GOPROXY 设置

Go1.14版本之后，都推荐使用go mod模式来管理依赖环境了，也不再强制我们把代码必须写在GOPATH下面的src目录了，你可以在你电脑的任意位置编写go代码。（网上有些教程适用于1.11版本之前。）

默认GoPROXY配置是：GOPROXY=https://proxy.golang.org,direct，由于国内访问不到https://proxy.golang.org，所以我们需要换一个PROXY，这里推荐使用https://goproxy.io或https://goproxy.cn。

### 设置GOPROXY代理为阿里云

```bash
go env -w GOPROXY=https://mirrors.aliyun.com/goproxy/
```

### powershell指定

```bash
$env:GOPROXY = "https://mirrors.aliyun.com/goproxy/"
```

### 设置GOPROXY代理商为七牛云

```bash
go env -w GOPROXY=https://goproxy.cn,direct
```

### powershell指定

```bash
$env:GOPROXY="[https://goproxy.cn](https://goproxy.cn/)"
```

