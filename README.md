# techxchange2024-lab2205

Lab available at <https://ibm.github.io/techxchange2024-lab2205/>

## Development

Built from <https://github.com/carbon-design-system/gatsby-starter-carbon-theme>. Documentation at <https://gatsby-theme-carbon.vercel.app/getting-started/>.

### Run Locally

1. Start the development server
   ```
   npm run dev
   ```
2. Wait for the following output (**Note**: you may have to scroll up to notice when this comes out):
   ```
   You can now view example in the browser.
   ⠀
     Local:            http://localhost:8000/
   ```
3. Open a browser to <http://localhost:8000/>

### Build Public Page

```
npm run deploy
```

### Create Fork

1. Update references to "Lab 2205" and "techxchange2024-lab2205" in:
    * `src/pages/index.mdx`
    * `src/gatsby-theme-carbon/components/LeftNav/ResourceLinks.js`
1. After running `npm run deploy` the first time, go to `/settings/pages` on the GitHub page and change the Branch to `gh-pages`.
