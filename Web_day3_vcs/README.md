## ✨ Module 3-1 What Is Version Control System, Git Vs GitHub

### What is version control system?
<p>A version control system (VCS) is a software tool that helps manage changes to source code or any set of files. It allows multiple developers to work collaboratively on a project, keeping track of changes, and coordinating updates. The primary goals of version control are to:</p>
<ol>
<li>`Track Changes:` A VCS keeps a record of every change made to the code or files over time. This includes who made the change, when it was made, and what specific changes were implemented.</li>

<li>`Collaboration:` Multiple developers can work on the same project simultaneously without interfering with each other's work. The VCS enables developers to merge their changes and resolve conflicts.</li>

<li>`Backup and Recovery:` VCS acts as a backup system, providing a history of changes. If something goes wrong or a mistake is made, it's possible to roll back to a previous state.</li>

<li>`Branching and Merging:` Developers can create branches to work on features or bug fixes independently. These branches can later be merged back into the main codebase. This allows for parallel development and experimentation.</li>

<li>`Traceability:` VCS provides a detailed history of changes, making it easier to understand how a project has evolved. This is useful for debugging, auditing, and tracking down issues.</li>
</ol>

### There are two main types of version control systems:

<ol>
<li>`Centralized Version Control Systems (CVCS):` In a CVCS, there is a central server that stores the repository, and developers check out files from this central repository. Examples include CVS (Concurrent Versions System) and SVN (Apache Subversion).</li>

<li>`Distributed Version Control Systems (DVCS):` In a DVCS, each developer has a complete copy of the repository, including its history. Examples include Git, Mercurial, and Bazaar.<li>

<p>Git is one of the most widely used version control systems. It's a distributed system known for its speed, flexibility, and popularity in open-source projects.</p>

### Why version control system is needed?

<p>collaboration, storing versions, re storing previous versions, backup, etc. </p>

### What is GIT?

`Git is a distributed version control system (DVCS)` widely used for tracking changes in source code during software development. It was created by `Linus Torvalds in 2005` and has become the standard for version control in many development projects. Git is known for its speed, flexibility, and efficiency, making it a popular choice for both small and large-scale software projects.

- Key features and concepts of Git includes:

  - `Distributed Version Control:` Every user working on a Git project has a local copy of the entire repository, including its history. This allows users to work offline and independently.</li>

  - `Branching and Merging:` Git makes branching and merging simple and efficient. Developers can create branches to work on new features or bug fixes without affecting the main codebase. Changes made in different branches can be easily merged back together.

  - `Committing:` Developers use commits to save changes to the local repository. Each commit has a unique identifier and includes information about the changes made, such as the author, timestamp, and a commit message.

  - `Remote Repositories:` Git supports remote repositories, enabling collaboration among multiple developers. Changes made by one developer can be pushed to a shared remote repository, and others can pull those changes to stay up-to-date.

  - `GitHub, GitLab, and Bitbucket:` These are web-based platforms that host Git repositories and provide additional collaboration features. Developers often use these platforms to share code, collaborate, and manage issues and projects.

### Git Commands: 

<code>

- git init: Initializes a new Git repository.
- git clone: Creates a copy of a remote repository on the local machine.
- git add: Adds changes to the staging area.
- git commit: Saves changes to the local repository.
- git push: Uploads local changes to a remote repository.
- git pull: Fetches changes from a remote repository and merges them into the local branch.
- git merge: Combines changes from different branches.
- git branch: Lists, creates, or deletes branches.

</code>

Git has become a fundamental tool in modern software development due to its efficiency, flexibility, and the collaborative workflows it supports. It is widely used in open-source projects and by development teams in various industries.

### Git Commands after creating a repo:

```bash

- git init
- git add .
- git commit -m"Meaningful Message"
- git branch -M main
- git remote add origin https://github.com/user-name/repo-name.git
- git push -u origin main

```

### How git works:

<p align="center">
  <a href="#"><img height=" " width="1000vh" src="https://cdn.discordapp.com/attachments/1117616249984258109/1191777016836522024/image.png"></a>
</p>

### Git vs Github:

<p align="center">
  <a href="#"><img height=" " width="1000vh" src="https://cdn.discordapp.com/attachments/1117616249984258109/1191777781357482104/image.png"></a>
</p>

---

## ✨ Module 3-2 Create A Github Repository And Explore GitHub

Creating a GitHub repository and exploring GitHub involves several steps. Here's a step-by-step guide:

- Creating a GitHub Repository:

  - Sign up for GitHub: If you don't have a GitHub account, you'll need to sign up. Visit GitHub and click on the "Sign up for GitHub" button.

  - Log in to GitHub: Log in to your GitHub account.

  - Create a New Repository:

    - On the GitHub homepage, click the "+" icon in the top right corner.
    - Select "New repository" from the dropdown.

  - Fill out the Repository Information:

    - Enter a Repository name. This is the name of your project.
    - Optionally, add a description for your repository.
    - Choose between Public or Private (Public repositories are visible to everyone, while Private repositories require a paid plan).
    - Initialize this repository with a README if you want to create an initial README file.
    - You can add a .gitignore file (specifies intentionally untracked files) and a license if needed.

  - Create Repository:

    - Click the "Create repository" button.

- Exploring GitHub:

  - Dashboard: After creating your repository, you'll be redirected to your repository's dashboard.

The dashboard provides an overview of your repository, including recent activity, issues, pull requests, and more.

  - Code Tab: The "Code" tab is where you can find the files in your repository.

You can upload files directly or use Git commands to push code.

  - Issues Tab: The "Issues" tab is where you can track and manage tasks, enhancements, and bugs for your project.

  - Pull Requests Tab: The "Pull Requests" tab is where you can review, discuss, and merge changes from a branch.

  - Actions Tab: The "Actions" tab allows you to set up and manage GitHub Actions, which are automated workflows.

  - Wiki Tab: The "Wiki" tab allows you to create and edit documentation for your project.

  - Settings: Click on the "Settings" tab to configure various settings for your repository, including collaborators, branch protection, webhooks, and more.

- Explore Other Repositories:

Use the GitHub search bar to explore other repositories by topics, languages, and more.

This is just a basic overview, and GitHub has many more features and functionalities. As you work on your projects, you'll likely use additional GitHub features such as branches, forks, and collaboration tools. GitHub provides extensive documentation to help you explore and utilize its features effectively.

---

## ✨ Module 3-3 Introduction To Basic Commands: Git Init, Git Add, Git Commit

- i use vs code and github desktop its more easy.

---

## ✨ Module 3-3-2 Introduction To Basic Commands: Git Init, Git Add, Git Commit

- why are you making so complicated when there is built in vcs in VS code and Github desktop app.

---

## ✨ Module 3-4 (Optional) VS Code Terminal To Set Basic Github And Github Desktop

- install github desktop and enjoy every features of github without any error.

---

## ✨ Module 3-5 Send Small Incremental Changes To GitHub With Git Push

- open folder with vs code.
- create a file
- you will see there is a icon showing left side of source control panel 
- write message and press commit.
- done

### Creating Github Pages: 

- Go to your repository's settings to configure GitHub Pages.
- Navigate to your repository on GitHub.
- Click on the "Settings" tab.
- Scroll down to the "GitHub Pages" section.
- In the "Source" dropdown menu, choose the branch you want to use for GitHub Pages (typically main or gh-pages).
- Save your changes.

---

## ✨ Module 3-6 Common GitHub Related Issues For Beginners

- if you use terminal use it carefully spelling mistakes are dangerous thing be aware.
- always change the exact directory
- case sensitive.
- before commit add git first.
- always try to read error messages.
- bla bla bla

---

## ✨ Module 3-7 Module Summary And Basic Git Workflow

- bla bla bla 
- use your brain its not rocket science.

---

## ✨ Module 3-8 [Advanced] Multiple Developer Workflow Contributor On Private Repo

- privacy : private.
- bla bla bla...

---



