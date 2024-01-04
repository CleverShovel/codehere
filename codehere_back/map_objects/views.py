from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import MapObject
from .serializers import *

@api_view(['GET', 'POST'])
def map_objects_list(request):
    if request.method == 'GET':
        data = MapObject.objects.all()

        serializer = MapObjectSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MapObjectSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def map_objects_detail(request, pk):
    try:
        map_object = MapObject.objects.get(pk=pk)
    except MapObject.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = MapObjectSerializer(map_object, data=request.data,context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        map_object.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)