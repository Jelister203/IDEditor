import time
from flask import Flask, jsonify,request,Response
from flask_cors import CORS
from db import get_conCur
import asyncio

app = Flask(__name__)
CORS(app)
cur, con = get_conCur()

@app.route('/')
def hello():
    return jsonify(message='Hello World')

@app.route("/create", methods=["POST"])
async def create():
    input_json = request.get_json(force=True)
    print('data from client:', input_json)
    if (input_json.get("name")is None):
        return Response("Say my name", status=403)
    if (len(input_json)<0) and (len(input_json)>21):
         return Response("Имя должно быть больше нуля и меньше 20", status=403)
    id_file=cur.execute('SELECT id FROM Users ').fetchall()
    if len(id_file)==0:
        id=0
    else:
        id=id_file[-1][0]+1
    name=input_json.get("name")
    cur.execute(f"INSERT INTO Users(id,name,code) Values ('{id}','{name}','')").fetchall()
    con.commit()
    return Response(f"Created. {input_json}",status=200)

@app.route("/browse")
async def browse():
    cur.execute('SELECT * FROM Users')
    temp = cur.fetchall()
    print(time.time)
    return jsonify(temp)

@app.route("/file/<int:file_id>", methods=["PATCH", "GET"])
async def file(file_id):
    if request.method == "GET":
        if (file_id,) not in cur.execute('SELECT id FROM Users').fetchall():
            return Response("Not Found", status=404)
        else:
            return jsonify(cur.execute(f'SELECT code FROM Users WHERE id = {file_id}').fetchall()[0])
    
    elif request.method == "PATCH":
        input_json = request.get_json(force=True)
        code = input_json.get("code")
        cur.execute(f"""UPDATE Users SET code="{code}" WHERE id = {file_id}""")
        con.commit()
        return Response("Update successful", status=301)


if __name__ == ("__main__"):
    loop = asyncio.get_event_loop()
    loop.create_task(app.run())
    loop.run_forever()