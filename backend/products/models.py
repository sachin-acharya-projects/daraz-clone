from django.db import models

# Create your models here.
"""Products
# This will be impletemented if I feel like it.
Product Analytics (Last Priority)
"""


# ? Other than Product, other models are created as a placeholder.
class Vendor(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    # ? Other fields for vendor details

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Subcategory(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name="subcategories"
    )

    def __str__(self):
        return self.name


class Rating(models.Model):
    score = models.IntegerField()  # E.g., 1-5 stars
    review = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.score} Stars"


class Comment(models.Model):
    user = models.CharField(
        max_length=255
    )  # ? Assuming you don't have user auth implemented
    content = models.TextField()

    def __str__(self):
        return f"Comment by {self.user}"


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True, null=True
    )  # ? In percentage

    ratings = models.ManyToManyField(Rating, related_name="products")
    comments = models.ManyToManyField(Comment, related_name="products")
    vendor = models.ForeignKey(
        Vendor, on_delete=models.CASCADE, related_name="products"
    )
    categories = models.ManyToManyField(Category, related_name="products")
    subcategories = models.ManyToManyField(Subcategory, related_name="products")

    def __str__(self):
        return f"Product({self.title}, {self.price})"


class ProductImage(models.Model):
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name="images"
    )
    image = models.ImageField(upload_to="products/")

    def __str__(self):
        return f"Image for {self.product.title}"
