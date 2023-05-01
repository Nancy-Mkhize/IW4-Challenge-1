let date = 2050;
let result = 'student';
let count = 0;

if (date === 2050) {
  console.log("January", 'New Year’s Day');
  console.log("March", 'Human Rights Day');
  console.log(date, 'Family Day');
  console.log(date, 'Freedom Day');
  count = count + 4;

  if (result === "student") {
    console.log('June', 'Youth Day');
    count = count + 1; // changed const to let and removed unnecessary re-declaration
  }

  console.log('August', 'Women’s Day');
  console.log('September', 'Heritage Day');
  date = 'December'; // changed const to let to allow reassignment
  console.log(date, 'Day of Reconciliation');
  count = count + 3;

  if (result === "parent") {
    console.log(date, 'Christmas Day');
    count = count + 1; // changed const to let and removed unnecessary re-declaration
  }

  console.log(date, 'Day of Goodwill');
  count = count + 1; // changed const to let and removed unnecessary re-declaration
}

console.log('Your status is:', result);
console.log('The year is:', date);
console.log('The total holidays is:', count);
