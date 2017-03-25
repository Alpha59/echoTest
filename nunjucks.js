const nunjucks = require('nunjucks');
const glob = require("glob")
const fs = require('fs');


nunjucks.configure({autoescape: true});
glob("src/html/*.html", {}, function (er, templates) {
    glob("lang/*.js", {}, function (er, langs) {
        templates.map(function open(template){
            langs.map(function render(lang){
                const conf = require(`./${lang}`);
                const rendered = nunjucks.render(template, conf);
                const filename = template.split('/').pop();
                fs.writeFile(`static/${conf.lang}/${filename}`, rendered, () => console.log(`static/${conf.lang}/${filename}`));
            });
        });
    });
});

/*rendered = nunjucks.render('index.html', {
    fuck: 'jake'
}));*/