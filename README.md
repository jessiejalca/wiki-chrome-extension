# WikiRoulette

![Featured image preview of the working extension.](./public/featured-image.png)

Created for UF's Swamphacks 2023, this extension taps into Wikipedia's API to suggest random Wikipedia article subjects for a user to read. It shows a preview of the article and provides a link to it to read more.

Built with React JS and CSS.

Stay tuned for the free live extension, currently pending review on the Chrome Web Store.

[Live Prototype](https://zesty-buttercream-4c83d0.netlify.app)

## Run Extension Locally

Why run it locally? You can use the extension now, while it's still in review, and/or you can try contributing!

Here's how:

1. **Clone the repository**  
    Open your terminal and run:

    ```bash
    git clone https://github.com/jessiejalca/wiki-chrome-extension.git
    cd wiki-chrome-extension
    ```

2. **Install dependencies**  
    Install the required packages:

    ```bash
    npm install
    ```

3. **Build the extension**  
    Create the production build:

    ```bash
    npm run build
    ```

    This will generate a `dist` folder containing the extension files.

4. **Load the extension in your browser**  
    - Open your Chromium-based browser (like Chrome or Edge).
    - Go to the Extensions page (`chrome://extensions/`).
    - Enable **Developer mode** (toggle in the top right).
    - Click **Load unpacked**.
    - In the dialog, select the `dist` folder inside your project directory.

5. **Pin and use the extension**  
    - After loading, you should see WikiRoulette in your extensions list.
    - Click the puzzle piece icon in your browser toolbar, then pin WikiRoulette for easy access.
    - Click the extension icon to start using it!

If you encounter any issues, make sure you have the latest version of Node.js and npm installed.

## Privacy Policy

WikiRoulette does not collect or store any personal user data.
It only retrieves public Wikipedia API results from `https://en.wikipedia.org/w/api.php`.
No analytics, no user tracking.
Permissions:

- `host_permissions`: `https://*.wikipedia.org/*`
- no `storage` permission needed
