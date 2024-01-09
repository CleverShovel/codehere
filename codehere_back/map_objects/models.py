from django.db import models

class MapObject(models.Model):
    username = models.CharField("Username", max_length=240)
    code = models.TextField("Code")
    created_at = models.DateField("Creation Date", auto_now_add=True)
    lon = models.FloatField("Longitude", db_default=0.0)
    lat = models.FloatField("Latitude", db_default=0.0)

    def __str__(self):
        return self.username