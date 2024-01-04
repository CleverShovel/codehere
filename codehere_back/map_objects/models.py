from django.db import models

class MapObject(models.Model):
    username = models.CharField("Username", max_length=240)
    code = models.TextField("Code")
    created_at = models.DateField("Creation Date", auto_now_add=True)

    def __str__(self):
        return self.username