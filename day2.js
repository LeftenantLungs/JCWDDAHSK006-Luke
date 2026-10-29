// 1. Area of rectangle
const length = 5;
const width = 3;
const area = length * width;
console.log("Area of rectangle:", area); // 15

// 2. Perimeter of rectangle
const perimeter = 2 * (length + width);
console.log("Perimeter of rectangle:", perimeter); // 16

// 3. Diameter, circumference and area of a circle
const radius = 5;
const diameter = 2 * radius;
const circumference = 2 * Math.PI * radius;
const circleArea = Math.PI * radius * radius;
console.log("diameter =", diameter);               // 10
console.log("circumference =", circumference);     // 31.41592653589793
console.log("area =", circleArea);                 // 78.53981633974483

// 4. Third angle of a triangle
const a = 80;
const b = 65;
const c = 180 - (a + b);
console.log("Third angle:", c); // 35

// 5. Convert days to years, months and days
const totalDays = 400;
const years = Math.floor(totalDays / 365);
const remainingDays = totalDays % 365;
const months = Math.floor(remainingDays / 30);
const days = remainingDays % 30;
console.log(years + " year, " + months + " month, " + days + " day");

// 6. Difference between dates in days
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const diffMs = Math.abs(date1.getTime() - date2.getTime());
const diffDays = diffMs / (1000 * 3600 * 24);
console.log("Difference in days:", diffDays); // 2  