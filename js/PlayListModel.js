/**
 * Created by NAVER on 18. 9. 2..
 */
function PlayListModel(options) {
    var _totalList = options.listValue,
        _selectedIndex = 0,
        _selectedMusic = _totalList[_selectedIndex];

    return{
        init : function(){
            _selectedIndex = 0;
            _selectedMusic = _totalList[_selectedIndex];
        },

        setPlayList : function(list){
            _totalList = list;
        },

        getPlayList : function(){
            return _totalList;
        },

        setSelectedMusic : function(index){
            _selectedIndex = index;
            _selectedMusic = _totalList[_selectedIndex];
        },

        getSelectedMusic : function(){
            return _selectedMusic;
        },

        getNextMusic : function(){
            _selectedIndex++;
            if(_selectedIndex >= _totalList.length){
                _selectedIndex = 0;
            }
            return _totalList[_selectedIndex];
        },

        getPreviousMusic : function(){
            _selectedIndex--;
            if(_selectedIndex < 0){
                _selectedIndex = _totalList.length - 1;
            }
            return _totalList[_selectedIndex];
        }

    }
}