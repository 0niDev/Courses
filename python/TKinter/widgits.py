import tkinter as tk
import ttkbootstrap as tkb
from tkinter import ttk

def hello():
    print("hello")

window = tkb.Window(themename="darkly")
window.geometry("500x500")
window.title("Notepad")

# label
text = ttk.Label(master=window, text="Notepad")
text.pack()

# text area
textArea = tk.Text(master=window, )
textArea.pack()

# entery
entry = ttk.Entry(master=window)
entry.pack()

# buuton
button = ttk.Button(master=window, text="save")
button.pack()

## Exercise
# myLabel = ttk.Label(master=window, text="my label").pack()
# myButton = ttk.Button(master=window, text="Hello", command=hello).pack()

window.mainloop()