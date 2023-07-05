export function timeNoun(time: Date): string {
    const hour = time.getHours();
    switch(hour){
        case 6:
            return "dawn";
        case 7:
            return "sunrise";
        case 8:
            return "morning";
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
            return "day";
        case 19:
            return "evening";
        case 20:
            return "sunset";
        case 21:
            return "dusk";
        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            return "night";
        default:
            return "day"
    }
}