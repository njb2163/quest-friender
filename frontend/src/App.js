import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './App.css';
import './QuestDetails'
import Header from './Header';
import Footer from './Footer';
import Personality from './Personality';
import Messages from './Messages';
import QuestDetails from './QuestDetails';
import Settings from './Settings';
import Quests from './Quests';
import ProfileSection from './ProfileSection';
import ProfileSectionIntro from './ProfileSectionIntro';

function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [quests, setQuests] = useState({});
  const [questions, setQuestions] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [loadingQuestions, setLoadingQuestions] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/profile')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch profile');
        }
        return res.json();
      })
      .then(data => {
        setUser(data);
        setLoadingUser(false);
      })
      .catch(error => {
        console.error('Error fetching profile:', error);
        setError(error.message);
        setLoadingUser(false);
      });
  }, []);

  useEffect(() => {
    fetch('/api/messages')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch messages');
        }
        return res.json();
      })
      .then(data => {
        setMessages(data);
        setLoadingMessages(false);
      })
      .catch(error => {
        console.error('Error fetching messages:', error);
        setError(error.message);
        setLoadingMessages(false);
      });
  }, []);

  useEffect(() => {
    fetch('/api/profile_section_questions')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch section questions');
        }
        return res.json();
      })
      .then(data => {
        setQuestions(data);
        setLoadingQuestions(false);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
        setError(error.message);
        setLoadingQuestions(false);
      });
  }, []);
  
  useEffect(() => {
    fetch('/api/quests')
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch quests');
        }
        return res.json();
      })
      .then(data => {
        setQuests(data);
      })
      .catch(error => {
        console.error('Error fetching quests:', error);
        setError(error.message);
        setLoadingMessages(false);
      });
  }, []);

  if (loadingUser || loadingMessages || loadingQuestions) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <Router>
      <div className="iphone-pro">
        <div className="div">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/profile" element={<Personality user={user} />} />
              <Route path="/profile/:profileSectionName" element={<ProfileSectionIntro questionData={questions}/>} />
              <Route path='/profile/:profileSectionName/quiz' element = {<ProfileSection questionData={questions}/>} /> 
              <Route path="/settings" element={<Settings user={user} />} />
              <Route path="/messages" element={<Messages messages={messages}/>} />
              <Route path="/quests" element={<Quests quests={quests} />} />
              <Route path="/questDetails/:title" element={<QuestDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;