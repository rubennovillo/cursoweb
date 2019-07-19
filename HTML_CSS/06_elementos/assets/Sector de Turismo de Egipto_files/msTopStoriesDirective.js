angular.module('eta.components')
    .directive('msStories', ['$window', '$timeout', 'contentService', '$sce', function ($window, $timeout, contentService, $sce) {
        return {
            restrict: 'A',
            template: msTopStoriesPartial,
            link: {
                pre: function pre($scope, element, attrs) {
                    $scope.stories = JSON.parse(attrs.storieslist);
                    $scope.pageSize = 5;
                    $scope.pageNumber = 1
                },
                post: function post($scope, $el, $attrs) {
                    $scope.goto = function (url) {
                        $window.location.href = url;
                    }

                    $scope.getYoutubeThumbnail = function (url) {
                        var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                        id = id[1];
                        var thumb_url = "https://i.ytimg.com/vi/" + id + "/mqdefault.jpg";
                        return thumb_url;
                    };

                    $scope.getVideoUrl = function (url) {
                        var id = url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);
                        id = id[1];
                        var video_url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + id);
                        $scope.videoEmbeddedLink= video_url;



                    }
                }
            }
        };
    }]);
