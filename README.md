 Automated Short Answer Grading System
This project demonstrates a machine learning approach to automatically grade short answers using semantic similarity techniques. It utilizes Sentence-BERT for understanding text and a Random Forest Regressor to predict grades. The solution includes visualizations to analyze and compare actual vs predicted grades.

📑 Table of Contents
Features

Technologies Used

How It Works

Installation

Usage

Output

✅ Features
Automatically grades student short answers using semantic similarity.

Uses Sentence-BERT to capture contextual meaning of answers.

Converts similarity scores to human-like grading scale (4, 6, 8, 10).

Trains a Random Forest model to predict grades more flexibly.

Provides two types of visualizations:

Actual vs Predicted Scatter Plot

Grade Distribution Comparison

🛠 Technologies Used
Python: Core language for scripting and ML tasks

SentenceTransformers: For generating embeddings of text

HuggingFace Datasets: For loading the SciEntsBank dataset

Scikit-Learn: For training and evaluating machine learning models

Matplotlib & Seaborn: For visualizing predictions and distributions

Torch: Backend for Sentence-BERT

🧠 How It Works
Load Dataset: SciEntsBank dataset from HuggingFace

Embed Text: Use Sentence-BERT (all-MiniLM-L6-v2) to convert question, student answer, and reference answer to vectors

Compute Similarity: Cosine similarity between student and reference answers

Convert to Grade: Use similarity thresholds to assign a grade (4–10 scale)

Train Model: Use the similarity score as input to train a Random Forest Regressor

Predict & Visualize: Predict test set grades and visualize accuracy and distribution

⚙️ Installation
To run this project, install the required Python libraries:
pip install -U datasets sentence-transformers scikit-learn matplotlib seaborn torch

▶️ Usage
Clone the repository or copy the script.

Run the script using Python:
python main.py  # or your actual script name

📊 Output
📉 MSE and R² Score printed in console

📈 Scatter Plot of Actual vs Predicted Grades

📊 Histogram comparing grade distribution (Actual vs Predicted)

Example Summary:

markdown
Copy
Edit
📊 Model Evaluation Summary
----------------------------------------
🔹 Mean Squared Error (MSE): 1.6435
🔹 R-squared (R²): 0.6852
🔹 Sample size: 420
----------------------------------------
📌 Notes
The similarity-to-grade logic can be fine-tuned in the similarity_to_grade() function.

You can try other regressors or embedding models for experimentation.

Visualization helps assess how close the model's predictions are to actual human-assigned grades.

