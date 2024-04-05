// popup.js
document.addEventListener("DOMContentLoaded", function () {
  let highlightColorInput = document.getElementById("highlightColor");
  let saveBtn = document.getElementById("saveBtn");

  // Get the saved highlight color from storage and set the color picker value
  chrome.storage.sync.get("highlightColor", function (data) {
    highlightColorInput.value = data.highlightColor || "#0000FF";
  });

  // Save the selected highlight color to storage
  saveBtn.addEventListener("click", function () {
    let highlightColor = highlightColorInput.value;
    chrome.storage.sync.set({ highlightColor: highlightColor }, function () {
      console.log("Highlight color saved:", highlightColor);
    });
  });
});
