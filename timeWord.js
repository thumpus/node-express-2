let numberDictionary = {
    1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
    11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
    21: "twenty one", 22: "twenty two", 23: "twenty three", 24: "twenty four", 25: "twenty five", 26: "twenty six", 27: "twenty seven", 28: "twenty eight", 29: "twenty nine", 30: "thirty",
    31: "thirty one", 32: "thirty two", 33: "thirty three", 34: "thirty four", 35: "thirty five", 36: "thirty six", 37: "thirty seven", 38: "thirty eight", 39: "thirty nine", 40: "forty",
    41: "forty one", 42: "forty two", 43: "forty three", 44: "forty four", 45: "forty five", 46: "forty six", 47: "forty seven", 48: "forty eight", 49: "forty nine", 50: "fifty",
    51: "fifty one", 52: "fifty two", 53: "fifty three", 54: "fifty four", 55: "fifty five", 56: "fifty six", 57: "fifty seven", 58: "fifty eight", 59: "fifty nine"
}

function timeWord(time) {
    // splits the string into an hour string and minute string, which we then convert to integers. 
    let split = time.split(':');
    let hours = parseInt(split[0]);
    let minutes = parseInt(split[1]);
    let ampm = '' 

    // handles noon and midnight cases
    if (hours == 12 && minutes == 0){
        return "noon"
    }
    if (hours == 0 && minutes == 0){
        return "midnight"
    }

    // figures out am/pm and converts hours from 24 hour to 12 hour
    if (hours < 12) {
        ampm = 'am'
    } else if (hours >= 12) {
        ampm = 'pm'
        if (hours > 12){
            hours = hours - 12;
        }
    } 

    // creates strings for the time using the number dictionary. 

    let hourStr = '';
    let minuteStr = '';

    if (hours == 0) {
        hourStr = 'twelve'
    } else if (hours !== 0){
        hourStr = numberDictionary[hours]
    }

    if (minutes == 0) {
        minuteStr = "o'clock";
    } else if (10 > minutes > 0 ) {
        minuteStr = `o ${numberDictionary[minutes]}`
    } else if (minutes >= 10) {
        minuteStr = numberDictionary[minutes]
    }

    return (`${hourStr} ${minuteStr} ${ampm}`)
}

module.exports = { timeWord };