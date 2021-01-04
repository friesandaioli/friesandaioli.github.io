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
<table><tr>
{% assign n = 3 %}
{% for i in (1..n) %}
<td><ul>
{% for ingredient in recipe.ingredients %}
{% assign modn = forloop.index | minus: 1 | modulo: n | plus: 1 %}
{% if modn == i %}<li>{{ingredient}}</li>{% endif %}
{% endfor %}
</ul></td>
{% endfor %}
</tr></table>
<p>{{ recipe.content | markdownify }}</p>
{% endfor %}
{% endfor %}
