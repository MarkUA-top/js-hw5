let select = prompt("Ведіть що ви хочете: Кава, Чай, Сік.")
let lowCase = select.toLocaleLowerCase()

switch (lowCase){
    case "кава":
    alert("Американо готове");

    break;

    case "чай":
    alert("Чай з імбиром готовий");
    
    break;

    case "сік":
     alert("Гранатний сік готовий");
    
    break;

    default:
        alert("Виберіть що ви хочете")
}


let daySelect = prompt("Ведіть день тижня")
let lowDay = daySelect.toLocaleLowerCase()

switch (lowDay){
    case "понеділок":
    case "вівторок":    
    case "середа":
    case "четвер":               
    alert("Робочий день")
    break

    case "субота":
    case "неділля":
    alert("Сьогодні Вихідний");
                            
    break;
    default:
    alert("Ви не ввели день")
}

let monthSelect = prompt("Ведіть місяць")
let lowMonth = monthSelect.toLocaleLowerCase()

switch (monthSelect){
    case "december":
    case "january":
    case "february":
    alert("Winter");

    break;
    case "march":
    case "april":
    case "may":
    alert("Spring");

    break;
    case "june":
    case "july":
    case "august":
    alert("Summer");

    break;
    case "september":
    case "october":
    case "november":
    alert("Fall")

    break;
    default:
    alert("You dont send month")
}

let numberSelect = prompt("Ведіть число від 1 до 12")

switch (numberSelect) {
    case "1":
    case "5":
    case "7":
    case "10":
    case "12":
    alert("31 day");

    break;
    case "4":
    case "8":
    case "9":
    alert("30 day");

    break;
    case "2":
    case "3":
    case "6":
    case "11":
    alert("29 day");

    break;
    default:
    alert("u dont set day")
}

let colorBack = let("say red yellow green")
let lowBack = colorBack.toLocaleLowerCase()

switch (lowBack) {
    case "green":
    alert("go");

    break;
    case "yellow":
    alert("ready");

    break;
    case "red":
    alert("stop")

    break;
    default:
    alert("say green")
}

let add = Number(prompt("1 to 10000"))
let dell = Number(prompt("1 to 10000"))
let plus = add + dell
let minus = add - dell
let x = add * dell
let l = add / dell
let selectCal = prompt("+, -, *, /")

switch (selectCal){
    case "+":
    alert(plus);

    break;
    case "-":
    alert(minus);
    
    break;
    case "*":
    alert(x);
        
    break;
    case "/":
    alert(l);
            
    break;
    default:
    alert("say call")
}