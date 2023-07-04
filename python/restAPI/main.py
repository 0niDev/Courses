from fastapi import FastAPI


app = FastAPI()


@app.get("/hello")
def hello():
    return "hello: world"
@app.get("/")
def main():
    return "hello how are you?"
