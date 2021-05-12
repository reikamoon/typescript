const RESPONSES = {
  question: 'Sure.',
  yell: 'Whoa, chill out!',
  yellQuestion: 'Calm down, I know what I\'m doing!',
  blank: 'Fine. Be that way!',
  other: 'Whatever.' 
}
class Bob {
  private _remark = '';
  hey(remark: string): string {
    this._remark = remark;
    if (this.isAllUpperCase() && this.isQuestion()){
      return RESPONSES.yellQuestion;
    }
    if (this.isAllUpperCase()){
      return RESPONSES.yell;
    }
    if (this.isQuestion()){
      return RESPONSES.question;
    }

    if (this.isSilence()) {
      return RESPONSES.blank;
    }

    return RESPONSES.other;
  }

  private isAllUpperCase(): boolean{
    if (!Array.isArray(this._remark.match(/[A-Za-z]/g))){
      return false;
    }
    return this._remark === this._remark.toLocaleUpperCase();
  }

  private isQuestion(): boolean {
    return this._remark.trim().split('').pop() === '?';
  }

  private isSilence(): boolean {
    return this._remark.replace(/[\s\t\r\n]/g, '') === ''
  }
}

export default Bob
