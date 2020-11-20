function centuryFromYear(year) {    
    const divided = year/100;
    const trunc = Math.trunc(divided);

    if(trunc < divided) {
        return trunc + 1;
    }
    return trunc;
}
