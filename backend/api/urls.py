from django.urls import path

from .views import PostList, PostDetail, RandomDetail


urlpatterns = [
    path('', PostList.as_view(), name='posts_list'),
    path('random/', RandomDetail.as_view(), name='random_detail'),
    path('<int:pk>/', PostDetail.as_view(), name='post_detail'),
]