---
layout: page
title: Recipes
permalink: /recipes/
---
{% for category in site.recipe_categories %}
<h2>{{ category.title }}</h2>
  <p>{{ category.content | markdownify }}</p>
{% assign recipes = site.recipes | where: "categories",category.category %}
{% for recipe in recipes %}
<h3><a href="{{recipe.permalink}}">{{ recipe.name }} by {{ recipe.author }}</a></h3>
  <p>{{ recipe.content | markdownify }}</p>
{% endfor %}
{% endfor %}
