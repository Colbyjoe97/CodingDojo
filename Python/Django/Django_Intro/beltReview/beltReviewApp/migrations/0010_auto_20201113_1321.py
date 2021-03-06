# Generated by Django 2.2.4 on 2020-11-13 18:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('beltReviewApp', '0009_auto_20201113_1252'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item',
            name='date_added',
        ),
        migrations.RemoveField(
            model_name='item',
            name='userId',
        ),
        migrations.AddField(
            model_name='item',
            name='favorited_by',
            field=models.ManyToManyField(related_name='items_favorited', to='beltReviewApp.User'),
        ),
        migrations.AlterField(
            model_name='item',
            name='added_by',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='items_created', to='beltReviewApp.User'),
        ),
    ]
