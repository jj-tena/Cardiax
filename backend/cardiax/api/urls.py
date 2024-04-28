from rest_framework.routers import DefaultRouter
from cardiax.api.views import UserViewSet, AnalyticViewSet

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('analytics', AnalyticViewSet, basename='analytics')
urlpatterns = router.urls