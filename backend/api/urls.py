from django.urls import path

from .views import PostList, PostDetail, PostGenreList


urlpatterns = [
    path('', PostList.as_view(), name='posts_list'),
    path('<int:pk>/', PostDetail.as_view(), name='post_detail'),
    path('<str:category>/', PostGenreList.as_view(), name='posts_genre_list'),
]