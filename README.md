# LearnEase
LearnEase – AI-powered early learning screening and personalized support platform for children with learning difficulties. It uses ML-based screening, adaptive rule-based activities, multilingual support, and progress insights to provide accessible, privacy-first, non-diagnostic learning assistance.
# LearnEase 🧠📚

### Every Child Learns Differently.

**LearnEase** is an AI-powered, privacy-first learning support platform designed to identify potential learning difficulties at an early stage and provide personalized learning assistance.

It combines **machine learning, adaptive rule-based screening, interactive learning activities, multilingual support, and progress insights** to create a more accessible learning experience for children.

> ⚠️ LearnEase is a **non-diagnostic screening and learning-support platform**. It does not replace professional medical or educational diagnosis.

---

## 🚀 Key Features

### 🧠 Early Screening

Uses structured screening activities and behavioral signals to identify potential learning-support needs at an early stage.

### 🤖 AI-Based Insights

Machine learning models analyze screening data and generate personalized learning insights.

### 🎯 Personalized Learning

Learning activities are adapted based on the child's screening results and performance.

### 🔄 Hybrid Adaptive Rule-Based System

A hybrid rule-based approach combines predefined educational rules with adaptive decision-making to determine suitable screening and learning activities.

### 📊 Progress Dashboard

Provides easy-to-understand insights into screening scores, activity performance, and learning progress.

### 🌍 Multilingual Support

Designed to make screening and learning activities accessible to children from different language backgrounds.

### 👩‍🏫 Teacher Support

Teachers can view learning insights and manage personalized support sessions for students.

### 🔐 Privacy-First

Designed with child data privacy in mind, minimizing unnecessary collection and emphasizing secure handling of learning information.

---

## 🧩 Technology Stack

### Frontend

* HTML
* CSS
* JavaScript
* Responsive UI

### Backend

* Node.js
* Express.js
* REST APIs

### Machine Learning

* Python
* XGBoost
* Tabular dataset-based prediction

### Database

* Student screening data
* Activity performance
* Progress information
* Session information

---

## 🤖 AI & ML Approach

LearnEase uses different approaches for different tasks.

### XGBoost

**XGBoost** is used for structured/tabular screening data.

Example input features can include:

* Reading performance
* Writing performance
* Response accuracy
* Response time
* Spelling performance
* Memory-related activity scores
* Phonological awareness indicators

The model processes these features to generate a screening-support result.

### Hybrid Adaptive Rule-Based Algorithm

The rule-based system is used to make the platform's learning activities adaptive.

It can consider:

```text
Screening Result
       ↓
Performance Analysis
       ↓
Rule Evaluation
       ↓
Activity Selection
       ↓
Child Performance
       ↓
Adaptive Difficulty
       ↓
Next Activity
```

This allows the platform to adjust learning activities according to the child's performance.

---

## 🏗️ System Architecture

```text
              ┌──────────────────┐
              │      Child       │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Screening /      │
              │ Learning         │
              │ Activities       │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Feature          │
              │ Extraction       │
              └────────┬─────────┘
                       ↓
          ┌──────────────────────────┐
          │ AI / ML Processing       │
          │                          │
          │ XGBoost + Adaptive Rules │
          └────────────┬─────────────┘
                       ↓
              ┌──────────────────┐
              │ Personalized     │
              │ Learning Plan    │
              └────────┬─────────┘
                       ↓
              ┌──────────────────┐
              │ Progress &       │
              │ Teacher Dashboard │
              └──────────────────┘
```

---

## 📁 Project Structure

```text
LearnEase/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   └── models/
│
├── ml/
│   ├── dataset/
│   ├── preprocessing/
│   ├── training/
│   └── prediction/
│
├── README.md
└── package.json
```

---

## 🎯 Problem We Address

Many children who experience learning difficulties may not receive support at an early stage.

Traditional assessment can be:

* Time-consuming
* Difficult to access
* Dependent on specialist availability
* Difficult to continuously monitor

**LearnEase** aims to provide an accessible digital platform for **early screening, personalized learning support, and continuous progress tracking**.

---

## 💡 Our Approach

```text
Identify
   ↓
Screen
   ↓
Analyze
   ↓
Personalize
   ↓
Learn
   ↓
Track Progress
   ↓
Adapt
```

Instead of providing the same learning activities to every child, LearnEase aims to create a more **individualized learning journey**.

---

## 🌟 What Makes LearnEase Different?

* AI-assisted early screening
* Personalized learning activities
* Adaptive difficulty
* Hybrid rule-based decision system
* ML-based analysis of structured data
* Multilingual accessibility
* Teacher involvement
* Continuous progress tracking
* Privacy-first and non-diagnostic approach

---

## 🛠️ Future Enhancements

* Voice-based reading analysis
* Handwriting analysis
* Computer vision-based activity analysis
* More regional languages
* Advanced personalized learning models
* Parent dashboard
* Integration with educational institutions
* Larger and more diverse datasets

---

## ⚠️ Disclaimer

LearnEase is designed as an **educational screening and learning-support tool**.

It is **not a medical diagnostic system** and should not be used as a replacement for qualified professionals.

---

## 👥 Hackathon Project

Developed as a **college hackathon project** focused on using AI and technology to improve accessibility and personalization in education.

---

## 📜 License

This project is developed for educational and hackathon purposes.
