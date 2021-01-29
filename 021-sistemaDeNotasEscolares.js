
function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score >= 0 && score <= 60

    let finalScore;

    if (scoreA) {
        finalScore = "A"
    } else if (scoreB) {
        finalScore = "B"
    } else if (scoreC) {
        finalScore = "C"
    } else if (scoreD) {
        finalScore = "D"
    } else if (scoreF) {
        finalScore = "F"
    } else {
        finalScore = "Nota inválida!"
    }

    return finalScore               //Quando você quer retornar um valor final fora da função.
}
// Notas inválidas
console.log(getScore(101))
console.log(getScore(-1))
// F
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
// D
console.log(getScore(60))
console.log(getScore(61))
// C
console.log(getScore(75))
// B
console.log(getScore(85))
// A
console.log(getScore(95))