## 👨‍🏫 Module 1-1 [HTML]: Explore VSCode And What Is HTML

### 🧨Getting started with softwares

For starting web development we need a few softwares for getting started. let's download and install them first.

### 🧨Essential Downloads and Install method :
- VS Code : Download Link - <a href="https://code.visualstudio.com/download"> Download VS Code </a>
- Node js : Download Link - <a href="https://nodejs.org/en/download">Node.js Download</a>
- Git : Download Link - <a href="https://www.git-scm.com/downloads">Git Download</a>

---

<details>

  <summary>

#### 🎃 How to install VS Code?

  </summary>

To install Visual Studio Code (VS Code), follow these general steps. The specific steps may vary slightly depending on your operating system.

#### 🛠 Installation Steps (for Windows, macOS, and Linux):

- Once the download is complete, run the installer.
- Follow the installation wizard's instructions.
- Open Visual Studio Code after installation is complete.

#### 🛠 Additional Notes:

- During installation, you may have the option to add VS Code to the system PATH, which can be helpful for using VS Code from the command line.

- VS Code is a lightweight code editor and does not include a built-in compiler. If you are working with certain programming languages, you may need to install additional tools or extensions for language-specific support.

- Extensions are available for VS Code, which add functionality and language support. You can install extensions directly from the VS Code marketplace.

- Once installed, you can customize Visual Studio Code according to your preferences and start using it as your code editor.

</details>

---

<details>

  <summary>

#### 🎃 How to install Node?

  </summary>

To install Node.js, you can follow these general steps. Note that the specific steps might vary slightly depending on your operating system.

#### 🛠 Installation Steps (for Windows, macOS, and Linux):

`For Windows:`

- Visit the official Node.js website: <a href="https://nodejs.org/en/download">Node.js Downloads</a>
- Download the LTS (Long Term Support) version, which is recommended for most users.
- Run the installer.
- Follow the installation wizard's instructions.

Once the installation is complete, open a command prompt or PowerShell window and type `node -v` to check if Node.js was installed successfully. Also, check `npm -v` to verify the installation of npm (Node Package Manager).

---

`For macOS:`

- Visit the official Node.js website: <a href="https://nodejs.org/en/download">Node.js Downloads</a>
- Download the LTS (Long Term Support) version, which is recommended for most users.
- Run the installer.
- Follow the installation wizard's instructions.

Open a terminal and type `node -v and npm -v` to check if Node.js and npm were installed successfully.

---

`For Linux:`

- Using Package Manager `(Debian/Ubuntu)`:

Open a terminal and run the following commands:

```bash

sudo apt update
sudo apt install nodejs npm

```

- Using Package Manager `(Fedora)`:

Open a terminal and run the following command:

```bash

sudo dnf install nodejs

```
- Using Node Version Manager (NVM) `(for Linux, macOS, or WSL on Windows)`:

  - Install NVM by running the following command in your terminal:

```bash

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

```

This command installs NVM. Follow the instructions in the terminal to complete the installation.

  - Close and reopen your terminal or run:

```bash

source ~/.bashrc  # or source ~/.zshrc if you are using Zsh

```

  - Install a specific version of Node.js using NVM. For example:

```bash

nvm install 14  # Installs Node.js version 14

```

You can replace 14 with the version you prefer.

- Verify the installation by typing:

```bash

node -v
npm -v

```

This should display the installed Node.js and npm versions.

Once Node.js is installed, you can use it to run JavaScript applications and npm to manage packages and dependencies.

</details>

---

<details>

  <summary>

#### 🎃 How to install Git?

  </summary>

To install Git, you can follow these general steps. The specific steps may vary depending on your operating system.

`For Windows:`

- Visit the official Git website: <a href="https://www.git-scm.com/downloads">Git Download</a>
- Download the latest version for Windows.
- Run the installer.
- Follow the installation wizard's instructions, making sure to select appropriate options as needed.

Once the installation is complete, you can open a command prompt or Git Bash and type `git --version` to check if Git was installed successfully.

---

`For macOS:`

Git is usually pre-installed on macOS. You can check if it's installed by opening a terminal and typing `git --version`.

If Git is not installed or you want to update it, you can install it using Homebrew:

```bash

brew install git

```

If you don't have Homebrew installed, you can install it by following the instructions on the Homebrew website: <a href="https://brew.sh/"> Homebrew. </a>

---

`For Linux:`

- Using Package Manager `(Debian/Ubuntu)`:

  - Open a terminal and run the following command:

```bash

sudo apt update
sudo apt install git

```

- Using Package Manager `(Fedora)`:

  - Open a terminal and run the following command:

```bash

sudo dnf install git

```

- Verification:

-- After installation, you can verify that Git is installed by opening a terminal and running:

```bash

git --version

```

This should display the installed Git version.

- Configuration:

  - After installing Git, it's a good idea to configure your username and email. Open a terminal and run:

```bash

git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

```

Replace "`Your Name`" with your actual `name` and "`your.email@example.com`" with your `email address`. These configurations are used to identify your commits.

Now you have Git installed and configured on your system, and you can use it for version control in your projects.

</details>

---

### 🧨What is HTML?
- Hyper Text Markup Language : Used for web development.

### 🧨Start Learning:

#### Create a folder and open with VS code:
- Create a folder with desired name
- Open VS code
- Click file from top left corner of VS code
- click on open folder
- Select the folder created and open it
- bla bla bla follow : <a href="https://code.visualstudio.com/docs"> VS Code Docs </a>

---

## 👨‍🏫 Module 1-2 HTML Text: Creating Paragraphs, Text Formatting (B,I, Strong, Em)

### 🧨Creating Paragraphs and formatting:
- See : <a href="https://www.w3schools.com/html/html_paragraphs.asp"> Paragraphs and formatting </a>

### 🧨All tags:
- See : <a href="https://www.w3schools.com/tags/ref_byfunc.asp"> HTML Tags by Category </a>

### 🧨Need to know:

#### `b` & `strong` : 
- `<b>` (Bold): The `<b>` tag is used to apply bold formatting to text. However, it does not carry any specific semantic meaning. It is purely presentational, and its use is typically discouraged in favor of more semantically meaningful tags like `<strong>`. 
- `<strong>` (Strong Importance): The `<strong>` tag, on the other hand, is used to indicate that the enclosed text has strong importance or significance. It is a semantic tag, and browsers typically render the text as bold. The use of `<strong>` is recommended when you want to convey importance rather than just applying bold styling.

#### - `i` & `em` : 
- In HTML, the `<em>` (emphasis) tag is used to define emphasized text, and it is typically rendered as italicized text by browsers. However, it's important to note that the `<em>` tag is semantic, meaning it indicates the importance or emphasis of the enclosed text rather than specifying its presentation. 
- On the other hand, you can also use the `<i>` (italic) tag to explicitly define text that should be italicized. Unlike `<em>`, `<i>` is presentational and doesn't carry the same semantic meaning.

---

## 👨‍🏫 Module 1-3 HTML Text: Headings, Small, And Inline Vs Block (Div, Span)

`VS code’s sidebar hide unhide : Ctrl+b`

### 🧨 Important Extensions Install : 
- Live Server
- Code Spell Checker

### 🧨Learned Tags : 
- Paragraph : Writing Paragraph `<p></p>`
- Strong : Making something Important by making bold text `<strong></strong>`
- Heading : 6 types maximum to minimum `<h1></h1> <h2></h2> <h3></h3> <h4></h4> <h5></h5> <h6></h6>`
- Small : create comparatively small text : `<small></small>`
- em : emphasized text : `<em></em>`

`Inline : keeps each element in the same line.`

---

## 👨‍🏫 Module 1-4 HTML List: Container Tag, List Tags (Ol, Ul, Li), Line Break, Button

### 🧨Learned Tags : 
- List Item `<li></li>`
- Unordered List (Container Tag) `<ul> </ul>`
- Ordered List `<ol></ol>`
- Division Tag (Container Tag) `<div></div>`
- Line Break `<br>`
- Button Tag `<button></button>`

`Nested Tag : using multiple tags inside other tags`

---

## 👨‍🏫 Module 1-5 HTML Link: Creating Links With The Anchor Tag And Its Attributes (Href, Target)

`HyperText : Links> creating links with pages texts … … …`

### 🧨Learned Tags : 
- Anchor Tag `<a href=”#”></a>`

### 🧨Need to know :

`Attribute` : An attribute in HTML provides additional information about an HTML element and is always included in the opening tag. Attributes are made up of a name and a value, separated by an equals sign (=), and the entire attribute is enclosed in double or single quotes.

---

## 👨‍🏫 Module 1-6 HTML Image: Display Online Image, Local Image, Folder Image

`Website is a combination of text and images`

### 🧨Learned Tags : 
- Image Tags: 
	- => Void Tags `<img></img>`
	- => Self Closing Tags `<img/>`

---

## 👨‍🏫 Module 1-7 HTML Form: Input Types, Buttons, Select, Option, Login Form

### 🧨Learned Tags : 
- Form Tag : `<form>`
- Input Tag : `<input>`
- Select Tag : `<select>`

---

## 👨‍🏫 Module 1-8 HTML Structure: Doctype, Html, Head, Meta, Title, Body

### 🧨Html Structure : 
- See : <a href="https://www.w3schools.com/html/html_basic.asp"> HTML Structure </a>

### 🧨Learned Tags : 
- Html : `<html></html>`
- Head : `<head></head>`
- Title : `<title></title>`
- Fav Icon :  `<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">`
- Footer Tag : `<footer> </footer>`

---

## 👨‍🏫 Module 1-9 HTML Overview: Basic HTML Concepts And Practice Task

- What is Html?
- HTML Structure.
- HTML Structure Definitions : 
- Doctype : Inform Browser about document type and version
- HTML : Container for all html elements except doctype
- HEAD : Container for metadata stays in the middle of <html> and <body>
- META : Defines metadata, metadata contains information of a document
- TITLE : Defines title of a document
- BODY : Contains all the contents of a html page
- COMMENT : Not processed by browser used for understanding for a developer
- Block VS inline elements  

### 🧨Practice task 1 : 
- Create a basic HTML page with `doctype, html, head, meta, title and body` tags.
- Title will be `MY Trave Blog`
- `Add comments` to the code to explain each sections.

### 🧨Practice task 2 : 
- Create a `Heading` tag that will have text"`My Travel Blog`"
- `Format` that heading with `italic tag`.

### 🧨Practice task 3 : 
- Create a `div` and inside div create `a paragraph`.
- Add a `button` having the text `Read More`.

### 🧨Practice task 4 : 
- Create a `span tag` which will be outside div. It will have text `What I Bought`.
- `Format` The text in your span tag `bold`.
- Create an `ordered list` of `things you have bought` from the places you visited.
- Created another `span tag` with text `My favourite Food` and make it `bold`.
- Create an `unordered list` of your `favourite food` you ate in that place.

### 🧨Practice task 5 : 
- `Insert an image` of your `favourite food` using the `img` tag and add the `src, alt, width, and height` attribute to it.

### 🧨Practice task 6 :
- Create `a link` to your favourite song you listened to while traveling using the `anchor tag` and add the `href` and `target` attributes to it. `Hint:` Copy link from youtube.
- use `br` tag if necessary.

---

## ✨ What I have Learned and did 1st January?
- I have Learned basic HTML Tags today.
- Then tried to make a HTML page using my knowledge that I had learned.
- Here is the screenshot of today's complete project by clicking on the image you will redirect to my github upload:
<p align="center">
  <a href="https://github.com/mdsabbiralmamon/myJourneyFor2024/blob/main/Web_day1%20_html/travelBlog.html"><img src="https://cdn.discordapp.com/attachments/1117616249984258109/1191352030963433634/image.png"></a>
  <a href="https://github.com/mdsabbiralmamon/myJourneyFor2024/blob/main/Web_day1%20_html/travelBlog.html"><img src="https://cdn.discordapp.com/attachments/1117616249984258109/1191352122969698444/image.png?"></a>
  <a href="https://github.com/mdsabbiralmamon/myJourneyFor2024/blob/main/Web_day1%20_html/travelBlog.html"><img src="https://cdn.discordapp.com/attachments/1117616249984258109/1191352213809938473/image.png"></a>
  <a href="https://github.com/mdsabbiralmamon/myJourneyFor2024/blob/main/Web_day1%20_html/travelBlog.html"><img src="https://cdn.discordapp.com/attachments/1117616249984258109/1191352278997811270/image.png"></a>
</p>
