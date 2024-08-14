Assignment-2

1.What is the Shortcut Emmet Used to Create boilerplate of HTML?

   Shortcut for HTML Boilerplate:
        Simply type ! and then press Tab or Enter.
   Example:
     1.	Open a new or existing HTML file.
     2.	Type !.
     3.	Press Tab or Enter.
     
     
2. What is <!DOCTYPE> in HTML?
   
    <!DOCTYPE> is a declaration at the beginning of an HTML document that tells the web browser which version of HTML the page is written in. It helps the browser render the page correctly.
    HTML5 Doctype: <!DOCTYPE html>
    Purpose: Instructs the browser to use the latest standards mode for rendering the HTML, avoiding quirks mode (a fallback to older rendering methods).

   
3. What is a Void Element? Example of Void Elements
   
      A void element is an HTML element that does not have a closing tag and cannot contain any content or other elements inside it.
     •	Examples:
          	<br>: Line break
          	<img>: Image
          	<input>: Input field
            <meta>: Metadata
          	<link>: External resource link (e.g., CSS)
     These elements are self-contained and do not need a closing tag.

   
4. What is the Difference Between Elements and Attributes?
   
      Elements: The building blocks of an HTML document. They are represented by tags (e.g., <div>, <p>, <h1>), and they define the structure and content of a webpage.
            •	<p>This is a paragraph.</p>  Here <p> is the element.
      Attributes: Provide additional information about HTML elements. Attributes are always placed within the opening tag of an element and usually have a name and a value.
            •	<img src="image.jpg" alt="An image"> Here src and alt are attributes of the <img> element.

   
5. What is HTML Entities and Why Are They Needed in HTML?
   
      HTML entities are used to represent special characters in HTML that would otherwise be interpreted as code, such as <, >, or &.
         •	Example:
            	&lt; represents <
             	&gt; represents >
               &amp; represents &
      Why Needed: HTML entities prevent the browser from confusing text with code. For example, using &lt; instead of < ensures that the browser displays the character < instead of interpreting it as the start of an HTML tag.

   
6. What are Meta Tags and Why Are They Used?
    
      Meta tags are snippets of text that provide metadata about an HTML document. They are placed inside the <head> section and are not visible to users.
      •	Common Uses:
          	SEO: <meta name="description" content="Free web tutorials"> provides a description of the page for search engines.
          	Character Set: <meta charset="UTF-8"> specifies the character encoding used.
          	Viewport: <meta name="viewport" content="width=device-width, initial-scale=1.0"> ensures the webpage is responsive and scales correctly on mobile devices.
      Why Used: Meta tags are crucial for search engine optimization (SEO), controlling the display and behaviour of a page in different devices and browsers, and specifying metadata like author, description, and keywords.

    
7. What is the Best Way to Add Images in a Website?
   
      The best way to add images to a website involves several practices:
      •	Using the <img> Element:
           	<img src="path/to/image.jpg" alt="Description of image">
       Best Practices:
       1.	Use the alt Attribute: Always include a descriptive alt text for accessibility and for search engines to understand the content of the image.
       2.	Optimize Image Size: Compress images to reduce load times while maintaining quality. 
       3.	Use Responsive Images: Implement srcset for responsive images that adapt to different screen sizes.
          	<img src="image.jpg" srcset="image-320w.jpg 320w, image-480w.jpg 480w, image-800w.jpg 800w" alt="Description of image">




