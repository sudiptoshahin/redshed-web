from rest_framework import mixins
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404
# from rest_framework.renderers import JSONRenderer
# from django.http import HttpResponse
from django.http import JsonResponse

from boardman.models import Category, ProductType
from api.serializer import CategorySerializer, TypeSerializer


class ProductTypeViewSet(mixins.CreateModelMixin,
                         mixins.ListModelMixin,
                         generics.GenericAPIView):
    queryset = ProductType.objects.all()
    serializer_class = TypeSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data

        return JsonResponse({
            "status": status.HTTP_200_OK,
            "payload": data,
            "message": "Get all product types successfully."
        })

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return JsonResponse({
                "status": status.HTTP_201_CREATED,
                "payload": serializer.data,
                "message": "Product type created successfully."
            })
        return JsonResponse({
            "status": status.HTTP_400_BAD_REQUEST,
            "error": serializer.errors,
            "message": serializer.error_messages
        })

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class CategoryDetailViewSet(mixins.RetrieveModelMixin,
                            mixins.UpdateModelMixin,
                            mixins.DestroyModelMixin,
                            generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def get_object(self, message="Not found the id."):
        try:
            return super().get_object()
        except NotFound:
            # Customize the response for when the object is not found
            return JsonResponse({
                "status": status.HTTP_404_NOT_FOUND,
                "error": {
                    "message": message
                },
            })

    def get(self, request, pk):
        category = get_object_or_404(Category, pk=pk)
        serializer = CategorySerializer(category)

        return JsonResponse({
            "status": status.HTTP_200_OK,
            "payload": serializer.data,
            "message": "Category retrive successfully."
        })

    # def get(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance)
    #     data = serializer.data
    #     # if instance is None:
    #     #     return JsonResponse({
    #     #         "status": status.HTTP_404_NOT_FOUND,
    #     #         "error": "salkjalkj",
    #     #         "message": "Category not found!"
    #     #     })
    #     print(f"instance: {instance}")

    #     return JsonResponse({
    #         "status": status.HTTP_200_OK,
    #         "payload": data,
    #         "message": "Category retrive successfully."
    #     })

    def put(self, request, pk):
        category = get_object_or_404(Category, pk=pk)
        serializer = CategorySerializer(category, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse({
                "status": status.HTTP_200_OK,
                "payload": serializer.data,
                "message": "Category updated successfully."
            })
        return JsonResponse({
            "status": status.HTTP_400_BAD_REQUEST,
            "error": serializer.errors,
            "message": serializer.error_messages
        })

    # def patch(self, request, pk):
    #     category = get_object_or_404(Category, pk)
    #     serializer = CategorySerializer(category, data=request.data,
    #                                     partial=True)

    #     if serializer.is_valid():
    #         serializer.save()
    #         return JsonResponse({
    #             "status": status.HTTP_200_OK,
    #             "payload": serializer.data,
    #             "message": "Category updated successfully."
    #         })
    #     return JsonResponse({
    #         "status": status.HTTP_400_BAD_REQUEST,
    #         "error": serializer.errors,
    #         "message": serializer.error_messages
    #     })

    def delete(self, request, pk):
        category = get_object_or_404(Category, pk=pk)
        category.delete()
        return JsonResponse({
            "status": status.HTTP_204_NO_CONTENT,
            "message":  f"{category.title} is deleted successfully."
        })

    # def put(self, request, *args, **kwargs):
    #     return self.update(request, *args, **kwargs)

    # def delete(self, request, *args, **kwargs):
    #     return self.destroy(request, *args, **kwargs)


class CategoryViewSet(mixins.ListModelMixin,
                      mixins.CreateModelMixin,
                      generics.GenericAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        data = serializer.data
        return JsonResponse({
            "status": status.HTTP_200_OK,
            "payload": data,
            "message": "Get category list successfully!"
        }, status=status.HTTP_200_OK)

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return Response({
            "status": status.HTTP_201_CREATED,
            "payload": serializer.data,
            "message": "Category created successfully!"
        }, status=status.HTTP_201_CREATED)

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
