# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a simple static website with the following structure:

- `index.html`: The main HTML file
- `css/style.css`: Stylesheet for the website
- `js/script.js`: JavaScript file for interactivity
- `images/`: Directory for image assets (currently empty)

## Development Commands

Since this is a static website, there are no build steps, linting, or test commands required. 

To view the website:
1. Open `index.html` in a web browser
2. Alternatively, use a simple static server (e.g., `python -m http.server` or `npx serve`) if needed for testing certain features

## Common Tasks

- **Editing content**: Modify `index.html` to change the website structure and content
- **Styling**: Update `css/style.css` to change the appearance
- **Adding interactivity**: Modify `js/script.js` to add JavaScript functionality
- **Adding assets**: Place images, fonts, or other media in the `images/` directory

## Best Practices

- Keep HTML semantic and accessible
- Maintain consistent CSS naming conventions
- Use vanilla JavaScript for simple interactions (no frameworks required for this project)
- Optimize images before placing them in the `images/` directory