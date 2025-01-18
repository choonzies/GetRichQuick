from django.urls import path
from . import views

urlpatterns = [
    # path('get-predictions/', views.get_predictions, name='get_predictions'),
    path('handle-input/', views.handle_input, name='handle-input'),
]