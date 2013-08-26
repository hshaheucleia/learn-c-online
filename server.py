#!/usr/bin/env python

import mechanize
from flask import Flask, jsonify, request, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

def compile_message(code):
    br = mechanize.Browser()
    br.open("http://compile.openlearningapps.net/application/upload")
    br.select_form(nr=0)
    open('main.c', 'w').write(code)
    br.form.add_file(open('main.c'), 'text/plain', 'main.c', name='file1')
    response = br.submit()
    return response.read()

@app.route("/api/code/submit", methods=["PUT", "POST"])
def submit():
  try:
    # Attempt to evaluate the expression.
    return jsonify({'result': compile_message(str(request.json['code']))})
  # If something borks, just return a catch all.
  except:
    return jsonify({'error': 'invalid code expression'})

if __name__ == '__main__':
  app.run(debug=True)

