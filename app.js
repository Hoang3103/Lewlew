var messages = [
    "Em chắc chưa ?",
    "Không từ chối được đâu ",
    "Nghĩ thật kĩ nha",
    "Chọn lại đi ",
    "Không được đâu đừng cố",
    "Suy nghĩ lại đi",
    "Em nhầm nút đúng k ?",
    "Nào đừng làm vậy chứ",
    "Nghĩ lại đi",
    "Đừng hối hận đấy",
];
var button = document.getElementById('yes-button');
var alertBox = document.getElementById("myAlert");
function moveButton() {
    var container = document.getElementById('container');
    var button = document.getElementById('moveButton');
    var containerRect = container.getBoundingClientRect();
    var newX = Math.random() * (containerRect.width - button.offsetWidth);
    var newY = Math.random() * (containerRect.height - button.offsetHeight);
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
    // Nút chạy quanh trang web
    var randomIndex = Math.floor(Math.random() * messages.length);
    var message = messages[randomIndex];
    // Thay đổi dòng message ngẫu nhiên trong những dòng ở trên
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
}
button.addEventListener("click", function () {
    // Hiển thị thông báo
    alertBox.style.display = "block";
});
function closeAlert() {
    alertBox.style.display = "none";
}
