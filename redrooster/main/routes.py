from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
@main.route('/home')
def home():
    return render_template('index.html')

@main.route('/menu')
def menu():
    return render_template('menu.html')

@main.route('/contact')
def contact():
    return render_template('contact.html')


@main.route('/about')
def about():
    return render_template('about.html')
