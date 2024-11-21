function countDown(input) {
  let result = "";
  for (i = input; i > 0; i--) {
    result += i + " ";
  }
  console.log(result.trim());

  console.log(`sucessfuly completed `);
}
countDown(10);

function countDownRecursive(input, result = "") {
  if (input <= 0) {
    console.log(result.trim());
    console.log("SUCCESSFULLY COMPLETED");
    return;
  }

  result += input + " ";

  countDownRecursive(input - 1, result);
}

countDownRecursive(3);
