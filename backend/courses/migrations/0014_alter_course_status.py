# Generated by Django 4.1.5 on 2023-01-03 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("courses", "0013_remove_coursecomment_course_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="course",
            name="status",
            field=models.CharField(
                choices=[
                    ("CANCELED", "Canceled"),
                    ("DRAFT", "Draft"),
                    ("PUBLISHED", "Published"),
                    ("MODERATION", "Moderation"),
                    ("DECLINED", "Declined"),
                    ("COMPLETED", "Completed"),
                ],
                default="MODERATION",
                max_length=40,
            ),
        ),
    ]