// Show modal after HTMX swaps content
document.body.addEventListener("htmx:afterSwap", (event) => {
  if (event.detail.target.classList.contains("modal")) {
    event.detail.target.classList.add("active");
  }
});

// Close modal when clicking close button
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal-close-btn")) {
    const modal = e.target.closest(".modal");
    modal.classList.remove("active");
    modal.innerHTML = ""; // remove modal content
  }
});
document.body.addEventListener("htmx:afterSwap", (event) => {
  // If new row inserted into tbody, close modal
  if (event.detail.target.tagName === "TBODY") {
    const modal = document.querySelector(".modal");
    modal.classList.remove("active");
    modal.innerHTML = "";
  }
});
