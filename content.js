// Function to get the problem title from the current URL
function getProblemTitleFromUrl() {
    const url = window.location.href; // Get the current URL
    const parsedUrl = new URL(url);
    const pathSegments = parsedUrl.pathname.split('/');

    // Get the part right after "problems"
    const problemSlugIndex = pathSegments.indexOf("problems") + 1; // Get the index of the problem slug
    const problemSlug = pathSegments[problemSlugIndex]; // Directly get the slug without checking

    return problemSlug ? problemSlug.replace(/-/g, ' ') : ''; // Replace dashes with spaces
}

// Extract the problem title
const problemTitle = getProblemTitleFromUrl();

// Store the problem title in Chrome storage
chrome.storage.local.set({ title: problemTitle }, () => {
    console.log('Problem title stored in local storage:', problemTitle);
});
