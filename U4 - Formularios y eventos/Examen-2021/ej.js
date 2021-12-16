function vNombre(e) {
    if (/^\w+$/.test(e)) {
        return true;
    }
    return false;
}
}
// ^\d{ 2 } ([-]) | ([/])


function vFecha(e) {
    if (/(^\d{2}[-]\d{2}[-]\d{4})|(^\d{2}[\/]\d{2}[\/]\d{4})$/.test(e)) {
        return true;
    }
    return false;
