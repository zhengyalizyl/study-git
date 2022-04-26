

class ScorePlanel{
    score=0;
    level=1;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    maxlevel:number;
    upScore:number;

    constructor(maxlevel:number=10,upScore:number=10){
        this.scoreEle=document.getElementById('score')!;
        this.levelEle =document.getElementById('level')!;
        this.maxlevel=maxlevel;
        this.upScore=upScore;
    }

    addScore(){
        this.score++;
        this.scoreEle.innerHTML=this.score+"";
        if(this.score%this.upScore===0){
            this.levelUp();
        }
    }
  levelUp(){
      if(this.level<this.maxlevel){
        this.level++;
        this.levelEle.innerHTML=this.level+"";
      }

  }

}

export default ScorePlanel;