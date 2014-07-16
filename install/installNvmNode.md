# nvm 安裝 Node.js

nvm 全名為 Node.js version management, 主要就是可以透過 nvm 這個指令快速安裝，切換不同版本的 Node.js。對於 Unix 環境的開發者來說是個很棒的福音，也是很方便的操作指令，這邊我們先快速帶入安裝方式，之後章節我們會再講解 nvm 指令指南

```bash
$ git clone git://github.com/creationix/nvm.git ~/.nvm
```

輸入以下指令看看 `nvm` 使否可以使用

```bash
$ nvm help
```

如果找不到指令請參考下面的 shell 設定

以上可參考： [nvm install Node.js](http://dreamerslab.com/blog/tw/how-to-setup-a-node-js-development-environment-on-ubuntu-11-04/)

## shell 設定

如果已經可以執行了，請跳過這邊

一般情況我們要將設定寫入 `~/.bashrc` 或 `~/.bash_profile`

```bash
$ echo ". ~/.nvm/nvm.sh" >> ~/.bashrc
```

但如果不是使用 `bash` 是用的 `zsh` 或其他 shell，那請將下面這行加入你的 `rc` 檔案內

```bash
. ~/.nvm/nvm.sh
```

## 安裝、設定預設版本

```bash
$ nvm install v0.10.25
$ nvm alias default v0.10.25
```

## 測試

接著測試 Node.js 是否正常執行

```bash
$ node -v
```
