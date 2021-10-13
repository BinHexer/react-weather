const longDate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
}

const shortDate = (d) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = days[d.getDay()];

    let dayDate = d.getDate();

    let m = d.getMonth() + 1;
    let month = m < 10 ? ("0" + m).slice(-2) : m;
    return `${day}, ${month}/${dayDate}`;
}

module.exports.longDate = longDate;
module.exports.shortDate = shortDate;