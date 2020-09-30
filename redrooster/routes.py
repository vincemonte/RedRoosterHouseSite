from redrooster import app
from flask import render_template


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')

@app.route('/menu')
def menu():
    return render_template('menu.html')

@app.route('/catering')
def catering():
    return render_template('catering.html')


@app.route('/about')
def about():
    return render_template('about.html')
