

def greet_programmer():
    print("Hello, programmer!")
    print()
    
greet_programmer()

// function greetProgrammer() {
//   console.log("Hello, programmer!");
// }



def greet(name):
 print(f"Hello, {name}!")
  
greet()

// function greet(name) {
//   console.log(`Hello, ${name}!`);
// }


def greet_with_default(name = "programmer"):
    print(f"Hello, {name}!")


greet_with_default()


greet_with_default("Sunny")


// function greetWithDefault(name = "programmer") {
//   console.log(`Hello, ${name}!`);
// }

def add(num1, num2):
    return num1 + num2


sum_result = add(1, 2)
print(sum_result)


function add(num1, num2) {
  return num1 + num2;
}



def halve(number):
    if not isinstance(number, (int, float)):
        return None

    return number / 2


// function halve(number) {
//   if (typeof number !== "number") return null;

//   return number / 2;
// }

