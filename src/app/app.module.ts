import * as angular from 'angular';

import {configuration} from './app.configuration';
import {appComponentOptions} from './app.component';

export const appModule = angular
    .module('application', [])
    .component('app', appComponentOptions)
    .config(configuration)
    .name;
