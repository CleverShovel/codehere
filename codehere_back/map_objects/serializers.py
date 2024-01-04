from rest_framework import serializers
from .models import MapObject

class MapObjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = MapObject 
        fields = ('pk', 'username', 'code', 'created_at')