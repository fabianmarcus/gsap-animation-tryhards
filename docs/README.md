# GSAP Tryhards

Einfache HTML-Seite zum herumspielen mit GSAP Animationen.

## Build

Es gibt keinen Build-Prozess. Die Seite besteht aus einer HTML-, einem JS- und einem CSS-Datei. Benötigte Bibliotheken werden in der `index.html` über CDNs eingebunden. Die Animationen werden mit [GSAP](https://greensock.com/gsap/) gemacht.

## Deployment

Die Seite ist auf [GitHub Pages](https://pages.github.com/) deployed. Dazu muss einfach nur der aktuelle Entwicklungsstand in den Ordner `docs` kopiert werden und ein Commit/Push in den `main` Branch gemacht werden. Den Rest macht Github.

```bash
cp -R * ./docs

git add .
git commit -m "Github Pages Deployment"
git push
```