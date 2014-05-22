#npm 介紹

npm 在 Node.js v0.6.x 版本之後，就變成內建的系統之一，npm 全名為 Node.js Package Management，主要用於套件管理，這也表示當 Node.js 安裝完成之後就可以直接使用 npm 這個指令。至於 npm 有什麼強大之處，接下來慢慢介紹。

##npm 基本使用方法

Node.js 其中好用的一個部份就是因為有 npm，擁有完整管理的架構，讓套件可以被妥善管理，每個專案間的 dependency 也可以妥當的被使用，目前在 npm 上也已經有 70000 多個模組，提供開發者使用。
基於開發者不要重複自己造輪子，從 npm 上面找到適合自己的模組，就是開發者應該做的工作。

 * [npm 資料網站](https://npmjs.org/)

可以從上面的網站找到許多套件，使用方法也非常簡單，內容詳細的項目，可以參考 npm 的說明，在終端機輸入 npm ，會得到如下的訊息，

    where <command> is one of:
        add-user, adduser, apihelp, author, bin, bugs, c, cache,
        completion, config, ddp, dedupe, deprecate, docs, edit,
        explore, faq, find, find-dupes, get, help, help-search,
        home, i, info, init, install, isntall, issues, la, link,
        list, ll, ln, login, ls, outdated, owner, pack, prefix,
        prune, publish, r, rb, rebuild, remove, repo, restart, rm,
        root, run-script, s, se, search, set, show, shrinkwrap,
        star, stars, start, stop, submodule, t, tag, test, tst, un,
        uninstall, unlink, unpublish, unstar, up, update, v,
        version, view, whoami

    npm <cmd> -h     quick help on <cmd>
    npm -l           display full usage info
    npm faq          commonly asked questions
    npm help <term>  search for help on <term>
    npm help npm     involved overview

    Specify configs in the ini-formatted file:
        /Users/caesar/.npmrc
    or on the command line via: npm  --key value
    Config info can be viewed via: npm help config

如果想要知道每個項目要怎麼使用，可以輸入如下的範例

    npm [action] -h

例如

    npm tag -h

輸入上面的指令，加上 -h 的參數之後，就可以得到解釋。

    npm install

用於安裝 node module，描述如下，我們以 Express 為例，

    npm install express@3.8.0

如此就可以安裝 express 的套件。

##npm 全域安裝

npm 全域安裝指的是當此套件擁有指令模式的時候，可以使用 npm install -g ，讓模組的指令可以直接在系統上執行。

    npm install -g express@3.8.0

安裝完成之後就可以使用在系統上使用 express 這個指令。

    express test

輸入上面的指令就可以用 Express 指令產生新的專案。

    npm install iloveck101

輸入上面的指令 iloveck101 就會被安裝完成。如果是位於某個專案底下，同時 node project 中也有設定 package.json 的話，就可以直接使用，

    npm install .

如此就會去讀取 package.json 當中的 dependencies ，找到需要安裝的模組，安裝到此目錄的 node_modules 目錄當中。

    npm list

列出目前安裝的 node module 有哪些，

    // 列出目前 node moulde
    npm list

輸入如上的指令，如果沒有位於任何 node project 底下的時候，是不會顯示任何模組，這是因為 npm 會去讀取 package.json，取得相依的 package 之後，再到此目錄底下的 node_modules 底下找相關模組是否已經被安裝。

    // 列出全域安裝的 node module
    npm list -g

如果輸入上面的指令，就會得到目前使用 npm 已經安裝多少全域的模組，將會全部被列出來。

npm 另外一個強大的部份在於 [npmjs.org 網站](https://npmjs.org/) 上面的註冊、管理、上傳設定，讓自己開發的 node modules 也可以透過 npm 進行安裝，但是在這個章節，不會教導這麼多，這個部份，歡迎有興趣的人自己去找尋答案，或者到 Node.js Taiwan 社群討論。
安裝完 node.js 也了解 npm 之後，接著可以開始進行我們的第一個 node 程式，進行自己的 node.js 開發第一步。
