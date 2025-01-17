# Generated by Django 4.1.6 on 2023-02-11 20:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("core", "0012_merge_20230209_1803"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="legaluserbillinginfo",
            name="bank",
        ),
        migrations.RemoveField(
            model_name="legaluserbillinginfo",
            name="organization_address",
        ),
        migrations.RemoveField(
            model_name="legaluserbillinginfoeu",
            name="correspondent_account",
        ),
        migrations.RemoveField(
            model_name="legaluserbillinginfoeu",
            name="prc",
        ),
        migrations.RemoveField(
            model_name="legaluserbillinginforu",
            name="correspondent_account",
        ),
        migrations.RemoveField(
            model_name="legaluserbillinginforu",
            name="prc",
        ),
        migrations.AddField(
            model_name="legaluserbillinginfo",
            name="prc",
            field=models.CharField(default=None, max_length=10, verbose_name="КПП"),
            preserve_default=False,
        ),
    ]
