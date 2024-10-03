// let select = prompt("Ведіть що ви хочете: Кава, Чай, Сік.")
// let lowCase = select.toLocaleLowerCase()

// switch (lowCase){
//     case "кава":
//     alert("Американо готове");

//     break;

//     case "чай":
//     alert("Чай з імбиром готовий");
    
//     break;

//     case "сік":
//      alert("Гранатний сік готовий");
    
//     break;

//     default:
//         alert("Виберіть що ви хочете")
// }


// let daySelect = prompt("Ведіть день")
// let lowDay = daySelect.toLocaleLowerCase()

// switch (lowDay){
//     case "понеділок":
//     case "вівторок":    
//     case "середа":
//     case "четвер":               
//     alert("Робочий день")
//     break

//     case "субота":
//     case "неділля":
//     alert("Сьогодні Вихідний");
                            
//     break;
//     default:
//     alert("Ви не ввели день")
// }

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