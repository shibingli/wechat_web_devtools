;!function(require, directRequire){;'use strict';const actions=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),{REHYDRATE}=require('redux-persist/constants'),getInitialState=()=>{return{panelShow:!1,onlineManifests:[],pluginManifests:{}}},plugin=(a=getInitialState(),b={})=>{switch(b.type){case actions.PLUGIN_TOGGLE_PANEL_SHOW:return Object.assign({},a,{panelShow:!a.panelShow});case actions.PLUGIN_SET_ONLINE_MANIFESTS:return Object.assign({},a,{onlineManifests:b.data});case actions.PLUGIN_SET_INSTALLED_MANIFESTS:return Object.assign({},a,{pluginManifests:b.data});case REHYDRATE:{const c=b.payload.plugin;return Object.assign({},a,c,{panelShow:!1})}default:return a;}};module.exports=plugin;
;}(require("lazyload"), require);