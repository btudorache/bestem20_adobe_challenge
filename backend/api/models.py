from django.db import models


class Post(models.Model):
    CHOICES = [
        ("Visual Arts", "Visual Arts"),
        ("Crafts", "Crafts"),
        ("Photography", "Photography"),
        ("Sculpture", "Sculpture"),
    ]

    title = models.CharField(max_length=50)
    description = models.TextField()
    imageUrl = models.CharField(max_length=100)
    artist = models.CharField(max_length=50)
    location = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=50, choices=CHOICES)

    def __str__(self):
        return self.title
