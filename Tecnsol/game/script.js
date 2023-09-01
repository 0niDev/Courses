function main() {
  input = prompt(
    "You wake up in the morning, get out of your bed?"
  ).toLocaleLowerCase();
  if (input == "y") {
    input = prompt(
      "you do your morning routine and you feel dead. make coffee?"
    ).toLocaleLowerCase();
    if (input == "y") {
      input = prompt(
        "After drinking your coffee now you have some will to live. Do want to start your work?"
      ).toLocaleLowerCase();
      if (input == "y") {
        input = prompt(
          "you turn on you laptop and start working, you work for couple hours and you feel hungry. Do you want to eat?"
        ).toLocaleLowerCase();
        if (input == "y") {
          input = prompt(
            "you go to the kitchen and you see a pizza box. Do you want to eat it?"
          ).toLocaleLowerCase();
          if (input == "y") {
            input = prompt(
              "you eat the pizza, and now you feel sleepy, do you want to do your night routine?"
            ).toLocaleLowerCase();
            if ((input = "y")) {
              input = prompt(
                "you do your night routine and you go to bed. Do you want to sleep?"
              ).toLocaleLowerCase();
              if (input == "y") {
                alert("Goodnight!");
                main();
              } else if (input == "n") {
                alert("you stayed awake all night");
                main();
              } else {
                alert("Invalid input");
                main();
              }
            } else if (input == "n") {
              alert("Clean your damn self bruh wtf?!?!?!?");
              main();
            } else {
              alert("Invalid input");
              main();
            }
          } else if (input == "n") {
            alert("Order someting to eat.");
          } else {
            alert("Invalid input");
            main();
          }
        } else if (input == "n") {
          alert("You died of starvation");
        } else {
          alert("Invalid input");
          main();
        }
      } else if (input == "n") {
        alert("You were fired from your job!");
        main();
      } else {
        alert("Invalid input");
        main();
      }
    } else if (input == "n") {
      alert("You died reason: No Coffee😔");
      main();
    } else {
      alert("Invalid input");
      main();
    }
  } else if (input == "n") {
    alert("You died reason: No will to live😔");
    main();
  } else {
    alert("Invalid input");
    main();
  }
}

let input = prompt(
  "Welcome to start the game input y and to exit press n"
).toLocaleLowerCase();
if (input == "y") {
  main();
} else if (input == "n") {
  alert("Goodbye!");
} else {
  alert("Invalid input");
  main();
}
