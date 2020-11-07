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
