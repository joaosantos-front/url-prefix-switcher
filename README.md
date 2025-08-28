# URL Prefix Switcher (Localhost Redirect)

A Chrome extension (Manifest V3) that, on click, replaces the current tab's URL **origin**
(protocol + host + port) with a configured target (e.g., `http://localhost:8080`),
keeping the **path**, **query**, and **hash** unchanged.

## What it does
Example:
`https://book.distribusion.com/checkout?...` -> `http://localhost:8080/checkout?...`

## Configure
Edit `background.js` and adjust the `RULES` array. Each rule has:
- `fromHost`: the original host to match (e.g., `book.distribusion.com`)
- `toOrigin`: the replacement origin (e.g., `http://localhost:8080`)

```js
const RULES = [
  { fromHost: "book.distribusion.com", toOrigin: "http://localhost:8080" },
];
```

## Install (Developer mode)
1. Go to `chrome://extensions` in Chrome.
2. Enable **Developer mode** (top-right).
3. Click **Load unpacked** and select this folder.
4. Pin the extension. Click the icon to redirect the current tab when on a matching host.

## Notes
- Uses only the `activeTab` permission. No data is collected or stored.
- Works on Chrome Manifest V3.
- If the current tab's host doesn't match any `fromHost`, nothing happens.
# url-prefix-switcher
