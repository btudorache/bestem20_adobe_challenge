from django.urls import path

from .views import PostList, PostDetail, PostGenreList, RandomDetail


urlpatterns = [
    path('random/', RandomDetail.as_view(), name='random_detail'),
    path('<int:pk>/', PostDetail.as_view(), name='post_detail'),
    path('<str:category>/', PostGenreList.as_view(), name='posts_genre_list'),
    path('', PostList.as_view(), name='posts_list'),
]