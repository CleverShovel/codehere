# Generated by Django 5.0 on 2024-01-01 19:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MapObject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=240, verbose_name='Username')),
                ('code', models.TextField(verbose_name='Code')),
                ('created_at', models.DateField(auto_now_add=True, verbose_name='Creation Date')),
            ],
        ),
    ]
