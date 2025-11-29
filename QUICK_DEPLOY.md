# Quick Deploy Guide 🚀

Choose your hosting option below:

## 🎯 Fastest Option: GitHub Pages (5 minutes)

**For:** Frontend only (portfolio showcase)

### Steps:

1. **Commit and push your changes:**
   ```bash
   git add package.json package-lock.json server/vite.ts DEPLOYMENT.md render.yaml
   git commit -m "Fix package.json and add deployment files"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to: https://github.com/jennyjoseph7/Portfolio/settings/pages
   - Under **Source**, select: **"GitHub Actions"**
   - Click **Save**

3. **Done!** Your site will be live at:
   ```
   
   ```
   *(First deployment takes 2-3 minutes)*

---

## 🚀 Full-Stack Option: Render (15 minutes)

**For:** Complete portfolio with contact form backend

### Steps:

1. **Get a free database:**
   - Sign up at https://neon.tech
   - Create a new PostgreSQL database
   - Copy the connection string (DATABASE_URL)

2. **Deploy on Render:**
   - Sign up at https://render.com
   - Click **"New +"** → **"Web Service"**
   - Connect GitHub repo: `jennyjoseph7/Portfolio`
   - Use these settings:
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`
   - Add environment variable:
     - **DATABASE_URL:** (paste your Neon connection string)
   - Click **"Create Web Service"**

3. **Setup database:**
   - After deployment, go to Render shell/console
   - Run: `npm run db:push`
   - This creates your database tables

4. **Your site will be live at:**
   ```
   https://portfolio-XXXX.onrender.com
   ```
   *(First deployment takes 5-10 minutes)*

---

## ✅ After Deployment

Check your site:
- ✅ Homepage loads
- ✅ All navigation works
- ✅ Contact form works (if backend deployed)
- ✅ Resume downloads
- ✅ Dark mode works

---

## 📚 Need More Details?

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions and troubleshooting.

