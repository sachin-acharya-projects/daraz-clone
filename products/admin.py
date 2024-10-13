from django.contrib import admin
from .models import (
    Category,
    Comment,
    Product,
    ProductImage,
    Rating,
    Subcategory,
    Vendor,
)

# Register your models here.
admin.site.register(Category)
admin.site.register(Comment)
admin.site.register(ProductImage)
admin.site.register(Rating)
admin.site.register(Subcategory)
admin.site.register(Vendor)
admin.site.register(Product)
