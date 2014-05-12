Windows
=======

Node.js 在 v0.6.0 版本之後開始正式支援 Microsoft Windows native，直接使用 node.exe 就可以執行程式，支援性完全與 linux 相同，更棒的部份就是不需經過編譯，經過下載之後，簡單設定完成，立即開發node 程式。

`下載node.js 安裝檔案 <http://nodejs.org/#download>`

##測試

如此完成windows native node.exe 安裝，接著可以進入 command line 執行測試。在 command line 輸指令如下

    node -v


##路徑說明

Windows 透過預設套件安裝方式，指令 node.exe，npm.exe 會放至於

    c:/program files/node/

至於其他透過 `npm` 下載的指令，預設會安裝到

    $USER/appData/node_modules/

這個路徑底下，如果對於路徑沒有設定完成的使用者，可以將這些路徑設定到 `HOME_PATH` 裡面。
