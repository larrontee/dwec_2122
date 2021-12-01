function vNombre(e) {
    if (/^\w+$/.test(e)) {
        return true;
    }
    return false;
}
// ^\d{ 2 } ([-]) | ([/])