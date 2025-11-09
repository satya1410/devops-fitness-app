from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    bmi_result = None
    if request.method == "POST":
        weight = float(request.form.get("weight"))
        height = float(request.form.get("height")) / 100
        bmi_result = round(weight / (height * height), 2)
    return render_template("index.html", bmi=bmi_result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)

