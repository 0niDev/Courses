import tkinter as tk
# from tkinter import ttk # for wigits they are new he is saying
import ttkbootstrap as ttk #fucking bootstrap is here too

def convert():
    userInput = entryInt.get()
    output = userInput * 100
    outputString.set(output)

root = ttk.Window(themename='darkly')

root.title("Converter")
root.geometry("330x150")

#lable
title_lable = ttk.Label(master=root, text= 'meters to centimeter', font="Calibri 24 bold")

# input place
input_frame = ttk.Frame(master=root)
entryInt = tk.IntVar()
entry = ttk.Entry(master=input_frame, textvariable=entryInt)
button = ttk.Button(master = input_frame, text='convert', command=convert)


output_frame = ttk.Frame(master=root)
outputString = tk.StringVar()
output_lable = tk.Label(master = output_frame, text='Output: ',  font="Calibri 24 bold")
output_answer = ttk.Label(master = output_frame, font="Calibri 24", textvariable=outputString)


entry.focus()
title_lable.pack()
input_frame.pack(pady= 10)
entry.pack(side="left", padx=10)
button.pack(side="left")
output_frame.pack()
output_lable.pack(side="left", padx=10)
output_answer.pack(side="left")
root.mainloop()