function myAjax(url,type,async,contentType,data,success,error) {
    $.ajax({
        url: url,
        type: type,
        async: async,
        contentType: contentType,
        data:data,
        success: success,
        error: error
    });
}
function myAjaxGet(url,type,async,contentType,success,error) {
    $.ajax({
        url: url,
        type: type,
        async: async,
        contentType: contentType,
        success: success,
        error: error
    });
}
function myAjaxGetHead(url,type,async,contentType,headers,success,error) {
    $.ajax({
        url: url,
        type: type,
        async: async,
        contentType: contentType,
        headers:headers,
        success: success,
        error: error
    });
}
function myAjaxHead(url,type,async,contentType,headers,data,success,error) {
    $.ajax({
        url: url,
        type: type,
        async: async,
        contentType: contentType,
        headers:headers,
        data:data,
        success: success,
        error: error
    });
}