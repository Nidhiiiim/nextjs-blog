import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  // Navigation, Asset Management & CSS
  await page.getByRole('link', { name: 'this page!' }).click();
  await page.getByRole('link', { name: 'Back to Basic' }).click();
  await page.getByRole('link', { name: 'this page!' }).click();
  await page.getByRole('heading', { name: 'First Post' }).click();
  await page.getByRole('link', { name: 'Back to Basic' }).click();
  await page.getByRole('link', { name: 'Documentation → Find in-depth information about Next.js features and API.' }).click();
  await page.goto('https://nextjs.org/docs');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Go to Vercel homepage' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://vercel.com/home');
  // pre rendering data fetching
  await page.goto('http://localhost:3000/');
  await page.getByRole('banner').click();
  await page.getByRole('heading', { name: 'Blog' }).click();
  await page.getByText('When to Use Static Generation v.s. Server-side Renderingssg-ssr2020-01-02').click();
  await page.getByText('Two Forms of Pre-renderingpre-rendering2020-01-01').click();
  await page.locator('html').click();
  //Dynamic routing
  await page.goto('http://localhost:3000/posts/pre-rendering');
  await page.locator('html').click();
  await page.getByRole('link', { name: '← Back to home' }).click();

  await page.goto('http://localhost:3000/posts/ssg-ssr');
  await page.locator('html').click();
  await page.getByRole('link', { name: '← Back to home' }).click();

  await page.goto('http://localhost:3000/');
  await page.locator('[id="__next"]').click();
  await page.getByText('When to Use Static Generation v.s. Server-side RenderingJanuary 2, 2020').click();
  await page.getByRole('link', { name: 'When to Use Static Generation v.s. Server-side Rendering' }).click();
  await page.locator('div').filter({ hasText: /^January 2, 2020$/ }).click();
  await page.getByText('Nidhi!When to Use Static Generation v.s. Server-side RenderingJanuary 2, 2020We ').click();
  await page.getByRole('link', { name: '← Back to home' }).click();
  await page.getByRole('link', { name: 'Two Forms of Pre-rendering' }).click();
  await page.getByRole('article').locator('div').filter({ hasText: 'Next.js has two forms of pre-rendering: Static Generation and Server-side Render' }).click();
  await page.getByRole('link', { name: '← Back to home' }).click();
  await page.getByText('January 1, 2020').click();
  await page.getByText('Two Forms of Pre-renderingJanuary 1, 2020').click();
});
