# Generated by Django 5.0.1 on 2024-01-16 21:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('map_objects', '0003_mapobject_lat_mapobject_lon'),
    ]

    operations = [
        migrations.AddField(
            model_name='mapobject',
            name='code_language',
            field=models.CharField(db_default=models.Value(''), max_length=100, verbose_name='Code language'),
        ),
        migrations.AlterField(
            model_name='mapobject',
            name='created_at',
            field=models.DateField(auto_now_add=True, verbose_name='Creation date'),
        ),
    ]
