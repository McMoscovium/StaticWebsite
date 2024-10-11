// rootPath.js

// 現在のURLのルートディレクトリを取得
var rootDir = window.location.origin;

// HTMLの要素にルートディレクトリを表示
document.getElementById('rootDirDisplay').innerText = "Root Directory: " + rootDir;
