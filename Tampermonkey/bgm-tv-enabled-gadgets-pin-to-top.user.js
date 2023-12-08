// ==UserScript==
// @name           置顶已启用的组件
// @description    将 Bangumi 已启用的超合金组件排到最前面
// @version        1.0.0
// @author         Hayxi
// @namespace      https://bgm.tv
// @updateURL      https://raw.githubusercontent.com/Hayxi/Profiles/ma%D1%95ter/Tampermonkey/bgm-tv-enabled-gadgets-pin-to-top.user.js
// @downloadURL    https://raw.githubusercontent.com/Hayxi/Profiles/ma%D1%95ter/Tampermonkey/bgm-tv-enabled-gadgets-pin-to-top.user.js
// @match          *://bangumi.tv/settings/gadgets
// @match          *://bgm.tv/settings/gadgets
// @match          *://chii.in/settings/gadgets
// @run-at         document-end
// ==/UserScript==
(() => {
    $('#timeline ul').each((a) => {
        var activeItem = []
        $('#timeline ul:eq(' + a + ') .btnRedSmall').each((i) => {
            activeItem.push($('#timeline ul:eq(' + a + ') .btnRedSmall').eq(i).parent().parent())
        })
        var firstItem = $('#timeline ul:eq(' + a + ') .btnGreenSmall:eq(0)').parent().parent()
        for (var i = 0; i < activeItem.length; i++) {
            $(firstItem).before($(activeItem[i]))
        }
        if(a!=0)
        console.log("已启用" + activeItem.length + "个组件")
    })
})()
