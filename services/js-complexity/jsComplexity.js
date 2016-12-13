'use strict';
//At first I use the regex approach,it works as below. Then I trying to use syntax tree, a more simple and accurate way.

//angular.module('myApp')
//.service('jsComplexity', function() {
//    function countIfs(jsCode) {    
//        var allIf=0;
//        var strIf=0;
//        
//        if(jsCode.match(/(if)|(else if)|(else)/gi)==null){
//            allIf=0;
//        }else{allIf=jsCode.match(/(if)|(else if)|(else)/gi).length;}
//        
//        if(jsCode.match(/(\'.*?if.*?\')|(\'.*?else if.*?\')|(\'.*?else.*?\')|(\".*?if.*?\")|(\".*?else if.*?\")|(\".*?else.*?\")/gi)==null){
//            strIf=0;
//        }else{strIf=jsCode.match(/(\'.*?if.*?\')|(\'.*?else if.*?\')|(\'.*?else.*?\')|(\".*?if.*?\")|(\".*?else if.*?\")|(\".*?else.*?\")/gi).length;}
//        
//        return allIf-strIf;
//         
//  };
//    
//    function countCase(jsCode){
//        var strCase=0;
//        
//        var allCase=jsCode.match(/(case)|(default)/gi)==null?0:jsCode.match(/(case)|(default)/gi).length;
//        
//        var strCase=jsCode.match(/(\'.*?case.*?\')|(\'.*?default.*?\')|(\".*?case.*?\")|(\".*?default.*?\")/gi)==null?0:jsCode.match(/(\'.*?case.*?\')|(\'.*?default.*?\')|(\".*?case.*?\")|(\".*?default.*?\")/gi).length;
//        
//        return allCase-strCase;
//    }
//    
//
//  this.evaluate = function(jsCode) {
//    return countCase(jsCode);
//  };
//});
angular.module('myApp')
.service('jsComplexity',function(){
    function countComps(jsCode){
        var ast=esprima.parse(jsCode);
		var comps = 0;
        traverse(ast,{
            pre: function(node){
                if(node.type==='IfStatement'){
                    comps++;}       //check if statement
				if(node.alternate){
					comps++;        //check else and ternary else
					if(node.alternate.type==='IfStatement'){
						comps--;    // delete duplicate 'if else'
					}
				}
				if(node.type==='SwitchCase'){
					comps++;		//check switch case
				}					
				if(node.type==='ForStatement'){
					comps++; 		//check for loop
				}
				if(node.type==='DoWhileStatement'){
					comps++; 		//check do while loop
				}
				if(node.type==='WhileStatement'){
					comps++; 		//check while loop
				}
				if(node.type==='ConditionalExpression'){
					comps++;		//check ternary expression
				}
				
				
            }
        });

        return comps;
    }
	
    
    this.evaluate = function(jsCode){
      return countComps(jsCode); 
    };
});







