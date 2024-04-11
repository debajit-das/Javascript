// Iterate through the courses using for-in loop
const courses = {
  firstCourse: "JavaScript",
  secondCourse: "React",
  thirdCourse: "Angular",
};
let value = "";
for (let item in courses) {
  value += courses[item] + " ";
  console.log(value);
}
