from flask import Flask

app = Flask(__name__)


@app.route("/api/quests")
def get_quests():
    return [
        {
            "quest_name": "Stoic Scholar",
            "quest_description": "Find the statue of the lion and take a picture in front of it.",
            "quest_image": "",
        }
    ]


@app.route("/api/messages")
def get_messages():
    return [
        {
            "name": "Michael",
            "image": "images/michael.png",
            "lastChat": "Great Idea!",
            "timestamp": "12:07",
        },
        {
            "name": "Clara, Kyle",
            "image": "images/woman-wearing-pink.png",
            "lastChat": "Deal",
            "timestamp": "2:12",
        },
    ]


@app.route("/api/profile")
def get_profile():
    return {
        "full_name": "Victoria Smith",
        "first_name": "Victoria",
        "last_name": "Smith",
        "email": "vsmith@gmail.com",
        "profile_image": "images/Victoria-background.png",
        "type": "Adventurer",
        "profileComplete": 60,
        "sections": {
            "background": 90,
            "interests": 40,
            "preferences": 30,
            "values": 60,
            "traits": 50,
            "perspectives": 0,
        },
    }


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
