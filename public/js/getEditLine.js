// LICENSE : MIT
"use strict";
(function () {
    var editLink = document.querySelector(".post-meta-edit");
    var editURL = editLink.href;
    var itemURL = document.querySelector(".item-url").href;

    function getContent(response) {
        return atob(response.content);
    }

    function parseJson(response) {
        return response.json()
    }

    function getContentAsync(filePath) {
        // https://github.com/jser/jser.info/edit/gh-pages/data/2015/08/index.json
        // => https://api.github.com/repos/jser/jser.info/contents/data/2015/08/index.json
        var apiPath = filePath
            .replace("https://github.com/", "https://api.github.com/repos/")
            .replace("/edit/gh-pages/", "/contents/");
        return fetch(apiPath).then(parseJson).then(getContent);
    }

    function addLineNumberToEditLink(lineNumber) {
        editLink.href = editLink.href + "#L" + lineNumber;
    }

    getContentAsync(editURL).then(function (content) {
        var lines = content.split("\n");
        var matchLineNumber = null;
        lines.some(function (line, index) {
            matchLineNumber = index;
            return line.indexOf(itemURL) !== -1;
        });
        if (matchLineNumber != null) {
            addLineNumberToEditLink(matchLineNumber);
        }
    }).catch(function (error) {
        console.error(error, error.stack);
    });
})();