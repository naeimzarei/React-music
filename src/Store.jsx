/**
 * This file contains all the necessary logic for updating state as well
 * as holding variables. This is where the magic of MobX comes into play. 
 * This file is the only place where all state variables are shared between
 * files which makes it so much easier to update the state as well as any
 * necessary variables. 
 */

import { observable } from 'mobx';
import Config from './config';

export default class Store {
    // @observable songSelected = 1;
    // @observable url = Config.URLS[0];
}