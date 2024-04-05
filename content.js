function main() {
  chrome.storage.sync.get("highlightColor", function (data) {
    let highlightColor = data.highlightColor || "#0000FF";

    // Set the highlight color for the selected text
    let style = document.createElement("style");
    style.innerHTML = `::selection { background-color: ${highlightColor}; }`;
    document.head.appendChild(style);
  });
}

document.addEventListener("mouseup", function () {
  main();
});

main();
