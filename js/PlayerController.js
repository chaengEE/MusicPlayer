/**
 * Created by NAVER on 18. 9. 3..
 */
var PlayerController = function(playerView, listView, listModel){
    const _playerView = playerView,
        _listView = listView,
        _listModel = listModel;
    var _isPlay = false,
        _timerID = '';

    function init(){
        let totalList = _listModel.getPlayList(),
            selectedMusic = _listModel.getSelectedMusic();

        _listView.init();
        totalList.forEach(function(music){
            _listView.createListDOM(music);
        });

        _listView.setSelectedMusic(selectedMusic.id);
        _playerView.setPlayerTitle(selectedMusic.title);
        _playerView.setPlayerArtist(selectedMusic.artist);
        _playerView.setPlayerTime(0, 0);

        bindEvent();
    }

    function bindEvent(){
        _listView.addClickEventWatch(onClickListView);
        _playerView.addClickEventPlay(onClickPlayerPlay);
        _playerView.addClickEventStop(onClickPlayerStop);
        _playerView.addClickEventPrevious(onClickPlayerPrevNext);
        _playerView.addClickEventNext(onClickPlayerPrevNext);
    }

    function onClickListView(event){
        event.preventDefault();
        if(_timerID){
            clearInterval(_timerID);
        }

        let selectedID = event.target.parentNode.getAttribute("id"),
            totalList = _listModel.getPlayList();

        totalList.forEach(function(music, index){
            if(music.id === selectedID){
                _listModel.setSelectedMusic(index);
            }
        });

        changeMusic("select");
    }

    function onClickPlayerPlay(event){
        event.preventDefault();
        if(_isPlay){
            clearInterval(_timerID);
            _isPlay = false;
            _playerView.setButtonLabel("play", "재생");
        } else{
            _isPlay = true;
            _playerView.setButtonLabel("play", "일시정지");
            playMusic();
        }
    }

    function onClickPlayerStop(event){
        event.preventDefault();
        clearInterval(_timerID);
        _isPlay = false;
        _playerView.setButtonLabel("play", "재생");
        _playerView.setPlayerTime(0, 0);
    }

    function onClickPlayerPrevNext(event){
        if(event.target.className.includes("next")){
            changeMusic("next");
        }else {
            changeMusic("prev");
        }
    }

    function playMusic(){
        let totalTime = splitPlaytime(_listModel.getSelectedMusic().playtime),
            playTime = splitPlaytime(_playerView.getPlayerTime());

        _timerID = setInterval(function(){
            if(playTime.minute < totalTime.minute){
                if(playTime.second < 59){
                    playTime.second++;
                }else{
                    playTime.minute++;
                    playTime.second = 0;
                }
            }else if(playTime.minute === totalTime.minute){
                if(playTime.second < totalTime.second){
                    playTime.second++;
                }else{
                    changeMusic("next");
                    return true;
                }
            }

            _playerView.setPlayerTime(playTime.minute, playTime.second);
        }, 1000);
    }

    function splitPlaytime(totaltime){
        let time = totaltime.split(/[^0-9]/g);

        return {
            minute : parseInt(time[0]),
            second : parseInt(time[1])
        }
    }

    function changeMusic(type){
        if(_timerID){
            clearInterval(_timerID);
        }

        let music = "";
        switch (type){
            case "next" :
                music = _listModel.getNextMusic();
                break;

            case "prev" :
                music = _listModel.getPreviousMusic();
                break;

            default :
                music = _listModel.getSelectedMusic();
                break;
        }

        _listView.setSelectedMusic(music.id);
        _playerView.setPlayerTitle(music.title);
        _playerView.setPlayerArtist(music.artist);
        _playerView.setPlayerTime(0, 0);

        if(_isPlay){
            playMusic();
        }
    }

    return{
        init : init
    }
};