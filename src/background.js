chrome.commands.onCommand.addListener((command) => {
    if (command === 'open-translate') {
        chrome.tabs.create({ url: "https://translate.google.com/?sl=en&tl=fa&op=translate" });
    }

})