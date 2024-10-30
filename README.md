# 📸 Image Search App

Welcome to the **Image Search App**! This application allows users to search for images using the Unsplash API. 🌄✨ Users can toggle between light and dark themes and view the latest image results in a responsive gallery layout.

## 🖼️ Features

- 🔍 **Search Functionality**: Users can search for images by entering keywords.
- 🎨 **Theme Toggle**: Switch between light and dark modes for a customized viewing experience.
- 📜 **Infinite Scroll**: View image results in a grid layout that scrolls smoothly.
- ⚡ **React Query**: Efficient data fetching with caching and state management using `@tanstack/react-query`.

## 🛠️ Built With

- **React**: UI framework for building components.
- **Vite**: Fast, modern development environment.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Unsplash API**: Source of high-quality images for search results.
- **React Query**: Handles API calls and caching.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14+ recommended)
- Unsplash API Access Key

### 🔧 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/image-search-app.git
   cd image-search-app
   ```
2. **Install Dependencies**:

```
npm install
```

3. **Environment Setup**:
   Create a .env file in the project root and add your Unsplash API key:

```
VITE_BASE_URL=https://api.unsplash.com
VITE_UNSPLASH_ACCESS_KEY=your_access_key
```

### 🏃 Run the App

To start the development server:

```
npm run dev
```

### 📁 Project Structure

````src/
├── components/
│   ├── Gallery.jsx          # Image gallery component
│   ├── SearchForm.jsx       # Search form component
│   └── ThemeToggle.jsx      # Theme toggle component
├── context/
│   ├── AppProvider.jsx      # Context and query providers
│   └── SearchProvider.jsx   # Search context provider
├── queries/
│   └── QueryHooks.js        # Custom hooks for data fetching
├── customInstance.js        # Axios instance configuration
├── App.jsx                  # Main application component
└── index.css                # Tailwind CSS and global styles```
````
