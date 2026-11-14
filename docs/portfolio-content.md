# Portfolio content and assets

The active site uses `src/main.tsx`, `src/App.tsx`, and `src/data/portfolio.ts`. The original Pockraft `public/portfolio-state.css` and `public/portfolio-design-system.css` supply the design system; `style.css` adds only content-specific styles. The original `public/mobile-nav-dock.js` supplies mobile navigation. The former frozen `public/portfolio-state.js` bundle is retained as a reference but is no longer loaded.

## Supplied sources

- `data/nora-cv.jpg`: name, biography, shop experience, education, skills, location, and email. The extra leading `@` in the printed email was removed for the email link.
- `data/profile.jpg~`: supplied profile card, including the Junior Accountant role at Marketing Capsule. No employment dates were supplied for this role.
- `data/online-shop-product3.jpg` and `data/online-shop-product4.jpg`: product photographs.
- `data/online-shop-product1.mp4`, `data/online-shop-product2.mp4`, and `data/online-shop-product5.mp4`: product videos.
- `data/answers.txt`: empty when this version was prepared.

The original CV is downloadable as a JPEG, its supplied format. Education dates are transcribed without claiming degree completion. Private residential details and date of birth are not displayed in the page; the original downloadable CV includes its original information.

## Portrait

Output: `public/profile-clean.png`. Edited with the built-in imagegen tool using `data/profile.jpg~`; the original is unchanged.

Prompt:

> Use case: identity-preserve. Edit target: the supplied employee card photo. Produce just a clean rectangular professional head-and-shoulders portrait of the exact woman shown, for her corporate portfolio. Remove ALL card text, graphic design and the blue and white oval border. Preserve her exact face, expression, hairstyle, black blazer, white blouse and natural skin tone. Retain the neutral light gray photo background, extending it naturally to rectangular edges. Do not beautify or change her identity. Centered portrait, vertical 4:5 composition with modest space above hair, shoulders visible, soft original lighting. No text, no frame, no oval, no logos. Save the final image for use in the local website project.

## Local development

Run `npm run dev` for the local preview and `npm run build` for TypeScript checking and production output. Use `npm run preview` to serve the production build.
