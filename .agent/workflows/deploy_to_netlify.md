---
description: Deploy updates to Netlify by pushing changes to Git
---

This workflow helps you commit and push your changes to GitHub/GitLab, which triggers an automatic deployment on Netlify.

1. Check the current status of your files
// turbo
git status

2. Add all changes to the staging area
// turbo
git add .

3. Commit the changes (Replace "Update site" with your message if needed)
git commit -m "Update site content and design"

4. Push the changes to the remote repository
git push origin main

> [!NOTE]
> Once pushed, Netlify will detect the change and automatically start a new build. You can check the progress in your Netlify dashboard.
