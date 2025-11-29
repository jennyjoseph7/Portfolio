# Fix: 404 Error at Root Domain

## The Problem

You're accessing `jennyjoseph7.github.io` but getting a 404 because:
- Your repository is named `Portfolio` (project repository)
- Project repositories are **only** accessible at `/repository-name/`
- You **cannot** access them at the root domain

## Solutions

### ✅ Option 1: Rename Repository (Recommended for Root Domain)

**This allows you to use `jennyjoseph7.github.io` directly:**

1. **On GitHub:**
   - Go to: https://github.com/jennyjoseph7/Portfolio/settings
   - Scroll to "Repository name"
   - Change: `Portfolio` → `jennyjoseph7.github.io`
   - Click "Rename"

2. **Update base path to root:**
   ```bash
   # Update vite.config.ts line 28:
   base: process.env.NODE_ENV === 'production' ? '/' : '/',
   ```

3. **Update git remote:**
   ```bash
   git remote set-url origin https://github.com/jennyjoseph7/jennyjoseph7.github.io.git
   ```

4. **Rebuild and deploy:**
   ```bash
   npm run build
   git add vite.config.ts
   git commit -m "Configure for root domain"
   git push origin main
   ```

**Result:** Site will be at `https://jennyjoseph7.github.io/`

---

### ✅ Option 2: Keep Current Setup (Easier)

**Just use the correct URL with `/Portfolio/`:**

Your site works perfectly at:
```
https://jennyjoseph7.github.io/Portfolio/
```

**No changes needed!** Just bookmark or share this URL.

---

## Recommendation

Since you're trying to access the root domain, **Option 1** is what you want. It takes 5 minutes and your site will work at the root domain.

**Note:** After renaming the repository, it may take a few minutes for GitHub Pages to update.

