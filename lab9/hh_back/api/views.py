from django.shortcuts import render
from .models import *
from django.http import JsonResponse
# Create your views here.

def companies(request):
    companies = Company.objects.all()   
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)

def company(request, id):
    company = Company.objects.get(id = id)
    return JsonResponse(company.to_json())

def company_vacancy(request, id):
    company = Company.objects.get(id = id)
    vacancies = [vac.to_json() for vac in company.vacancies.all()]
    return JsonResponse(vacancies, safe=False)

def vacancies(request):
    vacancies = Vacancy.objects.all()   
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy(request, id):
    vacancy = Vacancy.objects.get(id = id)   
    return JsonResponse(vacancy.to_json(), safe=False)

def top_ten(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [vacancy.to_json() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)