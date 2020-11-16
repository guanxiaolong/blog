/**
 *
 * User: gggggggggggggggggggggggg
 * Date: 2020-06-22
 * Time: 10:15
 *
 */

var ghpages = require('gh-pages');
ghpages.publish('./docs/.vuepress/dist', {
    src: 'https://github.com/guanxiaolong/blog.git',
    branch: 'gh-pages',
}, function(err) {
    console.log(err);
});
