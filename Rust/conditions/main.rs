fn main() {
    // Create condtion
    let condtion = 2 > 3;
    // we need to both values to be the same type to compare them.
    println!("The value of condtion is: {}", condtion);
    // we can use the == operator to check if two values are equal.
    // we can use the != operator to check if two values are not equal.
    // we can use the > operator to check if the first value is greater than the second value.
    // we can use the < operator to check if the first value is less than the second value.
    // we can use the >= operator to check if the first value is greater than or equal to the second value.
    // we can use the <= operator to check if the first value is less than or equal to the second value.
    // we can use the && operator to check if both values are true.
    // we can use the || operator to check if one of the values is true.
    // we can use the ! operator to check if the value is false.
    // we can use the &= operator to check if both values are true.
    // we can use the |= operator to check if one of the values is true.
    // we can use the ^= operator to check if only one of the values is true.

    // presedence
    // 1. ()
    // 2. !, -, *
    // 3. /, %
    // 4. +, -
    // 5. <, >, <=, >=
    // 6. ==, !=
    // 7. &&
    // 8. ||
    // 9. =, +=, -=, *=, /=, %=
    // 10. &=, |=, ^=

    // if statement
    let number = 3;
    if number < 5 {
        println!("The number is less than 5");
    } else {
        println!("The number is greater than 5");
    }
    // we can use the else if keyword to add more conditions.
    let number = 6;
    if number < 5 {
        println!("The number is less than 5");
    } else if number > 5 {
        println!("The number is greater than 5");
    } else {
        println!("The number is equal to 5");
    }
}
