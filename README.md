# NgaReadMore

Simple module for hide and show text. Based on its lenght provided by user.<br /><br />
> [Github Repo](https://github.com/alokkarma/nga-read-more)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

# How to Use

- npm install nga-read-more
- import { NgaReadMoreModule } from 'nga-read-more';
- imports: [ NgaReadMoreModule]<br /><br/>
## Use it in your component like below :<br/><br/>
`<nga-read-more [text]="'your text'" [linkColor]="'your color'" [textLength]="20"></nga-read-more>`
<br /><br />
Pass `[text]` as input which you want to toggle.<br />
Pass `[textLength]` as input, it will allow you to hide text if it is more than `textLength`.<br />
Pass `[linkColor]` as input, Customise link color. Default color is `#0000ff`<br />

> **Note**: If user doesn't pass `textLength`, by default it will show 20 characters. It will work with `angular6,7` also, should also work without any issue with `angular 8` <br /> 
**In case of issue please open bug at** [Github](https://github.com/alokkarma/nga-read-more/issues)\
> Feedback and improvements always welcome.

# Update in version 0.0.4
- Now you can pass `[linkColor]` as input for changing the link color. By Default it would be blue.
- Fixed bug for `null` values. In case if `null` value is coming it will not through any error or unexpected behaviour.
- Bug fix if `textLength` is `0` or `-1`. It will make it as default value 20.
- Removed `<div>` and using `<ng-container>` to make it inline with content.