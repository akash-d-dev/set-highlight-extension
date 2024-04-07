function main() {
  chrome.storage.sync.get("highlightColor", function (data) {
    let highlightColor = data.highlightColor;

    if (highlightColor !== "-1") {
      let style = document.createElement("style");
      style.innerHTML = `::selection { background-color: ${highlightColor}; }`;
      document.head.appendChild(style);
    }
  });
}

document.addEventListener("mouseup", function () {
  main();
});

main();
