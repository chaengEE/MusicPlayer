/**
 * Created by NAVER on 18. 9. 1..
 */

var PlayerView = function(options){
    const _elPlayer = document.querySelector("."+options.selectorWrapper),
          _playerTitle = _elPlayer.querySelector("."+options.selectorTitle),
          _playerArtist = _elPlayer.querySelector("."+options.selectorArtist),
          _playerTime = _elPlayer.querySelector("."+options.selectorPlaytime),
          _playButton = _elPlayer.querySelector("."+options.selectorButtonPlay),
          _stopButton = _elPlayer.querySelector("."+options.selectorButtonStop),
          _prevButton = _elPlayer.querySelector("."+options.selectorButtonPrevious),
          _nextButton = _elPlayer.querySelector("."+options.selectorButtonNext);

    function _formatTimeDigit(time){
        time = parseInt(time);
        time = time < 10 ? ('0' + time) : time;

        return time;
    }

    return{
        setPlayerTitle : function(title){
            _playerTitle.innerText = title;
        },

        setPlayerArtist : function(artist){
            _playerArtist.innerText = artist;
        },

        setPlayerTime : function(minute, second){
            minute = _formatTimeDigit(minute);
            second = _formatTimeDigit(second);

            _playerTime.innerText = minute + ":" + second;
        },

        getPlayerTime : function(){
            return _playerTime.innerText;
        },

        setButtonLabel : function(type, text){
            switch(type){
                case "play" :
                    _playButton.innerHTML = text;
                    break;

                case "stop" :
                    _stopButton.innerHTML = text;
                    break;

                case "previous" :
                    _prevButton.innerHTML = text;
                    break;

                case "next" :
                    _nextButton.innerHTML = text;
                    break;

                default :
                    break;
            }
        },

        addClickEventPlay : function(playFunc){
            _playButton.addEventListener("click", playFunc);
        },

        addClickEventStop : function(stopFunc){
            _stopButton.addEventListener("click", stopFunc);
        },

        addClickEventPrevious : function(prevFunc){
            _prevButton.addEventListener("click", prevFunc);
        },

        addClickEventNext : function(nextFunc){
            _nextButton.addEventListener("click", nextFunc);
        }
    }
};