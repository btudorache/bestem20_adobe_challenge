# Generated by Django 3.1.3 on 2020-11-07 20:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20201107_1518'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='imageUrl',
            field=models.CharField(max_length=300),
        ),
    ]
