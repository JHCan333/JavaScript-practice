var urlMap = {
    'bw_download_btn_ios':'https://apps.apple.com/cn/app/id450748070?ls=1',
    'bw_download_btn_android':'http://m.note.youdao.com/noteproxy/download?todo=download&platform=android&keyfrom=youdaohome&vendor='
}

function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    var isWeixin = ua.indexOf('micromessenger') != -1;
    if (isWeixin) {
        return true;
    }else{
        return false;
    }
}

function downloadFile(url){
    let elink = document.createElement('a')
    elink.style.display = 'none'
    elink.target = '_block'
    elink.href = url
    document.body.appendChild(elink)
    elink.click()
    document.body.removeChild(elink)
}

$(document).ready(function(){
    $('.bw_download_btn').click(function(){
        if(is_weixin()){
            $('#bw_overlay').show()
        } else {
            downloadFile(urlMap[this.id])
        }
    })

    $('#bw_overlay').click(function(){
        $('#bw_overlay').hide()
    })

})