# nginx

https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-nginx.html
https://www.fadocodecamp.com/posts/docker-php-nginx-complete-guide

clean vscode install - configuration

stackblitz

---

Semantic HTML refers to using HTML tags that convey meaning about the content they enclose, making the structure of the web page more understandable for both humans and machines (like search engines and screen readers). The main components of semantic HTML include various tags that clearly describe the purpose and structure of the content. Here are the key components:

1. Structural Elements
   These elements define the overall structure of a webpage, representing distinct sections of content:

<header>: Represents the introductory content or navigation for the page or section.
<footer>: Represents the footer content of a section or page, often containing information like copyright, contact links, etc.
<main>: Defines the main content of a document, ensuring it’s distinct from other sections like headers, footers, and sidebars.
<article>: Represents independent, self-contained content that could be distributed or reused, like blog posts or news articles.
<section>: Groups content into sections, typically with a heading, and is used for organizing content thematically.
<nav>: Denotes a section of navigation links to help users find other parts of the website.
<aside>: Represents content that is related to but separate from the main content, like sidebars or advertisements.
2. Textual Elements
These elements describe the type of content being presented:

<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Define headings for content, with <h1> being the most important and <h6> the least.
<p>: Represents a paragraph of text.
<blockquote>: Used for indicating a section of text that is quoted from another source.
<code>: Displays a snippet of code.
<pre>: Represents preformatted text, preserving spacing and line breaks.
<strong>: Indicates text with strong importance, usually displayed in bold.
<em>: Represents text that should be emphasized, typically displayed in italics.
3. Form Elements
These elements help in creating forms that interact with users:

<form>: Defines a form for user input.
<input>: Allows the user to enter data, such as text, numbers, or passwords.
<label>: Provides a label for form elements, improving accessibility.
<select>: Creates a dropdown list for form selection.
<textarea>: Defines a multi-line input field.
<button>: Defines a clickable button for form submission or interaction.
4. List Elements
These elements define ordered, unordered, and definition lists:

<ul>: Defines an unordered list (bulleted).
<ol>: Defines an ordered list (numbered).
<li>: Defines a list item within an ordered or unordered list.
<dl>: Defines a definition list.
<dt>: Defines a term in a definition list.
<dd>: Defines a description of the term in a definition list.
5. Linking and Media Elements
These elements define hyperlinks and multimedia content:

<a>: Defines a hyperlink, used for navigation between pages.
<img>: Embeds an image in the document.
<audio>: Embeds an audio file that can be played.
<video>: Embeds a video file that can be played. 6. Table Elements
These elements define tables for displaying tabular data:

<table>: Defines a table structure.
<tr>: Defines a row in the table.
<th>: Represents a header cell in a table.
<td>: Represents a data cell in a table.
<thead>: Groups the header content in a table.
<tbody>: Groups the body content in a table.
<tfoot>: Groups the footer content in a table.
7. Metadata Elements
These elements are used to provide meta-information about the document:

<meta>: Provides metadata about the HTML document, like character encoding or author information.
<title>: Sets the title of the document, shown in the browser's title bar or tab.
<link>: Specifies relationships between the current document and external resources (commonly used for linking stylesheets).
8. Embedded Content
These elements are used to embed external content:

<iframe>: Embeds an external resource, like a webpage, within the current document.
<object>: Embeds external objects, such as images, videos, or documents.
<embed>: Embeds external content, often multimedia.
9. Accessibility Tags
These elements are used to enhance accessibility for screen readers and assistive technology:

<figcaption>: Provides a caption for a <figure>.
<figure>: Represents content that is self-contained, such as an image or diagram, and might include a caption.
<mark>: Highlights text for emphasis.
<summary>: Provides a summary or heading for a <details> element.
By using these semantic elements appropriately, a web page becomes more organized, accessible, and search engine-friendly, contributing to better user experience and SEO.

---

4. Other Ways to Optimize for Search Engines
   Instead of focusing on the keywords meta tag, consider using the following SEO best practices:

Title Tag: The <title> tag is one of the most important on-page SEO factors. Make sure it is descriptive and includes relevant keywords.

Meta Description: While it doesn’t directly affect rankings, the <meta name="description" content="..."> tag is important for click-through rate (CTR). A compelling, keyword-rich description can attract more visitors to your page from search results.

Content Quality: Search engines now prioritize high-quality, user-centric content. Your content should naturally include relevant keywords without keyword stuffing.

Headings (<h1>, <h2>, etc.): Proper use of headings helps search engines understand the structure of your content. Include relevant keywords in headings, but don't overdo it.

Alt Attributes: Use descriptive alt text for images. This helps search engines understand the content of images and is important for image SEO.

Internal and External Links: Linking to other relevant pages on your site (internal linking) and obtaining quality backlinks from reputable sources (external linking) are important ranking factors.

Structured Data (Schema.org): Structured data helps search engines understand the context of your content and may improve your visibility with rich snippets in search results.

Mobile Optimization and Page Speed: Google uses mobile-first indexing, so ensuring your site is mobile-friendly and loads quickly is crucial for ranking well.

---

## In modern SEO practices, other methods like Schema.org structured data for authorship or visible <article> tags with author attributes are typically preferred for marking content with author information.
