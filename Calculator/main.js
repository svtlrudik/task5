send.addEventListener("click",calc);
function calc(){
    let val_summa = summa.value;
    let val_stavka = stavka.value;
    let val_result, val_summ2;
    val_result = 72/val_stavka;
    result.innerHTML = val_result.toFixed(2) + ' лет';
    val_summ2 = val_summa * 2;
    summ2.innerHTML  = val_summ2.toFixed(2) + " грн";

}