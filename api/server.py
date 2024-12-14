from flask import Flask, request, jsonify
import json
import logging

app = Flask(__name__)

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

log = logging.getLogger(__name__)

profile_data = {
    "date_of_birth": "07/27/1999",
    "first_name": "Victoria",
    "last_name": "Smith",
    "email": "vsmith@gmail.com",
    "profile_image": "./images/Victoria-background.png",
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


@app.route("/api/profile", methods=["GET", "POST"])
def update_profile():
    global profile_data
    if request.method == "POST":
        data = request.json
        profile_data.update(
            {
                "date_of_birth": data.get("date_of_birth"),
                "first_name": data.get("first_name"),
                "last_name": data.get("last_name"),
                "email": data.get("email"),
                "profile_image": data.get(
                    "profile_image", profile_data["profile_image"]
                ),
            }
        )
        return profile_data
    return profile_data


@app.route("/api/quests")
def get_quests():
    return {
        "active_quests": [
            {
                "title": "Jungle Bonanza",
                "time": "Tomorrow at 6:00 PM",
                "participants": "4",
                "description": "Quest description",
                "hint": "HINT",
                "image": "./images/quests.png",
            },
            {
                "title": "Happy Time",
                "time": "Today at 4:00 PM",
                "participants": "2",
                "description": "Quest description",
                "hint": "HINT",
                "image": "./images/quests.png",
            },
            {
                "title": "Cool Fun",
                "time": "Thursday at 2:00 PM",
                "participants": "3",
                "description": "Quest description",
                "hint": "HINT",
                "image": "./images/quests.png",
            },
        ],
        "pending_quests": [
            {
                "title": "Happy Time",
                "time": "Today at 4:00 PM",
                "participants": "2",
                "description": "Quest description",
                "hint": "HINT",
                "image": "./images/quests.png",
            },
            {
                "title": "Cool Fun",
                "time": "Thursday at 2:00 PM",
                "participants": "3",
                "description": "Quest description",
                "hint": "HINT",
                "image": "./images/quests.png",
            },
        ],
    }


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


@app.route("/api/profile_section_questions")
def get_profile_section_questions():
    return [
        {
            "category": "background",
            "description": "The following questions will pertain to your background. This will help us understand who you are and where you came from.",
            "questions": [
                {
                    "id": 1,
                    "question_content": "How many siblings did you have growing up?",
                    "multiple_choice": True,
                    "options": ["0", "1", "2", "3", "4+"],
                },
                {
                    "id": 2,
                    "question_content": "What country do you call home?",
                    "multiple_choice": False,
                    "options": [],
                },
                {
                    "id": 3,
                    "question_content": "What was your first language?",
                    "multiple_choice": False,
                    "options": [],
                },
                {
                    "id": 4,
                    "question_content": "What other languages do you speak?",
                    "multiple_choice": False,
                    "options": [],
                },
                {
                    "id": 5,
                    "question_content": "How many siblings do you have?",
                    "multiple_choice": False,
                    "options": [],
                },
            ],
        },
        {
            "category": "interests",
            "description": "The following questions will pertain to your interests. This will help us understand what you like to do.",
            "questions": [
                {
                    "id": 1,
                    "question_content": "How many creative hobbies do you actively pursue?",
                    "multiple_choice": True,
                    "options": ["0", "1", "2", "3", "4+"],
                },
                {
                    "id": 2,
                    "question_content": "Describe a hobby or activity you're passionate about",
                    "multiple_choice": False,
                    "options": [],
                },
                {
                    "id": 3,
                    "question_content": "How do you typically spend your free time?",
                    "multiple_choice": False,
                    "options": [],
                },
                {
                    "id": 4,
                    "question_content": "How many different sports or physical activities do you follow?",
                    "multiple_choice": True,
                    "options": ["0", "1", "2", "3", "4+"],
                },
                {
                    "id": 5,
                    "question_content": "How many different types of books do you read in a year?",
                    "multiple_choice": True,
                    "options": ["0", "1", "2", "3", "4+"],
                },
            ],
        },
    ]


@app.route("/api/avatars")
def get_avatars():
    return ["./images/quests.png"]


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
