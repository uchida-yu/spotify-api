import globalClassNames from './style.d';
declare const classNames: typeof globalClassNames & {
  readonly App: 'App';
  readonly button: 'button';
  readonly selector: 'selector';
  readonly list: 'list';
  readonly list__item: 'list__item';
  readonly 'list__item-img': 'list__item-img';
  readonly 'list__item-info': 'list__item-info';
  readonly 'list__item-info-name': 'list__item-info-name';
  readonly 'list__item-info-description': 'list__item-info-description';
};
export = classNames;
