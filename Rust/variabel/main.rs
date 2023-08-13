fn main() {
    let mut x = 5; // if i don't change the value of x, i will get a warning but the code will compile.
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);

    let y = 5;
    println!("The value of y is: {}", y);
    {
        // same scpoe stuff.
        // i can use the variable from out side my scope if its in the global scope.
        let y = 6;
        println!("The value of y is: {}", y);
    }
    let y = y + 1;
    println!("The value of y is: {}", y);

    // if i use let i am redefining the variable. It means i can change the value of the new variable with the same name i can even change the data type.
    // use camal case for variable names. ofc.
    // const is used to define constants. it can be used in any scope. it can't be changed.
    const MAX_POINTS: u32 = 100_000; // we also have to define the type of a const its defined my adding a : and the name of the data type after the name of the const.
}
