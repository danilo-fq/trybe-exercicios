const studentNote = -5;

if (studentNote >= 0 && studentNote < 50){
  console.log("F");
} else if (studentNote >= 50 && studentNote < 60) {
  console.log("E");
} else if (studentNote >= 60 && studentNote < 70) {
  console.log("D");
} else if (studentNote >= 70 && studentNote < 80) {
  console.log("C");
} else if (studentNote >= 80 && studentNote < 90) {
  console.log("B");
} else if (studentNote >= 90 && studentNote <= 100) {
  console.log("A");
} else {
  console.log("Erro!");
};
