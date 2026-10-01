- ### 00_script_in_html.html
  > - In using script in html, I've learned that you can use an inline script which you can directly write the code directly into the html file and there's another way to use `<script>` tag by importing a javascript that contains your code. Normally, the browser treats everything inside the `<script>` tag as a classic script but using the 'type=module' — it treats the scripts as javascript module or ES module.

---

- ### 01_base_syntax.js
  > - In javascript, we can declare a variable without using int or string just how we declare variables in Python and Java. Also, we must always take note that javascript is a case-sensitive programming language where if you create a variable name with myName and myname, it will treat both as an invidual variables which means that myName is not equal with myname.

---

- ### 02_variables.js
  > - In this execise, I learned that in order for us to see if the variable we created is whether a string, integer or boolean, we can use `typeof` to display the value in the terminal. I also remembered the lesson we learned last year in Laravel, it is about the `==` and `===` operator which allows us to compare two values whether they are the same or not. We call it loose and strict operator, what loose operator does is if the 5 which is an integer and "5" that is a string then it will treat it as equal. Meanwhile, the strict operate compares both data type and value, if the one of the variable data type is not equal to another then it will consider it as false.

---

- ### 03_functions.js
  > - I've learned how to create a function and an arrow function. The difference between a traditional and arrow function, in traditional way of creating function you declare it with the function then the name of function(i.e. function greet(){}), while in arrow function, it is more convenient and you can also use an implicit return.

---

- ### 04_objects.js
  > - I already learned this in other programming languages, but it is nice that i get to refresh my knowledge about creating objects. You can use object to easily use it through "this" function that allows the computer to access a certain object value within the object you created.

---

- ### 05_arrays.js
  > - I learned that `push()` and `shift()` both modify the original array directly, but in opposite ways. The `push()` adds an item at the end of the array, while `shift()` removes an item from the beginning.

---

- ### 06_control_structures.js
  > - Way back in my first year, we learned about if-else statement, for loop and while loop. And it is nice to get my knowledge refreshed by doing this kind of activity. It allows me to be more efficient in creating loops and statements that executes a specific task if the condition is fulfilled.

---

- ### 07_dom.html
  > - We have already study DOM Manipulation last semester, it is the model where you can manipulate the content, structure and style of a website dynamically real-time without reloading the page. In this exercise, I learned how to use `setTimeout()` whenever you want a specific part of the web page to change after a specific period of time.

---

- ### 08_essential_features.js
  > - In this exercise, I learned how to use `map()` when you want to list down all the values inside an array. I also learned a bit about destructuring because it was part of the essential feature of javascript. It also refreshed my knowledge on spread operator.

---

- ### 09_tricky_parts.js
  > - I learned the difference between copying by reference and copying by value. Assigning an array to a new variable doesn't means to create a new array which makes both names still point to the same one in memory, so changing one changes the other. Using the spread operator, creates a truly independent copy, so changes to one don't affect the original.

---

- ### 10_let_const.js
  > - In this exercise, I learned the diffrence between let, const, and var. The `let` allows the use to change its value after creating the same variable while `const` is strict when it comes to creating a variable because once its declared, you cannot declare the same variable again. The `var` is a variable declaring which scoped to the nearest enclosing function which we call as function scope.

---

- ### 11_arrow_functions.js
  > - This is just another way of creating a function but way more convenient. I learned the structure of arrow funtion as "const nameof_function = () =>{}" or with the implicit return which look like "const nameof_function =()=> return_value".

---

- ### 12_destructuring.js
  > - In this exercise, I learned how to unpack values from an array or properties from an object into a distinct variables in a single readable line.

---

- ### 13_spread_rest.js
  > - I learned the difference between spread and rest, even though they use the same `...` syntax. The difference between spread and rest is that spread copies an array and passed it into a new array while rest works the opposite, it collects arguments passed into a function into a single array.

---

- ### 14_classes_inheritance.js
  > - In python, we already learned this lesson. The class can be used in OOP which makes it easier to pass the same attributes to the other class like for example in the exercise, the person class can be inherit by a student class because they also have the attributes such as name and age.

---

- ### 15_module_export.js
  > - In this exercise, I learned how to export a function and variables. I also learned the two ways to export a file, which are the named export and default export.

---

- ### 16_modules_import.js
  > - In this exercise, I learned how to import values from another JavaScript file using import. Just the same with export, you can also import using a named import and default import.

---

- ### 17_logical_operators
  > - From this exercise I gained an understanding of the difference between truthy and falsy values; I discovered that [] and {} are in fact truthy, which surprised me because I had expected empty values to be null since it doesnt contain anything. I also learned about || and && which returns a true or false value depends on condition fulfilled. The || returns the first truthy value it finds, while && returns the first falsy value, or the last value if none are falsy.

---

- ### 18_ternary_nullish.js
  > - I learned in this exercise about the shorthand version of conditional statement which is called as ternary operator which makes it easier to read and less verbose than the normal conditional statement. In my understanding, the nullish coalescing operator is like a safety net where if the other value is null then it will return as null or undefined without crashing the system.

---

- ### 19_strings_numbers.js
  > - In this exercise, I learned several useful string and number methods. trim() removes extra whitespace, split() breaks a string into an array, and includes() checks if a string contains a certain substring. I also learned about parseInt() where it converts any string value variable into an integer value.

---

- ### 20_array_methods.js
  > - In this exercise, I learned several useful array methods such as `filter()`, `find()`, `some()`, `every()`, and `sort()`. The `filter()` returns a new array with only the items that pass a condition, while `find()` returns just the first matching item instead of an array. I also learned that `some()` checks if at least one thing meets a condition and `every()` checks if all items meet a condition. And the `sort()` modifies the original array into however the user want to arrange the data.

---

- ### 21_errors_json.js
  > - In this exercise, I learned how to use try/catch along with throw new Error() to handle errors properly. I also learned about JSON.stringify() and JSON.parse(), where stringify() converts a JavaScript object into a JSON string, while parse() does the opposite, converting a JSON string back into a usable object.

---

- ### 22_async_javascript.js
> - In this exercise, I learned three ways JavaScript handles asynchronous code. The callback functions pass a function to be called later. For example, getMockUser calls back with the user data after a delay. And using try/catch to handle errors rather than .then() chains made working with promises more convenient.

---

- ### 23_closures_scope.js
> - In this exercise, I primarily learned about the block scope where if you declare a variable and function and you will try to access it globally, then it will throw you the catch error message.

---