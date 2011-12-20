describe('escapeRegExMeta', function(){
	describe('escapes single characters', function(){
		
		it('escapes a single slash', function(){
			expect(escapeRegExMeta('\\')).toEqual('\\\\');
		});
		
		it('escapes a single caret', function(){
			expect(escapeRegExMeta('^')).toEqual('\\^');
		});
		
		it('escapes a single left square bracket', function(){
			expect(escapeRegExMeta('[')).toEqual('\\[');
		});
		
		it('escapes a single right square bracket', function(){
			expect(escapeRegExMeta(']')).toEqual('\\]');
		});
		
		it('escapes a single period', function(){
			expect(escapeRegExMeta('.')).toEqual('\\.');
		});
		
		it('escapes a single dollar sign', function(){
			expect(escapeRegExMeta('$')).toEqual('\\$');
		});
		
		it('escapes a left bracket', function(){
			expect(escapeRegExMeta('{')).toEqual('\\{');
		});
		
		it('escapes a right bracket', function(){
			expect(escapeRegExMeta('}')).toEqual('\\}');
		});
		
		it('escapes a single star', function(){
			expect(escapeRegExMeta('*')).toEqual('\\*');
		});
		
		it('escapes a single left parathesis', function(){
			expect(escapeRegExMeta('(')).toEqual('\\(');
		});
		
		it('escapes a single right parenthesis', function(){
			expect(escapeRegExMeta(')')).toEqual('\\)');
		});
		
		it('escapes a single plus sign', function(){
			expect(escapeRegExMeta('+')).toEqual('\\+');
		});
		
		it('escapes a single pipe', function(){
			expect(escapeRegExMeta('|')).toEqual('\\|');
		});
		
		it('escapes a single question mark', function(){
			expect(escapeRegExMeta('?')).toEqual('\\?');
		});
		
		it('escapes a single less than sign', function(){
			expect(escapeRegExMeta('<')).toEqual('\\<');
		});
		
		it('escapes a single greater than sign', function(){
			expect(escapeRegExMeta('>')).toEqual('\\>');
		});
		
	});
	
	describe('escapes multiple characters', function(){
		
		it('escapes multiple slashes', function(){
			expect(escapeRegExMeta('\\\\\\\\\\')).toEqual('\\\\\\\\\\\\\\\\\\\\');
		});
		
		it('escapes multiple carets', function(){
			expect(escapeRegExMeta('^^^^^')).toEqual('\\^\\^\\^\\^\\^');
		});
		
		it('escapes multiple left square brackets', function(){
			expect(escapeRegExMeta('[[[[[')).toEqual('\\[\\[\\[\\[\\[');
		});
		
		it('escapes multiple right square brackets', function(){
			expect(escapeRegExMeta(']]]]]')).toEqual('\\]\\]\\]\\]\\]');
		});
		
		it('escapes multiple periods', function(){
			expect(escapeRegExMeta('.....')).toEqual('\\.\\.\\.\\.\\.');
		});
		
		it('escapes multiple dollars', function(){
			expect(escapeRegExMeta('$$$$$')).toEqual('\\$\\$\\$\\$\\$');
		});
		
		it('escapes multiple left brackets', function(){
			expect(escapeRegExMeta('{{{{{')).toEqual('\\{\\{\\{\\{\\{');
		});
		
		it('escapes multiple right brackets', function(){
			expect(escapeRegExMeta('}}}}}')).toEqual('\\}\\}\\}\\}\\}');
		});
		
		it('escapes multiple stars', function(){
			expect(escapeRegExMeta('*****')).toEqual('\\*\\*\\*\\*\\*');
		});
		
		it('escapes multiple left paratheses', function(){
			expect(escapeRegExMeta('(((((')).toEqual('\\(\\(\\(\\(\\(');
		});
		
		it('escapes multiple right parentheses', function(){
			expect(escapeRegExMeta(')))))')).toEqual('\\)\\)\\)\\)\\)');
		});
		
		it('escapes multiple plus signs', function(){
			expect(escapeRegExMeta('+++++')).toEqual('\\+\\+\\+\\+\\+');
		});
		
		it('escapes multiple pipes', function(){
			expect(escapeRegExMeta('|||||')).toEqual('\\|\\|\\|\\|\\|');
		});
		
		it('escapes multiple question marks', function(){
			expect(escapeRegExMeta('?????')).toEqual('\\?\\?\\?\\?\\?');
		});
		
		it('escapes multiple less than signs', function(){
			expect(escapeRegExMeta('<<<<<')).toEqual('\\<\\<\\<\\<\\<');
		});
		
		it('escapes multiple greater than signs', function(){
			expect(escapeRegExMeta('>>>>>')).toEqual('\\>\\>\\>\\>\\>');
		});
		
	});
	
	describe('escapes strings', function(){
		
		it('escapes a series of special characters', function(){
			expect(escapeRegExMeta('\\^[].${}*()+|?<>')).toEqual('\\\\\\^\\[\\]\\.\\$\\{\\}\\*\\(\\)\\+\\|\\?\\<\\>');
		});
		
		it('escapes another series of special characters', function(){
			expect(escapeRegExMeta('><?|+)(*}{$.][^\\')).toEqual('\\>\\<\\?\\|\\+\\)\\(\\*\\}\\{\\$\\.\\]\\[\\^\\\\');
		});
		
		it('escapes <Hello>$<World?>', function(){
			expect(escapeRegExMeta('<Hello>$<World?>')).toEqual('\\<Hello\\>\\$\\<World\\?\\>');
		});
		
		it('escapes a randomly generated string composed of all regex meta characters', function(){
			var key = '\\,^,[,],.,$,{,},*,(,),+,|,?,<,>'.split(',');
			var escKey = '\\\\,\\^,\\[,\\],\\.,\\$,\\{,\\},\\*,\\(,\\),\\+,\\|,\\?,\\<,\\>'.split(',');
			var len = key.length;
			var randLoop = Math.floor(20 * Math.random());
			var str = '';
			var escStr = '';
			var j;
			
			for(var i=0; i<randLoop; i++){
				j = Math.floor(len * Math.random());
				
				str += key[j];
				escStr += escKey[j];
			}
			
			console.log(str);
			expect(escapeRegExMeta(str)).toEqual(escStr);
		});
		
		it('escapes a randomly generated string composed of all alphanumeric characters', function(){
			var chars = [
				'a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|1|2|3|4|5|6|7|8|9|0|!|@|#|%|-|_|/|`|~|,|:|;|\'| |"'.split('|'),
				'\\,^,[,],.,$,{,},*,(,),+,|,?,<,>'.split(','),
				'\\\\,\\^,\\[,\\],\\.,\\$,\\{,\\},\\*,\\(,\\),\\+,\\|,\\?,\\<,\\>'.split(',')
			];
			var lens = [
				chars[0].length,
				chars[1].length,
				chars[2].length
			];
			var strLen = Math.round(Math.random() * 30);
			var str = '';
			var escStr = '';
			var idx = '';
			var chr;
			
			for(var i=0; i<strLen; i++){
				idx = Math.round(Math.random() * 1);
				chr = Math.floor(Math.random() * lens[idx]);
				
				str += chars[idx][chr];
				escStr += idx == 1 ? chars[2][chr] : chars[0][chr];
			}
			
			console.log(str, '\n', escStr);
			
			expect(escapeRegExMeta(str)).toEqual(escStr);
		});
	});
});