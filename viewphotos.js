jQuery(document).ready(function($) {
    jQuery("pre view").before("<div class='viewheader'><a class='view-text' data-clipboard-target='pre view' data-clipboard-action='view'>Click To See Full Size Images</a></div>");
    $('.view-text').tooltip({
        trigger: 'click'
    })
});
var clipboard = new ClipboardJS(".view-text", {
    target: function(trigger) {
        return trigger.parentNode.nextElementSibling
    }
});

function setTooltip(btn, message) {
    $(btn).tooltip('hide').attr('data-original-title', message).tooltip('show');
}

function hideTooltip(btn) {
    setTimeout(function() {
        $(btn).tooltip('hide');
    }, 1000);
}
clipboard.on('success', function(e) {
    var btn = $(e.trigger);
    setTooltip(btn, 'Copied');
    hideTooltip(btn);
});
clipboard.on('error', function(e) {
    var btn = $(e.trigger);
    setTooltip('Failed');
    hideTooltip(btn);
});