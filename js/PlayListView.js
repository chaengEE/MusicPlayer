/**
 * Created by NAVER on 18. 9. 1..
 */
var PlayListView = function(options){
    const _elPlaylist = document.querySelector("."+options.selectorWrapper);

    return {
        init : function(){
            _elPlaylist.innerHTML = "";
        },

        createListDOM : function(music){
            var playlink = document.createElement("a"),
                title = document.createElement("span"),
                artist = document.createElement("span"),
                playtime = document.createElement("span");

            playlink.setAttribute("href", "#");
            playlink.setAttribute("id", music.id);
            title.className = options.selectorTitle;
            title.innerHTML = music.title;
            artist.className = options.selectorArtist;
            artist.innerHTML = "("+music.artist+")";
            playtime.className = options.selectorPlaytime;
            playtime.innerHTML = "["+music.playtime+"] ";

            playlink.appendChild(playtime);
            playlink.appendChild(title);
            playlink.appendChild(artist);

            var playItem = document.createElement("li");
            _elPlaylist.appendChild(playItem).appendChild(playlink);
        },

        setSelectedMusic : function(selectedID){
            let preSelected = _elPlaylist.querySelector(".selected");
            if(preSelected) {
                preSelected.className = "";
            }
            let selectedMusic = _elPlaylist.querySelector("[id="+selectedID+"]");
            selectedMusic.className = "selected";
        },

        addClickEventWatch : function(eventFunc){
            let listItem = _elPlaylist.querySelectorAll("li");
            listItem.forEach(function(music){
                music.addEventListener("click",eventFunc);
            });
        }
    }
};