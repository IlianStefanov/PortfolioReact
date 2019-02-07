function checkWidth() {
    var windowWidth = $(window).width();
    var left = "left";
    var bottom = "bottom";
    var returnWidth = windowWidth < 400 ? bottom : left;
    //            return returnWidth;
    console.log(returnWidth);
    return returnWidth;
}




$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: [
            'page0',
            'page1',
            'page2',
            'page3',
            'page4'
        ],
        sectionsColor: [
            'transparent',
            'transparent',
            'transparent',
            'transparent'
        ],
        menu: '#menu',
        navigation: true,
        navigationPosition: checkWidth(),
        navigationTooltips: ['First page', 'Second page', 'Third and last page', 'Not so fast', 'Got ya!']
    });
});