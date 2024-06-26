// popup.js
document.addEventListener("DOMContentLoaded", function () {
  let highlightColorInput = document.getElementById("highlightColor");
  let saveBtn = document.getElementById("saveBtn");
  let resetBtn = document.getElementById("resetBtn");
  let tansparentBtn = document.getElementById("tansparentBtn");

  // Get the saved highlight color from storage and set the color picker value
  chrome.storage.sync.get("highlightColor", function (data) {
    if (data.highlightColor === "-1" || data.highlightColor === "transparent") {
      highlightColorInput.value = "#000000"; // Black color
    } else {
      highlightColorInput.value = data.highlightColor || "#073ba5";
    }
  });

  // Save the selected highlight color to storage
  saveBtn.addEventListener("click", function () {
    let highlightColor = highlightColorInput.value;
    chrome.storage.sync.set({ highlightColor: highlightColor }, function () {
      console.log("Highlight color saved:", highlightColor);
    });
  });

  // Set the highlight color to transparent and store -1
  tansparentBtn.addEventListener("click", function () {
    const transparentColor = "transparent";
    highlightColorInput.value = transparentColor;
    chrome.storage.sync.set({ highlightColor: "transparent" }, function () {
      console.log("Highlight color set to transparent");
    });
  });

  // Reset the highlight color to default and store -1
  resetBtn.addEventListener("click", function () {
    const defaultHighlightColor = "#000000";
    highlightColorInput.value = defaultHighlightColor;
    chrome.storage.sync.set({ highlightColor: "-1" }, function () {
      console.log("Highlight color reset to default:", defaultHighlightColor);
    });
  });
});
