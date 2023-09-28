/* Solving the FizzBuzz exercise.
 * Written for NodeJS due to personalcompatibility issues
 * */

function main() {
  let max = parseInt(process.argv[2]);

  for (let i = 1; i <= max; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz!");
    } else if (i % 3 === 0) {
      console.log("Fizz!")
    } else if (i % 5 === 0) {
      console.log("Buzz!");
    } else {
      console.log(i);
    }
  }
}

main();
