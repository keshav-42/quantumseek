# QuantumSeek - Search Smarter & Faster

**QuantumSeek** is an intelligent search platform that leverages advanced AI models and APIs to help you search smarter and faster. It provides sources, images, YouTube videos, and a detailed report on any topic you search. Additionally, it offers similar questions and topics, making your search experience more comprehensive.

## Features

- **AI-powered Search:** QuantumSeek utilizes advanced AI models (Together AI, Groq) to provide faster and smarter search results.
- **Comprehensive Search Results:** Get relevant sources, images, and YouTube videos related to your search query.
- **Detailed Reports:** The platform prepares an in-depth report about your topic, gathering data from multiple reliable sources.
- **Topic Recommendations:** Receive similar questions and topics based on your search query to help you explore related areas of interest.
- **User-friendly Interface:** Built with Next.js, TypeScript, and Tailwind CSS for a fast and responsive UI.

![Image](https://github.com/user-attachments/assets/530772ab-bec1-4055-8e28-043d7f91dc95)

![Image](https://github.com/user-attachments/assets/1ea99665-ec65-4acc-b9c0-b8a9ab8d1d4d)

![Image](https://github.com/user-attachments/assets/ec4488bd-40d9-49eb-8328-fd55764a26d6)

![Image](https://github.com/user-attachments/assets/1401ab96-50d4-49fe-bb4a-c03453d47e6b)

![Image](https://github.com/user-attachments/assets/1249edf0-5aac-410f-aec9-4ef0abc738e9)

## Tech Stack

- **Frontend:**  
  - [Next.js](https://nextjs.org/)  
  - [TypeScript](https://www.typescriptlang.org/)  
  - [Tailwind CSS](https://tailwindcss.com/)  

- **AI Models:**  
  - [Together AI](https://www.together.xyz/)  
  - [Groq](https://www.groq.com/)

- **APIs:**
  - [Google YouTube API](https://developers.google.com/youtube/v3)  
  - [Tavily API](https://tavily.com/)

## Installation

1. Clone the repository:

2. Install the dependencies:

  ```bash
  npm install
  ```

3. Set up environment variables:

  - Create a `.env` file in the root directory and add the following keys: 

  ```makefile
  TAVILY_API_KEY=
  NEXT_PUBLIC_YOUTUBE_API_KEY=
  GROQ_API_KEY=
  HELICONE_API_KEY=
  TOGETHER_API_KEY=
  ```

4. Run the application:

  ```bash
  npm run dev
  ```

5. Visit `http://localhost:3000` to start using QuantumSeek.

## Usage

1. Go to the homepage of QuantumSeek.
2. Enter your search query into the search bar provided.
3. QuantumSeek will display:
   - **Relevant Sources:** Links to articles and webpages related to your search term.
   - **Images:** A collection of images sourced from reliable platforms.
   - **YouTube Videos:** Embedded video content relevant to your query.
   - **Detailed Report:** A comprehensive report summarizing the key points and insights about your topic.
   - **Similar Questions and Topics:** Suggestions to explore related subjects or queries for deeper understanding.
4. Use the interactive interface to navigate and refine your search as needed.

