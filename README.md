# Academic Website

A clean, single-page academic homepage (plain HTML/CSS, no build step).

## Files
- `index.html` — page content (edit your bio, news, and publications here)
- `style.css` — styling
- `assets/photo.jpg` — your profile photo (add this; see `assets/README.txt`)

## Preview locally
Just double-click `index.html` to open it in your browser. Or run a local server:

```sh
cd ~/Desktop/academic-website
python3 -m http.server 8000
# then open http://localhost:8000
```

## Publish to GitHub Pages

The simplest setup uses a **user site** so your URL is `https://USERNAME.github.io`.

1. Create a new repository on GitHub named exactly **`USERNAME.github.io`**
   (replace `USERNAME` with your GitHub username), set to **Public**.

2. In a terminal, push these files:

   ```sh
   cd ~/Desktop/academic-website
   git init
   git add .
   git commit -m "Initial academic website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/USERNAME.github.io.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages**. Under "Build and deployment", set
   **Source = Deploy from a branch**, **Branch = main / (root)**, and Save.

4. Wait ~1 minute, then visit **https://USERNAME.github.io**. Done.

To update the site later, just edit the files and:

```sh
git add . && git commit -m "Update" && git push
```

## Customize
Search `index.html` for the placeholder text in [square brackets] and the
`YOUR_ID` / `YOUR_USERNAME` / `YOUR_HANDLE` tokens, and replace them with your
own details. Add or remove `<li>` entries to manage news and publications.
