# Jenny Joseph K - Portfolio

AI Engineer | DevOps Specialist | Ethical Hacking Expert

## About

This is the portfolio website for Jenny Joseph K, a Master of Computer Applications student specializing in AI, DevOps, and Ethical Hacking. Winner of healthcare innovation projects with expertise in Python, TensorFlow, and cybersecurity.

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Backend**: Express.js + Node.js
- **Database**: Drizzle ORM

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ClientPortfolio.git
cd ClientPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Setup Instructions:

1. **Create a GitHub Repository:**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `ClientPortfolio` (or your preferred name)

2. **Push your code to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/ClientPortfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch and "/ (root)" folder
   - Click Save

4. **Enable GitHub Actions:**
   - Go to Settings → Actions → General
   - Ensure "Allow all actions and reusable workflows" is selected
   - Save the changes

The site will be available at: `https://yourusername.github.io/ClientPortfolio/`

## Email Configuration

The contact form sends emails using SendGrid. To enable email functionality:

1. **Get a SendGrid API Key:**
   - Sign up at [SendGrid](https://sendgrid.com/)
   - Go to Settings → API Keys
   - Create a new API key with "Mail Send" permissions

2. **Verify a Sender Email:**
   - In SendGrid, go to Settings → Sender Authentication
   - Verify a sender email address (this will be the "from" address)

3. **Set Environment Variables:**
   - Copy `.env.example` to `.env`
   - Add your SendGrid API key and email settings:
   ```env
   SENDGRID_API_KEY=your_api_key_here
   CONTACT_EMAIL=jennyjosephksj7@gmail.com
   SENDGRID_FROM_EMAIL=your_verified_sender@example.com
   ```

4. **For Production Deployment:**
   - Add these environment variables to your hosting platform (Render, Railway, Vercel, etc.)
   - The contact form will automatically send emails when configured

**Note:** If SendGrid is not configured, the contact form will still save messages to storage, but emails won't be sent.

## Features

- Responsive design
- Modern UI with Tailwind CSS
- Contact form with email notifications
- Project showcase
- Skills and experience sections
- Professional animations

## License

MIT License 