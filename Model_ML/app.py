from flask import Flask, request, jsonify
from PIL import Image
import numpy as np
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras.utils import img_to_array
import pandas as pd
import io
import os
import csv

# os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

# Import model
model = tf.keras.models.load_model("model_karbo.h5")
modelrekom = tf.keras.models.load_model("rekomendasi_karbo.h5")

def load_recipe_data():
    recipe_data = []
    with open('Resep - Karbo.csv', 'r') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            recipe_data.append({
                'Bahan': row['Bahan'],
                'Nama Resep': row['Nama Resep'],
                'Bahan yang dibutuhkan': row['Bahan yang dibutuhkan'],
                'Cara Membuat': row['Cara Membuat'],
                'Kalori': row['Kalori']
            })
    return recipe_data

def transform_image(img):
    img = img.resize((150, 150))
    img = img.convert('RGB')
    img = img_to_array(img)
    img = img.astype(np.float32) / 255
    img = np.expand_dims(img, axis=0)
    return img

def predict(x):
    predictions = model.predict(x)
    return predictions

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        file = request.files.get('file')
        if file is None or file.filename == "":
            return jsonify({"error": "no file"})
        try:
            class_names = ["Jagung", "Kentang", "Mie & Pasta", "Nasi", "Oatmeal", "Roti", "Singkong", "Ubi"]
            image_bytes = file.read()
            pillow_img = Image.open(io.BytesIO(image_bytes))
            predictions = predict(transform_image(pillow_img))
            predicted_class_index = tf.argmax(predictions[0]).numpy()
            predicted_class = class_names[predicted_class_index]

            df = pd.read_csv("Informasi Gizi Karbohidrat.csv")
            df['Bahan'] = df['Bahan'].str.strip()
            nutrient_info = df.loc[df['Bahan'] == predicted_class, ['Kalori', 'Lemak(g)', 'Karbohidrat(g)', 'Protein(g)', 'Ukuran',  'Keterangan']]
            nutrient_info_dict = nutrient_info.to_dict(orient='records')

            response = {
                "prediction": predicted_class,
                "nutrient_info": nutrient_info_dict
            }
            return jsonify(response)
        except Exception as e:
            return jsonify({"error": str(e)})
    return "OK"

if __name__ == "__main__":
    app.run(port=8080, debug=True)
