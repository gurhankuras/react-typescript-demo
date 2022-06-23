export function isDigit(keyCode: number) {
    if (keyCode >= 48 && keyCode <= 57) {
        return true;
    }
    return false;
}