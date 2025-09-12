const { marked } = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurndownService = require("turndown");

/*
    1. convert markdown to html
    2. sanitize the html
    3. convert the sanitized html to a string

*/
    
function sanitizeMarkdown(markdown){
    //get the markdown and convert it into html
    const html = marked.parse(markdown);

    //now sanitize html
    const sanitizedHTML = sanitizeHtml(html,{allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])});

    //convert back to markdown
    const turndownService = new TurndownService();
    const sanitizedMarkdown = turndownService.turndown(sanitizedHTML);

    return sanitizedMarkdown;
}

module.exports = sanitizeMarkdown;