const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let newDate = new Date();
let tempYear = newDate.getFullYear();
let tempMonth = newDate.getMonth();
let tempDate = newDate.getDate();

const times = document.querySelectorAll('.times')
const giveAway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')

let myDate = new Date(tempYear, tempMonth, tempDate + 10, 11, 30)
// let myDate = new Date(2024, 0, 29, 11, 30)

const year = myDate.getFullYear();
const hours = myDate.getHours();
const mins = myDate.getMinutes();

let month = myDate.getMonth();
    month = months[month]

let day = myDate.getDay();
    day = days[day]

const date = myDate.getDate();
giveAway.innerHTML = `Giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${mins}am`


// future time
const futureTime = myDate.getTime();

function getRemainingTime(){
    const currentTime = new Date().getTime()
    const remaining = futureTime - currentTime;

    // 1s = 1000s
    // 1min = 60s
    // 1hr = 60min
    // 1day = 24hr
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMin = 60 * 1000;

    let days = remaining / oneDay;
        days = Math.floor(days)

    let hours = (remaining % oneDay) / oneHour;
        hours = Math.floor(hours)

    let mins = (remaining % oneHour) / oneMin;
        mins = Math.floor(mins)

    let secs = (remaining % oneMin) / 1000;
        secs = Math.floor(secs)

    function format(item){
        if(item < 10){
            return `0${item}`
        }
        else 
        return item
    }

    const values = [days, hours, mins, secs]
    times.forEach((items, i)=>{
        items.innerHTML = format(values[i])
    })

    if(remaining < 0){
        clearInterval(countDown)    
        deadline.innerHTML = `<h4 class="text-black font-bold tracking-widest">Sorry this giveaway has expired</h4>`
    }
    
}
let countDown = setInterval(getRemainingTime, 1000)
getRemainingTime();
