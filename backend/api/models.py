from django.db import models

# Create your models here.


class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    name_extension = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    zip_code = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=100, null=True)
    phone = models.CharField(max_length=100, null=True)
    date_of_birth = models.CharField(max_length=100, null=True)
    place_of_birth = models.CharField(max_length=100, null=True)
    sex = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    height = models.CharField(max_length=100, null=True)
    weight = models.CharField(max_length=100, null=True)
    blood_type = models.CharField(max_length=100, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    mothers_first_name = models.CharField(max_length=100, null=True)
    mothers_middle_name = models.CharField(max_length=100, null=True)
    mothers_last_name = models.CharField(max_length=100, null=True)
    father_first_name = models.CharField(max_length=100, null=True)
    father_middle_name = models.CharField(max_length=100, null=True)
    father_last_name = models.CharField(max_length=100, null=True)
    spouses_surname = models.CharField(max_length=100, null=True)
    spouses_middle_name = models.CharField(max_length=100, null=True)
    spouses_first_name = models.CharField(max_length=100, null=True)
    gsis_id_no = models.CharField(max_length=100, null=True)
    pagibig_id_no = models.CharField(max_length=100, null=True)
    philhealth_no = models.CharField(max_length=100, null=True)
    sss_no = models.CharField(max_length=100, null=True)
    tin_no = models.CharField(max_length=100, null=True)
    agency_employee_no = models.CharField(max_length=100, null=True)


    def __str__(self):
        return f"{self.first_name} {self.middle_name} {self.last_name} {self.date_of_birth}"