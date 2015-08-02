// LICENSE : MIT
"use strict";
var yaml = require("js-yaml");
var items = require("../_data/items.json");
var moment = require("moment");
var slug = require("slug");
var path = require("path");
var fs = require("fs");
function pickFromMatter(item) {
    var object = {
        title: item.title,
        author: "azu",
        layout: "post",
        itemUrl: item.url,
        // e.g.) data/2015/08/index.json
        editJSONPath: "https://github.com/jser/jser.info/edit/gh-pages/data/" + moment.utc(item.date).format("YYYY/MM") + "/index.json",
        date: item.date
    };
    if (item.tags && item.tags.length > 0) {
        object.tags = item.tags;
    }

    if (item.relatedLinks && item.relatedLinks.length > 0) {
        object.relatedLinks = item.relatedLinks;
    }
    return object;
}
function createPost(item) {
    var frontMatter = pickFromMatter(item);
    return ("---\n" +
    yaml.safeDump(frontMatter) +
    "---\n" +
    String(item.content) + "\n").replace(/[\n\r]/g, '\n');
}
function creteSafeSlug(item) {
    var options = {
        replacement: '-',
        symbols: true,
        remove: /[.]/g,
        lower: true,
        charmap: slug.charmap,
        multicharmap: slug.multicharmap
    };
    var slugForItem = slug(item.title, options);
    if (slugForItem.length <= 1) {
        slugForItem = slug(item.url, options);
    }
    // avoid ENAMETOOLONG
    if (slugForItem.length > 200) {
        return slugForItem.slice(0, 200);
    }
    return slugForItem;
}
function createPostFrom(item) {
    var postDir = path.join(__dirname, "..", "_posts");
    var fileName = moment.utc(item.date).format("YYYY-MM-DD") + "-" + creteSafeSlug(item) + ".md";
    fs.writeFileSync(path.join(postDir, fileName), createPost(item), "utf8");
}

items.forEach(function (item) {
    createPostFrom(item);
});