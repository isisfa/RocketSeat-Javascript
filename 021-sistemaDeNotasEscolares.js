
score = 0
 let scoreA = score >= 90 && score <= 100 
 let scoreB = score >= 80 && score <= 89
 let scoreC = score >= 70 && score <= 79
 let scoreD = score >= 60 && score <= 69
 let scoreF = score >= 0 && score <= 60

 if        (scoreA) {
     console.log ('A')
 } else if (scoreB) {
     console.log ('B')
 } else if (scoreC) {
     console.log ('C')
 } else if (scoreD) {
     console.log ('D')
 } else if (scoreF) {
     console.log ('F')
 } else {
    console.log('Nota errada')
}
     