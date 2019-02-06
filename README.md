# Some Pure Functions
Although in Javascript, strings are immutable, and string literals are stored by value not by reference. These functions still considers state mutation in manipulating its parameters.

# Leet (str :String) => newString :String
`Leet()` leverages Javascript's object literal as a data structure for mapping leet letters `a, A, e, E..., b, D` to their corresponding values. ES6 Maps can also be used, however, they are slower at runtime than JS old and faithful object literals.

# summarizeSerially (str :String) => newString :String
There are several ways to solve this kind of problem. I prefer, minimizing state as much as possible, so I used the reduce function in this case to track the current and previous values of a string. Instead of for loops or nested for loops.

This function favours readability over performance.

Both functions are well commented.

# To the reviewer
Please feel free to comment on my code or fork my repo as i'm open to learning new ways of solving a problem.

