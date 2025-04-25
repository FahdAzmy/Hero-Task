# Vibe Coder Mini Challenge - Hero Section

![Hero Section Preview](./assets/hero-tasl.png)

A modern, interactive, and responsive hero section built with React, TypeScript, and Tailwind CSS.

## Overview

This project is a Hero Section for a homepage, built as part of the Vibe Coder Mini Challenge. The goal was to create a visually appealing, responsive, and interactive Hero Section that showcases design taste and problem-solving skills. The section includes a headline, subheadline, CTA button, an image, and a "Regenerate with AI" button that swaps content dynamically. All text is editable inline, and the design is enhanced with modern UI/UX features. The project is built using React, TypeScript, and Tailwind CSS, with additional features like dark/light mode, local storage for text persistence, and smooth animations.

## Features

### Core Requirements:

- **Headline & Subheadline**: Editable inline with a clean, modern typography (Inter font).
- **CTA Button**: A "Get Started" button with hover effects for interactivity.
- **Image**: Displays technology-themed images from Unsplash, optimized for performance.
- **Regenerate with AI Button**: Randomly swaps headline, subheadline, and image with a fake loading state to simulate AI generation.
- **Inline Text Editing**: Users can click text to edit it, with validation to prevent empty inputs and persistence using localStorage.
- **Responsive Design**: Fully responsive layout that adapts to mobile, tablet, and desktop screens.

## Tech Stack

- **React**: For building the UI components and managing state.
- **TypeScript**: For type-safe code and better maintainability.
- **Tailwind CSS**: For responsive and utility-first styling.
- **Google Fonts (Inter)**: For modern typography.
- **localStorage**: For persisting edited text.
- **Unsplash**: For high-quality, optimized images.

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Hero Section component
│   ├── EditableText.tsx   # Inline text editing component
├── App.tsx                # Main app component
├── types.ts               # TypeScript type definitions
├── styles.css             # Custom CSS for animations
├── index.css              # Tailwind CSS setup
├── index.tsx              # Entry point
```

## Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Project**:

   ```bash
   npm run dev
   ```

   The app will run at http://localhost:5173/.

## Vadio Link

https://drive.google.com/file/d/1tVZtea-yhLypq3cxPkoFLidngZCFJ93w/view?usp=sharing

## How It Works

- **Hero Section**: Displays a headline, subheadline, CTA button, and an image in a responsive two-column layout (stacked on mobile).
- **Regenerate with AI**: Clicking the button triggers a 500ms fake loading state, then updates the headline, subheadline, and image with random content from predefined arrays. The new image is guaranteed to be different from the current one.
- **Text Editing**: Click on the headline or subheadline to edit inline. Press Enter to save or Escape to cancel. Edited text is saved to localStorage.
- **Dark/Light Mode**: Toggle between themes using the button in the top-right corner. Colors and hover effects adapt dynamically.
- **Hover Effects**: Non-editing text elements lift 4px on hover with a subtle background change, optimized for both light and dark modes.
