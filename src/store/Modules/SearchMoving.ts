import { Store, GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { ISearchMovingState } from '@types';
import { RootState } from '../index';

const API_URL = "https://geo.api.gouv.fr/communes?boost=population&nom=";

const state: ISearchMovingState = {
  formPlace: '',
  formDateStart: '',
  formDateEnd: '',
  listResults: []
}

const getters: GetterTree<ISearchMovingState, RootState> = {
  
}

const mutations: MutationTree<ISearchMovingState> = {
  
}

const actions: ActionTree<ISearchMovingState, RootState> = {
  
}

export const SearchMovingModule: Module<ISearchMovingState, RootState> = {
  state, getters, mutations, actions, namespaced: true
}