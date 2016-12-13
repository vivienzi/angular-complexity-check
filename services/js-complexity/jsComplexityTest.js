'use strict';

describe('myApp.jsComplexity Service', function() {

  beforeEach(module('myApp'));

  describe('jsComplexity Service', function(){

    it('should exist', inject(function(jsComplexity) {
      expect(jsComplexity).toBeDefined();
      expect(jsComplexity.evaluate).toBeDefined();
    }));
  /*test if complexity*/
    it('should evaluate a single if correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){ if(a){return a;}}')).toEqual(1);
    }));
  
    it('should evaluate an if, else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a){return a;}else{return 0;}}')).toEqual(2);
    }));
  
    it('should evaluate an if, else if, else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a=1){return a;}else if(a=0){return 2;}else{return 0;}}')).toEqual(3);
    }));

    it('should evaluate an if, else if (2), else correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a=1){return a;}else if(a=-1){return 1;}else if(a=0){return 2;}else{return 0;}}')).toEqual(4);
    }));

    it('should ignore conditions in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a=1){return "if";}else{return "else";}}')).toEqual(2);
    }));
	  
	 it('should evaluate if(2) else correctely' , inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){ if(a=1){return "1";}else{return "2"; if(b=1){return "1"}}}')).toEqual(3);
    }));
 /*test switch complexity*/   
        it('should evaluate a single switch correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){switch(a){case a: a;}}')).toEqual(1);
    }));
  
    it('should evaluate an switch case, default correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){switch(a){case a:a;default:0;}}')).toEqual(2);
    }));
  
    it('should evaluate an switch case, default, case correctly', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){switch(a){case 1: default:a; break; case 0:"error";}}')).toEqual(3);
    }));

    it('should ignore conditions in strings', inject(function(jsComplexity) {
      expect(jsComplexity.evaluate('function check(a){switch(a){case 1:"1case1";default: "case"; break;case 2:"default:"}}')).toEqual(3);
    }));
	  
 /*test loop complexity*/
	  it('should evaluate a single for loop correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){for(i=0;i<3;i++){a++;}}')).toEqual(1);
    }));
	  
	  it('should evaluate a single for loop correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){for(i=0;i<3;i++){for(j=0;j<3;j++){a++;}}}')).toEqual(2);
    }));
		  
	   it('should evaluate a single while loop correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){while(i<10){a+=i;i++}}')).toEqual(1);
    }));
	  
	   it('should evaluate a while in while loop correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){while(i<10){while(j<10){a+=i;i++}}}')).toEqual(2);
    }));
	   	   
	  it('should evaluate a do while loop correctly', inject(function(jsComplexity){
       expect(jsComplexity.evaluate('function check(a){do{a+=i;i++;}while(i<10)}')).toEqual(1);
    }));
		  
	  it('should evaluate a ternary operator correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){a===1?1:2}')).toEqual(2);
    }));
	  it('should evaluate ternary operator(2) correctly', inject(function(jsComplexity) {
       expect(jsComplexity.evaluate('function check(a){a===1?(b===1?0:2):2}')).toEqual(4);
    }));	
  });
});
  