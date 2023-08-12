import socket


def main():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    s.connect((socket.gethostname(), 9090))
    while True:
        msg = s.recv(8)
        print(msg.decode("utf-8"))


if __name__ == "__main__":
    main()
