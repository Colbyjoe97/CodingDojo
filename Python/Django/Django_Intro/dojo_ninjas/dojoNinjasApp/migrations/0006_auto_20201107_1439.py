# Generated by Django 2.2.4 on 2020-11-07 19:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dojoNinjasApp', '0005_auto_20201107_1421'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ninja',
            name='dojo_ninjas',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='allNinjas', to='dojoNinjasApp.Dojo'),
        ),
    ]
