CSS precedence determines which styles will be applied to an HTML element when conflicting styles are defined in multiple places. Here's the precedence order:

1. Inline CSS: Styles defined directly within the HTML element using the style attribute have the highest precedence. They override any other styles applied to the same element.

2. Internal CSS: Styles defined within a <style> tag in the <head> section of the HTML document come next in precedence. They apply to all elements of the same type throughout the document, unless overridden by inline styles.

3. External CSS: Styles defined in an external CSS file linked to the HTML document using the <link> tag have the lowest precedence. They apply globally to all elements of the specified type, unless overridden by inline or internal styles.