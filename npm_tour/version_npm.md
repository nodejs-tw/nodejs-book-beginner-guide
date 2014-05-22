# npm version 前綴字版本控制

npm 中主要做為 Node.js 模組管理，使用上大家應該會發現，前面都有加上一個前綴符號，主要就是為了解決模組相關版本問題，特別是 node modules 越來越多，原來在 npm 裡面早就有進行相關的版本管理。可以透過這個頁面看到詳細的描述資訊。

主要標準是以 `semver` 這個模組的標準為主，

* [semver - The semantic versioner for npm](https://www.npmjs.org/doc/misc/semver.html)

以下把常用的幾個前綴符號介紹，

## ^ 字元與版本關係

`^` 表示可以進行兼容模式，當第一個非 0 數字被符合之後，就會此此版本安裝。當可安裝版本為 `> 0.1.5` ，此時是會直接使用 0.1.5 這個版本進行安裝。

如果一開始使用非 0 數字為版本，就會變成兼容模式，會去尋找符合第一個數字的版本，其他小數字本版號視為可以兼容。

目前 `npm install node_modules --save` 會採用 `^` 這個符號。

```
^0.1.3 := >=0.1.3-0 <0.2.0-0 "Compatible with 0.1.3". 0.x.x versions are special: the first non-zero component indicates potentially breaking changes, meaning the caret operator matches any version with the same first non-zero
```

## 另外一種版本

```
^1.2.3 := >=1.2.3-0 <2.0.0-0 "Compatible with 1.2.3". When using caret operators, anything from the specified version (including prerelease) will be supported up to, but not including, the next major version (or its prereleases). 1.5.1 will satisfy ^1.2.3, while 1.2.2 and 2.0.0-beta will not.
```

## ~ 字元與版本關係

版本需要數字符合，例如底下的例子 1.2.3 是可以符合到 1.2.3-0 這個之後的下一次小改動版本, 範圍在

```
1.2.3
1.2.3-0
1.2.3-alpha
1.2.4 (不符合)
```

如果今天版本已經變成 1.2.4, 1.3.0 就會無法符合。

```
~1.2.3 := >=1.2.3-0 <1.3.0-0 "Reasonably close to 1.2.3". When using tilde operators, prerelease versions are supported as well, but a prerelease of the next significant digit will NOT be satisfactory, so 1.3.0-beta will not satisfy ~1.2.3
```

npm 版本號碼控管上其實還有蠻多資料可以參考，例如大版本號（第一個數字），以及其他版本號的參考，大家都可以多多了解一下如何進行版本更新，對於 open source 版本控管也是一門學問啊。
