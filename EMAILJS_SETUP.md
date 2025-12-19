# EmailJS Setup Instructions

Follow these steps to get your contact form working with EmailJS:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Copy your **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}} - Portfolio Contact Form

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. In the template settings, make sure these variables are mapped:
   - `from_name`
   - `from_email`
   - `subject`
   - `message`
   - `to_email`

5. Set the **To Email** to: `britten63@hotmail.com`
6. Copy your **Template ID**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called API Key)
3. Copy it

## Step 5: Update Your Project

1. Create a `.env` file in your project root (already in .gitignore):

```bash
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Update [Contact.jsx](src/components/Contact/Contact.jsx) lines 27-29:

Replace:
```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

With:
```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
```

## Step 6: Test It

1. Restart your dev server: `npm run dev`
2. Fill out the contact form on your portfolio
3. Submit and check your email (britten63@hotmail.com)
4. You should receive the contact form submission!

## Troubleshooting

- **Not receiving emails?** Check your EmailJS dashboard logs
- **CORS errors?** Make sure you're using the public key, not the private key
- **Template errors?** Verify all variable names match in your template
- **Still not working?** Check the browser console for error messages

## Important Notes

- The `.env` file is already in `.gitignore` and won't be committed to git
- When deploying (Vercel, Netlify, etc.), add these environment variables in your hosting platform's settings
- Free tier limit: 200 emails/month
- For production, consider upgrading or using a backend service for higher volumes
