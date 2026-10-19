# Hailu DevFusion — Portfolio Website

A responsive portfolio starter for **Hailu Tadese**, using the brand **Hailu DevFusion** and the professional title **Digital Creative Technologist**.

Built with HTML5, CSS3, and vanilla JavaScript. No framework, build step, paid library, or backend is required for the static portfolio.

## Project structure

```text
hailu-devfusion-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── (add your own photo and project images here)
```

## Open and test in Visual Studio Code

1. Download and extract the ZIP file.
2. Open Visual Studio Code.
3. Select **File → Open Folder…** and choose `hailu-devfusion-portfolio`.
4. Open `index.html`.
5. For the simplest test, open `index.html` in a browser. For a better development workflow, install the **Live Server** extension from the VS Code Extensions view, then right-click `index.html` and choose **Open with Live Server**.
6. Test the navigation, mobile menu, project filters, contact links, and layout at different browser widths. Use the browser developer tools' responsive device mode to test mobile and tablet sizes.

Google Fonts are loaded from Google Fonts when internet access is available. The site still works if fonts cannot load; it will fall back to sans-serif fonts.

## Personalize the site before publishing

### 1. Add your profile photo

1. Add your own photo to the `assets/` folder, for example `hailu-profile.jpg`.
2. In `index.html`, find the `<!-- Replace this marked placeholder with your own photo -->` comment.
3. Replace the `.photo-placeholder` block with the following, changing the filename if needed:

   ```html
   <div class="photo-placeholder photo-image">
     <img src="assets/hailu-profile.jpg" alt="Portrait of Hailu Tadese">
   </div>
   ```

4. Add this CSS to the end of `style.css`:

   ```css
   .photo-image { padding: 0; overflow: hidden; }
   .photo-image img { display: block; width: 100%; height: 360px; object-fit: cover; border-radius: 14px; }
   ```

Use a compressed JPG or WebP image and make sure you have permission to publish it.

### 2. Update your biography

Edit the text inside the **About Me** section in `index.html`. Add only details that are true for you: education, experience, projects, goals, and the tools you have used. Remove the editable reminder when you no longer need it.

### 3. Update skills

Skills are written as individual `.skill-item` elements in the **Skills and Tools** section in `index.html`. Duplicate an item to add a skill or remove an item that does not represent your current experience. Update both the skill name and its description.

### 4. Replace project samples with real projects

Each project is an `<article class="project-card">` inside `.project-grid` in `index.html`.

- Change `data-category` to `web`, `video`, `design`, or `branding` so the category filter works.
- Replace the title, category label, and description.
- Replace the sample preview markup with an image such as:

  ```html
  <a class="project-preview" href="https://your-live-demo.example" target="_blank" rel="noopener noreferrer">
    <img src="assets/my-project-preview.webp" alt="Preview of my responsive website project">
  </a>
  ```

- Add a real live-demo URL and/or GitHub repository link in the project links. Do not leave example domains or invent client work.
- Remove the “SAMPLE CONCEPT” label only when the project is real and ready to show.
- Keep alt text descriptive and truthful. Use optimized images (preferably WebP, around 150–300 KB where practical).

The current six gallery items are clearly marked fictional sample concepts. They are layout examples, not claims of completed client work.

### 5. Add real contact and social links

Open `script.js` and find `const contactDetails`. Replace the placeholder values:

```js
const contactDetails = {
  email: "you@example.com",
  github: "https://github.com/your-username",
  linkedin: "https://www.linkedin.com/in/your-profile/",
  youtube: "https://www.youtube.com/@your-channel"
};
```

Use your real email and full profile URLs. If you do not use a platform, leave its value as an empty string. Then, in `index.html`, replace `YOUR_EMAIL@example.com` in the two `mailto:` attributes with the same real email. The JavaScript shows a reminder instead of silently pretending placeholder contact links work.

### 6. Update SEO details

At the top of `index.html`, edit the `<title>`, meta description, and Open Graph description to match your current focus. Keep the title and description concise and accurate.

## Publish using GitHub Pages

### A. Create a GitHub repository

1. Sign in to your GitHub account at [github.com](https://github.com/).
2. Click **New repository**.
3. Name it `hailu-devfusion-portfolio` (or another name you prefer).
4. Choose **Public** if you want the site to be accessible publicly through the normal GitHub Pages setup.
5. Create the repository. Do not upload passwords, access tokens, private keys, or other secrets.

### B. Upload the website files

**Beginner-friendly browser method:**

1. Open your new repository.
2. Choose **Add file → Upload files**.
3. Upload `index.html`, `style.css`, `script.js`, and `README.md`, plus the `assets` folder and its contents if you have any. Keep `index.html` at the repository root.
4. Enter a commit message such as `Add portfolio website`.
5. Click **Commit changes**.

**Git method (optional):** Open a terminal in the project folder and run:

```bash
git init
git add .
git commit -m "Add Hailu DevFusion portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hailu-devfusion-portfolio.git
git push -u origin main
```

Replace `YOUR-USERNAME` with your GitHub username. If Git says the remote already exists, inspect `git remote -v` rather than adding a second remote blindly.

### C. Enable GitHub Pages

1. In the repository, open **Settings**.
2. Select **Pages** in the sidebar.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then click **Save**.
5. Wait for GitHub Pages to finish publishing. The Pages screen will show the published URL when deployment is ready. A typical project URL is `https://YOUR-USERNAME.github.io/hailu-devfusion-portfolio/`, but use the actual URL shown by GitHub.

The site is **not published by this starter ZIP**. It becomes public only after you upload it and GitHub Pages successfully deploys it.

## How to update the live website

1. Edit the files locally in VS Code.
2. Test the changes in a browser.
3. Upload the changed files to the same GitHub repository and commit them, or use `git add`, `git commit`, and `git push`.
4. GitHub Pages automatically rebuilds the site after the commit. Allow a little time, then refresh the published URL. If changes do not appear, check the Pages deployment status and browser cache.

## Notes

- This is a static website. There is no server-side contact form or database.
- The email links open the visitor's email application after you add your real address.
- If you later add a contact form, you will need a backend or a form service to receive and store submissions.
- Check the published site on both mobile and desktop after every major change.
