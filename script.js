document.addEventListener("DOMContentLoaded", function () {
    // 创建日历
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    let calendarHTML = '<tr>';

    for (let day of days) {
        calendarHTML += `<th>${day}</th>`;
    }

    for (let i = 0; i < 5; i++) {
        calendarHTML += '<tr>';
        for (let j = 0; j < 7; j++) {
            calendarHTML += '<td onclick="addMemo(this)"></td>';
        }
        calendarHTML += '</tr>';
    }

    document.getElementById('calendar').innerHTML = calendarHTML;

    // 显示当前日期和时间
    updateDateTime();
    setInterval(updateDateTime, 1000);
});

function updateDateTime() {
    const now = new Date();
    document.getElementById("currentDate").textContent = now.toLocaleDateString('ja-JP');
    document.getElementById("currentTime").textContent = now.toLocaleTimeString('ja-JP');
}

function addMemo(tdElement) {
    const memo = prompt("请输入备忘录:");
    if (memo) {
        tdElement.textContent = memo;
    }
}
