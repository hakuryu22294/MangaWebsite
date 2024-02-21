export default function Message(message, type) {
  const messageElement = document.createElement("div");
  messageElement.id = "message";
  messageElement.className = `alert alert-${type}`;
  messageElement.style.display = "none";
  messageElement.innerText = message;

  document.body.appendChild(messageElement);

  function showMessage() {
    messageElement.style.display = "block";
  }
  function hideMessage() {
    setTimeout(function () {
      messageElement.style.display = "none";
    }, 3000);
  }
  showMessage();
  hideMessage();

  document.addEventListener("DOMContentLoaded", function () {
    Message();
  });
}
