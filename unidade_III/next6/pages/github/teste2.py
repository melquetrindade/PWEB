import requests
import json

URL='https://api.clashroyale.com/v1/cards'

headers1 = {
    "Content-type": "application/json",
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlb Gw6Z2FtZWFwaSIsImp0aSI6ImUyOGU5MTE4LTQxMTEtNDIwMS1hOWUwLTgyNGQ5OTMxOTNkMiIsImlhdCI6MTY5NzIwNDk3MSwic3ViIjoiZGV2ZWxvcGVyL2M1ODY4YWIzLWNhYjItYjQ3MC0zNGE4LTY 2Nzk4NDhmNjllZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxNzcuNzMuM jAyLjMiXSwidHlwZSI6ImNsaWVudCJ9XX0.BDZ5w6EaIfb5_QGisXrKqfZEpd482ovml0Kofxepnq4hGOODuVvB9pqaoQ5r4w6glYzEqcq1UxzpGI4on-q3XA'}

def testeGet():
    response = requests.get(url=URL, headers=headers1)
    if(response.status_code == 200):
        print('foi')
    
testeGet()