// 1. Assign the message "Hello, World!" to a variable.

// 2. Assign a different string to a different variable.

// 3. Assign a number to a variable.

// 4. Use string concatenation to display the number from #3 in a string.

// 5. Make an array of at least four of your favorite movies or books or bands.

// 6. Make a object of information about yourself with at least four properties.


// 1
var message = console.log("Hello World")

// 2
var other_message = console.log("This is a different message")

// 3
var number = 3

// 4
var concatenation = "This is string concatenation! look, it's the number" + number + "!"

// 5
var bands = ['Joy Division', 'The Clash', 'The Smiths', 'Interpol']

// 6
function Person(fname,lname,age,eyecolor)
{
   this.firstname=fname;
   this.lastname=lname;
   this.age=age;
   this.eyecolor=eyecolor;
}

adam = new person("Adam", "Fronczak", 27, "Green");
console.log(adam.firstname + " is " + adam.age + " years old.");
