romai(59);

function romai(n) {
    let kev =n-Math.floor(n/10)*10;
    let tobb = Math.floor(n/10)*10;
    // let proba = Math.floor(n/10);

    console.log(kev);
    console.log(tobb);
    // console.log(proba);

            if (kev === 1) {
                return "I";
            } else if (kev === 2) {
                return "II";
            } else if (kev === 3) {
                return "III";
            } else if (kev === 4){
                return "IV";
            } else if (kev === 5){
                return "V";
            } else if (kev === 6){
                return "VI";
            }else if (kev === 7){
                return "VII";
            }else if (kev === 8){
                return "VIII";
            } else if (kev === 9){
                return "IX";
            }

            if (tobb === 10){
                // szam = Math.floor(n/10);
                // return repeat("X", szam);
                return "X";
        }
        
}