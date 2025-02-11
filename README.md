# Live Chat App

This is a simple real-time chat application built using **Node.js, Express, and Socket.io** for real-time communication, with **Tailwind CSS** for styling and **EmojioneArea** for emoji support.

## Features

### 1. **User Authentication (Guest Mode)**
   - Users can join the chat by entering a username.
   - No password or sign-up required.

### 2. **Real-time Messaging**
   - Messages are instantly broadcast to all users.
   - Usernames are displayed with messages.
   - System messages notify when users join or leave.

### 3. **Active Users List**
   - Displays a live list of connected users.
   - Automatically updates when users join or leave.

### 4. **Emoji Support**
   - Users can send messages with emojis using the **EmojioneArea** library.

### 5. **User-Friendly UI**
   - Responsive and visually appealing design with Tailwind CSS.
   - Background gradient effect.
   - Message display with timestamps.

### 6. **Leave and Back Buttons**
   - **Leave Button:** Allows users to exit the chat gracefully.
   - **Back Button:** Redirects users to the previous page.

### 7. **Error Handling**
   - If an error occurs, users are redirected to Google for troubleshooting.

## Installation & Setup

### 1. **Clone the repository**
```sh
   git clone https://github.com/yourusername/chat-app.git
   cd chat-app
```

### 2. **Install dependencies**
```sh
   npm install
```

### 3. **Run the server**
```sh
   node server.js
```

### 4. **Access the chat app**
   Open your browser and go to:
   ```
   http://localhost:9000
   ```

## Project Structure
```
/chat-app
 ├── public
 │   ├── index.html      # Frontend UI (HTML, CSS, JS)
 │   ├── style.css       # Tailwind CSS (if customized)
 │   └── script.js       # Client-side JS with Socket.io integration
 ├── server.js          # Node.js server with Socket.io
 ├── package.json       # Dependencies and scripts
 └── README.md          # Documentation
```

## Technologies Used
- **Frontend:** HTML, CSS (Tailwind CSS), JavaScript (jQuery, EmojioneArea)
- **Backend:** Node.js, Express.js, Socket.io

## Future Improvements
- Add support for private messaging.
- Improve UI with animations and themes.
- Store chat history in a database (MongoDB).
- Implement user authentication with login/signup.

## Author
Developed by **Your Name** - [GitHub Profile](https://github.com/MD-cdm/)

