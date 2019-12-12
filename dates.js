function pad(n) { return n < 10 ? '0' + n : n };  //padding function to format
                                                  //date with leading 0s

function getcurrYear() {
    var currentTime = new Date();
    var currYear = currentTime.getFullYear();
    return currYear
}

function getcurrMonth() {
    var currentTime = new Date();
    var currMonth = pad(currentTime.getMonth() + 1);
    return currMonth;
}

function getcurrDay() {
    var currentTime = new Date();
    var currDay = pad(currentTime.getDate());
    return currDay;
}