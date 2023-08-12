import threading
import socket

host = socket.gethostbyname(socket.gethostname())
port = 6969
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.bind((host, port))
server.listen()


users = []
userNames = []


def brodcast(msg):
    for user in users:
        user.send(msg)


def handle(user):
    while True:
        try:
            msg = user.recv(1024)
            brodcast(msg)
        except:
            index = users.index(user)
            del users[index]
            user.close()
            del userNames[index]
            brodcast(f"{userNames[index]} left the chat".encode("ascii"))
            break


def recive():
    while True:
        user, address = server.accept()
        print(f"Connected with {str(address)}")
        user.send("NickName: ".encode("ascii"))
        username = user.recv(1024).decode("ascii")
        userNames.append(username)
        print(f"Username is {username}")
        brodcast(f"{username} joined the chat".encode("ascii"))
        user.send("Connected to the server".encode("ascii"))
        thread = threading.Thread(target=handle, args=(user,))
        thread.start()


recive()
