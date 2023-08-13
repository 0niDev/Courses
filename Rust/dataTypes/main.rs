fn main() {
    // scaler types:

    let number: i32 = 69; // i32 is the default integer type.
    // integer types: i8, u8, i16, u16, i32, u32, i64, u64, i128, u128 (isize, usize).
    // u meams unsigned and i means signed. unsigned means that the number can't be negative.

    let floating: f64 = 69.69; // f64 is the default floating-point type.
    // floating-point types: f32, f64.

    let boolean: bool = true; // bool is the default boolean type.
    // boolean types: true, false.

    let character: char = '/'; // char is the default character type.
    // character types: 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j' ... 'z', or and character really.

    // compound types:

    let tuple: (i32, f64, bool, char) = (69, 69.69, true, '/'); // tuple is the default tuple type.
    // tuple types: (i32, f64, bool, char), (i32, f64, bool), (i32, f64), (i32), (), ().
    // we have to define the type of each element in the tuple in order. they are immutable by default. we can use mut to make them mutable.
    println!("The value of tuple is: {:?}", tuple); // we can print the tuple with {:?}.
    println!("The value of tuple is: {:#?}", tuple); // we can print the tuple with {:#?} to make it more readable.
    println!("we can show only one value using a dot like tuple.index: {}", tuple.0); // we can show only one value using a dot like tuple.index.

    let array: [i32; 5] = [1, 2, 3, 4, 5]; // array is the default array type.
    // array types: [i32; 5], [i32; 4], [i32; 3], [i32; 2], [i32; 1], [].
    // we have to define the type of the array and the number of elements in the array. they are immutable by default. we can use mut to make them mutable.

    // if we let a variabel by giving it an other variabel and have a different datatypes on both of them we will get an error.
    // let x: u8 = 5;
    // let y: i8 = x;
    // even tho they are both integers they are different types.
}
