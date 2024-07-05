from djongo import models

class Employee(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    age = models.IntegerField()
    address = models.TextField()
    description = models.TextField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
