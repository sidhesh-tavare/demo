// Retrieve the problem title and perform a search when the popup is opened
chrome.storage.local.get('title', (data) => {
    if (data.title) {
        document.getElementById('keyword').value = data.title;
        searchVideo(); // Automatically search with the problem title
    } else {
        console.log('No title found in local storage');
    }

    if (chrome.runtime.lastError) {
        console.error('Error retrieving title:', chrome.runtime.lastError);
    }
});
