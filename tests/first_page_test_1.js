const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // Navigate to the page
    await page.goto('http://localhost:3001/posts/first-post'); // Adjust the URL as per your setup

    // Test: Check page title
    const pageTitle = await page.title();
    console.log('Page title:', pageTitle);

    // Test: Check primary heading
    const primaryHeading = await page.textContent('h1');
    console.log('Primary heading:', primaryHeading);

    // Test: Check "Next.js" heading
    const nextJsHeading = await page.textContent('h1:nth-child(2)');
    console.log('"Next.js" heading:', nextJsHeading);

    // Test: Click the link and navigate back to the homepage
    const link = await page.waitForSelector('h2 a');
    await link.click();
    await page.waitForNavigation();

    const currentUrl = page.url();
    console.log('Current URL:', currentUrl);
  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Close the browser
    await browser.close();
  }
})();
