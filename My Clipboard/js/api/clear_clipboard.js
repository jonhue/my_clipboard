﻿function clearClipboard() {
    $('input#empty-string').select();
    document.execCommand("copy");

    $('#clipboard-icon').addClass('shaking');
    setTimeout(function() {
        $('#clipboard-icon').addClass('cleared');
    }, 750);
};
