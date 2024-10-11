var tempolaryProtocol = window.location.protocol;


if (tempolaryProtocol === "file:") {
  document.title = "（確認用）令和最新版";
} else if (tempolaryProtocol === "http:" || tempolaryProtocol === "https:") {
  document.title = "令和最新版";
} else {
  document.title = "（プロトコル不明）令和最新版";
}