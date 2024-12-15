from flask import Flask, request, jsonify
import json
import logging

app = Flask(__name__)

logging.basicConfig(
    level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s"
)

log = logging.getLogger(__name__)

question_response_data = [
    {
        "category": "background",
        "saved_answers": [None, None, None, None, None]
    },
    {
        "category": "interests",
        "saved_answers": [None, None, None, None, None]
    },
    {
        "category": "preferences",
        "saved_answers": [None, None, None, None, None]
    },
    {
        "category": "values",
        "saved_answers": [None, None, None, None, None]
    },
    {
        "category": "traits",
        "saved_answers": [None, None, None, None, None]
    },
    {
        "category": "perspectives",
        "saved_answers": [None, None, None, None, None]
    }
]

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

quests = {
    "active_quests": [],
    "pending_quests": [
        {
            "id": 1,
            "title": "Jungle Bonanza",
            "time": "Tomorrow at 6:00 PM",
            "participants": "4",
            "description": "Quest description",
            "hint": "HINT",
            "image": "./images/quests.png",
        },
        {
            "id": 2,
            "title": "Happy Time",
            "time": "Today at 4:00 PM",
            "participants": "2",
            "description": "Quest description",
            "hint": "HINT",
            "image": "./images/quests.png",
        },
        {
            "id": 3,
            "title": "Cool Fun",
            "time": "Thursday at 2:00 PM",
            "participants": "3",
            "description": "Quest description",
            "hint": "HINT",
            "image": "./images/quests.png",
        },
    ],
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
    global quests
    return quests


@app.route("/api/quests/join/<title>", methods=["POST"])
def join_quest(title):
    global quests
    quest_to_move = None
    for quest in quests["pending_quests"]:
        if quest["title"] == title:
            quest_to_move = quest
            quests["pending_quests"].remove(quest)
            break

    if quest_to_move:
        quests["active_quests"].append(quest_to_move)
        return quests
    else:
        return quests

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

@app.route('/api/get_question_responses', methods = ['GET'])
def get_question_response_data():
    if(request.method == 'GET'):
        category = request.args.get('category')
        
        for item in question_response_data:
            if item['category'] == category:
                category_data = item
                break
        
        return jsonify(data = category_data)

@app.route('/api/save_question_responses', methods = ['GET', 'POST'])
def save_question_responses():
    global question_response_data

    json_data = request.get_json()
    category = json_data["category"]
    question_index = json_data["question_index"]
    question_response = json_data["question_response"]

    for entry in question_response_data:
        if entry["category"] == category:
            entry["saved_answers"][question_index] = question_response
            break

    return jsonify(data = question_response_data)

@app.route("/api/avatars")
def get_avatars():
    return ["./images/quests.png"]

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
