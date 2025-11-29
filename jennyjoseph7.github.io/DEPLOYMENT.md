# Deployment Guide

This guide covers multiple options for hosting your portfolio project.

## Option 1: GitHub Pages (Frontend Only) ⚡ Quick & Free

**Best for:** Static portfolio without backend functionality

### Setup Steps:

1. **Ensure your code is pushed to GitHub:**
   ```bash
   git add .
   git commit -m "Fix package.json and prepare for deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository: https://github.com/jennyjoseph7/Portfolio
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**
   - Save

3. **The GitHub Actions workflow will automatically:**
   - Build your project on every push to `main`
   - Deploy to GitHub Pages

4. **Your site will be available at:**
   ```
   https://jennyjoseph7.github.io/Portfolio/
   ```

**Note:** This option only deploys the frontend. The contact form backend won't work.

---

## Option 2: Render (Full-Stack) 🚀 Recommended

**Best for:** Complete portfolio with backend API support

### Prerequisites:
- Render account: https://render.com (free tier available)
- Neon PostgreSQL database: https://neon.tech (free tier available)

### Setup Steps:

1. **Set up Neon Database:**
   - Sign up at https://neon.tech
   - Create a new PostgreSQL database
   - Copy your `DATABASE_URL` connection string

2. **Deploy on Render:**
   - Go to https://dashboard.render.com
   - Click **"New +"** → **"Web Service"**
   - Connect your GitHub repository
   - Configure:
     - **Name:** `portfolio` (or your preferred name)
     - **Region:** Choose closest to you
     - **Branch:** `main`
     - **Root Directory:** (leave empty)
     - **Environment:** `Node`
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`
   - Add Environment Variable:
     - **Key:** `DATABASE_URL`
     - **Value:** (paste your Neon database URL)
     - **Key:** `NODE_ENV`
     - **Value:** `production`
     - **Key:** `PORT`
     - **Value:** `5000` (Render will override this)

3. **Deploy Database Schema:**
   - After first deployment, run migrations:
     ```bash
     npm run db:push
     ```
   - Or set up a build script to auto-run migrations

4. **Your site will be available at:**
   ```
   https://portfolio.onrender.com (or your custom domain)
   ```

### Render Configuration File:

A `render.yaml` file is already created in the repository for easy deployment.

---

## Option 3: Vercel (Full-Stack Alternative) ⚡

**Best for:** Fast deployments with serverless functions

### Setup Steps:

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure Environment Variables:**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add:
     - `DATABASE_URL`: Your Neon database URL
     - `NODE_ENV`: `production`

**Note:** Vercel is optimized for serverless. You may need to adapt the Express server to serverless functions.

---

## Option 4: Railway (Full-Stack) 🚂

**Best for:** Simple full-stack deployment

### Setup Steps:

1. **Sign up:** https://railway.app
2. **New Project** → **Deploy from GitHub repo**
3. **Add PostgreSQL Database:**
   - Click **"+ New"** → **"Database"** → **"Add PostgreSQL"**
4. **Configure Web Service:**
   - Connect your GitHub repo
   - Environment Variables will be auto-detected
   - Add `DATABASE_URL` from the database service
5. **Deploy!**

---

## Environment Variables Required

For full-stack deployments, you'll need:

| Variable | Description | Required For |
|----------|-------------|--------------|
| `DATABASE_URL` | PostgreSQL connection string | Backend functionality |
| `NODE_ENV` | Set to `production` | Production builds |
| `PORT` | Server port (usually auto-set) | Server startup |
| `SENDGRID_API_KEY` | (Optional) For email functionality | Contact form emails |

---

## Post-Deployment Checklist

- [ ] Test the homepage loads correctly
- [ ] Test all navigation links
- [ ] Test the contact form (if backend is deployed)
- [ ] Verify database connections (if applicable)
- [ ] Check console for any errors
- [ ] Test on mobile devices
- [ ] Verify dark mode works
- [ ] Check that resume download works

---

## Troubleshooting

### Build Fails:
- Check Node.js version (requires 18+)
- Ensure all dependencies are in `package.json`
- Check build logs for specific errors

### 404 Errors:
- Verify `base` path in `vite.config.ts` matches your deployment path
- Check that `dist` folder is being generated correctly

### Database Connection Issues:
- Verify `DATABASE_URL` is set correctly
- Check database is accessible from deployment platform
- Ensure database schema is migrated: `npm run db:push`

### Static Files Not Loading:
- Verify `dist` folder exists after build
- Check that `server/vite.ts` points to correct path
- Ensure static files are included in deployment

---

## Quick Commands

```bash
# Build for production
npm run build

# Run locally in production mode
NODE_ENV=production npm start

# Push database schema
npm run db:push

# Generate database migrations
npm run db:generate
```

---

## Need Help?

- Check the project README.md
- Review platform-specific documentation
- Check GitHub Issues in the repository

