//Complete the getGrade(score) function in the editor. It has one parameter: an integer,score,
// denoting the number of points Julia earned on an exam. It must return the letter corresponding to her grade
//  according to the following rules:
function getGrade(score) {
  let grade;
  // Write your code here
  if (score >= 0 && score <= 5) {
    grade = "F";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 25 && score <= 30) {
    grade = "A";
  }
  return grade;
}
getGrade(11);
