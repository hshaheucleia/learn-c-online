#!/usr/bin/env python

from flask import Flask, jsonify, request, render_template
import json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/code/submit", methods=["PUT", "POST"])
def submit():
  try:
    # Attempt to evaluate the expression.
    return jsonify({'result': str(request.json['code'])})
  # If something borks, just return a catch all.
  except:
    return jsonify({'error': 'invalid code expression'})

if __name__ == '__main__':
  app.run(debug=True)

