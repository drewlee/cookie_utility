describe('Cookie._escapeRegExMeta', function(){
  describe('escapes single characters', function(){
    
    it('escapes a single slash', function(){
      expect(Cookie._escapeRegExMeta('\\')).toEqual('\\\\');
    });
    
    it('escapes a single caret', function(){
      expect(Cookie._escapeRegExMeta('^')).toEqual('\\^');
    });
    
    it('escapes a single left square bracket', function(){
      expect(Cookie._escapeRegExMeta('[')).toEqual('\\[');
    });
    
    it('escapes a single right square bracket', function(){
      expect(Cookie._escapeRegExMeta(']')).toEqual('\\]');
    });
    
    it('escapes a single period', function(){
      expect(Cookie._escapeRegExMeta('.')).toEqual('\\.');
    });
    
    it('escapes a single dollar sign', function(){
      expect(Cookie._escapeRegExMeta('$')).toEqual('\\$');
    });
    
    it('escapes a left bracket', function(){
      expect(Cookie._escapeRegExMeta('{')).toEqual('\\{');
    });
    
    it('escapes a right bracket', function(){
      expect(Cookie._escapeRegExMeta('}')).toEqual('\\}');
    });
    
    it('escapes a single star', function(){
      expect(Cookie._escapeRegExMeta('*')).toEqual('\\*');
    });
    
    it('escapes a single left parathesis', function(){
      expect(Cookie._escapeRegExMeta('(')).toEqual('\\(');
    });
    
    it('escapes a single right parenthesis', function(){
      expect(Cookie._escapeRegExMeta(')')).toEqual('\\)');
    });
    
    it('escapes a single plus sign', function(){
      expect(Cookie._escapeRegExMeta('+')).toEqual('\\+');
    });
    
    it('escapes a single pipe', function(){
      expect(Cookie._escapeRegExMeta('|')).toEqual('\\|');
    });
    
    it('escapes a single question mark', function(){
      expect(Cookie._escapeRegExMeta('?')).toEqual('\\?');
    });
    
    it('escapes a single less than sign', function(){
      expect(Cookie._escapeRegExMeta('<')).toEqual('\\<');
    });
    
    it('escapes a single greater than sign', function(){
      expect(Cookie._escapeRegExMeta('>')).toEqual('\\>');
    });
    
  });
  
  describe('escapes multiple characters', function(){
    
    it('escapes multiple slashes', function(){
      expect(Cookie._escapeRegExMeta('\\\\\\\\\\')).toEqual('\\\\\\\\\\\\\\\\\\\\');
    });
    
    it('escapes multiple carets', function(){
      expect(Cookie._escapeRegExMeta('^^^^^')).toEqual('\\^\\^\\^\\^\\^');
    });
    
    it('escapes multiple left square brackets', function(){
      expect(Cookie._escapeRegExMeta('[[[[[')).toEqual('\\[\\[\\[\\[\\[');
    });
    
    it('escapes multiple right square brackets', function(){
      expect(Cookie._escapeRegExMeta(']]]]]')).toEqual('\\]\\]\\]\\]\\]');
    });
    
    it('escapes multiple periods', function(){
      expect(Cookie._escapeRegExMeta('.....')).toEqual('\\.\\.\\.\\.\\.');
    });
    
    it('escapes multiple dollars', function(){
      expect(Cookie._escapeRegExMeta('$$$$$')).toEqual('\\$\\$\\$\\$\\$');
    });
    
    it('escapes multiple left brackets', function(){
      expect(Cookie._escapeRegExMeta('{{{{{')).toEqual('\\{\\{\\{\\{\\{');
    });
    
    it('escapes multiple right brackets', function(){
      expect(Cookie._escapeRegExMeta('}}}}}')).toEqual('\\}\\}\\}\\}\\}');
    });
    
    it('escapes multiple stars', function(){
      expect(Cookie._escapeRegExMeta('*****')).toEqual('\\*\\*\\*\\*\\*');
    });
    
    it('escapes multiple left paratheses', function(){
      expect(Cookie._escapeRegExMeta('(((((')).toEqual('\\(\\(\\(\\(\\(');
    });
    
    it('escapes multiple right parentheses', function(){
      expect(Cookie._escapeRegExMeta(')))))')).toEqual('\\)\\)\\)\\)\\)');
    });
    
    it('escapes multiple plus signs', function(){
      expect(Cookie._escapeRegExMeta('+++++')).toEqual('\\+\\+\\+\\+\\+');
    });
    
    it('escapes multiple pipes', function(){
      expect(Cookie._escapeRegExMeta('|||||')).toEqual('\\|\\|\\|\\|\\|');
    });
    
    it('escapes multiple question marks', function(){
      expect(Cookie._escapeRegExMeta('?????')).toEqual('\\?\\?\\?\\?\\?');
    });
    
    it('escapes multiple less than signs', function(){
      expect(Cookie._escapeRegExMeta('<<<<<')).toEqual('\\<\\<\\<\\<\\<');
    });
    
    it('escapes multiple greater than signs', function(){
      expect(Cookie._escapeRegExMeta('>>>>>')).toEqual('\\>\\>\\>\\>\\>');
    });
    
  });
  
  describe('escapes strings', function(){
    it('escapes a series of special characters', function(){
      expect(Cookie._escapeRegExMeta('\\^[].${}*()+|?<>')).toEqual('\\\\\\^\\[\\]\\.\\$\\{\\}\\*\\(\\)\\+\\|\\?\\<\\>');
    });
    
    it('escapes another series of special characters', function(){
      expect(Cookie._escapeRegExMeta('><?|+)(*}{$.][^\\')).toEqual('\\>\\<\\?\\|\\+\\)\\(\\*\\}\\{\\$\\.\\]\\[\\^\\\\');
    });
    
    it('escapes <Hello>$<World?>', function(){
      expect(Cookie._escapeRegExMeta('<Hello>$<World?>')).toEqual('\\<Hello\\>\\$\\<World\\?\\>');
    });
    
    it('escapes a randomly generated string composed of all regex meta characters', function(){
      var chars = [
            ['\\', '\\\\'],
            ['^', '\\^'],
            ['[', '\\['],
            [']', '\\]'],
            ['.', '\\.'],
            ['$', '\\$'],
            ['{', '\\{'],
            ['}', '\\}'],
            ['*', '\\*'],
            ['(', '\\('],
            [')', '\\)'],
            ['+', '\\+'],
            ['|', '\\|'],
            ['?', '\\?'],
            ['<', '\\<'],
            ['>', '\\>']
          ],
          len = chars.length,
          rand = Math.floor( 20 * Math.random() ),
          str = '',
          escStr = '',
          j;
      
      for (var i=0; i<rand; i++){
        j = Math.floor( len * Math.random() );

        str += chars[j][0];
        escStr += chars[j][1];
      }

      expect( Cookie._escapeRegExMeta(str) ).toEqual( escStr );
    });

    it('escapes a randomly generated string composed of all alphanumeric characters', function(){
      var chars = [
            'a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|1|2|3|4|5|6|7|8|9|0|!|@|#|%|-|_|/|`|~|,|:|;|\'| |"'.split('|'),
            '\\,^,[,],.,$,{,},*,(,),+,|,?,<,>'.split(','),
            '\\\\,\\^,\\[,\\],\\.,\\$,\\{,\\},\\*,\\(,\\),\\+,\\|,\\?,\\<,\\>'.split(',')
          ],
          lens = [
            chars[0].length,
            chars[1].length,
            chars[2].length
          ],
          strLen = Math.round( Math.random() * 30 ),
          str = '',
          escStr = '',
          idx = '',
          chr;

      for (var i=0; i<strLen; i++){
        idx = Math.round( Math.random() * 1 );
        chr = Math.floor( Math.random() * lens[idx] );
        
        str += chars[idx][chr];
        escStr += idx == 1 ? chars[2][chr] : chars[0][chr];
      }

      console.log(str, '\n', escStr);

      expect( Cookie._escapeRegExMeta(str) ).toEqual( escStr );
    });
  });
});
