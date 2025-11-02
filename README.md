# 🧩 Escape Room Game

Welcome to the **Escape Room Game** — an interactive browser-based adventure filled with puzzles, clues, and mysterious challenges 🎯  
This project brings the thrill of an escape room directly to your browser using pure **HTML**, **CSS**, and **JavaScript**.

---

## 🌟 Features

- 🧠 **Challenging puzzles** with multiple difficulty levels
- 🕹️ **Dynamic gameplay** that responds to player actions
- 🎨 **Beautiful, immersive UI design**
- 🔊 **Multimedia integration** — sound effects, images, and videos
- 💡 **Easily customizable** — add new rooms, puzzles, or logic with minimal code

---

## 🧰 Technologies Used

| Technology | Purpose |
|-------------|----------|
| **HTML5** | Page structure and layout |
| **CSS3** | Styling, animations, and responsive design |
| **JavaScript (Vanilla)** | Game logic, puzzles, and interactivity |

---

## 🚀 How to Run Locally

1. **Clone the repository**
```bash
git clone https://github.com/Racheli76/Escape-room-game.git
cd Escape-room-game
```

2. **Open the main page**

- Double-click `index.html` to open it in your browser  
**or**
- Run a simple local server:
```bash
python -m http.server 8000
```
Then visit 👉 [http://localhost:8000](http://localhost:8000)

---

## 🗂️ Project Structure

```
Escape-room-game/
│
├── html/        # HTML pages (game screens, puzzles, etc.)
├── css/         # Styling and layout files
├── js/          # Core game logic and interactions
├── fonts/       # Custom fonts
├── photos/      # Game visuals and assets
├── saund/       # Audio files (suggested rename: sound/)
├── videos/      # Short clips and cinematic intros
└── README.md    # This documentation
```

---

## 💾 Handling Large Media Files

If your project includes large audio or video files (over **100 MB**), GitHub will reject them by default.  
You have two good options:

### Option 1 — Use Git LFS (Large File Storage)
```bash
git lfs install
git lfs track "*.mp4"
git add .gitattributes
git add .
git commit -m "Track video files with Git LFS"
git push -u origin main
```
> **Note:** Git LFS provides about **10 GB of free storage and bandwidth per month**.  
> Extra usage incurs a small fee per GB.

### Option 2 — External Media Hosting

Upload large files to **Google Drive**, **Dropbox**, or **Amazon S3**,  
and include links in your project instead of storing the files directly in Git.

---

## 💡 Ideas for Future Improvements

- ⏱️ Add a timer and scoring system
- 🔐 Support multiple difficulty levels
- 🌍 Add multilingual support (English, Hebrew, etc.)
- 📱 Full mobile responsiveness
- 💾 Save player progress using local storage

---

## 📸 Demo / Screenshots

> *(Add a screenshot or short demo video here once ready)*  
> Example:  
> ![Game Preview](photos/demo.png)

---

## 👩‍💻 Developers

**Racheli Cohen** 
📫 [GitHub Profile](https://github.com/Racheli76)

**Shulamit Halbershtadt**
📫 [GitHub Profile](https://github.com/Shu6136713)

---

🎮 *“The key to escape is not just in the code — it's in your mind.”*
