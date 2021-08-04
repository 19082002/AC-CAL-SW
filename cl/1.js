today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");
ty=document.getElementsByClassName("new");

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();

    tbl = document.getElementById("calendar-body"); 
    tbl.innerHTML = "";
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    if(months[month]=="August"){
        document.getElementById("new").style.backgroundImage="url('au.jpg')";
    }
    else if(months[month]=="June"){
        document.getElementById("new").style.backgroundImage="url('june.jpg')"
    }
    else if(months[month]=="January"){
        document.getElementById("new").style.backgroundImage="url('jan.jpg')"
    }
    else if(months[month]=="February"){
        document.getElementById("new").style.backgroundImage="url('feb.jpg')"
    }
    else if(months[month]=="March"){
        document.getElementById("new").style.backgroundImage="url('march.jpg')"
    }
    else if(months[month]=="April"){
        document.getElementById("new").style.backgroundImage="url('april.jpg')"
    }
    else if(months[month]=="May"){
        document.getElementById("new").style.backgroundImage="url('may.jpg')"
    }
    else if(months[month]=="July"){
        document.getElementById("new").style.backgroundImage="url('july.jpg')"
    }
    else if(months[month]=="September"){
        document.getElementById("new").style.backgroundImage="url('sep.jpg')"
    }
    else if(months[month]=="October"){
        document.getElementById("new").style.backgroundImage="url('oct.jpg')"
    }
    else if(months[month]=="November"){
        document.getElementById("new").style.backgroundImage="url('nov.jpg')"
    }
    else if(months[month]=="December"){
        document.getElementById("new").style.backgroundImage="url('dec.jpg')"
    }
    let date = 1;
    for (let i = 0; i < 6; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                cell = document.createElement("td");
                cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth(month, year)) {
                break;
            }

            else {
                cell = document.createElement("td");
                cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } 
                cell.appendChild(cellText);
                row.appendChild(cell);
                cell.id="py";
                date++;
            }


        }

        tbl.appendChild(row); 
    }

}

if(currentMonth=="August"){
    ty.style.backgroundColor="red";
}
// check how many days in a month code from https://dzone.com/articles/determining-number-days-month
function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
}
