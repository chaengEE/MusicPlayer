var myPlayerView = new PlayerView({
    selectorWrapper : "player-ui-wrap",
    selectorTitle : "music-title",
    selectorArtist : "music-artist",
    selectorPlaytime : "music-playtime",
    selectorButtonPlay : "player-play-btn",
    selectorButtonStop : "player-stop-btn",
    selectorButtonPrevious : "player-prev-btn",
    selectorButtonNext : "player-next-btn"
});

var myListModel = new PlayListModel({
    listValue : list
});

var myListView = new PlayListView({
    selectorWrapper : "music-list-wrap",
    selectorTitle : "music-title",
    selectorArtist : "music-artist",
    selectorPlaytime : "music-playtime"
});

var myController = new PlayerController(myPlayerView, myListView, myListModel);

myController.init();
