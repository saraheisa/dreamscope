# DreamScope AI

DreamScope AI is an AI-powered dream journal app that allows users to log their dreams and receive deep insights about recurring themes, emotions, and subconscious thoughts. This project showcases full-stack development skills, AI integration, and user experience design, making it a unique addition to your portfolio.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Dream Entry Logging:** Users can write detailed descriptions of their dreams and categorize them by tags.
- **AI Analysis:** Uses Natural Language Processing (NLP) to analyze dream entries, providing sentiment analysis and identifying recurring themes.
- **Insights and Reports:** Generates daily, weekly, and monthly reports on dream patterns with visualizations.
- **Mood Integration:** Correlates dream analysis with mood tracking to provide personalized insights.
- **Community Sharing:** Allows users to share anonymized dream entries and discuss them with the community.
- **Security and Privacy:** Ensures strong data encryption and user authentication for privacy.

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB or PostgreSQL
- **AI/ML Integration:** Python, TensorFlow, Hugging Face’s Transformers
- **Mobile:** React Native or Flutter (for future mobile app support)

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB (if using MongoDB)
- Python (for AI/ML integration)

### Steps

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/dreamscope-ai.git
   cd dreamscope-ai
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory and add the necessary environment
   ```bash
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the Development Server:
   ```bash
   npm run dev
   ```

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
