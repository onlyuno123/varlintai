const messages = [
    "Em chắc chứ!!!!!🤔",
    "Thật không????😕",
    "Có chắc chắn chưa!!!!",
    "Shawty please...😭😭",
    "Hãy suy nghĩ lại đii!",
    "Nếu em nói không, anh sẽ rất buồn....🙁",
    "Cực kỳ buồn",
    "Đau lòng....💔",
    "Được rồi, anh sẽ không nói nữa....",
    "Đùa thôi, nói đồng ý đi mà ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
