"use strict";
$(function() {

    var Editor=function(input, preview) {
      this.update = function () {
        preview.innerHTML = markdown.toHTML(input.value);
      };
      input.editor = this;
      this.update();
    }
    var $ = function (id) { return document.getElementById(id); };
    $("articleText")&&new Editor($("articleText"), $("articlePreview"));
    // $.ajax({
    //             url: "/test",
    //             // dataType: "json",
    //             type: "get",
    //             // data: sentdata,
    //             success: function(recData) {
    //                 console.log(recData);
    //
    //             },
    //             error: function() {
    //                 console.log("获取失败，请稍候再试");
    //             }
    //
    //         });

    //
    //
    //
    // var Basic={
    //     requestAjax:function(urladdr, sentdata,method){
    //         console.log(urladdr, sentdata);
    //         return $.ajax({
    //             url: urladdr,
    //             dataType: "json",
    //             type: method,
    //             data: sentdata,
    //             success: function(recData) {
    //                 console.log(recData);
    //                 if (recData.msgCode === 0) {
    //                     console.log(recData, recData.data);
    //                 } else {
    //                     console.log(recData.message);
    //                 }
    //             },
    //             error: function() {
    //                 console.log("获取失败，请稍候再试");
    //             }
    //
    //         });
    //     }
    //
    // };
    // Basic.requestAjax("/userInfo",'',"get")
})
