from rest_framework import serializers
from boardman.models import Category


class TypeSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(
        required=True,
        allow_blank=False,
        max_length=50
    )
    category = serializers.CharField(required=True, allow_blank=False)
    image = serializers.ImageField(required=False, allow_null=True)
    status = serializers.BooleanField(default=False)

    # def get_category(self, obj):
    #     return obj.category['id']


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(
        required=True, allow_blank=False, max_length=50
    )
    image = serializers.ImageField(required=False, allow_null=True)
    status = serializers.BooleanField(default=False)
    created_at = serializers.SerializerMethodField()

    def get_created_at(self, obj):
        # Format the updated_at field as desired
        return obj.created_at.strftime('%Y-%m-%d %H:%M:%S')

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.image = validated_data.get('image', instance.image)
        instance.status = validated_data.get('status', instance.status)
        instance.save()
        return instance
