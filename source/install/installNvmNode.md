#nvm 安裝 Node.js

nvm 全名為 Node.js version management, 主要就是可以透過 nvm 這個指令快速安裝，切換不同版本的 Node.js。對於 Unix 環境的開發者來說是個很棒的福音，也是很方便的操作指令，這邊我們先快速帶入安裝方式，之後章節我們會再講解 nvm 指令指南

    git clone git://github.com/creationix/nvm.git ~/.nvm
    echo ". ~/.nvm/nvm.sh" >> ~/.bashrc
    nvm install v0.10.25
    nvm alias default v0.10.25

以上可參考： [nvm install Node.js](http://dreamerslab.com/blog/tw/how-to-setup-a-node-js-development-environment-on-ubuntu-11-04/)

##測試

接著測試 Node.js 是否正常執行

    node -v
