let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim();
day = day.toUpperCase()[0] + day.slice(1);

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No Appointments Available")
        break;
    case "Monday":
    case "Thursday":
        console.log("From 10:00 AM To 5:00 PM")
        break;
    case "Tuesday":
        console.log("From 10:00 AM To 6:00 PM")
        break;
    case "Wednesday":
        console.log("From 10:00 AM To 7:00 PM")
        break;
    default:
        console.log("It's Not A Valid Day")
        break;
}