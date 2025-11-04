# Die5210Services - Ready-to-deploy Static Website

This package contains a simple, responsive static website for Die5210Services.

## Files included
- index.html
- styles.css
- script.js
- privacy.html
- terms.html

## What you should do next (quick deploy)

### Option A: Deploy on Netlify (recommended, auto SSL)
1. Create a free account on https://netlify.com
2. Click "Add new site" → "Import an existing project" → connect your GitHub and push this repo, or use "Deploy manually" and drag & drop the site folder.
3. If you use Netlify Forms, replace the form `action` or add `data-netlify="true"` to the `<form>` tag and remove the `action` to use Netlify's form handling.
4. Set custom domain in Site settings if you have one. Netlify will provide HTTPS automatically.

### Option B: GitHub Pages
1. Create a new repository on GitHub and push these files.
2. Go to Settings → Pages → Select branch `main` and folder `/` then Save.
3. GitHub Pages will host the site and provide HTTPS.

## Forms & Payments
- To receive form submissions, use Formspree (https://formspree.io) or Netlify Forms.
  - Formspree: create a form and copy the form endpoint URL into the `action` attribute of the form in `index.html`.
  - Netlify Forms: add `data-netlify="true"` to the `<form>` and remove the `action` attribute.
- Payments: Replace the PayPal link with your PayPal.me link or Stripe Checkout link.

## Security & final steps
- Activate 2FA on your die5210services@gmail.com account.
- Test the form and a PayPal payment.
- Consider buying a domain (die5210services.com) and setting a professional email like `contact@die5210services.com`.

## Contact
If you want, I can:
- Generate a ZIP with all files (already provided).
- Create a ready GitHub repo (I cannot push to your account; you must push).
- Help you configure Netlify or Formspree step-by-step.
