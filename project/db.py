import sqlite3
def get_conCur():
    con = sqlite3.connect("E.db",check_same_thread=False)
    cur = con.cursor()
    cur.execute('''
    CREATE TABLE IF NOT EXISTS Users (
    id INTEGER PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    code TEXT
    )
    ''')
    return cur, con