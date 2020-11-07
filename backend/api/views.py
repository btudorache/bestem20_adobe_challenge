import random

from rest_framework import generics
from .serializers import PostSerializer
from .models import Post


class PostList(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostGenreList(generics.ListCreateAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        category = self.kwargs.get('category', None)
        queryset = Post.objects.filter(category=category)
        return queryset


class RandomDetail(generics.RetrieveAPIView):
    serializer_class = PostSerializer

    def get_object(self):
        latest_id = Post.objects.latest('id').id
        random_id = random.randint(1, latest_id)
        obj = Post.objects.get(id=random_id)
        return obj
