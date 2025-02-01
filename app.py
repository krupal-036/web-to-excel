from flask import Flask, request, render_template, redirect
import gspread
from oauth2client.service_account import ServiceAccountCredentials

app = Flask(__name__)

scope = ["https://spreadsheets.google.com/feeds", "https://www.googleapis.com/auth/drive"]
creds = ServiceAccountCredentials.from_json_keyfile_name('credentials.json', scope)
client = gspread.authorize(creds)

sheet = client.open('Your Spreadsheet Name').sheet1 

@app.route('/')
def form():
    return render_template('form.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form['name']
    email = request.form['email']
    age = request.form['age']
    address = request.form['address']
    mobile = request.form['mobile']
    altMobile = request.form['altMobile']
    birthdate = request.form['birthdate']

    sheet.append_row([name, email, birthdate, age, address, mobile, altMobile])
    
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
