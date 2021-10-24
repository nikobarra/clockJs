
const getHour = () => {
    const date = new Date();
    const time = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
    const now = `${time.hour}:${time.minute}:${time.second}`;
    document.querySelector(".clock").innerHTML = now;
}
setInterval (getHour, 1000);