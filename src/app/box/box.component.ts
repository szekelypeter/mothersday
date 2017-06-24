import {AfterViewChecked, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit, AfterViewChecked {

  public _noteHidden = true;
  public _noteLong: string;
  public _audioPath: string;
  protected _left = 0;
  protected _top = 0;
  public _listOfTekercs = [
    {short: "Szeretlek", long: "Ez az, aminek látszik, csak annyit mondok szeretlek", sound: "./app/note/szeretlek.mp3"},
    {
      short: "A kedvenced",
      long: "Jól csak a szívével lát az ember, ami igazán fontos, az a szemnek láthatatlan.",
      sound: './app/note/Track3.mp3'
    },
    {short: "Idézetek", long: "Teljesen mindegy mennyi idős egy anya, középkorú gyermekeit figyelni fogja, hátha javulás tapasztalható.<br>- F. Scott-Maxwell <br><br>Néhányan megcsókolják az anyjukat, néhányan szidják,de a szeretet ugyanaz, és a legtöbb anya egyszerre szid és csókol.<br>- P. S Buck <br><br>Az öröklődés miatt támadnak kételyek egy tinédzser szüleiben.<br>- L. J Peter", sound: "./app/note/idezetek.mp3"},
    {short: "Vers anyának", long: "Átkarolom, megölelem<br>Egy ideje nagyobb lettem<br>Szeretgetem, megpuszilom<br>Arcom hajába fúrom<br><br>Veszekedünk neki esek<br>Ezért vagyunk idegesek<br>Kiabálunk, arcunk vörös<br>Lelkünk ekkor mindig dühös<br><br>Sportolunk vagy társasozunk<br>Az a lényeg együtt vagyunk<br>S ha nem is hagyjuk magunk<br>Ezért vagyunk akik vagyunk<br><br>Ott voltál a kezdetektől<br>Akkor mikor minden eldőlt<br>Nevelgettél, terelgettél<br>Mindent megtettél<br><br>Óriás kellett, óriás voltál<br>Harcos kellett, megharcoltál<br>Nem azt kaptam amit kértem<br>De azt ami kellet nem kétlem<br><br>S ha kell egy stabil pont<br>Hogy kifordítsam a világot<br>Te vagy az egyetlen biztos anya<br>Szeretlek és köszönöm amíg van ma", sound: "./app/note/versem.mp3"}
  ];
  

  // TODO: this is not good for the performance, it should be calculated once
  public palceCss(i: number) {
    return {
      left: (20 + (i % 2 === 1 ? 26 * this._left : -20 * this._left)) + "vw",
      top: (this._top * ((i - i % 2) / 2) + 6) + "vw"
    };
  }

  constructor() {
  }

  public showNote(i: number, event) {
    event.stopPropagation();
    this._noteLong = this._listOfTekercs[i].long;
    this._audioPath = this._listOfTekercs[i].sound;
    this._noteHidden = false;
  }

  public closeTekercs() {
  console.error("close");
    this._noteHidden = true;
  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      this._left = 1;
      this._top = 14;
    }, 1000);
  }
}

