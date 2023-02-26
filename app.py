import sqlite3

# Connect to the database
conn = sqlite3.connect('users.sqlite')

# Create a cursor object to execute SQL commands
cursor = conn.cursor()

# Define a function to register a new user
def signup(first_name, last_name, email, phone_number, password):
    # Check if the email and phone number are already registered
    cursor.execute('SELECT * FROM users WHERE email = ? OR phone_number = ?', (email, phone_number))
    existing_user = cursor.fetchone()
    if existing_user:
        return False  # Registration failed
    else:
        # Insert the new user into the database
        cursor.execute('INSERT INTO users (first_name, last_name, email, phone_number, password) VALUES (?, ?, ?, ?, ?)', (first_name, last_name, email, phone_number, password))
        conn.commit()
        return True  # Registration successful

# Define a function to authenticate a user
def login(email, password):
    # Check if the email and password match a registered user
    cursor.execute('SELECT * FROM users WHERE email = ? AND password = ?', (email, password))
    login= cursor.fetchone()
    if Loginr:
        # Insert a login attempt record into the database
        user_id = login[0]
        cursor.execute('INSERT INTO login_attempts (user_id, login_time) VALUES (?, DATETIME("now"))', (user_id,))
        conn.commit()
        return True  # Authentication successful
    else:
        return False  # Authentication failed

# Close the database connection when finished
conn.close()