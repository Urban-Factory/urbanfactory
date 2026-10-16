---
# Шаблон проекта. Скопируйте в src/content/projects/<lang>/<slug>.md
# (один файл на каждый язык, slug одинаковый во всех языках).
title: "Project title"
slug: project-slug
lang: en                      # en | hr | ru
category: [engagement]        # engagement | strategy | design — можно несколько
year: "2024"                  # или диапазон "2018–2019"
city: Zagreb
country: Croatia
client: Client name           # необязательно
role: What Urban Factory did
summary: "One or two sentences about the project and its result."
cover: ../../../assets/projects/project-slug/cover.jpg   # необязательно
coverAlt: "What is in the photo"
gallery:
  - src: ../../../assets/projects/project-slug/01.jpg
    alt: "What is in the photo"
results:
  - "Measurable result"
featured: false               # true — показать на главной (до 6 проектов)
order: 100                    # меньше — выше в списке
---

Task, what we did, result — in Markdown.
