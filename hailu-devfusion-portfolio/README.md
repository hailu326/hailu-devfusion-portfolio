# Hailu DevFusion — Hybrid Portfolio

This version is based on the supplied Hailu DevFusion HTML/CSS/JavaScript portfolio. Existing content is retained and additional sections/features are added.

## Design
- Dark navy hero and navigation
- Light content sections for About, Skills, Education, Projects, Video Work, Services, GitHub, Resources, and Contact
- Subtle transitions and responsive layouts
- Reduced-motion support

## Added
- MongoDB Atlas & Compass, MySQL, and SQL skill entries
- HAILACHO Chat App card with supplied screenshot, Open Live App, and Complete Project link
- Education, GitHub, Resources, and Video Editing sections
- Local video preview picker (preview only; does not upload)
- Chat App setup notes

## Before publishing
- Confirm the exact GitHub repository URL and replace the temporary repositories-page link on the Complete Project button.
- Add your real CV PDF as `downloads/CV.pdf`.
- Add your real Chat App proposal PDF as `downloads/ChatApp_Proposal.pdf`.
- Add a real edited video if you want a permanent video on the live site.
- Verify the contact links and email address.
- Never add `.env`, database credentials, private tokens, or other secrets to this public repository.

## Local preview
Open `index.html` with VS Code Live Server or another local static server. No build command is required for the static HTML/CSS/JS portfolio.

## Existing Git workflow
Keep the current repository and `.git` folder. Back up first, copy the updated files into the existing repository, inspect with `git status`, test locally, then commit and push to the branch connected to the existing Render Static Site.
