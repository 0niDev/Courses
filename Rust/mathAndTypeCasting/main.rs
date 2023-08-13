use std::io;

fn main() {
    let x: u8 = 9; // its range is 0-255.
    let y: i8 = 10; // its range is -128-127.
    // we can use _ to make numbers more readable. example: 1_000_000.
    //btw we cannot oprate on two different types.
    // if we add to values even with the same data type and the value exeads the range of the data type we will get an error named overflow erroe.

    // operators:
    // addition: +
    // subtraction: -
    // multiplication: *
    // division: /
    // remainder: %
    // we can use the + operator to add two values together.
    // we can use the * operator to repeat a string.
    // we can use the - operator to subtract two values.
    // we can use the / operator to divide two values.
    // we can use the % operator to get the remainder of two values.
    // we can use the == operator to check if two values are equal.
    // we can use the != operator to check if two values are not equal.
    // we can use the > operator to check if the first value is greater than the second value.
    // we can use the < operator to check if the first value is less than the second value.
    // we can use the >= operator to check if the first value is greater than or equal to the second value.
    // we can use the <= operator to check if the first value is less than or equal to the second value.
    // we can use the && operator to check if both values are true.
    // we can use the || operator to check if one of the values is true.
    // we can use the ! operator to check if the value is false.
    // we can use the += operator to add the value to the variable.
    // we can use the -= operator to subtract the value from the variable.
    // we can use the *= operator to multiply the value with the variable.
    // we can use the /= operator to divide the value with the variable.
    // we can use the %= operator to get the remainder of the value with the variable.
    // we can use the -= operator to subtract the value from the variable.
    // we can use the &= operator to check if both values are true.
    // we can use the |= operator to check if one of the values is true.
    // we can use the ^= operator to check if only one of the values is true.

    let a = 5i8;
    // we can also add the data type after the value.
    let a = 5_i8;
    let a = 5 as i8;
    // we can also use the as keyword to cast the value to the data type.
    let a = 5;
    let a = (a as f32) + 0.5;
    println!("{}", a);
    // we are adding an into to a float so we have to cast the int to a float or we will get an error.
    // chaning the data type of a value is called casting.

    // we can use datatype::MAX to get the max value of the data type.
    println!("{}", u8::MAX);

    // trying to get a num from the user and casing the python to a i32.
    let mut num = String::new();
    io::stdin().read_line(&mut num).expect("Failed to read line");
    // .trim() removes the new line (\n) from the input every input have a \n at the end of the cus we press enter to submit it.
    // .parse() parses the string to a number.
    let num: i32 = num.trim().parse().expect("Please type a number!");
    println!("{}", num * num);
}
