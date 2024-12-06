from flask import Flask

app = Flask(__name__)

@app.route('/api/profile')
def get_profile():
    return {
        "name": "Victoria",
        "type": "Adventurer",
        "profileComplete": 60,
        "sections": {
            "background": 10,
            "interests": 0,
            "preferences": 0,
            "values": 0,
            "traits": 0,
            "perspectives": 0
        }
    }

if __name__ == '__main__':
    app.run(debug=True)