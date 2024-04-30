chrome.commands.onCommand.addListener((command) => {
    if (command === 'open-translate') {
        chrome.tabs.create({ url: "https://translate.google.com/?sl=en&tl=fa&op=translate" });
        return;
    }
    if (command === 'open-longman') {
        chrome.tabs.create({ url: "https://www.ldoceonline.com/" });
        return;
    }
    if (command === 'open-youtube') {
        chrome.tabs.create({ url: "https://www.youtube.com/" });
        return;
    }
    if (command === 'open-todo-list') {
        chrome.tabs.create({ url: "https://to-do.live.com/tasks/today" });
        return;
    }


})