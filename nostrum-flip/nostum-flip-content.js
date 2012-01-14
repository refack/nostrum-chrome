var last_target;


function mouse_down_track(e)
{
    last_target = e.target;
}


function key_press_track(e)
{
    if (e.keyIdentifier == 'Up') {
        last_target.style['background-color'] = last_target.last_bg_color;
        last_target = last_target.parentNode;
        last_target.last_bg_color = last_target.style['background-color'];
        last_target.style['background-color'] = 'red';
        return;
    }
    if (e.keyIdentifier == 'Enter') {
        last_target.style['display'] = 'none';
        window.removeEventListener('keydown', key_press_track);
        window.addEventListener('mousedown', mouse_down_track);
        return;
    }
}


window.addEventListener('mousedown', mouse_down_track);

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (!request.delete_target || !last_target)
        return;
    window.removeEventListener('mousedown', mouse_down_track);
    last_target.last_bg_color = last_target.style['background-color'];
    last_target.style['background-color'] = 'red';
    window.addEventListener('keydown', key_press_track);
});