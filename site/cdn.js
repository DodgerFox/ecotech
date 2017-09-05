var jsdom = require('jsdom').jsdom;
var glob = require('glob');
var cdnizerFactory = require("cdnizer");
var fs = require('fs');
var path = require('path');
var url = require('url');

var args = process.argv.slice(2);

if (args.length == 0) {
    console.log('Wrong argument pass');
    console.log('Usage: cnd.js staticDomain');
    return -1;
}

var parsed = url.parse(args[0]);

if (parsed.host == null) {
    console.log('Wrong staticDomain');
    console.log('Usage: cnd.js staticDomain');
    return -1;
}

var staticDomain = args[0] + '/';

console.log('Build HTML...');
var files = glob("**/dist/**/*.html", {mark: true, sync: true});
//var files = ['start-trading/dist/ru/index.html']
for (var i in files) {
    var file = files[i];
    console.log('Processing...', file);
    var segments = file.split('/');
    var relative = segments[segments.length-3] + '/';
    var pathSegment = 'land/' + segments[0];
    cdnizerRelative = cdnizerFactory({
        defaultCDNBase: staticDomain + pathSegment,
        allowRev: true,
        allowMin: true,
        relativeRoot: relative,
        files: [
            'assets/**/*.{js,css,png,gif,jpg,ico,xml}*',
            '*.{js,css,png,gif,jpg,svg,ico,xml,mp4,webm,m4v,pdf}*',
            'assets/**/platform'
        ],
        matchers: [

            // Replace pattern for <svg>:<use> tags
            //{ pattern: /(<use\s[^>]*?xlink:href=["'])(.+?)(["'][^>]*>)/gi, fallback: false},
            { pattern: /(<div\s[^>]*?data-vide-bg=["'])(.+?)(["'][^>]*>)/gi, fallback: false},
            // Replace pattern for <meta> tags
            { pattern: /(<meta\s[^>]*?content=["'])(.+?)(["'][^>]*>)/gi, fallback: false},
            // link with quoted href and optional end tag
            { pattern: /(<link\s[^>]*?href=["'])([\s\S]+?)(["'][^>]*>(?:\s*<\/link>)?)/gi, fallback: true },
            // link with unquoted href and optional end tag
            { pattern: /(<link\s[^>]*?href=)([\s\S]+?)((?:>|\s[^>]*>)(?:\s*<\/link>)?)/gi, fallback: true }
        ]
    });
    cdnizer = cdnizerFactory({
        defaultCDNBase: staticDomain + pathSegment,
        allowRev: true,
        allowMin: true,
        files: [
            '/assets/{scripts,styles,images,video,documents}/**/*.{js,css,png,gif,jpg,svg,ico,xml,mp4,webm,m4v,pdf}*',
            '*.{js,css,png,gif,jpg,svg,ico,xml,mp4,webm,m4v,pdf}*'
        ],
        matchers: [

            // Replace pattern for <meta> tags
            { pattern: /(<meta\s[^>]*?content=["'])(.+?)(["'][^>]*>)/gi, fallback: false},
            { pattern: /(<source\s[^>]*?src=["'])(.+?)(["'][^>]*>)/gi, fallback: false}
        ]
    });
    var pFile = fs.readFileSync(file, 'utf8');
    outPutFile = cdnizerRelative(pFile);
    outPutFile = cdnizer(outPutFile);
    fs.writeFileSync(file, outPutFile);
}
console.log('Done');

console.log('Building Assets...');
files = glob("**/dist/assets/**/*.css", {mark: true, sync: true});
//files = ['start-trading/dist/assets/styles/common.css'];
for (var i in files) {
    var file = files[i];
    console.log('Processing...', file);
    var segments = file.split('/');
    var relative = segments[segments.length-2] + '/';
    console.log(relative);
    var pathSegment = 'land/' + segments[0] + '/' + segments[2];
    cdnizerStyles = cdnizerFactory({
        defaultCDNBase: staticDomain + pathSegment,
        relativeRoot: relative,
        files: [
            '**/*.{gif,png,jpg,jpeg}*'
        ]
    });
    var pFile = fs.readFileSync(file, 'utf8');
    outPutFile = cdnizerStyles(pFile);
    fs.writeFileSync(file, outPutFile);
}
console.log('Done');