import { Injectable } from '@angular/core';
import { Model } from './../models/Model ';
@Injectable()
export class ModelsService  {
    constructor() { }

    models: Model[] = [
        { name: "Alba", status: "Teaching children to read", about: "I'm Alba", messages: [], rows: 1, cols:1},
        { name: "Alexanya", status: "Kitesurfing", about: "I'm a Alexanya", messages: [], rows: 1, cols:1 },
        { name: "Brint", status: "Brint", about: "I'm a model", messages: [], rows: 1 , cols:1},
        { name: "Hd", status: "Designing the masterplan", about: "I'm a tirant", messages: [], rows: 3, cols:1},
        { name: "images", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "Jessica", status: "Kitesurfing", about: "I'm a model", messages: [], rows: 1 , cols:1},
        { name: "million-wallpa (2)", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "million-wallpa", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "million-wallpapers (2)", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "million-wallpapers", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "mm", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "rangrezz", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "wallpapersu ", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
        { name: "Wallpaper", status: "Teaching children to read", about: "I'm a model", messages: [], rows: 1, cols:1},
      ];
      
      getAll(): Model[]{
        return this.models;
      }
}