(function(){

	define(['module'], function (module) {

		return {
            version: '1.0.0',

            localize : function(text, data){
      
		      var left = '';
		      var cursor_idx = 0;
		      while(text.length > 0){
		        if(text.indexOf('{{') != -1 && text.indexOf('}}') != -1){
		          var idx0 = text.indexOf('{{');
		          var idx1 = text.indexOf('}}');
		          var key = text.substring(idx0+2, idx1);
		          var left_portion = text.substring(0, idx1+2);
		          if(data[key])
		            left_portion = left_portion.replace('{{'+key+'}}', data[key]);
		          else
		            left_portion = left_portion.replace('{{'+key+'}}', key);
		          left = left + left_portion;
		          text = text.substring(idx1+2);
		      }else{
		        left = left + text;
		        text = "";
		      }
		    }
		      return left;
		    },
        }
	});
}());
