# Husky

Frontend: HTML5, CSS/SASS(vars, mixins), JS(ES6+), Bootstrap 4

Backend: PHP Laravel

Project ui design link https://www.figma.com/file/tcZPTtx1fs4XK4kl1OsPmd/Husky?node-id=0%3A1

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

## Add your files

- [ ] [Create](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/Poghos/husky-6.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://gitlab.com/Poghos/husky-6/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Automatically merge when pipeline succeeds](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://gitlab.com/-/experiment/new_project_readme_content:97004ddd8593f5797664a550d542ae2b?https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

## Project Description

Husky is a simple web application with SignIn/SignUp/Forgot password pages with run time validation. Photo crop and upload functionality with preview. Editing existing data (Name, LastName, Email, Phone Number, and Photo). Header menu with add/edit/delete items functionality. Drag&Drop functionality for header menu items.

## Project status

The development of the project has slowed down/paused.
Features that are planned to develop in the future:

- Online chat
- Appropriate landing pages for corresponding sections - About us, Contact us, etc

## Support

In case you have questions or any kind of issues do not hesitate to contact me at

- Email (hghovakimyan@outlool.com)
- *[LinkedIn profile <img src="https://image.similarpng.com/very-thumbnail/2020/07/Linkedin-logo-vector-PNG.png" width=30px/>](https://www.linkedin.com/in/hayk-hovakimyan-b81600b2/)* 
- *[GitHub profile <img src="https://pics.freeicons.io/uploads/icons/png/3345023101530077752-512.png" width=30px/>](https://github.com/MrHovakimyan)* 

- *[FaceBook profile <img src="https://img.icons8.com/plasticine/2x/facebook-new.png" width=30px/> ](https://www.facebook.com/Mr.Hovakimyan/)* 

## Authors and acknowledgment

- Artyom Margaryan - BackEnd developer
- Arusik Grigorian - FrontEnd developer

## It is very important to do

# install dependencies

> php version 7.3

> laravel version 8

> node js version 12

> composer version 2

# After cloning

> cd /var/www/husky-6

> composer install

> cp .env.example .env

> php artisan key:generate

> npm install

> npm run dev

# Database

> configuring your db connection in .env file
>
> php artisan migrate
