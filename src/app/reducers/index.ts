import {    ActionReducerMap,    createSelector,    createFeatureSelector,    ActionReducer,    MetaReducer,  } from '@ngrx/store';
import { environment } from '../../environments/environment';

import { compose } from '@ngrx/core/compose';

import { storeFreeze } from 'ngrx-store-freeze';

import { combineReducers } from '@ngrx/store';

import { RouterStateUrl } from '../core/common/RouterStateUrl';
import * as fromRouter from '@ngrx/router-store';
import * as fromLayout from './layout';

// state list
export interface State {
    layout: fromLayout.State;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
  }

  // reducers list
  export  const reducers = { 
    layout: fromLayout.reducer,
    routerReducer: fromRouter.routerReducer,
  };

  // console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return (state: State, action: any): State => {
      console.log('state', state);
      console.log('action', action);
      return reducer(state, action);
    };
  }

  export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];

  /**
 * Layout Reducers
 */
export const getLayoutState = (state: State) => state.layout;

export const getShowSidenav = createSelector(getLayoutState, fromLayout.getShowSidenav);
