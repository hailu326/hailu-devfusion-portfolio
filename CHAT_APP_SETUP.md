# HAILACHO Chat App — Setup Notes

This guide is a starting point for the HAILACHO Chat App portfolio entry. It does not include private credentials or replace the project's own README.

## Open the live app
https://chat-app-1-x96z.onrender.com

## Find the complete project
Open the GitHub repositories page for `hailu326`:
https://github.com/hailu326?tab=repositories

Choose the actual HAILACHO Chat App repository. In `index.html`, replace the temporary GitHub repositories URL on the **Complete Project** button with that repository's direct URL.

## Local development
1. Clone the actual repository from GitHub.
2. Read its README and install dependencies using the project's documented package manager and commands.
3. Create your local `.env` file from the project's documented example. Never commit `.env`, passwords, MongoDB connection strings, API keys, or private tokens.
4. Run the development command documented in the project README.
5. Test sign-in, private messaging, file sharing, and mobile layout before publishing changes.

## Adding your CV and proposal PDFs to this portfolio
Place your own real files here:
- `downloads/CV.pdf`
- `downloads/ChatApp_Proposal.pdf`

Then update the corresponding buttons in `index.html` so their `href` points to those exact paths and add the `download` attribute. Do not publish a made-up or empty PDF.

## Adding a video-editing sample
For a permanent video on the published portfolio:
1. Put an optimized MP4 file at `assets/videos/video-editing-showreel.mp4`.
2. In `index.html`, replace the local-preview area with a `<video controls playsinline preload="metadata">` element whose source is `assets/videos/video-editing-showreel.mp4`.
3. Test playback on mobile and desktop. Keep the file size reasonable for visitors on mobile data.

The “Choose video file” control currently previews a file locally in your browser only. It does not upload the file to GitHub or Render.

## Publishing safely with your existing GitHub connection
1. Back up your current portfolio folder.
2. Copy the updated files into the existing repository; keep the `.git` folder.
3. Run `git status` and inspect the changed files.
4. Preview locally and test every navigation link, download, and project button.
5. Commit and push to the same branch connected to your existing Render Static Site.
6. Check the Render deploy log and test the published URL.

Do not change the Render service used by the Node.js Chat App when publishing this static portfolio. They are separate projects/services.
