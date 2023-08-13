use std::io; // we have to import the io library to get the input because its not in the default libraries rust automaticaly imports.
// std stands for standard library.
// io stands for input output.
// we use the keyword use to import libraries.

fn main() {
    println!("Please input a word: ");
    let mut word = String::new(); // we can make objects by using the ::new() method after the datatype.
    // we have to use a object to make the string empty.
    io::stdin().read_line(&mut word).expect("faild to read line"); // we can use the ::read_line() method to get input from the user.
    // we have to use the &mut keyword to make the variable mutable.
    // we have to use the expect() method to handle errors.
    // (this shit is weird but it works)
    println!("{}", word)
}
