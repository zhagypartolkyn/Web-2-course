from django.urls import path, include
from .views import *


urlpatterns = [
    path('companies/', companies),
    path('companies/<int:id>/', company),
    path('companies/<int:id>/vacancies', company_vacancy),
    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', vacancy),
    path('vacancies/top_ten/', top_ten),
]