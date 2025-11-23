# Franklin Ugwu - Portfolio

This is a personal professional portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 How to deploy to GitHub Pages

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### 2. Setup
Open your terminal (Command Prompt or Terminal) in this project folder and run:
```bash
npm install
```

### 3. Initialize Git
If this is not already a git repository, run:
```bash
git init
git add .
git commit -m "Initial commit"
```

### 4. Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com) and create a new public repository (e.g., `my-portfolio`).
2. Copy the command to push an existing repository. It looks like this:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/my-portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Run those commands in your terminal.

### 5. Deploy
Run this command to build the site and push it to a `gh-pages` branch automatically:
```bash
npm run deploy
```

### 6. Finish
1. Go to your GitHub Repository Settings > **Pages**.
2. Ensure the "Source" is set to the `gh-pages` branch.
3. Your site will be live at `https://YOUR_USERNAME.github.io/my-portfolio/` shortly!
