# Generated by Django 2.1.7 on 2019-04-08 02:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20190408_0127'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='course_name',
            field=models.CharField(blank=True, default='blank', max_length=40),
        ),
    ]
