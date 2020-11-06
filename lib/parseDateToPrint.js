const parseDateToPrint = (dateString) => {
    const addZero = (num) => num < 10 ? `0${num}` : num
    const date = new Date(dateString)
    const dates = {
        year: date.getFullYear(),
        month: addZero(date.getMonth() + 1),
        day: addZero(date.getDay()),
        hour: addZero(date.getHours() + 1),
        minute: addZero(date.getMinutes() + 1),
        second: addZero(date.getSeconds() + 1)
    }
    const { year, month, day, hour, minute, second } = dates
    return `${year}-${month}-${day}  ${hour}:${minute}:${second}`
}

export default parseDateToPrint