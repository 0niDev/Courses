from fastapi import FastAPI


app = FastAPI()


@app.get("/hello")
def hello():
    return "hello: hello"
@app.get("/")
def main():
    return "hello: main"
