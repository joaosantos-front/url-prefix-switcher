// URL Prefix Switcher (Localhost Redirect)
// On extension button click, replaces the current tab's URL origin with a fixed target origin.
// It preserves the path, query string, and hash.

const TARGET_ORIGIN = "http://localhost:8080";

chrome.action.onClicked.addListener(async (tab) => {
  try {
    if (!tab || !tab.url) return;
    const current = new URL(tab.url);

    const target = new URL(TARGET_ORIGIN);
    const newUrl = `${target.origin}${current.pathname}${current.search}${current.hash}`;

    if (newUrl === tab.url) return; // already matching

    await chrome.tabs.update(tab.id, { url: newUrl });
  } catch (err) {
    console.error("URL Prefix Switcher error:", err);
  }
});
