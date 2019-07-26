# NgaReadMore

Simple module for hide and show text. Based on its lenght provided by user.<br /><br />
> [Github Repo](https://github.com/alokkarma/nga-read-more)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

# How to Use

- npm install nga-read-more
- import { NgaReadMoreModule } from 'nga-read-more';
- imports: [ NgaReadMoreModule]<br />
Use it in your component like below :<br/><br/>
`<nga-read-more [text]="'your text'" [textLength]="20"></nga-read-more>`
<br /><br />
Pass `[text]` as input which you want to toggle.<br />
Pass `[textLength]` as input, it will allow you to hide text if it is more than `textLength`.<br />

> **Note**: If user doesn't pass `textLength`, by default it will show 20 characters.  
**In case of issue please open bug at** [Github](https://github.com/alokkarma/nga-read-more/issues)\
> Feedback and improvements always welcome.