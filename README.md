# Automated Short Answer Grading System

This project demonstrates a machine learning approach to automatically grade short answers using semantic similarity techniques. It utilizes Sentence-BERT for understanding text and trains regression models to predict grades. The solution includes visualizations to analyze and compare actual vs predicted grades and provides an interactive interface for real-time grading in the enhanced version.

---

## 📑 Table of Contents
- Features
- Technologies Used
- How It Works
- Installation
- Usage
- Updates & Improvements
- Notes

---

## ✅ Features

### Common Features (Both Notebooks)
- Automatically grades student short answers using semantic similarity.
- Uses Sentence-BERT to capture contextual meaning of answers.
- Converts similarity scores to a human-like grading scale (4, 6, 8, 10).
- Provides visualizations of Actual vs Predicted grades and grade distribution.

### Enhanced Features (New Notebook: `AGS_Gradio_Enhanced.ipynb`)
- Supports **multiple models**: Random Forest, Gradient Boosting, Support Vector Regression, and Neural Network.
- Computes **additional input features** for improved prediction:
  - Cosine similarity between **student answer and reference answer**.
  - Cosine similarity between **student answer and question**.
  - Cosine similarity between **reference answer and question**.
  - **Answer length ratio** (student answer vs reference answer).
  - **Word count ratio** (student answer vs reference answer).
- Evaluates models using **MSE, RMSE, MAE, R², and Accuracy** (percentage of predictions within ±1 grade).
- Automatically selects **best model** based on R² score.
- Provides **model comparison plots** to visualize performance.
- Includes **interactive Gradio interface** for students/teachers to input answers and receive grades instantly.

---

## 🛠 Technologies Used
- Python
- SentenceTransformers
- HuggingFace Datasets
- Scikit-Learn
- Matplotlib & Seaborn
- Torch
- Gradio (Enhanced Notebook)

---

## 🧠 How It Works
1. **Load Dataset**: SciEntsBank dataset from HuggingFace.  
2. **Embed Text**: Use Sentence-BERT (`all-MiniLM-L6-v2`) to convert question, student answer, and reference answer to vectors.  
3. **Compute Features**: Cosine similarities, answer length ratio, and word count ratio.  
4. **Convert to Grade**: Use similarity thresholds to assign a grade (4–10 scale).  
5. **Train Model(s)**: Random Forest or multiple models in the enhanced version.  
6. **Predict & Visualize**: Predict test set grades and visualize performance.  
7. **Interactive Grading**: In the enhanced notebook, users can enter answers via Gradio and receive instant grades.

---
## ⚙️ Installation
Install required libraries:
"```bash
pip install -U datasets sentence-transformers scikit-learn matplotlib seaborn torch gradio"

▶️ Usage

Clone the repository or download the notebooks.

For old notebook:

jupyter notebook AutomatedGradingSystem.ipynb


For enhanced notebook:

jupyter notebook AGS_Gradio_Enhanced.ipynb


Follow the instructions in the notebook.

In the enhanced notebook, you can interactively test answers via Gradio.

📊 Updates & Improvements

Enhanced input features for better prediction accuracy.

Multiple models evaluated and best model selected automatically.

Accuracy metric added to measure reliability of predictions.

Interactive Gradio interface for real-time testing.

Improved visualizations including model comparison charts.

Enhanced predictions are more accurate, flexible, and robust compared to the old notebook.

📌 Notes

The similarity-to-grade logic can be fine-tuned in the similarity_to_grade() function.

Other regressors or embedding models can be tested for experimentation.

The enhanced notebook provides better usability for practical grading applications.
