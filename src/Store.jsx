import {observable} from 'mobx';
import Config from './config';

export default class Store {
    @observable songSelected = 1;
    @observable url = Config.URLS[0];
}