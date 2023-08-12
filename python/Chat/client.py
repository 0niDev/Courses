import socket
import threading

userName = input("NickName: ")

client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
client.connect((socket.gethostbyname(socket.gethostname()), 6969))


def recive():
    while True:
        try:
            msg = client.recv(1024).decode("ascii")
            if msg == "NickName: ":
                client.send(userName.encode("ascii"))
            else:
                print(msg)
        except:
            print("An error occured!")
            client.close()
            break


def write():
    while True:
        msg = f"{userName}: {input('')}"
        client.send(msg.encode("ascii"))


reciveThread = threading.Thread(target=recive)
reciveThread.start()

writeThread = threading.Thread(target=write)
writeThread.start()
