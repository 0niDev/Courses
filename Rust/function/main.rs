fn main() {
    add(23, 2);
}

// we have to define the datatype of the parameters
fn add(a: i32, b: i32) {
    println!("{} + {} = {}", a, b, a + b);
}

// this is an expresstion

let number = {
    let x = 123;
    x + 1
};
// we can do thin because the x + 1 returns a number which is assinged to the variable number

// we have to tell which type the result is
// we dont have to write return to return the value BUT we can
fn addReturn(a: i32, b: i32) -> i32 {
    a + b
    // return a + b
}
