# Apurv Baid Website – API integration

## Configure API URL
Create `.env` in this project root (copy `.env.example`) and set:
`VITE_API_URL=http://localhost:8080/api`
Restart Vite after changing `.env`.

## Connected website modules
- Home carousel: `GET /carousel` (active records ordered by displayOrder); API image paths/Base64 supported. Existing local slideshow images remain as fallback only when API carousel is empty.
- Home social links: `GET /site-settings` (`instagramUrl`, `linkedInUrl`); existing links are fallback when fields are empty.
- About banner: `GET /page-banners/about` (`imageUrl`).
- Portfolio banner: `GET /page-banners/portfolio` (`imageUrl`).
- Portfolio list: `GET /projects`; only active projects are displayed. Backend fields `heading`, `projectName`, `image`, `images`, `location`, `category`, `status`, `area`, and `description` are mapped to the existing UI.
- Project details: `GET /projects/{id}`.
- FAQ: `GET /faqs`; only active FAQs are shown.
- Career form: `POST /career-applications` multipart (`name`, `email`, `phone`, `position`, `coverLetter`, `resume`).
- Contact banner: `GET /page-banners/contact` (`imageUrl`).
- Contact form: `POST /contact-enquiries` JSON (`name`, `email`, `location`, `tellUsAboutYourProject`).

## Build/deploy
`npm ci` then `npm run build`.
In Vercel set `VITE_API_URL` to the production API base URL and redeploy.
