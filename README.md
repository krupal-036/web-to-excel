# Web to Excel

This project is a simple web application that collects user input from an HTML form and stores the data in a Google Sheet using **Flask** and the **Google Sheets API**.

## Features
- Collect user data via a web form (Name, Email, Age)
- Store form submissions directly in a Google Sheet
- Uses **Google Sheets API** for seamless integration
- Lightweight **Flask** backend

## Prerequisites
Before running this project, ensure you have the following:
- Python 3 installed
- A Google Cloud Project with Google Sheets API enabled
- A Google Sheet created for storing data

## Setup

### 1. Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (or use an existing one).
3. Navigate to **APIs & Services > Library**.
4. Search for **Google Sheets API** and enable it.
5. Go to **APIs & Services > Credentials**.
6. Click **Create Credentials** and select **Service Account**.
7. In the **Keys** tab, generate a new JSON key and download it.
8. Share your Google Sheet with the **service account email** (from the JSON file) and grant it edit access.

### 2. Install Dependencies
Run the following command to install required Python packages:
```bash
pip install Flask gspread oauth2client
```

### 3. Configure the Project
- Place the downloaded **credentials.json** file in the project directory.
- Replace `'Your Spreadsheet Name'` in `app.py` with the actual name of your Google Sheet.

## Usage

### Run the Flask App
```bash
python app.py
```

### Open in Browser
Visit `http://127.0.0.1:5000/` in your web browser. Fill in the form and submit to see the data appear in your Google Sheet.

## Project Structure
```
/your-project-folder
│── static/
│   └── script.js      # javascript file
│   └── style.css      # stylesheet
│── templates/
│   └── form.html      # HTML form
│── credentials.json   # Google API credentials (DO NOT SHARE)
│── app.py             # Flask backend
│── README.md          # Project documentation
```

## Code Overview
### `app.py`
Handles form submission and stores data in Google Sheets.

### `templates/form.html`
A simple form for user input.

## Notes
- Ensure the `credentials.json` file is kept **secure** and not shared.
- If the form is not submitting data, verify that your Google Sheet is shared with the service account.
- Debugging: Use `print()` statements in `app.py` to check if form data is being received properly.

For any issues, feel free to ask [Krupal](mailto:krupalfataniya007@gmail.com). 😊