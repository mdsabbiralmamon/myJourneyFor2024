## var a = isNaN('11');

-   In this line, the isNaN function is used to check if the given value is NaN (Not a Number). The argument passed to isNaN is the string '11'. Despite the fact that the string contains numerical characters, isNaN checks if it can be converted to a number. In this case, '11' can be successfully converted to the number 11, so isNaN('11') returns false.

-   Therefore, the value of a will be false.

## var a = isNaN(2 - 10);

-   Here, the expression 2 - 10 is evaluated first, resulting in -8. Then, the isNaN function is applied to this numeric value. Since -8 is a valid number, isNaN(-8) returns false.

-   Therefore, the value of a will be false as well.

In both cases, the isNaN function returns false because the expressions inside the parentheses can be successfully converted to numbers.