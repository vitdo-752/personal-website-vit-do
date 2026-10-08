# personal-website-vit-do

Personal website for Vit Do: product management, product design, and business.
Live at https://vitdo-752.github.io/personal-website-vit-do/

Built with Jekyll and the [al-folio](https://github.com/alshedivat/al-folio) theme, adapted from [jonasfrey96.github.io](https://github.com/JonasFrey96/jonasfrey96.github.io).

## Where to edit

| What | File |
| --- | --- |
| Name, email, site URL | `_config.yml` |
| About / home page | `_pages/about.md` |
| Experience page | `_data/cv.yml` |
| Project case studies | `_projects/*.md` (cover images in `assets/img/projects/`) |
| Resume PDF | `assets/pdf/Vit_Do_Resume.pdf` |
| Profile photo | `assets/img/prof_pic.jpg` |
| Email / LinkedIn icons | `_data/socials.yml` |
| Theme colors (teal / sage) | `_sass/_variables.scss`, `_sass/_themes.scss` |

## Run locally

Requires a recent Ruby (`brew install ruby`).

```bash
export PATH=/opt/homebrew/opt/ruby/bin:$PATH
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000/personal-website-vit-do/

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site into the `gh-pages` branch.
In the GitHub repo, go to **Settings → Pages** and set the source to **Deploy from a branch → `gh-pages` / root** (one-time setup).
