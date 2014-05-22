Linux
=====

Linux 很適合作為 Node.js 的伺服器作業系統及開發環境。安裝前，請先確認以下套件已正確安裝。

 * curl (wget) 用來下載檔案的工具
 * git 先進的版本控制工具
 * g++ GNU C++ 軟體編譯工具
 * make GNU 軟體專案建置工具

安裝指令如下，如設有權限問題，請在指令前面加上sudo

    git clone https://github.com/joyent/node.git
    cd node
    git checkout v0.10.25
    ./configure
    make
    sudo make install

##Ubuntu 指令安裝方式

使用 APT 套件管理工具是常見的方法，以下是使用社群提供的 PPA 安裝方式。

    sudo apt-get install python-software-properties
    sudo add-apt-repository ppa:chris-lea/node.js-devel
    sudo apt-get update
    sudo apt-get install nodejs

##測試

接著測試 Node.js 是否正常執行

    node -v
