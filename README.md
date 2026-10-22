# Rocksolid Business Solutions Pvt. Ltd.

Official website for **Rocksolid Business Solutions Pvt. Ltd.**, a premier business training, leadership development, and strategic management consultancy based in Kathmandu, Nepal.

- **Proprietor:** Mr. Dipankar Sherpa
- **Location:** Budhanilkantha Municipality, Ward No. 08, Kathmandu, Nepal
- **Phone:** +977-9851233343
- **WhatsApp:** +977 9851233343

---

## 🚀 Running the Project Locally (After Syncing from GitHub)

If you have cloned this repository to your computer from GitHub:

```bash
# 1. Install all required dependencies
npm install

# 2. Run the local development server (runs on http://localhost:3000)
npm run dev

# 3. To create a production build for hosting
npm run build

# 4. To preview the production build locally
npm run preview
```

---

## 🌐 Deploying on GitHub Pages (Fixing Blank Screen)

This repository is pre-configured with **relative asset paths (`base: './'`)** in `vite.config.ts` and includes an automated **GitHub Pages Action** in `.github/workflows/deploy.yml`.

### How to turn on GitHub Pages in 1 minute:
1. Open your repository on GitHub.
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. That's it! Every time you push or sync changes from Google AI Studio to GitHub, the site will automatically build and deploy smoothly without any blank screen.

### Alternatively, if you deploy using static hosting (Vercel, Netlify, Cloudflare Pages):
- **Build Command:** `npm run build`
- **Output Directory:** `dist`

---

## 📂 Project Structure

- `src/views/` - Individual page views (Home, About, Services, Training Programs, Why Us, Insights, Contact).
- `src/components/` - Reusable components (Navbar, Footer, Logo, ConsultationModal, VerificationModal, PrivacyModal, ErrorBoundary).
- `src/data/companyData.ts` - Centralized data source containing verified company info, services, curricula, and editable placeholders.
- `index.html` - HTML5 shell configured with OpenGraph metadata and Schema.org LocalBusiness structured data.
- `vite.config.ts` - Configured with relative base path (`./`) to support subdirectories and custom domains.
