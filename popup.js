// popup.js
document.addEventListener("DOMContentLoaded", function () {
  let highlightColorInput = document.getElementById("highlightColor");
  let saveBtn = document.getElementById("saveBtn");
  let resetBtn = document.getElementById("resetBtn");

  // Get the saved highlight color from storage and set the color picker value
  chrome.storage.sync.get("highlightColor", function (data) {
    highlightColorInput.value = data.highlightColor || "#073ba5";
  });

  // Save the selected highlight color to storage
  saveBtn.addEventListener("click", function () {
    let highlightColor = highlightColorInput.value;
    chrome.storage.sync.set({ highlightColor: highlightColor }, function () {
      console.log("Highlight color saved:", highlightColor);
    });
  });

  // Reset the highlight color to default
  resetBtn.addEventListener("click", function () {
    const defaultHighlightColor = "#073ba5";
    highlightColorInput.value = defaultHighlightColor;
    chrome.storage.sync.set({ highlightColor: defaultHighlightColor }, function () {
      console.log("Highlight color reset to default:", defaultHighlightColor);
    });
  });
});
