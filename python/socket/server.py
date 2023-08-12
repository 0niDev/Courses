import socket
import threading


def main():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.bind((socket.gethostname(), 9090))
    s.listen(5)
    while True:
        conn, addr = s.accept()
        print("Got connection from", addr)
        msg = "Thank you for connecting" + "\r\n"
        conn.send(msg.encode("utf-8"))


if __name__ == "__main__":
    print("starting the server.")
    main()
    print("server started.")
