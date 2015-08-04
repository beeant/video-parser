var VideoParser = require('./');

var parser = new VideoParser({
    name: 'video-parser-cache',
    redis: {
        host: '127.0.0.1',
        port: 6379
    },
    youtube: {
        key: ''
    },
    vimeo: {
        access_token: ''
    },
    youku: {
        key: ''     // client_id
    },
    ttl: 3600 * 12  // 1 day
});


parser.on('error', function(err) {
    console.error(err);
});

var url = [
    // 'https://www.youtube.com/watch?v=-RWl24TUW6g',
    // 'https://youtu.be/-RWl24TUW6g',
    // 'https://vimeo.com/60788712',
    // 'https://www.facebook.com/video/embed?video_id=368508506585276',
    // 'https://www.facebook.com/1399785403664362/videos/1428693740773528/',
    // 'http://v.youku.com/v_show/id_XMTMwMDYxMjQxMg==_ev_1.html?from=y1.3-idx-uhome-1519-20887.205805-205902.1-1',
    // 'http://v.youku.com/v_show/id_XMTI5NDcwNjQxNg==.html?f=23007024&from=y1.3-idx-uhome-1519-20887.205908-205909-205916.1-3',
    // 'http://v.youku.com/v_show/id_XMTMwMDgxNTY0NA==.html?f=25924643&ev=3',
    // 'http://player.youku.com/player.php/Type/Folder/Fid/25924643/Ob/1/sid/XMTMwMDgxNTY0NA==/v.swf'
    // 'http://player.youku.com/embed/XMTI5NTcwMDA3Mg=='
];

for (var i = 0; i < url.length; i++) {
    parser.parse(function(err, video) {
        console.log(url, video);
    }, url[i]);
}