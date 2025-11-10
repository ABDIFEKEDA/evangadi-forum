import React, { useContext, useState } from "react";
import { AppState } from "../../App";
import "./homes.css";

function Homes() {
  const { user } = useContext(AppState);

  const [questions, setQuestions] = useState([
    {
      id: 1,
      questionid: 101,
      userid: 1,
      title: "How to center a div?",
      description: "I want to center a div horizontally and vertically.",
      tag: "css",
    },
    {
      id: 2,
      questionid: 102,
      userid: 2,
      title: "What is JWT?",
      description: "Can someone explain what JSON Web Token means?",
      tag: "auth",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const handleAddQuestion = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "" || tag.trim() === "") {
      alert("Please fill all fields.");
      return;
    }

    const newQuestion = {
      id: questions.length + 1,
      questionid: Math.floor(Math.random() * 1000),
      userid: user?.id || 0,
      title,
      description,
      tag,
    };

    setQuestions([newQuestion, ...questions]); // update UI immediately
    setTitle("");
    setDescription("");
    setTag("");
    setShowForm(false);
  };

  return (
    <div>
      <div className="userinfo">
        <h3>Home</h3>
        <h3>How it works</h3>
        <button className="user">
          Welcome, {user?.username ? user.username : "Guest"}!
        </button>

        <div className="dropdown">
          <p>Profile</p>
          <p>Settings</p>
          <p>Logout</p>
        </div>
      </div>

      <div className="container">
        <div className="top-bar">
          <button className="ask-btn" onClick={() => setShowForm(!showForm)}>
            Ask Question
          </button>
          <span className="welcome">
            Welcome: <span className="username">{user?.username || "Guest"}</span>
          </span>
        </div>

        {showForm && (
          <form className="question-form" onSubmit={handleAddQuestion}>
            <input
              type="text"
              placeholder="Enter question title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              placeholder="Write question description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
            <input
              type="text"
              placeholder="Enter tag (e.g. react, css)"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              required
            />
            <div className="form-buttons">
              <button type="submit" className="submit-btn">
                Add Question
              </button>
              <button
                type="button"
                className="cancel-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="questions">
          {questions.map((q) => (
            <div key={q.id} className="question-item">
              <div className="user-icon">👤</div>
              <div className="question-info">
                <p className="question-text">{q.title}</p>
                <p className="description-text">{q.description}</p>
                <p className="tag-text">#{q.tag}</p>
              </div>
              <div className="arrow">{">"}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homes;
