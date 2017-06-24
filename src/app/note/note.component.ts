import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent {

  public _noteHidden: boolean;

  public _noteLong: string;

  protected _audioPath: string;

  @Output() closeTekercs = new EventEmitter();

  @Input() set noteHidden(nodeHidden: boolean) {
    this._noteHidden = nodeHidden;
  }

  @Input() set noteLong(noteLong: string) {
    this._noteLong = noteLong;
  }

  @Input() set audioPath(path: string) {
    this._audioPath = path;
  }

  play() {
    const audio = new Audio(this._audioPath);
    audio.load();
    audio.play();
  }
  
  close() {
	this.closeTekercs.emit();
  }
 
}
