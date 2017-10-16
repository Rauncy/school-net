class Grade{
  constructor(grade, type){
    this.grade = grade;
    this.type = type;
  }
}

class GradeSet{

  this.grades = new Array();

  constructor(name, weights){
    this.name = name;
    this.weights = weights;
  }

  this.average = function(type){
    var runningAvg = 0;
    if(type){
      var count = 0;
      this.grades.forEach(function(i){
        if(i.type == type){
          runningAvg+=i.grade;
          count++;
        }
      });
      runningAvg/=count;
    }else{
      for(var i=0;i<this.weights.length;i++){
        runningAvg += average(i)*this.weights[i];
      }
    }
    return runningAvg;
  }

  this.addGrade = function(grade){
    if(grade instanceof Grade){
      this.grades.push(grade);
      return true;
    }
    return false;
  }

  this.getGrade = function(index){
    if(index instanceof Grade){
      for(var i=0;i<grades.length;i++){
        if(grades[i]===index)
      }
    }else if(index instanceof Number){
      
    }
  }
}
