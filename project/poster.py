import requests
code = "print('FUCK YOU!!')"
name = "machines"
# в коде не должны фигурировать """ """ и " ", иначе он ломается
# может фикситься кодированием. а так - сохраняет.
res = requests.post('http://localhost:5000/create', json={'name':name})
print(res.content)