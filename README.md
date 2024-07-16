
![preview](https://github.com/user-attachments/assets/6206e5ce-0e13-4e81-96a5-37ed009adba4)
# Wikiwi: Your Personal Nutrition Management App

Wikiwi is a powerful mobile application designed to assist you in achieving your health and wellness goals by providing detailed nutrition information, food tracking capabilities, and personalized diet recommendations. Whether you're looking to manage your weight, improve your health, or accommodate specific dietary needs due to medical conditions, Wikiwi is your go-to app.

Wikiwi is a project aimed at calculating and managing the nutritional content of foods using Convolutional Neural Network (CNN) methods. This project helps individuals understand and manage their daily nutritional intake, especially focusing on fruits. Utilizing advanced machine learning techniques and tools, Wikiwi offers features such as fruit detection through images, recipe recommendations, and a nutrition calculator.

## Our Team 🤝 🧑‍💻 👩‍💻 🚀

| No. | Name                   | NIM        |
| --- | ---------------------- | ---------- |
| 1.  | Rizqi Ilham Siregar    |            |
| 2.  | Vina Patricia          | 1217050139 |
| 3.  | Yandiyan               | 1217050144 |
| 4.  | Zuhad Harkasy Al-Hikam | 1217050148 |

## Our Proposal
[Wikiwi Proposal](https://github.com/user-attachments/files/15743552/Wikiwi.pdf)

## Overview

Wikiwi aims to provide an accessible tool to calculate the nutritional content of foods using image recognition and classification. This project is not only essential for daily nutritional management but also contributes to public health by helping people control their nutritional intake.

## Summary

Wikiwi is a web application designed to help users calculate and manage their nutritional intake. By leveraging AI and CNN methods, Wikiwi identifies the type of fruit and its nutritional content through image recognition. Additionally, the application offers recipe recommendations and a nutrition calculator, contributing to a balanced and healthy diet.

## Teaser Video Preview

Get a sneak peek of our project with our teaser video [here](https://www.instagram.com/)!

## Methodology

### Dataset Collection

The dataset used consists of 5460 images of fruits obtained from Google Images using web scraping techniques. This data includes 26 types of fruits with good nutritional content.

### Data Preprocessing

- **Dataset Split**: The dataset is divided into training data (70%), validation data (15%), and test data (15%).
- **Image Augmentation**: Applied techniques such as cropping, rotating, and filtering.
- **Resizing**: Images are resized to 48x48 pixels.
- **Grayscale Conversion**: Images are converted to grayscale.
- **Thresholding**: Grayscale images are converted to binary images.

### Convolutional Neural Network (CNN) Architecture

The CNN model uses transfer learning techniques by leveraging the Xception model from TensorFlow Keras library. The model architecture includes the Xception base model and several custom layers tailored for the task of classifying fruit nutritional content.

### Evaluation and Testing

Evaluation is conducted using a confusion matrix to calculate metrics such as True Positive (TP), True Negative (TN), False Positive (FP), and False Negative (FN). Accuracy, precision, recall, and F1-score are calculated to evaluate the model's performance.

## Implementation and Usage

Wikiwi features several key functions, including:

- **Fruit Detection** using the camera or image uploads to detect the type of fruit and its nutritional content.
- **Recipe Recommendations** providing recipe ideas based on the type of fruit the user has.
- **Nutrition Calculator** calculating and displaying the nutritional content of consumed fruits.

## Key Features

- **Fruit Detection** with CNN method
- **Recipe Recommendations** based on the type of fruit the user has
- **Nutrition Calculator** to track and manage daily nutritional intake

## Built With

### Machine Learning

- **Google Colab** - Development environment
- **TensorFlow** - Machine learning framework
- **Keras** - High-level neural networks API
- **Matplotlib** - Plotting library for visualization
- **Google Drive** - Storage for datasets and models

### Web Development

- **Flask** - Python web framework for backend development
- **Google Cloud Storage (GCS)** - Cloud object storage service
- **Cloud Run** - Serverless execution environment for containers


## Features

- Nutrition Information
- Food Tracking
- Healthy Recipes

## Benefits

- Enhance Your Overall Health
- Manage Specific Medical Conditions
- Adopt a Healthy Lifestyle

## Reference Journal

1. [Usability of a web-based personal nutrition management tool](https://doi.org/10.3109/17538157.2011.553296)
2. [Food Technological Applications for Optimal Nutrition: An Overview of Opportunities for the Food Industry](https://doi.org/10.1111/j.1541-4337.2011.00167.x)
3. [Utilizing the CNN Algorithm to Identify Meals and Calculate Calories](https://ijarsct.co.in/Paper7837.pdf)
4. [The Diabetic Buddy: A Diet Regulator and Tracking System for Diabetics | IEEE Conference Publication | IEEE Xplore](https://ieeexplore.ieee.org/document/9461897)
5. [A Survey on Healthy Food Decision Influences Through Technological Innovations | ACM Transactions on Computing for Healthcare](https://dl.acm.org/doi/10.1145/3494580)
6. [Expanding the Capabilities of Nutrition Research and Health Promotion Through Mobile-Based Applications - ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2161831322001284)
7. [Mengoptimalkan Asupan Zat Gizi sebagai Upaya Preventif dalam Mengatasi Masalah Kesehatan Mental](https://e-journal.unair.ac.id/MGK/article/view/33925)
8. [Gambaran Status Gizi dan Kejadian Common Mental Disorders pada Mahasiswa Gizi Fakultas Kesehatan Masyarakat Universitas Hasanuddin](http://repository.unhas.ac.id/id/eprint/2075/)
9. [Ginger from Farmyard to Town: Nutritional and Pharmacological Applications](https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2021.779352/full)
10. [Toward the Definition of Personalized Nutrition: A Proposal by The American Nutrition Association](https://doi.org/10.1080/07315724.2019.1685332)


## Connect With Us

- **Website:** [Visit our application](https://example.com/)
- **Instagram Reels:** [Watch our videos](https://www.instagram.com/reel/C66MvcNShL_/?igsh=MXF0ajBwaTZoOXlmaA==)

## Preview
| Signup | Forget Password |
|--------|-----------------|
| ![Signup](https://github.com/user-attachments/assets/6a050469-f8f0-4753-a343-6a13a1339928) | ![Forget Password](https://github.com/user-attachments/assets/c382fd81-f013-4649-a5b1-b3c178e3bca7) |

| Login | Dashboard |
|-------|-----------|
| ![Login](https://github.com/user-attachments/assets/66085ddf-955a-46ce-9d86-6ee73872e6a6) | ![Dashboard](https://github.com/user-attachments/assets/a96ee4b7-2abd-484c-b335-3372499d90d5) |

| ML Feature | Input Form |
|------------|------------|
| ![ML Feature](https://github.com/user-attachments/assets/77dac5ce-d3dc-4e4c-a5a6-34d67acabb58) | ![Input Form](https://github.com/user-attachments/assets/7c6a031b-e2f7-4edc-8da9-030ae8af2945) |

| Recipe Detail | Recipe |
|---------------|--------|
| ![Recipe Detail](https://github.com/user-attachments/assets/018dacac-4b3c-4cce-95bc-aadccabb6874) | ![Recipe](https://github.com/user-attachments/assets/ad75e0fa-205c-40b8-8e1e-6c93d251884e) |

| 404 Page Not Found (login) |
|---------------------------|
| ![404 Page Not Found (login)](https://github.com/user-attachments/assets/fa0d7aab-410b-4603-af4d-fd368e834a21) |



Join us at Wikiwi to make a positive change in your health and wellness!
