import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html'; // Use default import for cleaner code
import TurndownService from 'turndown'; // Use ESM import for consistency

// Instantiate TurndownService with a different variable name (e.g., lowercase)
const turndownService = new TurndownService();

export function sanitizeMarkdownContent(markdownContent) {
    if (!markdownContent) {
        return '';
    }
    // 1. Convert markdown to HTML
    const convertedHtml = marked.parse(markdownContent);

    // 2. Sanitize HTML to remove dangerous tags like <script>
    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        // Using the defaults is fine, this explicitly allows standard tags


        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])

    });

    // 3. Convert the sanitized HTML back to Markdown
    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

    return sanitizedMarkdown;
}

